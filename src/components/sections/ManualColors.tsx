import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { hexToRgb, rgbToCmyk } from '../../utils/colorMath';
import { Copy, Check, RotateCcw } from 'lucide-react';

export const ManualColors: React.FC = () => {
  const { brand, updateColor, resetToDefault } = useBrand();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const pantoneRefs: Record<string, string> = {
    dourado: 'PANTONE 466 C',
    verdeMedio: 'PANTONE 7741 C',
    verdeEscuro: 'PANTONE 7743 C',
    pretoComplementar: 'PANTONE Neutral Black C',
  };

  const paletteItems = [
    {
      key: 'dourado' as const,
      color: brand.colors.dourado,
      usage: 'Tipografia "Agroveterinária Zulato", Letra Z e Silhueta do Touro.',
    },
    {
      key: 'verdeMedio' as const,
      color: brand.colors.verdeMedio,
      usage: 'Monograma "AV" do símbolo, detalhes de destaque e sanidade vegetal.',
    },
    {
      key: 'verdeEscuro' as const,
      color: brand.colors.verdeEscuro,
      usage: 'Fundo institucional nobre, superfícies de alto contraste e embalagens premium.',
    },
    {
      key: 'pretoComplementar' as const,
      color: brand.colors.pretoComplementar,
      usage: 'Cor complementar, fundos secundários, detalhes técnicos e alternativa P&B.',
    },
  ];

  return (
    <section id="colors" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title with Reset Button */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
              Seção 01
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Paleta de Cores Institucional
            </h2>
            <p className="text-xs text-stone-500 font-mono">
              4 Cores Oficiais • Dourado Trigo • Verde Folha • Verde Floresta • Preto Carvão
            </p>
          </div>

          <button
            onClick={resetToDefault}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-mono transition-colors cursor-pointer border border-stone-300 no-print"
            title="Restaurar valores padrão oficiais da paleta"
          >
            <RotateCcw size={13} />
            <span>Restaurar Cores Padrão</span>
          </button>
        </div>

        {/* Unified 4-Color Swatch Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paletteItems.map(({ key, color, usage }) => {
            const rgb = hexToRgb(color.hex);
            const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
            const pantone = pantoneRefs[key] || 'PANTONE Custom';

            return (
              <div key={key} className="space-y-4 bg-stone-50 p-5 flex flex-col justify-between">
                
                {/* Flat Color Swatch (Clickable to change) */}
                <div 
                  className="h-32 w-full relative flex items-end p-3 cursor-pointer group shadow-xs transition-colors"
                  style={{ backgroundColor: color.hex }}
                >
                  <input
                    type="color"
                    value={color.hex}
                    onChange={(e) => updateColor(key, e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    title={`Clique para alterar a cor ${color.name}`}
                  />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-black/40 text-white">
                    Clique para Editar
                  </span>
                </div>

                {/* Info & Usages */}
                <div className="space-y-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-stone-900">{color.name}</h3>
                      <button
                        onClick={() => handleCopy(color.hex, key)}
                        className="text-xs font-mono font-bold text-stone-700 hover:text-emerald-700 flex items-center gap-1 cursor-pointer uppercase"
                        title="Copiar código HEX"
                      >
                        {color.hex}
                        {copiedKey === key ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} className="text-stone-400" />}
                      </button>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500 block font-semibold">
                      {color.role}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed min-h-[44px]">
                    {usage}
                  </p>

                  {/* Technical Formulas */}
                  <div className="pt-3 border-t border-stone-200 space-y-1 font-mono text-[11px] text-stone-600">
                    <div className="flex justify-between">
                      <span className="text-stone-400">RGB:</span>
                      <span className="text-stone-800">{rgb.r}, {rgb.g}, {rgb.b}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">CMYK:</span>
                      <span className="text-stone-800">{cmyk.c} / {cmyk.m} / {cmyk.y} / {cmyk.k}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Pantone®:</span>
                      <span className="text-stone-900 font-bold">{pantone}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
