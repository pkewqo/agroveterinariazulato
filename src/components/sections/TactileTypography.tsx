import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { POPULAR_GOOGLE_FONTS } from '../../utils/fontLoader';

export const TactileTypography: React.FC = () => {
  const { brand, updateFont } = useBrand();
  const [sampleSentence, setSampleSentence] = useState(
    'Agroveterinária Zulato: 30 anos de excelência e liderança zootécnica no campo.'
  );

  const hierarchy = [
    { name: 'Display Principal', size: '48px', weight: 'Bold 700', sample: brand.brandName },
    { name: 'Título de Seção (H1)', size: '32px', weight: 'SemiBold 600', sample: 'Soluções Integradas para Pecuária de Corte e Leite' },
    { name: 'Subtítulo (H2)', size: '22px', weight: 'Medium 500', sample: 'Assessoria Veterinária & Manejo Nutricional de Alta Performance' },
    { name: 'Corpo de Texto (Body)', size: '15px', weight: 'Regular 400', sample: 'O acompanhamento técnico constante assegura a produtividade e a saúde do rebanho em todas as fases da criação.' },
    { name: 'Legenda / Código (Caption)', size: '12px', weight: 'Regular 400', isMono: true, sample: 'REF-LOTE: #AVZ-2026-SP • 30 ANOS DE TRADIÇÃO' },
  ];

  return (
    <section id="typography" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-800 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              Seção 04 • Tipografia
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-normal text-stone-100 tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Sistema Tipográfico Institucional
            </h2>
          </div>
          <p className="text-xs font-mono text-stone-400">
            Espécimes Tipográficos • Hierarquia de Leitura
          </p>
        </div>

        {/* 1. Primary & Secondary Families */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Primary Family */}
          <div className="p-8 bg-stone-900/90 border border-stone-800 space-y-6 paint-chip-shadow">
            <div className="flex justify-between items-start border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                  Tipografia Primária (Títulos & Destaques)
                </span>
                <h3 
                  className="text-2xl font-black text-stone-100 pt-1"
                  style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
                >
                  {brand.typography.headline.family}
                </h3>
              </div>

              <select
                aria-label="Selecionar Fonte Primária"
                value={brand.typography.headline.family}
                onChange={(e) => updateFont('headline', e.target.value)}
                className="bg-stone-950 border border-stone-800 text-stone-200 text-xs px-2.5 py-1.5 font-sans no-print cursor-pointer outline-none"
              >
                {POPULAR_GOOGLE_FONTS.map(f => (
                  <option key={f.family} value={f.family}>
                    {f.family}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3 font-medium">
              <p 
                className="text-xl sm:text-2xl text-stone-200 tracking-wide break-all"
                style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p 
                className="text-lg sm:text-xl text-stone-400 tracking-wide break-all"
                style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
              >
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="text-base text-stone-400 font-mono">
                0123456789 (.,:;!?@#$%&*+=-/_)
              </p>
            </div>
          </div>

          {/* Secondary Family */}
          <div className="p-8 bg-stone-900/90 border border-stone-800 space-y-6 paint-chip-shadow">
            <div className="flex justify-between items-start border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                  Tipografia Secundária (Texto & Leitura Longa)
                </span>
                <h3 
                  className="text-2xl font-bold text-stone-100 pt-1"
                  style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                >
                  {brand.typography.body.family}
                </h3>
              </div>

              <select
                aria-label="Selecionar Fonte Secundária"
                value={brand.typography.body.family}
                onChange={(e) => updateFont('body', e.target.value)}
                className="bg-stone-950 border border-stone-800 text-stone-200 text-xs px-2.5 py-1.5 font-sans no-print cursor-pointer outline-none"
              >
                {POPULAR_GOOGLE_FONTS.map(f => (
                  <option key={f.family} value={f.family}>
                    {f.family}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3 text-stone-300 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}>
              <p>
                A <strong>{brand.brandName}</strong> adota uma tipografia de linhas limpas e alta legibilidade,
                ideal para contratos, laudos laboratoriais, sacarias de suplementação e comunicação institucional.
              </p>
              <p className="text-stone-400 italic">
                "A excelência no manejo pecuário começa na precisão das informações fornecidas ao produtor."
              </p>
            </div>
          </div>

        </div>

        {/* 2. Typographic Scale */}
        <div className="p-8 sm:p-10 bg-stone-900/90 border border-stone-800 space-y-8 paint-chip-shadow">
          <div className="flex flex-wrap items-center justify-between border-b border-stone-800 pb-4 gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-200">
              4.2 Escala de Corpos & Hierarquia Visual
            </h4>
            
            <div className="flex items-center gap-2 no-print">
              <span className="text-xs text-stone-400 font-mono">Texto de Teste:</span>
              <input
                type="text"
                value={sampleSentence}
                onChange={(e) => setSampleSentence(e.target.value)}
                className="px-3 py-1.5 bg-stone-950 border border-stone-800 text-xs text-stone-200 w-64 outline-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            {hierarchy.map((item, idx) => {
              const fontFam = item.isMono 
                ? `"${brand.typography.mono.family}", monospace`
                : idx < 3 
                  ? `"${brand.typography.headline.family}", sans-serif` 
                  : `"${brand.typography.body.family}", sans-serif`;

              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline">
                  <div className="lg:col-span-3 text-xs font-mono text-stone-400 space-y-0.5">
                    <span className="font-bold text-stone-200 block">{item.name}</span>
                    <span>Corpo: {item.size} • {item.weight}</span>
                  </div>

                  <div className="lg:col-span-9 overflow-x-hidden">
                    <p 
                      className="text-stone-100 truncate"
                      style={{
                        fontSize: item.size,
                        fontFamily: fontFam,
                        lineHeight: '1.2',
                      }}
                    >
                      {sampleSentence || item.sample}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
