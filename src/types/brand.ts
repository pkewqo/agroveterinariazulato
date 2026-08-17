export interface ColorDefinition {
  id: string;
  name: string;
  role: string;
  hex: string;
  description: string;
}

export interface FontConfig {
  family: string;
  weights: number[];
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
  usage: string;
}

export interface BrandToneSlider {
  id: string;
  labelLeft: string;
  labelRight: string;
  value: number; // 0 to 100
  description: string;
}

export interface BrandDoDont {
  doText: string;
  dontText: string;
}

export interface BrandState {
  brandName: string;
  tagline: string;
  established: string;
  category: string;
  mission: string;
  vision: string;
  archetype: string;
  archetypeDescription: string;
  
  logos: {
    horizontalUrl: string;
    verticalUrl: string;
    symbolUrl?: string;
    activeVariant: 'horizontal' | 'vertical' | 'symbol';
    clearSpaceRatio: number; // e.g. 1.0 (X)
    minDigitalSizePx: number;
    minPrintSizeMm: number;
  };

  colors: {
    primary: ColorDefinition;
    secondary: ColorDefinition;
    accent: ColorDefinition;
    neutralDark: ColorDefinition;
    neutralLight: ColorDefinition;
    surface: ColorDefinition;
  };

  typography: {
    headline: FontConfig;
    body: FontConfig;
    mono: FontConfig;
    customSampleText: string;
  };

  toneOfVoice: {
    sliders: BrandToneSlider[];
    rules: BrandDoDont[];
    keywords: string[];
  };

  socialHandles: {
    instagram: string;
    website: string;
    phone: string;
    location: string;
  };
}

export interface BrandPreset {
  id: string;
  name: string;
  description: string;
  state: BrandState;
}
