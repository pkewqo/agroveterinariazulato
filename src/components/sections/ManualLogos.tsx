import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';

export const ManualLogos: React.FC = () => {
  const { brand } = useBrand();

  return (
    <section id="logos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
            Seção 02
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Assinaturas da Marca & Variações Oficiais
          </h2>
          <p className="text-xs text-stone-500 font-mono">
            Horizontal • Vertical • Fundo Institucional • Monocromático
          </p>
        </div>

        {/* --- 1. HORIZONTAL SIGNATURES --- */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">2.1</span>
              <span>Assinatura Horizontal (Primária)</span>
            </h3>
            <p className="text-xs text-stone-500">
              Formato preferencial para fachadas, sinalizações, cabeçalhos de sites e materiais horizontais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* 1. Horizontal - Color on Light */}
            <div className="p-6 bg-stone-50 flex flex-col justify-between min-h-[220px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.1.1 Colorida • Fundo Claro
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="color-light" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>Símbolo: {brand.colors.primary.hex}</span>
                <span>Texto: {brand.colors.secondary.hex}</span>
              </div>
            </div>

            {/* 2. Horizontal - Color on Dark (White text) */}
            <div 
              className="p-6 flex flex-col justify-between min-h-[220px]"
              style={{ backgroundColor: brand.colors.neutralDark.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.1.2 Colorida • Fundo Preto
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="color-dark" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>Símbolo: {brand.colors.primary.hex}</span>
                <span>Texto: #FFFFFF</span>
              </div>
            </div>

            {/* 3. Horizontal - White Logo on Brand Green (#2E6930) */}
            <div 
              className="p-6 flex flex-col justify-between min-h-[220px] transition-colors"
              style={{ backgroundColor: brand.colors.primary.hex }}
            >
              <span className="text-[10px] font-mono text-white/80 uppercase tracking-wider">
                2.1.3 Fundo Verde Institucional
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-white" size="md" />
              </div>
              <div className="text-[10px] font-mono text-white/70 pt-2 flex justify-between">
                <span>Logo: #FFFFFF</span>
                <span>Fundo: {brand.colors.primary.hex}</span>
              </div>
            </div>

            {/* 4. Horizontal - Mono Black */}
            <div className="p-6 bg-stone-50 flex flex-col justify-between min-h-[220px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.1.4 Monocromática Positiva
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-black" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>100% Preto</span>
                <span>Fundo Branco</span>
              </div>
            </div>

            {/* 5. Horizontal - Mono White on Black */}
            <div className="p-6 bg-stone-950 flex flex-col justify-between min-h-[220px]">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.1.5 Monocromática Negativa
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-white" size="md" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>100% Branco</span>
                <span>Fundo Preto</span>
              </div>
            </div>

          </div>
        </div>

        {/* --- 2. VERTICAL / NORMAL SIGNATURES --- */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">2.2</span>
              <span>Assinatura Normal / Vertical (Empilhada)</span>
            </h3>
            <p className="text-xs text-stone-500">
              Formato quadrado/empilhado para rótulos, sacarias, uniformes, crachás e avatares.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* 1. Vertical - Color on Light */}
            <div className="p-6 bg-stone-50 flex flex-col justify-between min-h-[280px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.2.1 Colorida • Fundo Claro
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="color-light" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>Símbolo: {brand.colors.primary.hex}</span>
                <span>Texto: {brand.colors.secondary.hex}</span>
              </div>
            </div>

            {/* 2. Vertical - Color on Dark */}
            <div 
              className="p-6 flex flex-col justify-between min-h-[280px]"
              style={{ backgroundColor: brand.colors.neutralDark.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.2.2 Colorida • Fundo Preto
              </span>
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
              className="p-6 flex flex-col justify-between min-h-[280px] transition-colors"
              style={{ backgroundColor: brand.colors.primary.hex }}
            >
              <span className="text-[10px] font-mono text-white/80 uppercase tracking-wider">
                2.2.3 Fundo Verde Institucional
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="mono-white" />
              </div>
              <div className="text-[10px] font-mono text-white/70 pt-2 flex justify-between">
                <span>Logo: #FFFFFF</span>
                <span>Fundo: {brand.colors.primary.hex}</span>
              </div>
            </div>

            {/* 4. Vertical - Mono Black */}
            <div className="p-6 bg-stone-50 flex flex-col justify-between min-h-[280px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.2.4 Monocromática Positiva
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="mono-black" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between">
                <span>100% Preto</span>
                <span>Fundo Branco</span>
              </div>
            </div>

            {/* 5. Vertical - Mono White on Black */}
            <div className="p-6 bg-stone-950 flex flex-col justify-between min-h-[280px]">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.2.5 Monocromática Negativa
              </span>
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
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">2.3</span>
              <span>Símbolo Isolado & Monograma AVZ</span>
            </h3>
            <p className="text-xs text-stone-500">
              Utilizado para favicon, fechos de embalagens, bordados pequenos e marca d'água técnica.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-6 bg-stone-50 flex flex-col items-center justify-between min-h-[180px]">
              <span className="text-[10px] font-mono text-stone-400 uppercase">Símbolo Cor</span>
              <BrandLogo variant="symbol" colorMode="color-light" size="md" />
              <span className="text-[10px] font-mono text-stone-500">Fundo Claro</span>
            </div>

            <div 
              className="p-6 flex flex-col items-center justify-between min-h-[180px]"
              style={{ backgroundColor: brand.colors.neutralDark.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase">Símbolo Cor</span>
              <BrandLogo variant="symbol" colorMode="color-dark" size="md" />
              <span className="text-[10px] font-mono text-stone-400">Fundo Escuro</span>
            </div>

            {/* Symbol White on Green #2E6930 */}
            <div 
              className="p-6 flex flex-col items-center justify-between min-h-[180px] transition-colors"
              style={{ backgroundColor: brand.colors.primary.hex }}
            >
              <span className="text-[10px] font-mono text-white/80 uppercase">Símbolo Branco</span>
              <BrandLogo variant="symbol" colorMode="mono-white" size="md" />
              <span className="text-[10px] font-mono text-white/80">Fundo Verde</span>
            </div>

            <div className="p-6 bg-stone-50 flex flex-col items-center justify-between min-h-[180px]">
              <span className="text-[10px] font-mono text-stone-400 uppercase">Símbolo Preto</span>
              <BrandLogo variant="symbol" colorMode="mono-black" size="md" />
              <span className="text-[10px] font-mono text-stone-500">100% Preto</span>
            </div>

            <div className="p-6 bg-stone-950 flex flex-col items-center justify-between min-h-[180px]">
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
