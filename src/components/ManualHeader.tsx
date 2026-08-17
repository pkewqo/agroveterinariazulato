import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Printer, Download, Sparkles, BookOpen } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const ManualHeader: React.FC = () => {
  const { setIsExportModalOpen, viewMode, setViewMode } = useBrand();

  const sections = [
    { id: 'colors', label: '01. Cores' },
    { id: 'logos', label: '02. Assinaturas' },
    { id: 'grid', label: '03. Área de Proteção' },
    { id: 'typography', label: '04. Tipografia' },
    { id: 'stationery', label: '05. Papelaria' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md transition-colors no-print ${
      viewMode === 'tactile' 
        ? 'bg-stone-950/90 text-stone-100 border-b border-stone-800' 
        : 'bg-white/95 text-stone-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identification */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="h-8 flex items-center shrink-0">
            <BrandLogo 
              variant="horizontal" 
              colorMode={viewMode === 'tactile' ? 'mono-white' : 'color-light'} 
              size="sm" 
            />
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-bold uppercase tracking-widest block">
              Manual de Identidade Visual
            </span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                viewMode === 'tactile'
                  ? 'text-stone-400 hover:text-stone-100'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Right: View Mode Toggle & Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* View Mode Toggle Button */}
          <div className="hidden sm:flex items-center bg-stone-900 border border-stone-800 p-0.5">
            <button
              onClick={() => setViewMode('tactile')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'tactile'
                  ? 'bg-emerald-800 text-white font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="Modo Mockup Tátil em Linho Petróleo e Couro Gravado"
            >
              <Sparkles size={13} />
              <span>Mostruário Tátil</span>
            </button>

            <button
              onClick={() => setViewMode('editorial')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'editorial'
                  ? 'bg-stone-100 text-stone-900 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="Modo Editorial Minimalista (Plano em Branco)"
            >
              <BookOpen size={13} />
              <span>Editorial Clean</span>
            </button>
          </div>

          <button
            onClick={() => setIsExportModalOpen(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
              viewMode === 'tactile'
                ? 'bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
            }`}
          >
            <Download size={14} />
            <span className="hidden sm:inline">Exportar</span>
          </button>

          <button
            onClick={() => window.print()}
            title="Imprimir ou Salvar Manual em PDF"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
          >
            <Printer size={14} />
            <span>Imprimir</span>
          </button>
        </div>

      </div>
    </header>
  );
};
