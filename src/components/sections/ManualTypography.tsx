import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { POPULAR_GOOGLE_FONTS } from '../../utils/fontLoader';

export const ManualTypography: React.FC = () => {
  const { brand, updateFont } = useBrand();
  const [sampleSentence, setSampleSentence] = useState(
    'Agroveterinária Zulato: Excelência em nutrição, reprodução e sanidade animal no campo.'
  );

  const hierarchy = [
    { name: 'Display Principal', size: '48px', weight: 'Bold 700', sample: brand.brandName },
    { name: 'Título de Seção (H1)', size: '32px', weight: 'SemiBold 600', sample: 'Soluções Integradas para Pecuária de Corte e Leite' },
    { name: 'Subtítulo (H2)', size: '22px', weight: 'Medium 500', sample: 'Assessoria Veterinária & Manejo Nutricional de Alta Performance' },
    { name: 'Corpo de Texto (Body)', size: '15px', weight: 'Regular 400', sample: 'O acompanhamento técnico constante assegura a produtividade e a saúde do rebanho em todas as fases da criação.' },
    { name: 'Legenda / Código (Caption)', size: '12px', weight: 'Regular 400', isMono: true, sample: 'REF-LOTE: #AVZ-2026-SP • VALIDADE INDETERMINADA' },
  ];

  return (
    <section id="typography" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
            Seção 04
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Sistema Tipográfico Institucional
          </h2>
          <p className="text-xs text-stone-500 font-mono">
            Espécime Tipográfico • Hierarquia de Corpos
          </p>
        </div>

        {/* 1. Primary & Secondary Families Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Primary Family (Headlines) */}
          <div className="p-8 sm:p-10 bg-white space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                  Tipografia Primária (Títulos & Destaques)
                </span>
                <h3 
                  className="text-2xl font-black text-stone-900 pt-1"
                  style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
                >
                  {brand.typography.headline.family}
                </h3>
              </div>

              <select
                aria-label="Selecionar Fonte Primária"
                value={brand.typography.headline.family}
                onChange={(e) => updateFont('headline', e.target.value)}
                className="bg-stone-100 text-stone-800 text-xs px-2.5 py-1 font-sans no-print cursor-pointer outline-none"
              >
                {POPULAR_GOOGLE_FONTS.map(f => (
                  <option key={f.family} value={f.family}>
                    {f.family}
                  </option>
                ))}
              </select>
            </div>

            {/* Glyph Specimen */}
            <div className="space-y-3 font-medium">
              <p 
                className="text-xl sm:text-2xl text-stone-800 tracking-wide break-all"
                style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p 
                className="text-lg sm:text-xl text-stone-700 tracking-wide break-all"
                style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
              >
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p 
                className="text-lg text-stone-600 font-mono"
              >
                0123456789 (.,:;!?@#$%&*+=-/_)
              </p>
            </div>
          </div>

          {/* Secondary Family (Body) */}
          <div className="p-8 sm:p-10 bg-white space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                  Tipografia Secundária (Texto & Leitura Longa)
                </span>
                <h3 
                  className="text-2xl font-bold text-stone-900 pt-1"
                  style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                >
                  {brand.typography.body.family}
                </h3>
              </div>

              <select
                aria-label="Selecionar Fonte Secundária"
                value={brand.typography.body.family}
                onChange={(e) => updateFont('body', e.target.value)}
                className="bg-stone-100 text-stone-800 text-xs px-2.5 py-1 font-sans no-print cursor-pointer outline-none"
              >
                {POPULAR_GOOGLE_FONTS.map(f => (
                  <option key={f.family} value={f.family}>
                    {f.family}
                  </option>
                ))}
              </select>
            </div>

            {/* Paragraph Specimen */}
            <div className="space-y-3 text-stone-700 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}>
              <p>
                A <strong>{brand.brandName}</strong> adota uma tipografia de linhas limpas e alta legibilidade,
                ideal para contratos, rótulos de suplementação, laudos laboratoriais e comunicação corporativa.
              </p>
              <p className="text-stone-500 italic">
                "A excelência no manejo pecuário começa na precisão das informações fornecidas ao produtor."
              </p>
            </div>
          </div>

        </div>

        {/* 2. Typographic Scale Hierarchy */}
        <div className="p-8 sm:p-10 bg-white space-y-6">
          <div className="flex flex-wrap items-center justify-between pb-3 gap-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
              4.2 Escala de Corpos & Hierarquia Visual
            </h4>
            
            {/* Live sentence input */}
            <div className="flex items-center gap-2 no-print">
              <span className="text-xs text-stone-500 font-mono">Texto de Teste:</span>
              <input
                type="text"
                value={sampleSentence}
                onChange={(e) => setSampleSentence(e.target.value)}
                className="px-2.5 py-1 bg-stone-50 text-xs text-stone-800 w-64 outline-none"
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
                  
                  <div className="lg:col-span-3 text-xs font-mono text-stone-500 space-y-0.5">
                    <span className="font-bold text-stone-900 block">{item.name}</span>
                    <span>Corpo: {item.size} • {item.weight}</span>
                  </div>

                  <div className="lg:col-span-9 overflow-x-hidden">
                    <p 
                      className="text-stone-900 truncate"
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
