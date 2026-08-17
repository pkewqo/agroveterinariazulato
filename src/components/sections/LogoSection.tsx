import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { 
  ShieldAlert, 
  Maximize2, 
  Layers, 
  Grid, 
  XCircle
} from 'lucide-react';

export const LogoSection: React.FC = () => {
  const { brand } = useBrand();
  const [activePreviewBg, setActivePreviewBg] = useState<'dark' | 'light' | 'checker'>('dark');
  const [clearSpaceMultiplier, setClearSpaceMultiplier] = useState(1);

  return (
    <section id="logos" className="py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-xs font-mono text-emerald-400">
            <span>01. IDENTIDADE VISUAL & LOGOTIPIA</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
          >
            Construção e Variações do Logotipo
          </h2>
          <p className="text-stone-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            O logotipo da <strong>{brand.brandName}</strong> é composto pela junção harmoniosa do monograma 
            com a silhueta bovina (símbolo de força e pecuária de precisão) e a tipografia institucional de alto impacto.
          </p>
        </div>

        {/* 1. Official Versions: Horizontal & Normal/Vertical */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-stone-200 flex items-center gap-2">
              <Layers size={18} className="text-emerald-400" />
              <span>Variações Oficiais da Assinatura</span>
            </h3>
            
            {/* Background toggle for inspection */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-lg text-xs no-print">
              <span className="text-[11px] text-stone-400 px-2 font-mono">Fundo de Teste:</span>
              <button
                onClick={() => setActivePreviewBg('dark')}
                className={`px-2.5 py-1 rounded cursor-pointer ${activePreviewBg === 'dark' ? 'bg-stone-800 text-white font-medium' : 'text-stone-400 hover:text-stone-200'}`}
              >
                Escuro
              </button>
              <button
                onClick={() => setActivePreviewBg('light')}
                className={`px-2.5 py-1 rounded cursor-pointer ${activePreviewBg === 'light' ? 'bg-stone-100 text-stone-900 font-medium' : 'text-stone-400 hover:text-stone-200'}`}
              >
                Claro
              </button>
              <button
                onClick={() => setActivePreviewBg('checker')}
                className={`px-2.5 py-1 rounded cursor-pointer ${activePreviewBg === 'checker' ? 'bg-stone-800 text-white font-medium' : 'text-stone-400 hover:text-stone-200'}`}
              >
                Transparente
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Horizontal Version Card */}
            <div className="p-6 rounded-3xl bg-stone-900/80 border border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-stone-100">1. Versão Horizontal (Primária)</h4>
                  <p className="text-xs text-stone-400">Aplicação prioritária em cabeçalhos, fachadas, outdoors e banners.</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-semibold">
                  Principal
                </span>
              </div>

              {/* Logo Viewport */}
              <div className={`h-48 rounded-2xl border border-stone-800 flex items-center justify-center p-6 transition-colors ${
                activePreviewBg === 'dark' ? 'bg-stone-950' : activePreviewBg === 'light' ? 'bg-white' : 'bg-checkerboard'
              }`}>
                <img 
                  src={brand.logos.horizontalUrl} 
                  alt="Logo Horizontal" 
                  className="max-h-24 max-w-full object-contain filter drop-shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-300">
                <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">Uso Recomendado</span>
                  <span className="font-medium">Sites, Sinalização, Veículos, Brindes horizontais</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">Proporção</span>
                  <span className="font-medium">Paisagem (Wide 4:1)</span>
                </div>
              </div>
            </div>

            {/* Vertical / Normal Stacked Version Card */}
            <div className="p-6 rounded-3xl bg-stone-900/80 border border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-stone-100">2. Versão Normal / Vertical (Secundária)</h4>
                  <p className="text-xs text-stone-400">Ideal para avatares de redes sociais, embalagens de ração e crachás.</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700 text-[11px] font-mono text-stone-300 font-semibold">
                  Empilhada
                </span>
              </div>

              {/* Logo Viewport */}
              <div className={`h-48 rounded-2xl border border-stone-800 flex items-center justify-center p-6 transition-colors ${
                activePreviewBg === 'dark' ? 'bg-stone-950' : activePreviewBg === 'light' ? 'bg-white' : 'bg-checkerboard'
              }`}>
                <img 
                  src={brand.logos.verticalUrl} 
                  alt="Logo Normal / Vertical" 
                  className="max-h-32 max-w-full object-contain filter drop-shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-300">
                <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">Uso Recomendado</span>
                  <span className="font-medium">Instagram, Rótulos, Unidades de Medicação, Bordados</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">Proporção</span>
                  <span className="font-medium">Quadrada / Retrato (1:1.2)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Interactive Clear Space / Safe Area */}
        <div className="p-8 rounded-3xl bg-stone-900/90 border border-stone-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <Grid size={18} className="text-emerald-400" />
                <span>Área de Proteção & Respiro (Clear Space)</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Nenhum elemento gráfico, texto ou borda deve invadir a área de segurança determinada pela altura modular <strong>'X'</strong>.
              </p>
            </div>

            <div className="flex items-center gap-3 no-print">
              <span className="text-xs font-mono text-stone-400">Escala de Respiro:</span>
              <input
                type="range"
                min="0.8"
                max="1.8"
                step="0.1"
                value={clearSpaceMultiplier}
                onChange={(e) => setClearSpaceMultiplier(parseFloat(e.target.value))}
                className="accent-emerald-500 w-28 cursor-pointer"
              />
              <span className="text-xs font-mono text-emerald-400 w-8">{clearSpaceMultiplier}x</span>
            </div>
          </div>

          {/* Interactive Clear Space Stage */}
          <div className="relative p-10 rounded-2xl bg-stone-950 border border-stone-800/80 flex items-center justify-center overflow-hidden min-h-[260px] bg-grid-pattern">
            
            {/* The Safe Area Box with border dashes and X markers */}
            <div 
              className="relative border-2 border-dashed border-emerald-500/70 rounded-xl transition-all duration-300 flex items-center justify-center"
              style={{
                padding: `${clearSpaceMultiplier * 32}px`,
                backgroundColor: 'rgba(46, 105, 48, 0.04)',
              }}
            >
              {/* Corner 'X' indicators */}
              <span className="absolute top-2 left-2 text-[11px] font-mono font-bold text-emerald-400 bg-stone-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">X</span>
              <span className="absolute top-2 right-2 text-[11px] font-mono font-bold text-emerald-400 bg-stone-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">X</span>
              <span className="absolute bottom-2 left-2 text-[11px] font-mono font-bold text-emerald-400 bg-stone-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">X</span>
              <span className="absolute bottom-2 right-2 text-[11px] font-mono font-bold text-emerald-400 bg-stone-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">X</span>

              {/* Rulers / Dimension Lines */}
              <div className="absolute -top-6 left-0 right-0 flex items-center justify-center">
                <span className="text-[10px] font-mono text-emerald-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                  Margem Mínima = Altura da Letra 'Z' (X)
                </span>
              </div>

              {/* Center Logo */}
              <img 
                src={brand.logos.horizontalUrl} 
                alt={brand.brandName}
                className="max-h-20 w-auto object-contain relative z-10 filter drop-shadow-md"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300">
            <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800">
              <span className="text-emerald-400 font-bold block mb-1">Módulo de Referência</span>
              <span>A unidade <strong>X</strong> corresponde à altura exata da tipografia principal do logo.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800">
              <span className="text-emerald-400 font-bold block mb-1">Aplicação em Anúncios</span>
              <span>Manter sempre o afastamento das margens externas de posters e outdoors.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800">
              <span className="text-emerald-400 font-bold block mb-1">Co-Branding</span>
              <span>Em parcerias com laboratórios veterinários, aplicar separador com espaçamento 2X.</span>
            </div>
          </div>
        </div>

        {/* 3. Minimum Sizing */}
        <div className="p-8 rounded-3xl bg-stone-900/80 border border-stone-800 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
              <Maximize2 size={18} className="text-emerald-400" />
              <span>Redução Mínima para Garantia de Legibilidade</span>
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Para preservar a legibilidade da palavra <em>"AGROVETERINÁRIA"</em>, respeite as dimensões mínimas recomendadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Digital Sizing */}
            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-stone-200">Ambiente Digital (Telas & Dispositivos)</span>
                <span className="font-mono text-emerald-400 font-bold">Mínimo: 32px altura</span>
              </div>
              <div className="flex items-end gap-6 p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 overflow-x-auto">
                <div className="text-center space-y-1">
                  <img src={brand.logos.horizontalUrl} alt="32px" className="h-8 w-auto object-contain mx-auto" />
                  <span className="text-[10px] font-mono text-stone-500">32px (Mínimo)</span>
                </div>
                <div className="text-center space-y-1">
                  <img src={brand.logos.horizontalUrl} alt="48px" className="h-12 w-auto object-contain mx-auto" />
                  <span className="text-[10px] font-mono text-stone-500">48px (Padrão)</span>
                </div>
                <div className="text-center space-y-1">
                  <img src={brand.logos.horizontalUrl} alt="64px" className="h-16 w-auto object-contain mx-auto" />
                  <span className="text-[10px] font-mono text-stone-500">64px (Ótimo)</span>
                </div>
              </div>
            </div>

            {/* Print Sizing */}
            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-stone-200">Mídia Impressa (Gráfica, Offset & Silkscreen)</span>
                <span className="font-mono text-emerald-400 font-bold">Mínimo: 18mm largura</span>
              </div>
              <div className="flex items-center justify-around p-4 rounded-xl bg-stone-900/60 border border-stone-800/80">
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold text-stone-200 block">Cartões & Crachás</span>
                  <span className="text-[11px] font-mono text-emerald-400">25mm a 35mm</span>
                </div>
                <div className="h-8 w-px bg-stone-800" />
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold text-stone-200 block">Papel Timbrado A4</span>
                  <span className="text-[11px] font-mono text-emerald-400">45mm a 55mm</span>
                </div>
                <div className="h-8 w-px bg-stone-800" />
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold text-stone-200 block">Sacos de Suplemento</span>
                  <span className="text-[11px] font-mono text-emerald-400">120mm a 200mm</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Logo Misuse / Don'ts */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
              <ShieldAlert size={18} className="text-rose-400" />
              <span>Usos Incorretos da Marca (Proibições Estritas)</span>
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              A integridade do logotipo é inegociável. Abaixo estão as práticas estritamente proibidas em qualquer aplicação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Don't 1: Distort */}
            <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3 group hover:border-rose-500/40 transition-colors">
              <div className="h-28 rounded-xl bg-stone-950 flex items-center justify-center p-3 relative overflow-hidden">
                <img 
                  src={brand.logos.horizontalUrl} 
                  alt="Distorcido" 
                  className="h-10 w-full object-fill scale-y-150 opacity-70"
                />
                <div className="absolute inset-0 bg-rose-950/40 flex items-center justify-center">
                  <XCircle className="text-rose-500" size={32} />
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  <XCircle size={13} /> NÃO Distorcer
                </span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Nunca estique ou achate a proporção vertical ou horizontal.
                </p>
              </div>
            </div>

            {/* Don't 2: Change Colors */}
            <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3 group hover:border-rose-500/40 transition-colors">
              <div className="h-28 rounded-xl bg-stone-950 flex items-center justify-center p-3 relative overflow-hidden">
                <img 
                  src={brand.logos.horizontalUrl} 
                  alt="Cores erradas" 
                  className="h-10 w-auto object-contain filter hue-rotate-180 brightness-125 opacity-70"
                />
                <div className="absolute inset-0 bg-rose-950/40 flex items-center justify-center">
                  <XCircle className="text-rose-500" size={32} />
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  <XCircle size={13} /> NÃO Alterar Cores
                </span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Não aplique gradientes não oficiais, roxo, rosa ou tons fora do guia.
                </p>
              </div>
            </div>

            {/* Don't 3: Low Contrast Background */}
            <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3 group hover:border-rose-500/40 transition-colors">
              <div className="h-28 rounded-xl bg-stone-800 flex items-center justify-center p-3 relative overflow-hidden">
                <img 
                  src={brand.logos.horizontalUrl} 
                  alt="Fundo poluído" 
                  className="h-10 w-auto object-contain opacity-30 blur-[0.5px]"
                />
                <div className="absolute inset-0 bg-rose-950/40 flex items-center justify-center">
                  <XCircle className="text-rose-500" size={32} />
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  <XCircle size={13} /> NÃO Usar Sem Contraste
                </span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Evite fundos cinzas ou fotos com ruído que ocultem o nome.
                </p>
              </div>
            </div>

            {/* Don't 4: Rotate or Add Shadow Outline */}
            <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3 group hover:border-rose-500/40 transition-colors">
              <div className="h-28 rounded-xl bg-stone-950 flex items-center justify-center p-3 relative overflow-hidden">
                <img 
                  src={brand.logos.horizontalUrl} 
                  alt="Rotacionado" 
                  className="h-10 w-auto object-contain rotate-12 opacity-70"
                />
                <div className="absolute inset-0 bg-rose-950/40 flex items-center justify-center">
                  <XCircle className="text-rose-500" size={32} />
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  <XCircle size={13} /> NÃO Rotacionar
                </span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  O logotipo deve estar sempre 100% horizontal e nivelado.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
