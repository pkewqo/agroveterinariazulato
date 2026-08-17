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
            Versão Horizontal • Versão Vertical • Fundo Claro • Fundo Verde Floresta • Fundo Preto Carvão • P&B
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
              Formato preferencial para fachadas, cabeçalhos digitais, placas de campo e testeiras.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Horizontal Color on White */}
            <div className="p-8 bg-stone-50 flex flex-col justify-between min-h-[220px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.1.1 Colorida • Fundo Branco
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-500 pt-2 flex justify-between border-t border-stone-200">
                <span>AV: {brand.colors.verdeMedio.hex}</span>
                <span>Zulato: {brand.colors.dourado.hex}</span>
              </div>
            </div>

            {/* 2. Horizontal Color on Forest Green */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[220px] transition-colors"
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
            >
              <span className="text-[10px] font-mono text-emerald-200/80 uppercase tracking-wider">
                2.1.2 Colorida • Fundo Verde Floresta
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-emerald-200/70 pt-2 flex justify-between border-t border-emerald-800/80">
                <span>Fundo: {brand.colors.verdeEscuro.hex}</span>
                <span>Zulato: {brand.colors.dourado.hex}</span>
              </div>
            </div>

            {/* 3. Horizontal Color on Charcoal Black */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[220px] transition-colors"
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.1.3 Colorida • Fundo Preto Carvão
              </span>
              <div className="py-6 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between border-t border-stone-800">
                <span>Fundo: {brand.colors.pretoComplementar.hex}</span>
                <span>Zulato: {brand.colors.dourado.hex}</span>
              </div>
            </div>

          </div>

          {/* Horizontal Monochrome Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-50 flex flex-col justify-between min-h-[180px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase">2.1.4 100% Preto (P&B)</span>
              <div className="py-4 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-black" size="md" />
              </div>
              <span className="text-[10px] font-mono text-stone-400">Fundo Branco</span>
            </div>

            <div 
              className="p-6 flex flex-col justify-between min-h-[180px] transition-colors"
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
            >
              <span className="text-[10px] font-mono text-emerald-200/80 uppercase">2.1.5 100% Branco (Fundo Verde)</span>
              <div className="py-4 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-white" size="md" />
              </div>
              <span className="text-[10px] font-mono text-emerald-200/70">Fundo Verde ({brand.colors.verdeEscuro.hex})</span>
            </div>

            <div 
              className="p-6 flex flex-col justify-between min-h-[180px] transition-colors"
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase">2.1.6 100% Branco (Fundo Preto)</span>
              <div className="py-4 flex items-center justify-center">
                <BrandLogo variant="horizontal" colorMode="mono-white" size="md" />
              </div>
              <span className="text-[10px] font-mono text-stone-400">Fundo Preto ({brand.colors.pretoComplementar.hex})</span>
            </div>
          </div>
        </div>

        {/* --- 2. VERTICAL / STACKED SIGNATURES --- */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">2.2</span>
              <span>Assinatura Normal / Vertical (Empilhada)</span>
            </h3>
            <p className="text-xs text-stone-500">
              Formato quadrado/vertical para sacarias, rótulos de suplementos, avatares e embalagens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Vertical Color on White */}
            <div className="p-8 bg-stone-50 flex flex-col justify-between min-h-[280px]">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                2.2.1 Colorida • Fundo Branco
              </span>
              <div className="py-8 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-500 pt-2 flex justify-between border-t border-stone-200">
                <span>AV: {brand.colors.verdeMedio.hex}</span>
                <span>Z / Texto: {brand.colors.dourado.hex}</span>
              </div>
            </div>

            {/* 2. Vertical Color on Forest Green */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[280px] transition-colors"
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
            >
              <span className="text-[10px] font-mono text-emerald-200/80 uppercase tracking-wider">
                2.2.2 Colorida • Fundo Verde Floresta
              </span>
              <div className="py-8 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-emerald-200/70 pt-2 flex justify-between border-t border-emerald-800/80">
                <span>Fundo: {brand.colors.verdeEscuro.hex}</span>
                <span>Z / Texto: {brand.colors.dourado.hex}</span>
              </div>
            </div>

            {/* 3. Vertical Color on Charcoal Black */}
            <div 
              className="p-8 flex flex-col justify-between min-h-[280px] transition-colors"
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
            >
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                2.2.3 Colorida • Fundo Preto Carvão
              </span>
              <div className="py-8 flex items-center justify-center">
                <BrandLogo variant="vertical" colorMode="color" size="lg" />
              </div>
              <div className="text-[10px] font-mono text-stone-400 pt-2 flex justify-between border-t border-stone-800">
                <span>Fundo: {brand.colors.pretoComplementar.hex}</span>
                <span>Z / Texto: {brand.colors.dourado.hex}</span>
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
