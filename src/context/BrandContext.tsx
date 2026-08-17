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
  
  // Updaters
  updateBrandField: <K extends keyof BrandState>(field: K, value: BrandState[K]) => void;
  updateColor: (colorKey: keyof BrandState['colors'], hex: string, name?: string) => void;
  updateFont: (type: 'headline' | 'body' | 'mono', family: string) => void;
  updateLogoVariant: (variant: 'normal' | 'symbol') => void;
  updateToneSlider: (sliderId: string, value: number) => void;
  loadPreset: (presetId: string) => void;
  resetToDefault: () => void;
  importBrandJson: (jsonString: string) => boolean;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'brandguide_studio_zulato_v2';

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
    root.style.setProperty('--brand-dourado', brand.colors.dourado.hex);
    root.style.setProperty('--brand-verde-medio', brand.colors.verdeMedio.hex);
    root.style.setProperty('--brand-verde-escuro', brand.colors.verdeEscuro.hex);
    root.style.setProperty('--brand-preto', brand.colors.pretoComplementar.hex);
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

  const updateLogoVariant = (variant: 'normal' | 'symbol') => {
    setBrand(prev => ({
      ...prev,
      logos: {
        ...prev.logos,
        activeVariant: variant,
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
        updateBrandField,
        updateColor,
        updateFont,
        updateLogoVariant,
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
