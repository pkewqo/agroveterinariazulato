import React, { createContext, useContext, useState, useEffect } from 'react';
import type { BrandState, BrandPreset } from '../types/brand';
import { ZULATO_BRAND, BRAND_PRESETS } from '../data/defaultBrand';
import { loadGoogleFont } from '../utils/fontLoader';

interface BrandContextType {
  brand: BrandState;
  presets: BrandPreset[];
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  isExportModalOpen: boolean;
  setIsExportModalOpen: (open: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  viewMode: 'tactile' | 'editorial';
  setViewMode: (mode: 'tactile' | 'editorial') => void;
  
  // Updaters
  updateBrandField: <K extends keyof BrandState>(field: K, value: BrandState[K]) => void;
  updateColor: (colorKey: keyof BrandState['colors'], hex: string, name?: string) => void;
  updateFont: (type: 'headline' | 'body' | 'mono', family: string) => void;
  updateLogoVariant: (variant: 'horizontal' | 'vertical' | 'symbol') => void;
  updateCustomLogo: (type: 'horizontal' | 'vertical', dataUrl: string) => void;
  updateToneSlider: (sliderId: string, value: number) => void;
  loadPreset: (presetId: string) => void;
  resetToDefault: () => void;
  importBrandJson: (jsonString: string) => boolean;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'brandguide_studio_state_v1';

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [brand, setBrand] = useState<BrandState>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load stored brand', e);
    }
    return ZULATO_BRAND;
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [viewMode, setViewMode] = useState<'tactile' | 'editorial'>('tactile');

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(brand));
    } catch (e) {
      console.warn('Storage quota exceeded or disabled', e);
    }
  }, [brand]);

  // Load Google Fonts when fonts change
  useEffect(() => {
    loadGoogleFont(brand.typography.headline.family);
    loadGoogleFont(brand.typography.body.family);
    loadGoogleFont(brand.typography.mono.family);
  }, [brand.typography.headline.family, brand.typography.body.family, brand.typography.mono.family]);

  // Set CSS Variables dynamically on document root for live styling
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', brand.colors.primary.hex);
    root.style.setProperty('--brand-secondary', brand.colors.secondary.hex);
    root.style.setProperty('--brand-accent', brand.colors.accent.hex);
    root.style.setProperty('--brand-neutral-dark', brand.colors.neutralDark.hex);
    root.style.setProperty('--brand-neutral-light', brand.colors.neutralLight.hex);
    root.style.setProperty('--brand-font-headline', `"${brand.typography.headline.family}", sans-serif`);
    root.style.setProperty('--brand-font-body', `"${brand.typography.body.family}", sans-serif`);
    root.style.setProperty('--brand-font-mono', `"${brand.typography.mono.family}", monospace`);
  }, [brand.colors, brand.typography]);

  const updateBrandField = <K extends keyof BrandState>(field: K, value: BrandState[K]) => {
    setBrand(prev => ({ ...prev, [field]: value }));
  };

  const updateColor = (colorKey: keyof BrandState['colors'], hex: string, name?: string) => {
    setBrand(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorKey]: {
          ...prev.colors[colorKey],
          hex,
          ...(name ? { name } : {}),
        },
      },
    }));
  };

  const updateFont = (type: 'headline' | 'body' | 'mono', family: string) => {
    loadGoogleFont(family);
    setBrand(prev => ({
      ...prev,
      typography: {
        ...prev.typography,
        [type]: {
          ...prev.typography[type],
          family,
        },
      },
    }));
  };

  const updateLogoVariant = (variant: 'horizontal' | 'vertical' | 'symbol') => {
    setBrand(prev => ({
      ...prev,
      logos: {
        ...prev.logos,
        activeVariant: variant,
      },
    }));
  };

  const updateCustomLogo = (type: 'horizontal' | 'vertical', dataUrl: string) => {
    setBrand(prev => ({
      ...prev,
      logos: {
        ...prev.logos,
        [`${type}Url`]: dataUrl,
      },
    }));
  };

  const updateToneSlider = (sliderId: string, value: number) => {
    setBrand(prev => ({
      ...prev,
      toneOfVoice: {
        ...prev.toneOfVoice,
        sliders: prev.toneOfVoice.sliders.map(s =>
          s.id === sliderId ? { ...s, value } : s
        ),
      },
    }));
  };

  const loadPreset = (presetId: string) => {
    const found = BRAND_PRESETS.find(p => p.id === presetId);
    if (found) {
      setBrand(found.state);
    }
  };

  const resetToDefault = () => {
    setBrand(ZULATO_BRAND);
  };

  const importBrandJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.brandName && parsed.colors && parsed.typography) {
        setBrand(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON', e);
    }
    return false;
  };

  return (
    <BrandContext.Provider
      value={{
        brand,
        presets: BRAND_PRESETS,
        isDrawerOpen,
        setIsDrawerOpen,
        isExportModalOpen,
        setIsExportModalOpen,
        activeSection,
        setActiveSection,
        viewMode,
        setViewMode,
        updateBrandField,
        updateColor,
        updateFont,
        updateLogoVariant,
        updateCustomLogo,
        updateToneSlider,
        loadPreset,
        resetToDefault,
        importBrandJson,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
