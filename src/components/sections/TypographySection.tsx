import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { Type, Sliders } from 'lucide-react';

export const TypographySection: React.FC = () => {
  const { brand, setIsDrawerOpen } = useBrand();
  const [customText, setCustomText] = useState(brand.typography.customSampleText);

  const typeScale = [
    { label: 'Display Hero', sizePx: 64, rem: '4.0rem', weight: 800, tracking: '-0.03em', tag: 'Display' },
    { label: 'Título 1 (H1)', sizePx: 42, rem: '2.6rem', weight: 700, tracking: '-0.02em', tag: 'H1' },
    { label: 'Título 2 (H2)', sizePx: 32, rem: '2.0rem', weight: 700, tracking: '-0.01em', tag: 'H2' },
    { label: 'Título 3 (H3)', sizePx: 24, rem: '1.5rem', weight: 600, tracking: '0em', tag: 'H3' },
    { label: 'Subtítulo (H4)', sizePx: 20, rem: '1.25rem', weight: 600, tracking: '0em', tag: 'H4' },
    { label: 'Corpo Grande (Body Lg)', sizePx: 18, rem: '1.125rem', weight: 400, tracking: '0em', tag: 'Body Large', isBody: true },
    { label: 'Corpo Padrão (Body Md)', sizePx: 16, rem: '1.0rem', weight: 400, tracking: '0em', tag: 'Body', isBody: true },
    { label: 'Legenda / Código (Caption)', sizePx: 12, rem: '0.75rem', weight: 500, tracking: '0.05em', tag: 'Caption', isMono: true },
  ];

  return (
    <section id="typography" className="py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-xs font-mono text-emerald-400">
              <span>03. TIPOGRAFIA & HIERARQUIA VISUAL</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-white"
              style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
            >
              Sistema Tipográfico Institucional
            </h2>
            <p className="text-stone-400 max-w-3xl text-sm sm:text-base leading-relaxed">
              Estruturado com pesos expressivos para comunicar solidez técnica e clareza absoluta em catálogos,
              embalagens de suplementos e ambientes digitais.
            </p>
          </div>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-xs font-medium text-stone-200 transition-colors shrink-0 no-print cursor-pointer"
          >
            <Sliders size={14} className="text-emerald-400" />
            <span>Trocar Fontes</span>
          </button>
        </div>

        {/* 1. The 3 Primary Font Families Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Headline Font Card */}
          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Títulos & Destaques</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-800 text-stone-300">Google Font</span>
            </div>
            <h3 
              className="text-3xl font-extrabold text-white"
              style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
            >
              {brand.typography.headline.family}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {brand.typography.headline.usage}
            </p>
            <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
              <span 
                className="text-xl font-bold tracking-tight block text-stone-200"
                style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
              >
                Aa Bb Cc Dd 0123
              </span>
            </div>
          </div>

          {/* Body Font Card */}
          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Texto & Leitura</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-800 text-stone-300">Google Font</span>
            </div>
            <h3 
              className="text-3xl font-extrabold text-white"
              style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
            >
              {brand.typography.body.family}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {brand.typography.body.usage}
            </p>
            <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
              <span 
                className="text-xl font-normal text-stone-200 block"
                style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
              >
                Aa Bb Cc Dd 0123
              </span>
            </div>
          </div>

          {/* Monospace Font Card */}
          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Código & Dados</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-800 text-stone-300">Monospace</span>
            </div>
            <h3 
              className="text-3xl font-extrabold text-white"
              style={{ fontFamily: `"${brand.typography.mono.family}", monospace` }}
            >
              {brand.typography.mono.family}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {brand.typography.mono.usage}
            </p>
            <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
              <span 
                className="text-xl font-mono text-emerald-400 block"
                style={{ fontFamily: `"${brand.typography.mono.family}", monospace` }}
              >
                #LOT-2026-AVZ
              </span>
            </div>
          </div>

        </div>

        {/* 2. Interactive Type Scale Hierarchy */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <Type size={18} className="text-emerald-400" />
                <span>Playground de Escala Tipográfica Dinâmica</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Digite uma frase abaixo para testar instantaneamente a hierarquia em todas as escalas visuais.
              </p>
            </div>
          </div>

          {/* Interactive Live Input Box */}
          <div className="space-y-1.5 no-print">
            <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <span>Frase de Teste em Tempo Real:</span>
            </label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Digite aqui sua frase para testar..."
              className="w-full p-3 rounded-xl bg-stone-950 border border-stone-700 text-sm text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
            />
          </div>

          {/* Hierarchy Scale List */}
          <div className="space-y-4 pt-4 divide-y divide-stone-800/80">
            {typeScale.map((item, idx) => {
              const fontToUse = item.isMono 
                ? `"${brand.typography.mono.family}", monospace`
                : item.isBody 
                  ? `"${brand.typography.body.family}", sans-serif`
                  : `"${brand.typography.headline.family}", sans-serif`;

              return (
                <div key={idx} className="pt-4 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline">
                  
                  {/* Left Specs */}
                  <div className="lg:col-span-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-800 text-emerald-400 border border-stone-700">
                      {item.tag}
                    </span>
                    <div className="text-xs font-mono text-stone-400">
                      <span>{item.sizePx}px</span> • <span className="text-stone-500">{item.rem}</span>
                    </div>
                  </div>

                  {/* Right Live Render */}
                  <div className="lg:col-span-9 overflow-x-hidden">
                    <p
                      className="text-stone-100 truncate transition-all"
                      style={{
                        fontSize: `${item.sizePx}px`,
                        lineHeight: 1.15,
                        fontFamily: fontToUse,
                        fontWeight: item.weight,
                        letterSpacing: item.tracking,
                      }}
                    >
                      {customText || brand.brandName}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* 3. Character Glyphs & Weights Grid */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <h3 className="text-lg font-bold text-stone-100">
            Conjunto Completo de Caracteres & Glifos
          </h3>

          <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-stone-500 uppercase">Alfabeto Caixa Alta</span>
              <p 
                className="text-xl sm:text-2xl text-stone-200 tracking-wider"
                style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
              >
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z À É Í Ó Ú Ç
              </p>
            </div>

            <div className="space-y-1 pt-2 border-t border-stone-800/60">
              <span className="text-xs font-mono text-stone-500 uppercase">Alfabeto Caixa Baixa</span>
              <p 
                className="text-lg sm:text-xl text-stone-300 tracking-wide"
                style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
              >
                a b c d e f g h i j k l m n o p q r s t u v w x y z à é í ó ú ç
              </p>
            </div>

            <div className="space-y-1 pt-2 border-t border-stone-800/60">
              <span className="text-xs font-mono text-stone-500 uppercase">Numerais & Símbolos Comerciais</span>
              <p 
                className="text-lg sm:text-xl text-emerald-400 font-mono"
                style={{ fontFamily: `"${brand.typography.mono.family}", monospace` }}
              >
                0 1 2 3 4 5 6 7 8 9 ! @ # $ % & * ( ) _ + = / \ [ ] © ® ™
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
