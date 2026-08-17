import React, { useState } from 'react';
import { useBrand } from '../../context/BrandContext';
import { 
  RotateCw, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  Search, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const MockupsSection: React.FC = () => {
  const { brand } = useBrand();
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [likedPost, setLikedPost] = useState(false);

  return (
    <section id="mockups" className="py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-xs font-mono text-emerald-400">
            <span>05. APLICAÇÕES PRÁTICAS & DESIGN SYSTEM</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
          >
            Aplicações da Marca no Mundo Real
          </h2>
          <p className="text-stone-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Veja como a identidade da <strong>{brand.brandName}</strong> se comporta em materiais gráficos físicos,
            comunicação digital e componentes interativos de software.
          </p>
        </div>

        {/* 1. Interactive 3D Business Card & Social Media Post */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Business Card (Left Column) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-100">1. Cartão de Visita Premium</h3>
                <p className="text-xs text-stone-400">Clique para virar entre Frente e Verso (efeito 3D)</p>
              </div>
              <button
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs text-emerald-400 font-medium transition-colors no-print cursor-pointer"
              >
                <RotateCw size={13} />
                <span>Virar Cartão</span>
              </button>
            </div>

            {/* Card Container with Perspective */}
            <div 
              onClick={() => setIsCardFlipped(!isCardFlipped)}
              className="cursor-pointer select-none perspective-[1000px] h-[240px] sm:h-[260px] w-full"
            >
              <div 
                className="w-full h-full relative duration-500 transition-transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                
                {/* FRONT OF CARD */}
                <div 
                  className="absolute inset-0 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-stone-800 backface-hidden"
                  style={{
                    backgroundColor: brand.colors.neutralDark.hex,
                    backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0%, transparent 80%)`,
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="h-10">
                      <img 
                        src={brand.logos.horizontalUrl} 
                        alt="Logo Zulato" 
                        className="h-full w-auto object-contain brightness-110"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10">
                      <ShieldCheck size={16} className="text-emerald-400" />
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p 
                        className="text-base sm:text-lg font-bold text-white tracking-wide"
                        style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
                      >
                        Dr. Marcos Zulato
                      </p>
                      <p className="text-xs text-stone-400 font-medium">
                        Médico Veterinário & Responsável Técnico
                      </p>
                      <p className="text-[11px] font-mono text-emerald-400">
                        CRMV-SP 18.420 • Especialista em Reprodução Bovina
                      </p>
                    </div>

                    <div className="text-right text-[10px] font-mono text-stone-400 space-y-0.5 hidden sm:block">
                      <p>{brand.socialHandles.phone}</p>
                      <p>{brand.socialHandles.website}</p>
                    </div>
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div 
                  className="absolute inset-0 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-stone-800 backface-hidden"
                  style={{
                    backgroundColor: brand.colors.primary.hex,
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="flex justify-end">
                    <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                      Atendimento Campo & Balcão
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img 
                      src={brand.logos.verticalUrl} 
                      alt="Logo Normal" 
                      className="h-20 w-auto object-contain filter drop-shadow-md brightness-110"
                    />
                    <p 
                      className="text-xs text-center text-white/90 font-medium max-w-xs"
                      style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                    >
                      {brand.tagline}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-white/80 font-mono pt-2 border-t border-white/20">
                    <span>{brand.socialHandles.location}</span>
                    <span>{brand.socialHandles.instagram}</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="text-center text-xs text-stone-500 font-mono no-print">
              Dimensões padrão: 90mm × 50mm • Papel Couché 350g com Laminação Fosca e Verniz Localizado
            </div>
          </div>

          {/* Social Media Post Mockup (Right Column) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-100">2. Post para Rede Social (Instagram/Feed)</h3>
                <p className="text-xs text-stone-400">Layout de comunicação técnica com engajamento do produtor</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-stone-800 text-[11px] font-mono text-emerald-400 font-semibold">
                1080 × 1080px
              </span>
            </div>

            {/* Social Post Frame */}
            <div className="rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl overflow-hidden max-w-md mx-auto">
              
              {/* Instagram Post Header */}
              <div className="p-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-stone-800 border border-emerald-500/40 p-1 flex items-center justify-center overflow-hidden">
                    <img src={brand.logos.verticalUrl} alt="Avatar" className="max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-200 block leading-tight">{brand.socialHandles.instagram}</span>
                    <span className="text-[10px] text-stone-400 leading-none">{brand.category}</span>
                  </div>
                </div>
                <span className="text-xs text-stone-500 font-mono">• Seguir</span>
              </div>

              {/* Post Creative Visual Body */}
              <div 
                className="relative h-64 p-6 flex flex-col justify-between overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${brand.colors.neutralDark.hex} 0%, #1c261b 100%)`,
                }}
              >
                {/* Background decorative watermark */}
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                  <img src={brand.logos.verticalUrl} alt="Watermark" className="w-64 h-64 object-contain" />
                </div>

                {/* Top Badge */}
                <div className="flex justify-between items-center relative z-10">
                  <span 
                    className="px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-md uppercase tracking-wider"
                    style={{ backgroundColor: brand.colors.accent.hex }}
                  >
                    Manejo de Alta Performance
                  </span>
                  <img src={brand.logos.horizontalUrl} alt="Logo" className="h-6 w-auto object-contain" />
                </div>

                {/* Headline Message */}
                <div className="relative z-10 space-y-2">
                  <h4 
                    className="text-xl sm:text-2xl font-black text-white leading-tight"
                    style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
                  >
                    Potencialize o Ganho de Peso do seu Rebanho neste Período Seco.
                  </h4>
                  <p 
                    className="text-xs text-stone-300 line-clamp-2"
                    style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                  >
                    Suplementação estratégica com acompanhamento veterinário direto na fazenda.
                  </p>
                </div>

                {/* Bottom Call to Action */}
                <div className="relative z-10 flex justify-between items-center pt-2 border-t border-white/15 text-xs text-stone-300">
                  <span className="font-mono text-emerald-400 text-[11px]">Consulte nossa equipe técnica</span>
                  <span 
                    className="px-3 py-1 rounded-lg text-white font-bold text-xs"
                    style={{ backgroundColor: brand.colors.primary.hex }}
                  >
                    Saiba Mais &rarr;
                  </span>
                </div>
              </div>

              {/* Instagram Post Actions & Likes */}
              <div className="p-3 bg-stone-950 space-y-2 text-xs">
                <div className="flex items-center justify-between text-stone-300">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setLikedPost(!likedPost)} 
                      className={`transition-colors cursor-pointer ${likedPost ? 'text-rose-500' : 'text-stone-300 hover:text-rose-400'}`}
                    >
                      <Heart size={18} fill={likedPost ? 'currentColor' : 'none'} />
                    </button>
                    <MessageCircle size={18} className="hover:text-stone-100 cursor-pointer" />
                    <Send size={18} className="hover:text-stone-100 cursor-pointer" />
                  </div>
                  <Bookmark size={18} className="hover:text-stone-100 cursor-pointer" />
                </div>

                <p className="text-stone-200 font-semibold text-[11px]">
                  {likedPost ? '143 curtidas' : '142 curtidas'}
                </p>

                <p className="text-stone-300 text-[11px]">
                  <strong className="text-white">{brand.socialHandles.instagram}</strong> A nutrição no momento certo define a lucratividade da sua arroba. Fale com nossos consultores. #PecuariaDeCorte #SaudeAnimal #Zulato
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 2. Official Veterinary Prescription & Timbrated Letterhead */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <Sparkles size={18} className="text-emerald-400" />
                <span>3. Papel Timbrado & Receituário Veterinário A4</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Documentação oficial de laudos, prescrição de medicamentos controlados e pareceres técnicos.
              </p>
            </div>
            <span className="px-3 py-1 rounded bg-stone-950 border border-stone-800 text-xs font-mono text-stone-400">
              Formato ISO A4 (210 × 297mm)
            </span>
          </div>

          {/* Letterhead Mockup Preview */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-white text-stone-900 p-8 sm:p-12 shadow-2xl space-y-8 print-card">
            
            {/* Letterhead Header */}
            <div className="flex justify-between items-start pb-6 border-b-2" style={{ borderColor: brand.colors.primary.hex }}>
              <div className="space-y-1">
                <img src={brand.logos.horizontalUrl} alt="Logo" className="h-10 w-auto object-contain" />
                <p className="text-[11px] text-stone-500 font-mono">{brand.category}</p>
              </div>
              <div className="text-right text-[10px] text-stone-500 font-mono space-y-0.5">
                <p className="font-bold text-stone-800">{brand.brandName}</p>
                <p>{brand.socialHandles.location}</p>
                <p>{brand.socialHandles.phone}</p>
                <p>{brand.socialHandles.website}</p>
              </div>
            </div>

            {/* Letterhead Body Content */}
            <div className="space-y-4 text-xs text-stone-700 leading-relaxed min-h-[140px]">
              <div className="flex justify-between text-[11px] font-semibold text-stone-800 pb-2 border-b border-stone-200">
                <span>PACIENTE / LOTE: Touros Nelore PO (Fazenda Esperança)</span>
                <span>DATA: 17 de Agosto de 2026</span>
              </div>
              
              <h5 
                className="text-base font-bold text-stone-900 pt-2"
                style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
              >
                Laudo de Acompanhamento Nutricional e Protocolo Sanitário
              </h5>

              <p style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}>
                Atestamos para os devidos fins que o rebanho examinado encontra-se sob protocolo de suplementação mineral e vacinação preventiva em conformidade com as diretrizes zootécnicas e normas vigentes de sanidade animal.
              </p>

              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 space-y-1 font-mono text-[11px]">
                <p className="font-bold text-stone-900">PRESCRIÇÃO TÉCNICA:</p>
                <p>1. Suplemento Mineral Energético Zulato F-20 — Fornecer 150g/cab/dia no cocho coberto.</p>
                <p>2. Vermifugação estratégica com controle de carga parasitária a cada 90 dias.</p>
              </div>
            </div>

            {/* Letterhead Footer */}
            <div className="pt-6 border-t border-stone-200 flex justify-between items-end text-[10px] text-stone-500">
              <div>
                <p className="font-bold text-stone-800">Responsável Técnico:</p>
                <p>Dr. Marcos Zulato • CRMV-SP 18.420</p>
              </div>
              <div className="text-right">
                <p className="italic text-stone-400">"{brand.tagline}"</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Live UI Component Kit Replicating Brand Tokens */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <Sparkles size={18} className="text-emerald-400" />
                <span>4. Kit de Componentes UI (Design System Web & App)</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Botões, inputs, cards e badges que herdam automaticamente as cores e fontes da marca em tempo real.
              </p>
            </div>
          </div>

          {/* Component Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Buttons Component Box */}
            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">Botões Interativos</span>
              
              <div className="space-y-3">
                <button
                  className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-xs shadow-md transition-all hover:opacity-90 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ 
                    backgroundColor: brand.colors.primary.hex,
                    fontFamily: `"${brand.typography.headline.family}", sans-serif`,
                  }}
                >
                  <span>Botão Primário Zulato</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-xs transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ 
                    backgroundColor: brand.colors.secondary.hex,
                    fontFamily: `"${brand.typography.headline.family}", sans-serif`,
                  }}
                >
                  <span>Botão Secundário</span>
                </button>

                <button
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs border transition-all flex items-center justify-center gap-2 cursor-pointer"
                  style={{ 
                    borderColor: brand.colors.primary.hex,
                    color: brand.colors.primary.hex,
                    fontFamily: `"${brand.typography.headline.family}", sans-serif`,
                  }}
                >
                  <span>Botão Outline</span>
                </button>
              </div>
            </div>

            {/* Badges & Status Box */}
            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">Badges & Tags de Status</span>
              
              <div className="space-y-3 pt-1">
                <div className="flex flex-wrap gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: brand.colors.primary.hex }}
                  >
                    Em Estoque
                  </span>

                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: brand.colors.accent.hex }}
                  >
                    Destaque Agro
                  </span>

                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold text-stone-200"
                    style={{ backgroundColor: brand.colors.secondary.hex }}
                  >
                    Laudo Aprovado
                  </span>
                </div>

                {/* Input Simulation */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-[11px] font-semibold text-stone-300">Campo de Busca Agro:</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-stone-500" size={14} />
                    <input 
                      type="text" 
                      defaultValue="Vacina Aftosa 50 doses..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card Box */}
            <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">Card de Produto E-Commerce</span>
              
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-3">
                <div className="flex justify-between items-start">
                  <span 
                    className="px-2 py-0.5 rounded text-[10px] font-bold text-white"
                    style={{ backgroundColor: brand.colors.accent.hex }}
                  >
                    Premium
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">COD #ZUL-882</span>
                </div>

                <div>
                  <h6 
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
                  >
                    Suplemento Mineral Zulato Max
                  </h6>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Saco 30kg • Alto fósforo para gado de corte
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                  <span className="text-sm font-bold text-white font-mono">R$ 148,90</span>
                  <button 
                    className="px-3 py-1.5 rounded-lg text-white text-xs font-semibold cursor-pointer"
                    style={{ backgroundColor: brand.colors.primary.hex }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
