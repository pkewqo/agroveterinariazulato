import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';

export const TactileLogos: React.FC = () => {
  const { brand } = useBrand();

  return (
    <section id="logos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section Title */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-800 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              Seção 02 • Aplicações Físicas
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-normal text-stone-100 tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Assinaturas & Matrizes da Marca
            </h2>
          </div>
          <p className="text-xs font-mono text-stone-400">
            Horizontal • Vertical • Fundo Verde • P&B Positivo e Negativo
          </p>
        </div>

        {/* --- 1. HORIZONTAL SIGNATURES --- */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-200 flex items-center gap-2">
              <span className="font-mono text-emerald-400">2.1</span>
              <span>Assinatura Horizontal (Primária)</span>
            </h3>
            <p className="text-xs text-stone-400">
              Formato preferencial para fachadas, testeiras de veículos, cabeçalhos e placas de campo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* 1. Color on Light Board */}
            <div className="p-6 bg-stone-100 text-stone-900 flex flex-col justify-between min-h-[220px] paint-chip-shadow">
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 uppercase pb-2 border-b border-stone-300/80">
                <span>2.1.1 Fundo Claro</span>
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="color-light" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-600 pt-2 flex justify-between">
                <span>Símbolo: {brand.colors.primary.hex}</span>
                <span>Texto: {brand.colors.secondary.hex}</span>
              </div>
            </div>

            {/* 2. Color on Dark Board */}
            <div 
              className="p-6 text-white flex flex-col justify-between min-h-[220px] paint-chip-shadow"
              style={{ backgroundColor: brand.colors.neutralDark.hex }}
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase pb-2 border-b border-stone-800">
                <span>2.1.2 Fundo Preto</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="color-dark" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>Símbolo: {brand.colors.primary.hex}</span>
                <span>Texto: #FFFFFF</span>
              </div>
            </div>

            {/* 3. White Logo on Brand Green (#2E6930) */}
            <div 
              className="p-6 text-white flex flex-col justify-between min-h-[220px] paint-chip-shadow transition-colors"
              style={{ backgroundColor: brand.colors.primary.hex }}
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-100 uppercase pb-2 border-b border-emerald-800">
                <span>2.1.3 Fundo Verde</span>
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-white" size="md" />
              </div>
              <div className="text-[10px] font-mono text-emerald-200 pt-2 flex justify-between">
                <span>Logo: #FFFFFF</span>
                <span>Fundo: {brand.colors.primary.hex}</span>
              </div>
            </div>

            {/* 4. Mono Black on White */}
            <div className="p-6 bg-white text-stone-900 flex flex-col justify-between min-h-[220px] paint-chip-shadow">
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 uppercase pb-2 border-b border-stone-200">
                <span>2.1.4 100% Preto</span>
                <span className="w-2 h-2 rounded-full bg-black" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-black" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-600 pt-2 flex justify-between">
                <span>P&B Positivo</span>
                <span>Impressão 1x0</span>
              </div>
            </div>

            {/* 5. Mono White on Deep Black */}
            <div className="p-6 bg-stone-950 text-white flex flex-col justify-between min-h-[220px] paint-chip-shadow border border-stone-800">
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase pb-2 border-b border-stone-800">
                <span>2.1.5 100% Branco</span>
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-white" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>P&B Negativo</span>
                <span>Fundo Preto</span>
              </div>
            </div>

          </div>
        </div>

        {/* --- 2. VERTICAL / NORMAL SIGNATURES --- */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-200 flex items-center gap-2">
              <span className="font-mono text-emerald-400">2.2</span>
              <span>Assinatura Normal / Vertical (Empilhada)</span>
            </h3>
            <p className="text-xs text-stone-400">
              Formato quadrado/empilhado para rótulos de suplementos, sacarias, uniformes e avatares.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* 1. Vertical - Color on Light */}
            <div className="p-6 bg-stone-100 text-stone-900 flex flex-col justify-between min-h-[280px] paint-chip-shadow">
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 uppercase pb-2 border-b border-stone-300">
                <span>2.2.1 Fundo Claro</span>
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="color-light" />
              </div>
              <div className="text-[10px] font-mono text-stone-600 pt-2 flex justify-between">
                <span>Símbolo: {brand.colors.primary.hex}</span>
                <span>Texto: {brand.colors.secondary.hex}</span>
              </div>
            </div>

            {/* 2. Vertical - Color on Dark */}
            <div 
              className="p-6 text-white flex flex-col justify-between min-h-[280px] paint-chip-shadow"
              style={{ backgroundColor: brand.colors.neutralDark.hex }}
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase pb-2 border-b border-stone-800">
                <span>2.2.2 Fundo Preto</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="color-dark" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>Símbolo: {brand.colors.primary.hex}</span>
                <span>Texto: #FFFFFF</span>
              </div>
            </div>

            {/* 3. Vertical - White Logo on Brand Green (#2E6930) */}
            <div 
              className="p-6 text-white flex flex-col justify-between min-h-[280px] paint-chip-shadow transition-colors"
              style={{ backgroundColor: brand.colors.primary.hex }}
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-100 uppercase pb-2 border-b border-emerald-800">
                <span>2.2.3 Fundo Verde</span>
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="mono-white" />
              </div>
              <div className="text-[10px] font-mono text-emerald-200 pt-2 flex justify-between">
                <span>Logo: #FFFFFF</span>
                <span>Fundo: {brand.colors.primary.hex}</span>
              </div>
            </div>

            {/* 4. Vertical - Mono Black */}
            <div className="p-6 bg-white text-stone-900 flex flex-col justify-between min-h-[280px] paint-chip-shadow">
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 uppercase pb-2 border-b border-stone-200">
                <span>2.2.4 100% Preto</span>
                <span className="w-2 h-2 rounded-full bg-black" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="mono-black" />
              </div>
              <div className="text-[10px] font-mono text-stone-600 pt-2 flex justify-between">
                <span>100% Preto</span>
                <span>Fundo Branco</span>
              </div>
            </div>

            {/* 5. Vertical - Mono White */}
            <div className="p-6 bg-stone-950 text-white flex flex-col justify-between min-h-[280px] paint-chip-shadow border border-stone-800">
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 uppercase pb-2 border-b border-stone-800">
                <span>2.2.5 100% Branco</span>
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="mono-white" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>100% Branco</span>
                <span>Fundo Preto</span>
              </div>
            </div>

          </div>
        </div>

        {/* --- 3. ISOLATED SYMBOL / MONOGRAM --- */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-200 flex items-center gap-2">
              <span className="font-mono text-emerald-400">2.3</span>
              <span>Símbolo Isolado & Monograma AVZ</span>
            </h3>
            <p className="text-xs text-stone-400">
              Aplicações pontuais em favicons, botões de bordado, lacres de embalagens e selos térmicos.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-stone-100 flex flex-col items-center justify-between min-h-[180px] paint-chip-shadow">
              <span className="text-[10px] font-mono text-stone-500 uppercase">Símbolo Cor</span>
              <BrandLogo variant="symbol" colorMode="color-light" size="md" />
              <span className="text-[10px] font-mono text-stone-600">Fundo Claro</span>
            </div>

            <div 
              className="p-6 flex flex-col items-center justify-between min-h-[180px] paint-chip-shadow"
              style={{ backgroundColor: brand.colors.neutralDark.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase">Símbolo Cor</span>
              <BrandLogo variant="symbol" colorMode="color-dark" size="md" />
              <span className="text-[10px] font-mono text-stone-400">Fundo Escuro</span>
            </div>

            {/* Symbol White on Green #2E6930 */}
            <div 
              className="p-6 flex flex-col items-center justify-between min-h-[180px] paint-chip-shadow transition-colors"
              style={{ backgroundColor: brand.colors.primary.hex }}
            >
              <span className="text-[10px] font-mono text-emerald-100 uppercase">Símbolo Branco</span>
              <BrandLogo variant="symbol" colorMode="mono-white" size="md" />
              <span className="text-[10px] font-mono text-emerald-200">Fundo Verde</span>
            </div>

            <div className="p-6 bg-white flex flex-col items-center justify-between min-h-[180px] paint-chip-shadow">
              <span className="text-[10px] font-mono text-stone-500 uppercase">Símbolo Preto</span>
              <BrandLogo variant="symbol" colorMode="mono-black" size="md" />
              <span className="text-[10px] font-mono text-stone-600">100% Preto</span>
            </div>

            <div className="p-6 bg-stone-950 flex flex-col items-center justify-between min-h-[180px] paint-chip-shadow border border-stone-800">
              <span className="text-[10px] font-mono text-stone-400 uppercase">Símbolo Branco</span>
              <BrandLogo variant="symbol" colorMode="mono-white" size="md" />
              <span className="text-[10px] font-mono text-stone-400">100% Branco</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
