import React from 'react';
import { BrandProvider } from './context/BrandContext';
import { ColorToolbar } from './components/ColorToolbar';
import { ManualHeader } from './components/ManualHeader';
import { ManualHero } from './components/sections/ManualHero';
import { ManualColors } from './components/sections/ManualColors';
import { ManualLogos } from './components/sections/ManualLogos';
import { ManualGridArea } from './components/sections/ManualGridArea';
import { ManualTypography } from './components/sections/ManualTypography';
import { ManualStationery } from './components/sections/ManualStationery';
import { ExportModal } from './components/ExportModal';

const BrandManualApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* Top Interactive Toolbar to Change Logo & Brand Colors */}
      <ColorToolbar />

      {/* Editorial Header */}
      <ManualHeader />

      {/* Main Manual Content */}
      <main className="flex-1">
        {/* Cover / Presentation */}
        <ManualHero />

        {/* 01. Chromatic System & Color Palettes (Placed ABOVE Signatures) */}
        <ManualColors />

        {/* 02. Brand Mark & Signatures (Horizontal, Vertical, Dark, Light, Mono, Green) */}
        <ManualLogos />

        {/* 03. Grid & Safe Area (Área de Não-Interferência) */}
        <ManualGridArea />

        {/* 04. Institutional Typography Specimen */}
        <ManualTypography />

        {/* 05. Stationery & Graphic Print Guidelines */}
        <ManualStationery />
      </main>

      {/* Clean Editorial Footer */}
      <footer className="bg-white py-12 text-stone-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-stone-900 uppercase tracking-wider">
              Agroveterinária Zulato • 30 anos de história!
            </p>
            <p className="text-[11px] text-stone-500">
              Av. Presidente Roosevelt, 452 • Dracena - SP • Tel: 18 99653-5452
            </p>
          </div>
          <div className="text-[11px] font-mono text-stone-400">
            Manual de Identidade Visual Oficial • Edição 2026
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
