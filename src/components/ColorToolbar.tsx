import React from 'react';
import { useBrand } from '../context/BrandContext';
import { POPULAR_GOOGLE_FONTS } from '../utils/fontLoader';
import { RotateCcw } from 'lucide-react';

export const ColorToolbar: React.FC = () => {
  const { brand, updateColor, updateFont, resetToDefault } = useBrand();

  return (
    <div className="bg-stone-900 text-stone-200 py-2.5 px-4 sm:px-8 no-print">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Configuração da Marca
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-[11px] text-stone-400">
            Ajuste as cores da logo e a tipografia em tempo real
          </span>
        </div>

        {/* Live Color Pickers */}
        <div className="flex flex-wrap items-center gap-4">
          
          {/* Symbol Color Picker */}
          <div className="flex items-center gap-2 bg-stone-950 px-2.5 py-1">
            <span className="text-xs font-mono text-stone-300">Símbolo:</span>
            <input
              type="color"
              value={brand.colors.primary.hex}
              onChange={(e) => updateColor('primary', e.target.value)}
              className="w-5 h-5 cursor-pointer border-0 bg-transparent p-0 overflow-hidden"
              title="Cor do Símbolo da Marca"
            />
            <input
              type="text"
              value={brand.colors.primary.hex}
              onChange={(e) => updateColor('primary', e.target.value)}
              className="w-18 px-1 py-0.5 bg-stone-900 text-xs font-mono uppercase text-stone-200 outline-none"
            />
          </div>

          {/* Typography Color Picker */}
          <div className="flex items-center gap-2 bg-stone-950 px-2.5 py-1">
            <span className="text-xs font-mono text-stone-300">Tipografia:</span>
            <input
              type="color"
              value={brand.colors.secondary.hex}
              onChange={(e) => updateColor('secondary', e.target.value)}
              className="w-5 h-5 cursor-pointer border-0 bg-transparent p-0 overflow-hidden"
              title="Cor da Tipografia da Marca"
            />
            <input
              type="text"
              value={brand.colors.secondary.hex}
              onChange={(e) => updateColor('secondary', e.target.value)}
              className="w-18 px-1 py-0.5 bg-stone-900 text-xs font-mono uppercase text-stone-200 outline-none"
            />
          </div>

          {/* Font Selector */}
          <div className="flex items-center gap-2 bg-stone-950 px-2.5 py-1">
            <span className="text-xs font-mono text-stone-300">Fonte:</span>
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
            title="Restaurar padrão Agroveterinária Zulato"
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
