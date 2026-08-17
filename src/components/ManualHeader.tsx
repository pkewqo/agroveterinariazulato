import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Printer, Download } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const ManualHeader: React.FC = () => {
  const { setIsExportModalOpen } = useBrand();

  const sections = [
    { id: 'colors', label: '01. Cores' },
    { id: 'logos', label: '02. Assinaturas' },
    { id: 'grid', label: '03. Área de Proteção' },
    { id: 'typography', label: '04. Tipografia' },
    { id: 'stationery', label: '05. Papelaria' },
    { id: 'social-posts', label: '06. Redes Sociais' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm text-stone-900 border-b border-stone-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identification */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="h-9 flex items-center shrink-0">
            <BrandLogo variant="normal" colorMode="color" size="sm" />
          </div>
          <div className="hidden md:block border-l border-stone-300 pl-3">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-900 block">
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
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wider"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Right: Print / Export */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors cursor-pointer border border-stone-300"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Exportar Tokens</span>
          </button>

          <button
            onClick={() => window.print()}
            title="Imprimir ou Salvar Manual em PDF"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer size={14} />
            <span>Imprimir Manual</span>
          </button>
        </div>

      </div>
    </header>
  );
};
