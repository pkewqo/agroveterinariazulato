export interface GoogleFontOption {
  family: string;
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
  recommendedFor: 'headline' | 'body' | 'mono' | 'both';
  weights: number[];
}

export const POPULAR_GOOGLE_FONTS: GoogleFontOption[] = [
  { family: 'Montserrat', category: 'sans-serif', recommendedFor: 'headline', weights: [400, 600, 700, 800, 900] },
  { family: 'Playfair Display', category: 'serif', recommendedFor: 'headline', weights: [400, 600, 700, 900] },
  { family: 'Cormorant Garamond', category: 'serif', recommendedFor: 'headline', weights: [400, 600, 700] },
  { family: 'Cinzel', category: 'serif', recommendedFor: 'headline', weights: [600, 700, 800] },
  { family: 'Inter', category: 'sans-serif', recommendedFor: 'body', weights: [300, 400, 500, 600, 700] },
  { family: 'Plus Jakarta Sans', category: 'sans-serif', recommendedFor: 'both', weights: [400, 500, 600, 700, 800] },
  { family: 'Oswald', category: 'sans-serif', recommendedFor: 'headline', weights: [400, 500, 600, 700] },
  { family: 'Bebas Neue', category: 'display', recommendedFor: 'headline', weights: [400] },
  { family: 'Anton', category: 'sans-serif', recommendedFor: 'headline', weights: [400] },
  { family: 'Poppins', category: 'sans-serif', recommendedFor: 'both', weights: [400, 500, 600, 700, 800] },
  { family: 'Space Grotesk', category: 'sans-serif', recommendedFor: 'headline', weights: [400, 500, 600, 700] },
  { family: 'Outfit', category: 'sans-serif', recommendedFor: 'both', weights: [400, 500, 600, 700] },
  { family: 'DM Sans', category: 'sans-serif', recommendedFor: 'body', weights: [400, 500, 700] },
  { family: 'Syne', category: 'display', recommendedFor: 'headline', weights: [600, 700, 800] },
  { family: 'Unbounded', category: 'display', recommendedFor: 'headline', weights: [600, 700, 800, 900] },
  { family: 'JetBrains Mono', category: 'monospace', recommendedFor: 'mono', weights: [400, 500, 700] },
  { family: 'Fira Code', category: 'monospace', recommendedFor: 'mono', weights: [400, 500, 600] },
];

export function loadGoogleFont(fontFamily: string) {
  if (typeof document === 'undefined') return;
  const id = `gfont-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`;
  if (document.getElementById(id)) return;

  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  const encodedFamily = encodeURIComponent(fontFamily);
  link.href = `https://fonts.googleapis.com/css2?family=${encodedFamily}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap`;
  document.head.appendChild(link);
}
