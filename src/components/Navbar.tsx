import React from 'react';
import { useBrand } from '../context/BrandContext';
import { 
  Sliders, 
  Download, 
  Printer, 
  Sparkles, 
  Palette, 
  Type, 
  Layers, 
  MessageSquare, 
  Image as ImageIcon
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    brand, 
    setIsDrawerOpen, 
    setIsExportModalOpen, 
    presets, 
    loadPreset,
    resetToDefault,
    activeSection, 
    setActiveSection 
  } = useBrand();

  const navLinks = [
    { id: 'overview', label: 'Visão Geral', icon: Sparkles },
    { id: 'logos', label: 'Logotipo & Uso', icon: ImageIcon },
    { id: 'colors', label: 'Cores & Tokens', icon: Palette },
    { id: 'typography', label: 'Tipografia', icon: Type },
    { id: 'voice', label: 'Tom de Voz', icon: MessageSquare },
    { id: 'mockups', label: 'Aplicações & UI', icon: Layers },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-800 bg-stone-950/85 backdrop-blur-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
            <img 
              src={brand.logos.horizontalUrl || brand.logos.verticalUrl} 
              alt={brand.brandName} 
              className="h-7 w-auto object-contain max-w-[120px]"
            />
          </div>
          <div className="min-w-0 hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-stone-100 truncate">{brand.brandName}</span>
              <span className="text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/50">
                Manual v2.4
              </span>
            </div>
            <p className="text-xs text-stone-400 truncate">{brand.category}</p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-stone-800 text-stone-100 shadow-sm border border-stone-700'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                }`}
              >
                <Icon size={14} />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Preset quick selector */}
          <div className="relative hidden md:block">
            <select
              aria-label="Selecionar Preset de Marca"
              onChange={(e) => {
                if (e.target.value === 'reset') {
                  resetToDefault();
                } else {
                  loadPreset(e.target.value);
                }
              }}
              className="bg-stone-900 border border-stone-800 text-stone-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="" disabled>Carregar Preset...</option>
              {presets.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Print Button */}
          <button
            onClick={() => window.print()}
            title="Imprimir ou Salvar como PDF"
            className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-stone-100 hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <Printer size={16} />
          </button>

          {/* Export Code / JSON */}
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 hover:bg-stone-800 text-xs font-medium transition-colors cursor-pointer"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Exportar Tokens</span>
          </button>

          {/* Open Drawer / Customizer Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Sliders size={15} />
            <span>Personalizar Marca</span>
          </button>
        </div>

      </div>
    </header>
  );
};
