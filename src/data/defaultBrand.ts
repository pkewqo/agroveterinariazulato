import type { BrandState, BrandPreset } from '../types/brand';

export const ZULATO_BRAND: BrandState = {
  brandName: 'Agroveterinária Zulato',
  tagline: '30 anos de história a serviço do homem do campo, pecuária de grande porte e saúde pet.',
  established: '1996 (30 anos de história)',
  category: 'Animais de Grande Porte & Linha Pet',
  mission: 'Oferecer soluções completas em nutrição animal, medicamentos veterinários, suplementação para grandes animais (bovinos e equinos) e cuidados especiais para a linha pet, com tradição e confiança.',
  vision: 'Ser a principal referência em suprimentos agropecuários e produtos pet na região de Dracena e todo o Oeste Paulista.',
  archetype: 'O Especialista & O Protetor',
  archetypeDescription: 'Uma marca sólida, tradicional e de alta proximidade técnica com produtores e tutores de pets.',
  
  logos: {
    horizontalUrl: '/assets/new-logo-horizontal.png',
    verticalUrl: '/assets/new-logo-transparent.png',
    activeVariant: 'horizontal',
    clearSpaceRatio: 1.0,
    minDigitalSizePx: 32,
    minPrintSizeMm: 18,
  },

  colors: {
    dourado: {
      id: 'dourado',
      name: 'Dourado Trigo',
      role: 'Tipografia & Touro / Letra Z',
      hex: '#D5B876',
      description: 'Cor principal da tipografia "Agroveterinária Zulato", da letra Z e da silhueta do touro.',
    },
    verdeMedio: {
      id: 'verdeMedio',
      name: 'Verde Folha',
      role: 'Monograma AV (Símbolo)',
      hex: '#50723B',
      description: 'Cor do monograma AV, representando a vitalidade da pastagem e a saúde animal.',
    },
    verdeEscuro: {
      id: 'verdeEscuro',
      name: 'Verde Floresta',
      role: 'Fundo Institucional Principal',
      hex: '#283D2B',
      description: 'Tom escuro institucional para fundos nobres, embalagens técnicas e contraste principal.',
    },
    pretoComplementar: {
      id: 'pretoComplementar',
      name: 'Preto Carvão',
      role: 'Fundo Secundário & Cor Complementar',
      hex: '#2B2B2B',
      description: 'Cor complementar de apoio para fundos secundários, materiais monocromáticos e detalhes técnicos.',
    },
  },

  typography: {
    headline: {
      family: 'Impact',
      weights: [700, 900],
      category: 'display',
      usage: 'Títulos de impacto, chamadas de posts, promoções, fachadas e capas de catálogos.',
    },
    body: {
      family: 'Arimo',
      weights: [400, 500, 600, 700],
      category: 'sans-serif',
      usage: 'Corpo de texto, descrições de produtos para grande porte e pets, receitas e tabelas.',
    },
    mono: {
      family: 'JetBrains Mono',
      weights: [400, 600],
      category: 'monospace',
      usage: 'Códigos de lote, dosagens veterinárias, dados analíticos e tabelas nutricionais.',
    },
    customSampleText: 'Agroveterinária Zulato: Especialistas em nutrição para grandes animais e linha pet completa.',
  },

  toneOfVoice: {
    sliders: [
      {
        id: 'tone-1',
        labelLeft: 'Tradição (30 anos)',
        labelRight: 'Inovação & Cuidado',
        value: 65,
        description: 'Equilíbrio que valoriza a experiência no campo com carinho e precisão para pets.',
      },
      {
        id: 'tone-2',
        labelLeft: 'Técnico / Agro',
        labelRight: 'Acolhedor / Pet',
        value: 70,
        description: 'Linguagem clara tanto para o pecuarista experiente quanto para o tutor de cães e gatos.',
      },
      {
        id: 'tone-3',
        labelLeft: 'Sóbrio & Seguro',
        labelRight: 'Dinâmico & Próximo',
        value: 50,
        description: 'Foco na segurança veterinária, consistência de resultados e integridade.',
      },
      {
        id: 'tone-4',
        labelLeft: 'Acessível',
        labelRight: 'Alta Performance',
        value: 75,
        description: 'Produtos de primeira linha e assessoria personalizada.',
      },
    ],
    rules: [
      {
        doText: 'Orientar com clareza sobre o manejo de grandes animais e cuidados com a saúde dos pets.',
        dontText: 'Indicar dosagens ou medicamentos sem especificação técnica adequada.',
      },
    ],
    keywords: ['30 Anos de História', 'Dracena SP', 'Grande Porte', 'Linha Pet', 'Saúde Animal', 'Fernando Zulato'],
  },

  socialHandles: {
    instagram: '@agrozulato',
    website: 'www.agrozulato.com.br',
    phone: '18 99653-5452',
    location: 'Av. Presidente Roosevelt, 452 • Dracena - SP',
  },
};

export const BRAND_PRESETS: BrandPreset[] = [
  {
    id: 'zulato',
    name: 'Agroveterinária Zulato',
    description: 'Grande Porte & Linha Pet • Dracena - SP.',
    state: ZULATO_BRAND,
  },
];
