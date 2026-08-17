import React from 'react';
import { BrandLogo } from '../BrandLogo';
import { X } from 'lucide-react';

export const ManualGridArea: React.FC = () => {
  return (
    <section id="grid" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
            Seção 03
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Área de Não-Interferência & Malha Construtiva
          </h2>
          <p className="text-xs text-stone-500 font-mono">
            Módulo de Segurança 'X' • Redução Mínima
          </p>
        </div>

        {/* 1. Technical Clear Space Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8 p-8 sm:p-12 bg-white relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-8 pb-2">
              <span>ESQUEMA DE PROTEÇÃO MODULAR (COTA X)</span>
              <span>GRID TÉCNICO 24×24MM</span>
            </div>

            {/* Stage with Technical Grid */}
            <div className="p-12 sm:p-16 bg-stone-100/60 bg-manual-grid flex items-center justify-center relative">
              
              {/* Outer Safe Boundary with dashed line */}
              <div className="relative border-2 border-dashed border-emerald-600/70 p-8 sm:p-12 bg-white/90 flex items-center justify-center">
                
                {/* Corner X markers */}
                <span className="absolute -top-3 -left-3 bg-emerald-700 text-white font-mono text-[10px] font-bold px-1.5 py-0.5">X</span>
                <span className="absolute -top-3 -right-3 bg-emerald-700 text-white font-mono text-[10px] font-bold px-1.5 py-0.5">X</span>
                <span className="absolute -bottom-3 -left-3 bg-emerald-700 text-white font-mono text-[10px] font-bold px-1.5 py-0.5">X</span>
                <span className="absolute -bottom-3 -right-3 bg-emerald-700 text-white font-mono text-[10px] font-bold px-1.5 py-0.5">X</span>

                {/* Central Brand Logo */}
                <BrandLogo variant="horizontal" colorMode="color-light" size="lg" />
              </div>

            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between text-xs font-mono text-stone-600 gap-4">
              <span>Módulo de referência <strong>X</strong> = Altura da letra <strong>Z</strong> de Zulato</span>
              <span>Margem perimetral obrigatória: <strong>1.0X</strong> em todos os lados</span>
            </div>
          </div>

          {/* Right Column: Minimum Sizing Rules */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-8 bg-white space-y-4">
              <h4 className="text-xs font-bold font-mono text-stone-900 uppercase tracking-wider">
                3.1 Limites de Redução Mínima
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Para garantir a legibilidade técnica da assinatura <em>"AGROVETERINÁRIA"</em>, respeite rigorosamente os limites:
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="p-4 bg-stone-50 space-y-1">
                  <div className="flex justify-between font-mono font-bold text-stone-800">
                    <span>Mídia Impressa (Gráfica)</span>
                    <span className="text-emerald-700">18 mm</span>
                  </div>
                  <p className="text-[11px] text-stone-500">Largura mínima para impressão offset, rotogravura e silk.</p>
                </div>

                <div className="p-4 bg-stone-50 space-y-1">
                  <div className="flex justify-between font-mono font-bold text-stone-800">
                    <span>Ambiente Digital (Telas)</span>
                    <span className="text-emerald-700">32 px</span>
                  </div>
                  <p className="text-[11px] text-stone-500">Altura mínima em telas HD e dispositivos móveis.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white space-y-2">
              <h4 className="text-xs font-bold font-mono text-stone-900 uppercase tracking-wider">
                3.2 Co-Branding & Parcerias
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Em assinaturas conjuntas com laboratórios veterinários ou cooperativas, aplicar uma barra vertical separadora com espaçamento <strong>2.0X</strong>.
              </p>
            </div>

          </div>

        </div>

        {/* 2. Brand Misuse Prohibitions (Mau Uso) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">3.3</span>
              <span>Normas de Proibição (Mau Uso do Logotipo)</span>
            </h3>
            <p className="text-xs text-stone-500">
              A integridade estrutural e cromática da marca deve ser rigorosamente mantida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Don't 1: Distort */}
            <div className="p-6 bg-white space-y-3">
              <div className="h-28 bg-stone-100 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="scale-y-150 scale-x-75 opacity-60">
                  <BrandLogo variant="horizontal" colorMode="color-light" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-900/10 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-700">1. Não Distorcer</p>
              <p className="text-[11px] text-stone-500">Nunca achate ou estique a proporção da marca.</p>
            </div>

            {/* Don't 2: Change Colors */}
            <div className="p-6 bg-white space-y-3">
              <div className="h-28 bg-stone-100 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="opacity-60">
                  <BrandLogo variant="horizontal" colorMode="custom" symbolColor="#9333ea" textColor="#d97706" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-900/10 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-700">2. Não Alterar Cores</p>
              <p className="text-[11px] text-stone-500">Nunca aplique tons que não constem na paleta oficial.</p>
            </div>

            {/* Don't 3: Low Contrast Background */}
            <div className="p-6 bg-white space-y-3">
              <div className="h-28 bg-stone-600 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="opacity-40">
                  <BrandLogo variant="horizontal" colorMode="color-light" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-900/20 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-700">3. Fundo Sem Contraste</p>
              <p className="text-[11px] text-stone-500">Nunca aplique a versão escura sobre fundos cinzas ou com ruído.</p>
            </div>

            {/* Don't 4: Rotate */}
            <div className="p-6 bg-white space-y-3">
              <div className="h-28 bg-stone-100 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="rotate-12 opacity-60">
                  <BrandLogo variant="horizontal" colorMode="color-light" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-900/10 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-700">4. Não Rotacionar</p>
              <p className="text-[11px] text-stone-500">A marca deve estar invariavelmente no eixo horizontal 0°.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
