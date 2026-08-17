import React from 'react';
import { useBrand } from '../context/BrandContext';
import { ArrowUp, Sliders } from 'lucide-react';

export const Footer: React.FC = () => {
  const { brand, setIsDrawerOpen } = useBrand();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-12 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="h-9 px-2 py-1 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center">
              <img 
                src={brand.logos.horizontalUrl} 
                alt={brand.brandName} 
                className="h-6 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-stone-200">{brand.brandName}</p>
              <p className="text-[11px] text-stone-500">Manual Oficial de Identidade Visual e Diretrizes de Marca</p>
            </div>
          </div>

          <div className="flex items-center gap-4 no-print">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 transition-colors cursor-pointer"
            >
              <Sliders size={14} className="text-emerald-400" />
              <span>Abrir Personalizador</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} {brand.brandName}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <span className="text-emerald-400 font-semibold">BrandGuide Studio</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
