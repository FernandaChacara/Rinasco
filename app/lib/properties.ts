export type PropertyPhoto = {
  src: string;
  alt: string;
};

export type Property = {
  slug: string;
  name: string;
  year: string;
  category: string;
  status: string;
  area: string;
  location: string;
  price?: string;
  tipologia?: string;
  quartos?: string;
  timeline: string;
  description: string[];
  gallery: PropertyPhoto[];
  storyPhotos: PropertyPhoto[];
};

export const properties: Property[] = [
  {
    slug: "casa-do-patio",
    name: "Casa do Pátio",
    year: "2024",
    category: "Residencial",
    status: "Disponível",
    area: "118 m²",
    location: "Portugal",
    price: "Sob consulta",
    tipologia: "T2",
    quartos: "2",
    timeline: "2023 — 2024",
    description: [
      "A casa organiza-se em torno de um pátio interior com jardim de cítricos, que traz luz e ventilação para todos os cómodos voltados a ele. O verde-água das paredes do quarto principal e o ladrilho do banheiro retomam a paleta original da construção, preservada em vez de substituída.",
      "Os materiais falam da região: ferro forjado na cama, telha nos telhados vizinhos vistos da varanda, papel de parede dourado no lavabo — um contraste discreto entre o rústico e o ornamental.",
      "Não há encenação. Cada fotografia mostra o espaço como ele é hoje, para que quem reservar saiba exatamente o que vai encontrar.",
    ],
    gallery: [
      { src: "/property-01/patio.jpg", alt: "Pátio externo da casa, com jardim de cítricos e área de estar" },
      { src: "/property-01/bedroom.jpg", alt: "Quarto principal, paredes em verde-água e cama em ferro forjado" },
      { src: "/property-01/balcony.jpg", alt: "Varanda com vista para os telhados de telha da vizinhança" },
      { src: "/property-01/bathroom-shower.jpg", alt: "Banheiro com box e ladrilho verde" },
      { src: "/property-01/bathroom-powder.jpg", alt: "Lavabo com papel de parede dourado" },
    ],
    storyPhotos: [
      { src: "/property-01/bedroom.jpg", alt: "Quarto principal, paredes em verde-água e cama em ferro forjado" },
      { src: "/property-01/bathroom-shower.jpg", alt: "Banheiro com box e ladrilho verde" },
      { src: "/property-01/bathroom-powder.jpg", alt: "Lavabo com papel de parede dourado" },
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
