export interface GoogleFontOption {
  family: string;
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
  recommendedFor: 'headline' | 'body' | 'mono' | 'both';
  weights: number[];
}

export const POPULAR_GOOGLE_FONTS: GoogleFontOption[] = [
  { family: 'Arimo', category: 'sans-serif', recommendedFor: 'body', weights: [400, 500, 600, 700] },
  { family: 'Plus Jakarta Sans', category: 'sans-serif', recommendedFor: 'body', weights: [400, 500, 600, 700, 800] },
  { family: 'Inter', category: 'sans-serif', recommendedFor: 'body', weights: [300, 400, 500, 600, 700] },
  { family: 'Montserrat', category: 'sans-serif', recommendedFor: 'both', weights: [400, 500, 600, 700, 800] },
  { family: 'Poppins', category: 'sans-serif', recommendedFor: 'body', weights: [400, 500, 600, 700] },
  { family: 'DM Sans', category: 'sans-serif', recommendedFor: 'body', weights: [400, 500, 700] },
  { family: 'Roboto', category: 'sans-serif', recommendedFor: 'body', weights: [400, 500, 700] },
  { family: 'Open Sans', category: 'sans-serif', recommendedFor: 'body', weights: [400, 600, 700] },
  { family: 'Space Grotesk', category: 'sans-serif', recommendedFor: 'both', weights: [400, 500, 600, 700] },
  { family: 'JetBrains Mono', category: 'monospace', recommendedFor: 'mono', weights: [400, 500, 700] },
];

export function loadGoogleFont(fontFamily: string) {
  if (typeof document === 'undefined') return;
  if (fontFamily.toLowerCase() === 'impact') return; // system font

  const id = `gfont-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`;
  if (document.getElementById(id)) return;

  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  const encodedFamily = encodeURIComponent(fontFamily);
  link.href = `https://fonts.googleapis.com/css2?family=${encodedFamily}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap`;
  document.head.appendChild(link);
}
