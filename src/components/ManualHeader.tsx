import React from 'react';
import { Printer, Palette, Stamp, Shield, Type, FileText, Smartphone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const ManualHeader: React.FC = () => {
  const sections = [
    { id: 'colors', label: '01. Cores', icon: Palette },
    { id: 'logos', label: '02. Assinaturas', icon: Stamp },
    { id: 'grid', label: '03. Área de Proteção', icon: Shield },
    { id: 'typography', label: '04. Tipografia', icon: Type },
    { id: 'stationery', label: '05. Papelaria', icon: FileText },
    { id: 'social-posts', label: '06. Redes Sociais', icon: Smartphone },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950 text-white border-b border-stone-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        
        {/* Left: Brand Identification */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-8 flex items-center shrink-0">
            <BrandLogo variant="horizontal" colorMode="mono-white" size="sm" />
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-2 xl:gap-3">
          {sections.map((s, idx) => (
            <React.Fragment key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex items-center gap-1.5 text-[10px] font-semibold text-stone-400 hover:text-white transition-colors uppercase tracking-wider whitespace-nowrap"
              >
                <s.icon size={12} className="opacity-70" />
                <span>{s.label}</span>
              </a>
              {idx < sections.length - 1 && (
                <span className="text-stone-700 font-light text-[10px]">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right: Print / Export */}
        <div className="flex items-center gap-3 shrink-0">

          <button
            onClick={() => window.print()}
            title="Imprimir ou Salvar Manual em PDF"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-stone-200 text-stone-950 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer size={14} />
            <span>Imprimir Manual</span>
          </button>
        </div>

      </div>
    </header>
  );
};
