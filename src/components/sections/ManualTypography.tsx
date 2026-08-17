import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { POPULAR_GOOGLE_FONTS } from '../../utils/fontLoader';

export const ManualTypography: React.FC = () => {
  const { brand, updateFont } = useBrand();
  const [sampleSentence, setSampleSentence] = useState('ZULATO');

  const hierarchy = [
    { name: 'Display Principal (Impact)', size: '48px', weight: 'Normal / Bold', isHeadline: true, sample: brand.brandName },
    { name: 'Título de Seção (Impact)', size: '32px', weight: 'Normal / Condensed', isHeadline: true, sample: 'NUTRIÇÃO BOVINA, EQUINOS & LINHA PET PREMIUM' },
    { name: 'Subtítulo em Destaque', size: '20px', weight: 'SemiBold 600', isHeadline: false, sample: 'Assessoria Veterinária & Manejo Nutricional de Alta Performance' },
    { name: 'Corpo de Texto (Arimo)', size: '15px', weight: 'Regular 400', isHeadline: false, sample: 'Dispomos de rações de alta digestibilidade, suplementos minerais, medicamentos veterinários e atendimento técnico personalizado.' },
    { name: 'Legenda Técnica (Arimo)', size: '12px', weight: 'Medium 500', isHeadline: false, sample: 'PROPRIETÁRIO: FERNANDO ZULATO • DRACENA - SP' },
  ];

  return (
    <section id="typography" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="border-b border-stone-300 pb-4 flex flex-wrap items-baseline justify-between gap-2">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
              Seção 04
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Sistema Tipográfico Institucional
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-500">
            Fonte Principal: Impact (Fixa) • Fonte Secundária: {brand.typography.body.family}
          </span>
        </div>

        {/* 1. Primary (Impact) & Secondary (Arimo) Families */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Primary Family: Impact (Fixed) */}
          <div className="p-8 bg-white space-y-6">
            <div className="flex justify-between items-start border-b border-stone-200 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold block">
                  Tipografia Principal (Títulos de Impacto & Chamadas)
                </span>
                <h3 
                  className="text-3xl font-normal text-stone-900 pt-1 tracking-wider uppercase"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  IMPACT (FONTE FIXA)
                </h3>
              </div>
              <span className="text-[11px] font-mono font-bold bg-stone-100 px-2 py-1 text-stone-600">
                Padrão Oficial
              </span>
            </div>

            {/* Glyph Specimen */}
            <div className="space-y-3">
              <p 
                className="text-2xl sm:text-3xl text-stone-900 tracking-wide break-all"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p 
                className="text-xl sm:text-2xl text-stone-800 tracking-wide break-all"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                0123456789 (.,:;!?@#$%&*+=-/_)
              </p>
            </div>

            <p className="text-xs text-stone-500 font-mono">
              Uso obrigatório em títulos de posts, capas de catálogos, chamadas promocionais e fachadas.
            </p>
          </div>

          {/* Secondary Family: Arimo (Configurable) */}
          <div className="p-8 bg-white space-y-6">
            <div className="flex justify-between items-start border-b border-stone-200 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">
                  Tipografia Secundária (Texto, Redes Sociais & Leitura)
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
                className="bg-stone-100 border border-stone-300 text-stone-800 text-xs px-2.5 py-1 font-sans no-print cursor-pointer outline-none"
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
                A <strong>{brand.brandName}</strong> utiliza a tipografia <strong>{brand.typography.body.family}</strong> para toda a comunicação técnica, posts de redes sociais, bulas e descrições de produtos tanto para <strong>animais de grande porte</strong> quanto para a <strong>linha pet</strong>.
              </p>
              <p className="text-stone-500 italic">
                "Excelência, nutrição e carinho na criação de grandes animais e cuidados pet."
              </p>
            </div>

            <p className="text-xs text-stone-400 font-mono">
              Fonte do Google Fonts selecionável com reflexo instantâneo nos posts de redes sociais e documentos.
            </p>
          </div>

        </div>

        {/* 2. Typographic Scale Hierarchy */}
        <div className="p-8 bg-white space-y-6">
          <div className="flex flex-wrap items-center justify-between border-b border-stone-200 pb-3 gap-2">
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
                className="px-2.5 py-1 bg-stone-50 border border-stone-300 text-xs text-stone-800 w-72 outline-none"
              />
            </div>
          </div>

          <div className="space-y-6 divide-y divide-stone-200">
            {hierarchy.map((item, idx) => {
              const fontFam = item.isHeadline
                ? 'Impact, "Arial Black", sans-serif'
                : `"${brand.typography.body.family}", sans-serif`;

              return (
                <div key={idx} className="pt-6 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline">
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
                        textTransform: item.isHeadline ? 'uppercase' : 'none',
                        letterSpacing: item.isHeadline ? '0.05em' : 'normal',
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
