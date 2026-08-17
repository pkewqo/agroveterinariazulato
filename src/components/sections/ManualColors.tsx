import React from 'react';
import { useBrand } from '../../context/BrandContext';

export const ManualColors: React.FC = () => {
  const { brand, updateColor } = useBrand();

  // Standard palette (for light backgrounds)
  const lightPalette = [
    {
      key: 'primary' as const,
      name: 'Verde Pasto',
      role: 'Cor Primária (Símbolo)',
      hex: brand.colors.primary.hex,
    },
    {
      key: 'secondary' as const,
      name: 'Grafite Carvão',
      role: 'Cor Secundária (Texto)',
      hex: brand.colors.secondary.hex,
    },
    {
      key: 'accent' as const,
      name: 'Dourado Safra',
      role: 'Acento / Destaque',
      hex: brand.colors.accent.hex,
    },
    {
      key: 'surface' as const,
      name: 'Branco Puro',
      role: 'Fundo / Base',
      hex: brand.colors.surface.hex,
    },
  ];

  // Inverted palette (for dark backgrounds)
  const darkPalette = [
    {
      key: 'primary' as const,
      name: 'Verde Pasto',
      role: 'Símbolo Oficial',
      hex: brand.colors.primary.hex,
    },
    {
      name: 'Branco Puro',
      role: 'Tipografia em Fundo Escuro',
      hex: '#FFFFFF',
    },
    {
      key: 'accent' as const,
      name: 'Dourado Safra',
      role: 'Acento em Fundo Escuro',
      hex: brand.colors.accent.hex,
    },
    {
      key: 'neutralDark' as const,
      name: 'Preto Solo',
      role: 'Fundo Escuro Institucional',
      hex: brand.colors.neutralDark.hex,
    },
  ];

  return (
    <section id="colors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
            Seção 01
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Paleta de Cores Institucional
          </h2>
          <p className="text-xs text-stone-500 font-mono">
            Paleta Padrão (Fundo Claro) & Paleta Inversa (Fundo Escuro)
          </p>
        </div>

        {/* --- 1. PALETA PADRÃO (FUNDO CLARO) --- */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">1.1</span>
              <span>Paleta Padrão • Aplicação em Fundo Claro</span>
            </h3>
            <p className="text-xs text-stone-500">
              Cores oficiais para papel timbrado, documentos, sinalizações e materiais de fundo claro.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {lightPalette.map((item, idx) => (
              <div key={idx} className="space-y-3">
                {/* Flat Color Block */}
                <div 
                  className="h-28 w-full relative flex items-end p-3 cursor-pointer group"
                  style={{ backgroundColor: item.hex }}
                >
                  {item.key && (
                    <input
                      type="color"
                      value={item.hex}
                      onChange={(e) => updateColor(item.key!, e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      title={`Clique para alterar a cor ${item.name}`}
                    />
                  )}
                </div>

                {/* Minimalist Specs */}
                <div className="space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-stone-900">{item.name}</span>
                    <span className="text-xs font-mono font-bold text-stone-600 uppercase">{item.hex}</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400 block">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 2. PALETA INVERSA (FUNDO ESCURO) --- */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">1.2</span>
              <span>Paleta Inversa • Aplicação em Fundo Escuro</span>
            </h3>
            <p className="text-xs text-stone-500">
              Cores calibradas para aplicação sobre fundos escuros, uniformes pretos e materiais noturnos.
            </p>
          </div>

          <div 
            className="p-8 sm:p-10"
            style={{ backgroundColor: brand.colors.neutralDark.hex }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {darkPalette.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  {/* Flat Color Block */}
                  <div 
                    className="h-28 w-full relative flex items-end p-3 cursor-pointer group"
                    style={{ backgroundColor: item.hex }}
                  >
                    {item.key && (
                      <input
                        type="color"
                        value={item.hex}
                        onChange={(e) => updateColor(item.key!, e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        title={`Clique para alterar a cor ${item.name}`}
                      />
                    )}
                  </div>

                  {/* Minimalist Specs for Dark Background */}
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{item.name}</span>
                      <span className="text-xs font-mono font-bold text-stone-400 uppercase">{item.hex}</span>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500 block">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
