import React from 'react';
import { BrandProvider, useBrand } from './context/BrandContext';
import { ColorToolbar } from './components/ColorToolbar';
import { ManualHeader } from './components/ManualHeader';
import { ExportModal } from './components/ExportModal';

// Clean Editorial Mode Components
import { ManualHero } from './components/sections/ManualHero';
import { ManualColors } from './components/sections/ManualColors';
import { ManualLogos } from './components/sections/ManualLogos';
import { ManualGridArea } from './components/sections/ManualGridArea';
import { ManualTypography } from './components/sections/ManualTypography';
import { ManualStationery } from './components/sections/ManualStationery';

// Tactile & Physical Mockup Mode Components
import { TactileHero } from './components/sections/TactileHero';
import { TactileColors } from './components/sections/TactileColors';
import { TactileLogos } from './components/sections/TactileLogos';
import { TactileGridArea } from './components/sections/TactileGridArea';
import { TactileTypography } from './components/sections/TactileTypography';
import { TactileStationery } from './components/sections/TactileStationery';

const BrandManualApp: React.FC = () => {
  const { viewMode } = useBrand();

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      viewMode === 'tactile' 
        ? 'bg-petrol-linen text-stone-100 selection:bg-emerald-700 selection:text-white' 
        : 'bg-white text-stone-900 selection:bg-stone-900 selection:text-white'
    }`}>
      
      {/* Top Interactive Toolbar to Change Logo & Brand Colors */}
      <ColorToolbar />

      {/* Header with Navigation & View Mode Toggle */}
      <ManualHeader />

      {/* Main Manual Content */}
      <main className="flex-1">
        {viewMode === 'tactile' ? (
          <>
            {/* 1. Physical Hero on Debossed Dark Green Leather Block */}
            <TactileHero />

            {/* 2. Tactile Paint Chips & Material Swatches (Above Signatures) */}
            <TactileColors />

            {/* 3. Fluid Physical Logo Signatures & Boards */}
            <TactileLogos />

            {/* 4. Architectural Clear Space Blueprint */}
            <TactileGridArea />

            {/* 5. Classic & Modern Typography Specimen */}
            <TactileTypography />

            {/* 6. Physical Stationery & Print Mockups */}
            <TactileStationery />
          </>
        ) : (
          <>
            {/* Clean White Editorial Flow */}
            <ManualHero />
            <ManualColors />
            <ManualLogos />
            <ManualGridArea />
            <ManualTypography />
            <ManualStationery />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className={`py-12 text-xs transition-colors ${
        viewMode === 'tactile' 
          ? 'bg-stone-950/80 text-stone-400 border-t border-stone-800' 
          : 'bg-white text-stone-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className={`font-bold uppercase tracking-wider ${viewMode === 'tactile' ? 'text-stone-200' : 'text-stone-900'}`}>
              Agroveterinária Zulato • 30 anos de história!
            </p>
            <p className="text-[11px] text-stone-400">
              Av. Presidente Roosevelt, 452 • Dracena - SP • Tel: 18 99653-5452
            </p>
          </div>
          <div className="text-[11px] font-mono text-stone-500">
            Manual de Identidade Visual Oficial • Edição Mostruário 2026
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
