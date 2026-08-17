import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';

export const ManualLogos: React.FC = () => {
  const { brand } = useBrand();

  return (
    <section id="logos" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
            Seção 02
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Assinaturas Oficiais da Marca
          </h2>
          <p className="text-xs text-stone-500 font-mono">
            Variações Cromáticas • Fundo Claro • Fundo Verde Floresta • Fundo Preto • Monocromático
          </p>
        </div>

        {/* --- 1. PRINCIPAL CHROMATIC VARIATIONS --- */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">2.1</span>
              <span>Assinatura Principal (Variações de Fundo)</span>
            </h3>
            <p className="text-xs text-stone-500">
              Aplicações da marca com fidelidade cromática nos fundos oficiais do sistema visual.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Color on White Background */}
            <div className="p-8 bg-stone-50 flex flex-col justify-between min-h-[280px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.1.1 Colorida • Fundo Branco
              </span>
              <div className="py-8 flex items-center justify-center">
                <BrandLogo variant="normal" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-500 pt-2 flex justify-between border-t border-stone-200">
                <span>AV: {brand.colors.verdeMedio.hex}</span>
                <span>Z / Texto: {brand.colors.dourado.hex}</span>
              </div>
            </div>

            {/* 2. Color on Forest Green Background */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[280px] transition-colors"
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
            >
              <span className="text-[10px] font-mono text-emerald-200/80 uppercase tracking-wider">
                2.1.2 Colorida • Fundo Verde Floresta
              </span>
              <div className="py-8 flex items-center justify-center">
                <BrandLogo variant="normal" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-emerald-200/70 pt-2 flex justify-between border-t border-emerald-800/80">
                <span>Fundo: {brand.colors.verdeEscuro.hex}</span>
                <span>Z / Texto: {brand.colors.dourado.hex}</span>
              </div>
            </div>

            {/* 3. Color on Charcoal Black Background */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[280px] transition-colors"
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.1.3 Colorida • Fundo Preto Carvão
              </span>
              <div className="py-8 flex items-center justify-center">
                <BrandLogo variant="normal" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between border-t border-stone-800">
                <span>Fundo: {brand.colors.pretoComplementar.hex}</span>
                <span>Z / Texto: {brand.colors.dourado.hex}</span>
              </div>
            </div>

          </div>
        </div>

        {/* --- 2. MONOCHROME VARIATIONS --- */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">2.2</span>
              <span>Assinaturas Monocromáticas (P&B & Negativas)</span>
            </h3>
            <p className="text-xs text-stone-500">
              Para impressões em 1 cor (1x0), gravações a laser, carimbos, baixos-relevos e materiais de alto contraste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* 1. Mono Black on White */}
            <div className="p-8 bg-stone-50 flex flex-col justify-between min-h-[260px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.2.1 Monocromática Positiva (P&B)
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="normal" colorMode="mono-black" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-500 pt-2 flex justify-between border-t border-stone-200">
                <span>100% Preto Carvão ({brand.colors.pretoComplementar.hex})</span>
                <span>Fundo Branco</span>
              </div>
            </div>

            {/* 2. Mono White on Forest Green */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[260px] transition-colors"
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
            >
              <span className="text-[10px] font-mono text-emerald-200/80 uppercase tracking-wider">
                2.2.2 Monocromática Negativa (Fundo Verde)
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="normal" colorMode="mono-white" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-emerald-200/70 pt-2 flex justify-between border-t border-emerald-800/80">
                <span>100% Branco Puro</span>
                <span>Fundo Verde ({brand.colors.verdeEscuro.hex})</span>
              </div>
            </div>

            {/* 3. Mono White on Charcoal Black */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[260px] transition-colors"
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.2.3 Monocromática Negativa (Fundo Preto)
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="normal" colorMode="mono-white" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between border-t border-stone-800">
                <span>100% Branco Puro</span>
                <span>Fundo Preto ({brand.colors.pretoComplementar.hex})</span>
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
              Monograma AV integrado à silhueta do touro e letra Z para favicons, bordados, lacres e selos técnicos.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* Color on Light */}
            <div className="p-6 bg-stone-50 flex flex-col items-center justify-between min-h-[180px]">
              <span className="text-[10px] font-mono text-stone-400 uppercase">Símbolo Colorido</span>
              <BrandLogo variant="symbol" colorMode="color" size="md" />
              <span className="text-[10px] font-mono text-stone-500">Fundo Claro</span>
            </div>

            {/* Color on Green */}
            <div 
              className="p-6 flex flex-col items-center justify-between min-h-[180px] transition-colors"
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
            >
              <span className="text-[10px] font-mono text-emerald-200/70 uppercase">Símbolo Colorido</span>
              <BrandLogo variant="symbol" colorMode="color" size="md" />
              <span className="text-[10px] font-mono text-emerald-200/80">Fundo Verde Floresta</span>
            </div>

            {/* Mono Black */}
            <div className="p-6 bg-stone-50 flex flex-col items-center justify-between min-h-[180px]">
              <span className="text-[10px] font-mono text-stone-400 uppercase">Símbolo Preto</span>
              <BrandLogo variant="symbol" colorMode="mono-black" size="md" />
              <span className="text-[10px] font-mono text-stone-500">100% Preto Carvão</span>
            </div>

            {/* Mono White on Black */}
            <div 
              className="p-6 flex flex-col items-center justify-between min-h-[180px] transition-colors"
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
            >
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
