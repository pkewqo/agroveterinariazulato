import React from 'react';
import { useBrand } from '../context/BrandContext';
import { POPULAR_GOOGLE_FONTS } from '../utils/fontLoader';
import { RotateCcw } from 'lucide-react';

export const ColorToolbar: React.FC = () => {
  const { brand, updateColor, updateFont, resetToDefault } = useBrand();

  return (
    <div className="bg-stone-900 text-stone-200 py-2.5 px-4 sm:px-8 no-print border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Paleta de Cores & Logo Dinâmica
          </span>
          <span className="text-stone-500 hidden sm:inline">•</span>
          <span className="text-[11px] text-stone-400 hidden sm:inline">
            Altere qualquer cor para atualizar o logotipo e o manual em tempo real
          </span>
        </div>

        {/* Live Color Pickers for all 4 colors */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* 1. Dourado Trigo */}
          <div className="flex items-center gap-1.5 bg-stone-950 px-2.5 py-1">
            <span className="text-[11px] font-mono text-stone-300">Dourado (Texto/Z):</span>
            <input
              type="color"
              value={brand.colors.dourado.hex}
              onChange={(e) => updateColor('dourado', e.target.value)}
              className="w-5 h-5 cursor-pointer border-0 bg-transparent p-0 overflow-hidden"
              title="Cor Dourada da Tipografia e Touro"
            />
            <input
              type="text"
              value={brand.colors.dourado.hex}
              onChange={(e) => updateColor('dourado', e.target.value)}
              className="w-18 px-1 py-0.5 bg-stone-900 text-[11px] font-mono uppercase text-stone-200 outline-none"
            />
          </div>

          {/* 2. Verde Folha (AV) */}
          <div className="flex items-center gap-1.5 bg-stone-950 px-2.5 py-1">
            <span className="text-[11px] font-mono text-stone-300">Verde (AV):</span>
            <input
              type="color"
              value={brand.colors.verdeMedio.hex}
              onChange={(e) => updateColor('verdeMedio', e.target.value)}
              className="w-5 h-5 cursor-pointer border-0 bg-transparent p-0 overflow-hidden"
              title="Cor do Monograma AV"
            />
            <input
              type="text"
              value={brand.colors.verdeMedio.hex}
              onChange={(e) => updateColor('verdeMedio', e.target.value)}
              className="w-18 px-1 py-0.5 bg-stone-900 text-[11px] font-mono uppercase text-stone-200 outline-none"
            />
          </div>

          {/* 3. Verde Floresta (Fundo Institucional) */}
          <div className="flex items-center gap-1.5 bg-stone-950 px-2.5 py-1">
            <span className="text-[11px] font-mono text-stone-300">Verde Fundo:</span>
            <input
              type="color"
              value={brand.colors.verdeEscuro.hex}
              onChange={(e) => updateColor('verdeEscuro', e.target.value)}
              className="w-5 h-5 cursor-pointer border-0 bg-transparent p-0 overflow-hidden"
              title="Cor do Fundo Verde Institucional"
            />
            <input
              type="text"
              value={brand.colors.verdeEscuro.hex}
              onChange={(e) => updateColor('verdeEscuro', e.target.value)}
              className="w-18 px-1 py-0.5 bg-stone-900 text-[11px] font-mono uppercase text-stone-200 outline-none"
            />
          </div>

          {/* 4. Preto Carvão (Complementar) */}
          <div className="flex items-center gap-1.5 bg-stone-950 px-2.5 py-1">
            <span className="text-[11px] font-mono text-stone-300">Preto:</span>
            <input
              type="color"
              value={brand.colors.pretoComplementar.hex}
              onChange={(e) => updateColor('pretoComplementar', e.target.value)}
              className="w-5 h-5 cursor-pointer border-0 bg-transparent p-0 overflow-hidden"
              title="Cor Preto Carvão Complementar"
            />
            <input
              type="text"
              value={brand.colors.pretoComplementar.hex}
              onChange={(e) => updateColor('pretoComplementar', e.target.value)}
              className="w-18 px-1 py-0.5 bg-stone-900 text-[11px] font-mono uppercase text-stone-200 outline-none"
            />
          </div>

          {/* Font Selector */}
          <div className="flex items-center gap-1.5 bg-stone-950 px-2.5 py-1">
            <span className="text-[11px] font-mono text-stone-300">Fonte:</span>
            <select
              value={brand.typography.headline.family}
              onChange={(e) => updateFont('headline', e.target.value)}
              className="bg-stone-900 text-stone-200 text-xs px-1.5 py-0.5 outline-none cursor-pointer"
            >
              {POPULAR_GOOGLE_FONTS.map(f => (
                <option key={f.family} value={f.family}>
                  {f.family}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetToDefault}
            title="Restaurar padrão oficial Zulato"
            className="flex items-center gap-1 px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono transition-colors cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Restaurar</span>
          </button>

        </div>

      </div>
    </div>
  );
};
