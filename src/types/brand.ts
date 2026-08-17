export interface ColorToken {
  id: string;
  name: string;
  role: string;
  hex: string;
  description: string;
}

export interface BrandColors {
  dourado: ColorToken;          // #D5B876 - Tipografia, Z e Touro
  verdeMedio: ColorToken;       // #50723B - Monograma AV
  verdeEscuro: ColorToken;      // #283D2B - Fundo Institucional Principal
  pretoComplementar: ColorToken; // #2B2B2B - Fundo Secundário / Complementar / P&B
}

export interface TypographyToken {
  family: string;
  weights: number[];
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
  usage: string;
}

export interface BrandLogos {
  transparentUrl: string;
  activeVariant: 'normal' | 'symbol';
  clearSpaceRatio: number;
  minDigitalSizePx: number;
  minPrintSizeMm: number;
}

export interface ToneSlider {
  id: string;
  labelLeft: string;
  labelRight: string;
  value: number;
  description: string;
}

export interface VoiceTone {
  sliders: ToneSlider[];
  rules: Array<{ doText: string; dontText: string }>;
  keywords: string[];
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
  logos: BrandLogos;
  colors: BrandColors;
  typography: {
    headline: TypographyToken;
    body: TypographyToken;
    mono: TypographyToken;
    customSampleText: string;
  };
  toneOfVoice: VoiceTone;
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
