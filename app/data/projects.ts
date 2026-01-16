export type Project = {
  slug: string;
  title: string;
  description: string;
  location: string;
  year: string;
  area: string;
  tag: string;
  image: string;
  size: "lg" | "md" | "xl";
  gallery: string[];
  intro: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "residencia-atlantica",
    title: "Residência Atlântica",
    description: "Concreto aparente, luz natural e paisagismo escultural.",
    location: "São Paulo",
    year: "2024",
    area: "680 m²",
    tag: "Casa térrea",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2400&auto=format&fit=crop",
    size: "lg",
    intro:
      "Um refúgio contemporâneo onde o concreto dialoga com a vegetação tropical e a luz natural desenha as texturas ao longo do dia.",
    highlights: [
      "Integração total entre living, jardim e pátio central",
      "Materiais nobres com acabamento artesanal",
      "Iluminação cenográfica e automação discreta",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    slug: "casa-aurora",
    title: "Casa Aurora",
    description: "Minimalismo quente e transparência total entre volumes.",
    location: "Rio de Janeiro",
    year: "2023",
    area: "420 m²",
    tag: "Residencial",
    image:
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2000&auto=format&fit=crop",
    size: "md",
    intro:
      "Volumes claros e horizontais criam continuidade visual, enquanto a marcenaria aquece os interiores.",
    highlights: [
      "Pé-direito duplo na área social",
      "Brises metálicos com controle solar",
      "Cozinha integrada com ilha escultórica",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    slug: "pavilhao-terracota",
    title: "Pavilhão Terracota",
    description: "Texturas terrosas com mobiliário sob medida.",
    location: "Lisboa",
    year: "2022",
    area: "260 m²",
    tag: "Interiores",
    image:
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2000&auto=format&fit=crop",
    size: "md",
    intro:
      "Um espaço de contemplação com paleta quente e curadoria de peças autorais.",
    highlights: [
      "Revestimentos em argila e pedra natural",
      "Mobiliário desenhado exclusivamente",
      "Iluminação indireta para clima intimista",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    slug: "casa-horizonte",
    title: "Casa Horizonte",
    description: "Volumes horizontais e iluminação natural controlada.",
    location: "Curitiba",
    year: "2024",
    area: "540 m²",
    tag: "Contemporânea",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop",
    size: "xl",
    intro:
      "Arquitetura de linhas longas e atmosfera serena, pensada para receber arte e colecionismo.",
    highlights: [
      "Fachada com panos de vidro e pedra basalto",
      "Piscina linear integrada ao deck",
      "Espaços sociais moduláveis para eventos",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2400&auto=format&fit=crop",
    ],
  },
];
