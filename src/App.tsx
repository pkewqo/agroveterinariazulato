import React from 'react';
import { BrandProvider } from './context/BrandContext';
import { ManualHeader } from './components/ManualHeader';
import { ManualHero } from './components/sections/ManualHero';
import { ManualColors } from './components/sections/ManualColors';
import { ManualLogos } from './components/sections/ManualLogos';
import { ManualGridArea } from './components/sections/ManualGridArea';
import { ManualTypography } from './components/sections/ManualTypography';
import { ManualStationery } from './components/sections/ManualStationery';
import { ManualSocialPosts } from './components/sections/ManualSocialPosts';
import { ExportModal } from './components/ExportModal';

const BrandManualApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* Clean Header */}
      <ManualHeader />

      {/* Main Manual Content */}
      <main className="flex-1">
        {/* First Section / First Page: Cover with Black Background & Anime.js createDrawable SVG Logo Drawing */}
        <ManualHero />

        {/* 01. Chromatic System (Unified 4-Color Palette with In-Section Reset) */}
        <ManualColors />

        {/* 02. Official Brand Signatures (Horizontal & Vertical) */}
        <ManualLogos />

        {/* 03. Grid & Safe Area (Styled on Charcoal Black Background) */}
        <ManualGridArea />

        {/* 04. Institutional Typography (Fixed Impact Headline + Configurable Arimo Body) */}
        <ManualTypography />

        {/* 05. Stationery & Graphic Print Guidelines (Fernando Zulato - Proprietário) */}
        <ManualStationery />

        {/* 06. Social Media Posts 1080x1350 (Grande Porte & Linha Pet) */}
        <ManualSocialPosts />
      </main>

      {/* Clean Editorial Footer */}
      <footer className="bg-stone-950 py-12 text-stone-400 text-xs border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white uppercase tracking-wider">
              Agroveterinária Zulato • Fernando Zulato (Proprietário)
            </p>
            <p className="text-[11px] text-stone-500">
              Av. Presidente Roosevelt, 452 • Dracena - SP • Tel: 18 99653-5452
            </p>
          </div>
          <div className="text-[11px] font-mono text-stone-500">
            Manual de Identidade Visual Oficial • Grandes Animais & Linha Pet
          </div>
        </div>
      </footer>

      {/* Export & Print Modal */}
      <ExportModal />
    </div>
  );
};

export function App() {
  return (
    <BrandProvider>
      <BrandManualApp />
    </BrandProvider>
  );
}

export default App;
