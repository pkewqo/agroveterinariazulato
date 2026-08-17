import type { BrandState, BrandPreset } from '../types/brand';

export const ZULATO_BRAND: BrandState = {
  brandName: 'Agroveterinária Zulato',
  tagline: '30 anos de história a serviço do homem do campo e da pecuária de alta performance.',
  established: '1996 (30 anos de história)',
  category: 'Agropecuária & Medicina Veterinária',
  mission: 'Impulsionar a produtividade, a nutrição e o bem-estar animal com assessoria técnica de excelência, insumos de alta qualidade e o compromisso de quem tem 30 anos de tradição ao lado do produtor rural.',
  vision: 'Ser a principal referência em confiança, tecnologia veterinária e parceria pecuária na região de Dracena e em todo o estado de São Paulo.',
  archetype: 'O Protetor & O Especialista',
  archetypeDescription: 'Uma marca sólida, tradicional e altamente técnica, que transmite a segurança de mais de 3 décadas de história no campo.',
  
  logos: {
    horizontalUrl: '/assets/logo-horizontal.png',
    verticalUrl: '/assets/logo-vertical.png',
    activeVariant: 'horizontal',
    clearSpaceRatio: 1.0,
    minDigitalSizePx: 32,
    minPrintSizeMm: 18,
  },

  colors: {
    primary: {
      id: 'primary',
      name: 'Verde Pasto Zulato',
      role: 'Cor Primária / Marca',
      hex: '#2E6930',
      description: 'Representa a fertilidade da terra, saúde vegetal e a tradição verdejante do agronegócio.',
    },
    secondary: {
      id: 'secondary',
      name: 'Grafite Carvão',
      role: 'Cor Secundária / Tipografia',
      hex: '#232323',
      description: 'Transmite robustez estrutural, estabilidade mecânica e seriedade institucional.',
    },
    accent: {
      id: 'accent',
      name: 'Dourado Safra',
      role: 'Acento / Destaque',
      hex: '#D97706',
      description: 'Simboliza a colheita, prosperidade econômica e os grãos de alta nutrição animal.',
    },
    neutralDark: {
      id: 'neutralDark',
      name: 'Preto Solo Profundo',
      role: 'Fundo Escuro / Contraste',
      hex: '#141713',
      description: 'Base sólida para materiais escuros, embalagens premium e contraste de alta legibilidade.',
    },
    neutralLight: {
      id: 'neutralLight',
      name: 'Névoa Matinal',
      role: 'Fundo Claro / Superfície',
      hex: '#F6F8F4',
      description: 'Tonalidade clara e suave para fundos de relatórios, receituários e leitura limpa.',
    },
    surface: {
      id: 'surface',
      name: 'Branco Puro',
      role: 'Base Neutra',
      hex: '#FFFFFF',
      description: 'Espaço em branco essencial para manter a clareza e limpeza visual dos materiais.',
    },
  },

  typography: {
    headline: {
      family: 'Montserrat',
      weights: [700, 800, 900],
      category: 'sans-serif',
      usage: 'Títulos de impacto, embalagens de defensivos/suplementos, outdoors e capas de catálogos.',
    },
    body: {
      family: 'Plus Jakarta Sans',
      weights: [400, 500, 600, 700],
      category: 'sans-serif',
      usage: 'Artigos técnicos, bulas, contratos de consultoria, receituários e interface digital.',
    },
    mono: {
      family: 'JetBrains Mono',
      weights: [400, 600],
      category: 'monospace',
      usage: 'Códigos de lote, dosagens milimétricas, dados analíticos e tabelas nutricionais.',
    },
    customSampleText: 'Agroveterinária Zulato: 30 anos de história e parceria com o produtor rural em Dracena - SP.',
  },

  toneOfVoice: {
    sliders: [
      {
        id: 'tone-1',
        labelLeft: 'Tradição (30 anos)',
        labelRight: 'Inovação Tecnológica',
        value: 65,
        description: 'Equilíbrio que valoriza a experiência comprovada no campo com respaldo científico agronômico.',
      },
      {
        id: 'tone-2',
        labelLeft: 'Formal / Técnico',
        labelRight: 'Próximo / Acolhedor',
        value: 80,
        description: 'Linguagem clara, de produtor para produtor, com a proximidade de quem está presente no dia a dia.',
      },
      {
        id: 'tone-3',
        labelLeft: 'Sóbrio & Seguro',
        labelRight: 'Dinâmico & Enérgico',
        value: 40,
        description: 'Foco na segurança veterinária, consistência de resultados e integridade.',
      },
      {
        id: 'tone-4',
        labelLeft: 'Acessível',
        labelRight: 'Alta Performance',
        value: 75,
        description: 'Posicionamento de alto valor agregado com retorno comprovado para a fazenda.',
      },
    ],
    rules: [
      {
        doText: 'Demonstrar respeito à lida no campo, valorizando o tempo e o trabalho do produtor rural.',
        dontText: 'Usar termos pejorativos ou subestimar o conhecimento prático de quem vive no campo.',
      },
      {
        doText: 'Destacar os 30 anos de solidez e credibilidade construídos em Dracena e região.',
        dontText: 'Prometer resultados sem fundamentação veterinária e zootécnica adequada.',
      },
    ],
    keywords: ['30 Anos de História', 'Dracena SP', 'Saúde Animal', 'Nutrição Bovina', 'Confiança', 'Tradição'],
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
    name: 'Agroveterinária Zulato (30 Anos)',
    description: '30 anos de história em Dracena - SP • Saúde Animal e Agronegócio.',
    state: ZULATO_BRAND,
  },
];
