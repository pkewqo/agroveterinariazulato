import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { 
  hexToRgb, 
  rgbToHsl, 
  rgbToCmyk, 
  generateShades, 
  getContrastRatio, 
  getWcagRating 
} from '../../utils/colorMath';
import { Copy, Check, ShieldCheck, Sparkles, Sliders } from 'lucide-react';

export const ColorSection: React.FC = () => {
  const { brand, setIsDrawerOpen } = useBrand();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const primaryShades = generateShades(brand.colors.primary.hex);
  const secondaryShades = generateShades(brand.colors.secondary.hex);

  // Contrast pairs to evaluate in real-time
  const contrastPairs = [
    {
      title: 'Texto Branco sobre Cor Primária',
      fg: '#FFFFFF',
      bg: brand.colors.primary.hex,
      sampleText: 'Saúde Animal & Nutrição',
      usage: 'Botões primários, badges de destaque e faixas de títulos',
    },
    {
      title: 'Cor Primária sobre Fundo Claro',
      fg: brand.colors.primary.hex,
      bg: brand.colors.neutralLight.hex,
      sampleText: 'Agroveterinária Zulato',
      usage: 'Títulos em papel timbrado, relatórios e receituários claros',
    },
    {
      title: 'Texto Grafite sobre Fundo Claro',
      fg: brand.colors.secondary.hex,
      bg: brand.colors.neutralLight.hex,
      sampleText: 'Texto institucional e corpo de artigos técnicos',
      usage: 'Leitura longa de laudos veterinários e contratos',
    },
    {
      title: 'Acento Dourado sobre Fundo Escuro',
      fg: brand.colors.accent.hex,
      bg: brand.colors.neutralDark.hex,
      sampleText: 'Destaque de Safra 2026',
      usage: 'Posters escuros, tags premium e ícones de conversão',
    },
  ];

  return (
    <section id="colors" className="py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-xs font-mono text-emerald-400">
              <span>02. SISTEMA CROMÁTICO & DESIGN TOKENS</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-white"
              style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
            >
              Paleta de Cores Institucional
            </h2>
            <p className="text-stone-400 max-w-3xl text-sm sm:text-base leading-relaxed">
              O ecossistema de cores da <strong>{brand.brandName}</strong> foi construído para transmitir o vigor da agropecuária,
              a solidez científica veterinária e alto contraste em impressões de campo e telas digitais.
            </p>
          </div>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-xs font-medium text-stone-200 transition-colors shrink-0 no-print cursor-pointer"
          >
            <Sliders size={14} className="text-emerald-400" />
            <span>Editar Paleta</span>
          </button>
        </div>

        {/* 1. Core Brand Colors Swatches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.keys(brand.colors) as Array<keyof typeof brand.colors>).map(key => {
            const color = brand.colors[key];
            const rgb = hexToRgb(color.hex);
            const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
            const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

            return (
              <div 
                key={key} 
                className="rounded-3xl bg-stone-900 border border-stone-800 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-stone-700 transition-all"
              >
                {/* Color Block Header */}
                <div 
                  className="h-36 relative p-5 flex flex-col justify-between transition-transform"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="flex justify-between items-start">
                    <span 
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-sm"
                      style={{
                        backgroundColor: getContrastRatio(color.hex, '#000000') > 4.5 ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.7)',
                        color: getContrastRatio(color.hex, '#000000') > 4.5 ? '#FFFFFF' : '#000000',
                      }}
                    >
                      {color.role}
                    </span>

                    <button
                      onClick={() => handleCopy(color.hex, key)}
                      className="p-1.5 rounded-lg bg-stone-950/40 hover:bg-stone-950/70 text-white backdrop-blur-md transition-colors cursor-pointer"
                      title="Copiar HEX"
                    >
                      {copiedKey === key ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  <div>
                    <h3 
                      className="text-lg font-bold drop-shadow-sm"
                      style={{
                        color: getContrastRatio(color.hex, '#000000') > 4.5 ? '#FFFFFF' : '#111827',
                      }}
                    >
                      {color.name}
                    </h3>
                  </div>
                </div>

                {/* Color Specs & Formula Table */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-stone-400 leading-relaxed min-h-[32px]">
                    {color.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-stone-800/80">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-500">HEX</span>
                      <button
                        onClick={() => handleCopy(color.hex, `${key}-hex`)}
                        className="font-bold text-stone-200 hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        {color.hex}
                        {copiedKey === `${key}-hex` && <Check size={12} className="text-emerald-400" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-500">RGB</span>
                      <span className="text-stone-300">
                        {rgb.r}, {rgb.g}, {rgb.b}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-500">HSL</span>
                      <span className="text-stone-300">
                        {hsl.h}°, {hsl.s}%, {hsl.l}%
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-500">CMYK (Gráfica)</span>
                      <span className="text-stone-300">
                        {cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 2. Color Shades / Tonal Scale Generator */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
              <Sparkles size={18} className="text-emerald-400" />
              <span>Escala Tonal Automatizada (50 - 900)</span>
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Geração de níveis de sombra e luz para estados hover, badges, fundos de formulários e modo escuro/claro.
            </p>
          </div>

          {/* Primary Shades Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-stone-300">Escala da Cor Primária ({brand.colors.primary.name})</span>
              <span className="font-mono text-stone-500">10 steps</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 rounded-2xl p-2 bg-stone-950 border border-stone-800">
              {primaryShades.map(shade => (
                <button
                  key={shade.step}
                  onClick={() => handleCopy(shade.hex, `shade-${shade.step}`)}
                  className="group/shade p-2 rounded-xl flex flex-col items-center justify-between h-20 transition-transform hover:scale-105 relative cursor-pointer"
                  style={{ backgroundColor: shade.hex }}
                  title={`Copiar ${shade.hex} (${shade.step})`}
                >
                  <span 
                    className="text-[10px] font-mono font-bold drop-shadow-sm"
                    style={{ color: shade.step >= 500 ? '#FFFFFF' : '#111827' }}
                  >
                    {shade.step}
                  </span>
                  <span 
                    className="text-[9px] font-mono opacity-80 group-hover/shade:opacity-100"
                    style={{ color: shade.step >= 500 ? '#FFFFFF' : '#111827' }}
                  >
                    {shade.hex}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Shades Bar */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-stone-300">Escala da Cor Secundária ({brand.colors.secondary.name})</span>
              <span className="font-mono text-stone-500">10 steps</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 rounded-2xl p-2 bg-stone-950 border border-stone-800">
              {secondaryShades.map(shade => (
                <button
                  key={shade.step}
                  onClick={() => handleCopy(shade.hex, `sec-shade-${shade.step}`)}
                  className="group/shade p-2 rounded-xl flex flex-col items-center justify-between h-20 transition-transform hover:scale-105 relative cursor-pointer"
                  style={{ backgroundColor: shade.hex }}
                  title={`Copiar ${shade.hex} (${shade.step})`}
                >
                  <span 
                    className="text-[10px] font-mono font-bold drop-shadow-sm"
                    style={{ color: shade.step >= 500 ? '#FFFFFF' : '#111827' }}
                  >
                    {shade.step}
                  </span>
                  <span 
                    className="text-[9px] font-mono opacity-80 group-hover/shade:opacity-100"
                    style={{ color: shade.step >= 500 ? '#FFFFFF' : '#111827' }}
                  >
                    {shade.hex}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 3. WCAG 2.1 Contrast Matrix */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-400" />
                <span>Matriz de Acessibilidade & Contraste WCAG 2.1</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Garante que textos técnicos, relatórios e receituários de saúde animal sejam legíveis por qualquer pessoa.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-emerald-400 font-bold">AAA: ≥ 7.0:1</span>
              <span className="text-teal-400 font-bold">AA: ≥ 4.5:1</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contrastPairs.map((pair, index) => {
              const ratio = getContrastRatio(pair.fg, pair.bg);
              const rating = getWcagRating(ratio);

              return (
                <div key={index} className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-300">{pair.title}</span>
                    <div className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${rating.badgeBg}`}>
                      {rating.level} ({ratio}:1)
                    </div>
                  </div>

                  {/* Live Rendered Contrast Box */}
                  <div 
                    className="p-4 rounded-xl transition-colors shadow-inner flex flex-col justify-center min-h-[70px]"
                    style={{ backgroundColor: pair.bg, color: pair.fg }}
                  >
                    <p 
                      className="text-base font-bold"
                      style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
                    >
                      {pair.sampleText}
                    </p>
                  </div>

                  <p className="text-[11px] text-stone-400">
                    <strong className="text-stone-300">Aplicação recomendada:</strong> {pair.usage}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
