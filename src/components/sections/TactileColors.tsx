import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { hexToRgb, rgbToCmyk } from '../../utils/colorMath';
import { Copy, Check } from 'lucide-react';

export const TactileColors: React.FC = () => {
  const { brand, updateColor } = useBrand();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const pantoneRefs: Record<string, string> = {
    primary: 'PANTONE 364 C',
    secondary: 'PANTONE Black 7 C',
    accent: 'PANTONE 130 C',
    neutralDark: 'PANTONE Black 6 C',
    surface: 'PANTONE Opaque White',
  };

  const lightChips = [
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
      name: 'Laranja Solo',
      role: 'Acento / Destaque',
      hex: brand.colors.accent.hex,
    },
    {
      key: 'surface' as const,
      name: 'Branco Linho',
      role: 'Base Neutra',
      hex: brand.colors.surface.hex,
    },
  ];

  const darkChips = [
    {
      key: 'primary' as const,
      name: 'Verde Pasto',
      role: 'Símbolo em Fundo Escuro',
      hex: brand.colors.primary.hex,
    },
    {
      name: 'Branco Puro',
      role: 'Tipografia em Fundo Escuro',
      hex: '#FFFFFF',
    },
    {
      key: 'accent' as const,
      name: 'Laranja Solo',
      role: 'Acento em Fundo Escuro',
      hex: brand.colors.accent.hex,
    },
    {
      key: 'neutralDark' as const,
      name: 'Preto Solo',
      role: 'Base Escura Institucional',
      hex: brand.colors.neutralDark.hex,
    },
  ];

  return (
    <section id="colors" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-800 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              Seção 01 • Estúdio de Materiais
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-normal text-stone-100 tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Amostras de Cores & Chips Táteis
            </h2>
          </div>
          <p className="text-xs font-mono text-stone-400">
            Fichas de Tinta Texturizadas • Códigos CMYK / Pantone / HEX
          </p>
        </div>

        {/* 1. Standard Tactile Paint Chips (Light Application) */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-200 flex items-center gap-2">
              <span className="font-mono text-emerald-400">1.1</span>
              <span>Mostruário Padrão • Chips de Tinta em Cartão Texturizado</span>
            </h3>
            <p className="text-xs text-stone-400">
              Amostras físicas de estúdio para aplicação em impressos, frotas, lonas e superfícies claras.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {lightChips.map((chip, idx) => {
              const rgb = hexToRgb(chip.hex);
              const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
              const pantone = chip.key ? pantoneRefs[chip.key] : 'PANTONE White';

              return (
                <div 
                  key={idx}
                  className="bg-stone-900/90 border border-stone-800 p-5 flex flex-col justify-between paint-chip-shadow transition-transform hover:-translate-y-1 duration-200"
                >
                  {/* Swatch Head with Hole Rivet */}
                  <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                    <div className="w-3.5 h-3.5 rounded-full bg-stone-950 border border-stone-700 paint-chip-rivet" />
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                      CHIP 0{idx + 1}
                    </span>
                  </div>

                  {/* Physical Paint Chip Block */}
                  <div className="my-4 relative group">
                    <div 
                      className="h-32 w-full transition-all flex items-end p-3 shadow-inner"
                      style={{ backgroundColor: chip.hex }}
                    >
                      {chip.key && (
                        <input
                          type="color"
                          value={chip.hex}
                          onChange={(e) => updateColor(chip.key!, e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          title={`Clique para alterar a cor ${chip.name}`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Names and Codes */}
                  <div className="space-y-3 pt-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-stone-100">{chip.name}</span>
                        <button
                          onClick={() => handleCopy(chip.hex, `light-${idx}`)}
                          className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer uppercase"
                          title="Copiar HEX"
                        >
                          {chip.hex}
                          {copiedKey === `light-${idx}` ? <Check size={11} /> : <Copy size={11} className="text-stone-500" />}
                        </button>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400 block">{chip.role}</span>
                    </div>

                    <div className="pt-2 border-t border-stone-800 space-y-1 text-[11px] font-mono text-stone-400">
                      <div className="flex justify-between">
                        <span>RGB:</span>
                        <span className="text-stone-300">{rgb.r}, {rgb.g}, {rgb.b}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CMYK:</span>
                        <span className="text-stone-300">{cmyk.c}/{cmyk.m}/{cmyk.y}/{cmyk.k}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pantone:</span>
                        <span className="text-stone-200 font-semibold">{pantone}</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Inverted Tactile Swatches (Dark Tray) */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-200 flex items-center gap-2">
              <span className="font-mono text-emerald-400">1.2</span>
              <span>Bandeja Inversa • Amostras para Fundo Escuro</span>
            </h3>
            <p className="text-xs text-stone-400">
              Calibração de pigmentos para tecidos pretos, sinalizações noturnas e embalagens de alto contraste.
            </p>
          </div>

          <div 
            className="p-8 sm:p-10 border border-stone-800/80 shadow-2xl"
            style={{ backgroundColor: brand.colors.neutralDark.hex }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {darkChips.map((chip, idx) => (
                <div key={idx} className="space-y-3 p-4 bg-stone-950/60 border border-stone-800">
                  <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 pb-2 border-b border-stone-800">
                    <span>PALETA ESCURA</span>
                    <span className="text-emerald-400 font-bold">{chip.hex}</span>
                  </div>

                  <div 
                    className="h-20 w-full relative group cursor-pointer"
                    style={{ backgroundColor: chip.hex }}
                  >
                    {chip.key && (
                      <input
                        type="color"
                        value={chip.hex}
                        onChange={(e) => updateColor(chip.key!, e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        title={`Clique para alterar a cor ${chip.name}`}
                      />
                    )}
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <p className="text-xs font-bold text-stone-200">{chip.name}</p>
                    <p className="text-[10px] font-mono text-stone-400">{chip.role}</p>
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
