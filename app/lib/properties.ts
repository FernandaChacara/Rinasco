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
    slug: "casa-caparica",
    name: "Casa Caparica",
    year: "2024",
    category: "Residencial",
    status: "Disponível",
    area: "118 m²",
    location: "Costa da Caparica",
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
      { src: "/property-01/kitchen-shelves.jpg", alt: "Prateleiras da cozinha com plantas e galo de Barcelos" },
      { src: "/property-01/kitchen-island.jpg", alt: "Ilha da cozinha com bancos e luminárias suspensas" },
      { src: "/property-01/garden.jpg", alt: "Jardim com banco de ferro branco e trepadeiras" },
    ],
    storyPhotos: [
      { src: "/property-01/kitchen-shelves.jpg", alt: "Prateleiras da cozinha com plantas e galo de Barcelos" },
      { src: "/property-01/kitchen-island.jpg", alt: "Ilha da cozinha com bancos e luminárias suspensas" },
      { src: "/property-01/garden.jpg", alt: "Jardim com banco de ferro branco e trepadeiras" },
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
