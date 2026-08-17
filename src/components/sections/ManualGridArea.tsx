import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';
import { X, ShieldAlert } from 'lucide-react';

export const ManualGridArea: React.FC = () => {
  const { brand } = useBrand();

  return (
    <section 
      id="grid" 
      className="py-20 text-white transition-colors border-b border-stone-800"
      style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="space-y-1 border-b border-stone-800 pb-4">
          <span 
            className="text-xs font-mono font-bold uppercase tracking-widest block"
            style={{ color: brand.colors.dourado.hex }}
          >
            Seção 03
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Área de Não-Interferência & Malha Construtiva
          </h2>
          <p className="text-xs text-stone-400 font-mono">
            Módulo de Segurança 'X' • Redução Mínima • Normas de Proibição
          </p>
        </div>

        {/* 1. Technical Clear Space Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8 p-8 sm:p-12 bg-stone-900/90 border border-stone-800 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-8 pb-2 border-b border-stone-800">
              <span className="font-bold text-stone-200">ESQUEMA DE PROTEÇÃO MODULAR (COTA X)</span>
              <span>GRID TÉCNICO 20×20MM</span>
            </div>

            {/* Stage with Technical Grid */}
            <div className="p-12 sm:p-16 bg-stone-950/80 bg-manual-grid flex items-center justify-center relative border border-stone-800/80">
              
              {/* Outer Safe Boundary with dashed line */}
              <div 
                className="relative border-2 border-dashed p-8 sm:p-12 bg-stone-900/90 flex items-center justify-center shadow-xl"
                style={{ borderColor: brand.colors.verdeMedio.hex }}
              >
                
                {/* Corner X markers */}
                <span 
                  className="absolute -top-3 -left-3 text-white font-mono text-[10px] font-bold px-1.5 py-0.5"
                  style={{ backgroundColor: brand.colors.verdeMedio.hex }}
                >
                  X
                </span>
                <span 
                  className="absolute -top-3 -right-3 text-white font-mono text-[10px] font-bold px-1.5 py-0.5"
                  style={{ backgroundColor: brand.colors.verdeMedio.hex }}
                >
                  X
                </span>
                <span 
                  className="absolute -bottom-3 -left-3 text-white font-mono text-[10px] font-bold px-1.5 py-0.5"
                  style={{ backgroundColor: brand.colors.verdeMedio.hex }}
                >
                  X
                </span>
                <span 
                  className="absolute -bottom-3 -right-3 text-white font-mono text-[10px] font-bold px-1.5 py-0.5"
                  style={{ backgroundColor: brand.colors.verdeMedio.hex }}
                >
                  X
                </span>

                {/* Central Brand Logo */}
                <BrandLogo variant="normal" colorMode="mono-white" size="lg" />
              </div>

            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between text-xs font-mono text-stone-300 gap-4">
              <span>Módulo de referência <strong>X</strong> = Altura da letra <strong>Z</strong> de Zulato</span>
              <span>Margem perimetral obrigatória: <strong>1.0X</strong> em todos os lados</span>
            </div>
          </div>

          {/* Right Column: Minimum Sizing Rules */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-8 bg-stone-900/90 border border-stone-800 space-y-4">
              <h4 className="text-xs font-bold font-mono text-stone-100 uppercase tracking-wider">
                3.1 Limites de Redução Mínima
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Para garantir a legibilidade técnica da assinatura <em>"AGROVETERINÁRIA"</em>, respeite rigorosamente os limites:
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="p-4 bg-stone-950 border border-stone-800 space-y-1">
                  <div className="flex justify-between font-mono font-bold text-stone-200">
                    <span>Mídia Impressa (Gráfica)</span>
                    <span style={{ color: brand.colors.dourado.hex }} className="font-bold">18 mm</span>
                  </div>
                  <p className="text-[11px] text-stone-500">Largura mínima para impressão offset, rotogravura e silk.</p>
                </div>

                <div className="p-4 bg-stone-950 border border-stone-800 space-y-1">
                  <div className="flex justify-between font-mono font-bold text-stone-200">
                    <span>Ambiente Digital (Telas)</span>
                    <span style={{ color: brand.colors.dourado.hex }} className="font-bold">32 px</span>
                  </div>
                  <p className="text-[11px] text-stone-500">Altura mínima em telas HD e dispositivos móveis.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-stone-900/90 border border-stone-800 space-y-2">
              <h4 className="text-xs font-bold font-mono text-stone-100 uppercase tracking-wider">
                3.2 Co-Branding & Parcerias
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Em assinaturas conjuntas com laboratórios veterinários ou cooperativas parceiras, aplicar uma barra vertical separadora com espaçamento <strong>2.0X</strong>.
              </p>
            </div>

          </div>

        </div>

        {/* 2. Brand Misuse Prohibitions (Mau Uso) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
              <ShieldAlert size={18} className="text-rose-400" />
              <span>3.3 Normas de Proibição (Mau Uso do Logotipo)</span>
            </h3>
            <p className="text-xs text-stone-400">
              A integridade estrutural e cromática da marca deve ser rigorosamente mantida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Don't 1: Distort */}
            <div className="p-6 bg-stone-900/90 border border-stone-800 space-y-3">
              <div className="h-28 bg-stone-950 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="scale-y-150 scale-x-75 opacity-40">
                  <BrandLogo variant="normal" colorMode="mono-white" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-950/30 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-400">1. Não Distorcer</p>
              <p className="text-[11px] text-stone-500">Nunca achate ou estique a proporção da marca.</p>
            </div>

            {/* Don't 2: Change Colors */}
            <div className="p-6 bg-stone-900/90 border border-stone-800 space-y-3">
              <div className="h-28 bg-stone-950 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="opacity-40">
                  <BrandLogo variant="normal" colorMode="color" douradoColor="#9333ea" verdeMedioColor="#d97706" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-950/30 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-400">2. Não Alterar Cores</p>
              <p className="text-[11px] text-stone-500">Nunca aplique tons que não constem na paleta oficial.</p>
            </div>

            {/* Don't 3: Low Contrast Background */}
            <div className="p-6 bg-stone-900/90 border border-stone-800 space-y-3">
              <div className="h-28 bg-stone-700 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="opacity-30">
                  <BrandLogo variant="normal" colorMode="color" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-950/30 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-400">3. Fundo Sem Contraste</p>
              <p className="text-[11px] text-stone-500">Nunca aplique a versão escura sobre fundos cinzas ou com ruído.</p>
            </div>

            {/* Don't 4: Rotate */}
            <div className="p-6 bg-stone-900/90 border border-stone-800 space-y-3">
              <div className="h-28 bg-stone-950 flex items-center justify-center p-3 relative overflow-hidden">
                <div className="rotate-12 opacity-40">
                  <BrandLogo variant="normal" colorMode="mono-white" size="sm" />
                </div>
                <div className="absolute inset-0 bg-red-950/30 flex items-center justify-center">
                  <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-red-400">4. Não Rotacionar</p>
              <p className="text-[11px] text-stone-500">A marca deve estar invariavelmente no eixo horizontal 0°.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
