export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface CMYK {
  c: number;
  m: number;
  y: number;
  k: number;
}

export function hexToRgb(hex: string): RGB {
  let cleaned = hex.replace('#', '').trim();
  if (cleaned.length === 3) {
    cleaned = cleaned.split('').map(c => c + c).join('');
  }
  const num = parseInt(cleaned, 16);
  if (isNaN(num) || cleaned.length !== 6) {
    return { r: 0, g: 0, b: 0 };
  }
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, '0');
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

export function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function rgbToCmyk(r: number, g: number, b: number): CMYK {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const k = 1 - Math.max(rNorm, gNorm, bNorm);
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  const c = Math.round(((1 - rNorm - k) / (1 - k)) * 100);
  const m = Math.round(((1 - gNorm - k) / (1 - k)) * 100);
  const y = Math.round(((1 - bNorm - k) / (1 - k)) * 100);
  return {
    c: Math.max(0, c),
    m: Math.max(0, m),
    y: Math.max(0, y),
    k: Math.round(k * 100),
  };
}

// WCAG Relative Luminance
export function getLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// WCAG Contrast Ratio
export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  const ratio = (brightest + 0.05) / (darkest + 0.05);
  return Number(ratio.toFixed(2));
}

export function getWcagRating(ratio: number): {
  level: 'AAA' | 'AA' | 'AA Large' | 'Fail';
  textColor: string;
  badgeBg: string;
  isAccessible: boolean;
} {
  if (ratio >= 7.0) {
    return { level: 'AAA', textColor: 'text-emerald-400', badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', isAccessible: true };
  } else if (ratio >= 4.5) {
    return { level: 'AA', textColor: 'text-teal-400', badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-500/40', isAccessible: true };
  } else if (ratio >= 3.0) {
    return { level: 'AA Large', textColor: 'text-amber-400', badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40', isAccessible: true };
  } else {
    return { level: 'Fail', textColor: 'text-rose-400', badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40', isAccessible: false };
  }
}

// Generate 10-step Shade Palette (50 to 900)
export function generateShades(hex: string): { step: number; hex: string; isBase?: boolean }[] {
  const baseRgb = hexToRgb(hex);
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  
  return steps.map(step => {
    let r: number, g: number, b: number;
    if (step === 500) {
      return { step, hex: hex.toUpperCase(), isBase: true };
    } else if (step < 500) {
      // Lighten towards pure white
      const factor = (500 - step) / 500;
      r = baseRgb.r + (255 - baseRgb.r) * factor * 0.92;
      g = baseRgb.g + (255 - baseRgb.g) * factor * 0.92;
      b = baseRgb.b + (255 - baseRgb.b) * factor * 0.92;
    } else {
      // Darken towards dark charcoal/black
      const factor = (step - 500) / 500;
      r = baseRgb.r * (1 - factor * 0.85);
      g = baseRgb.g * (1 - factor * 0.85);
      b = baseRgb.b * (1 - factor * 0.85);
    }
    return {
      step,
      hex: rgbToHex(r, g, b),
    };
  });
}
