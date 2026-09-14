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
      { src: "/property-01/dining-kitchen.jpg", alt: "Sala de jantar com iluminação em rattan, lareira e cozinha ao fundo" },
      { src: "/property-01/patio.jpg", alt: "Pátio externo da casa, com jardim de cítricos e área de estar" },
      { src: "/property-01/garden.jpg", alt: "Jardim com banco de ferro branco e trepadeiras" },
      { src: "/property-01/patio-bbq.jpg", alt: "Pátio coberto com churrasqueira de alvenaria" },
      { src: "/property-01/living-room.jpg", alt: "Sala de estar com sofá e almofadas estampadas" },
      { src: "/property-01/living-room-2.jpg", alt: "Sala de estar com sofá cinza e decoração em fibras naturais" },
      { src: "/property-01/lounge.jpg", alt: "Sala de estar ampla com sofá cinza e tapete às riscas" },
      { src: "/property-01/dining-open.jpg", alt: "Sala de jantar aberta com escadaria ao fundo" },
      { src: "/property-01/dining-room.jpg", alt: "Sala de jantar com mesa de madeira e cadeiras brancas" },
      { src: "/property-01/kitchen.jpg", alt: "Cozinha com armários em madeira clara" },
      { src: "/property-01/kitchen-shelves.jpg", alt: "Prateleiras da cozinha com plantas e galo de Barcelos" },
      { src: "/property-01/kitchen-island.jpg", alt: "Ilha da cozinha com bancos e luminárias suspensas" },
      { src: "/property-01/bedroom.jpg", alt: "Quarto principal, paredes em verde-água e cama em ferro forjado" },
      { src: "/property-01/bedroom-purple.jpg", alt: "Quarto com detalhes em tom lilás e janela em arco" },
      { src: "/property-01/bedroom-white-wardrobe.jpg", alt: "Quarto com roupeiro branco entalhado e cama de casal" },
      { src: "/property-01/bedroom-carved-gold.jpg", alt: "Quarto com cabeceira entalhada branca e almofadas em tom dourado" },
      { src: "/property-01/bedroom-carved-tan.jpg", alt: "Quarto com cabeceira entalhada branca em tons neutros" },
      { src: "/property-01/bedroom-teal-carved.jpg", alt: "Quarto com parede verde-água e cabeceira entalhada branca" },
      { src: "/property-01/bedroom-twin.jpg", alt: "Quarto com parede verde-água e duas camas" },
      { src: "/property-01/bedroom-twin-blue.jpg", alt: "Quarto twin com parede azul-clara e motivo de cavalo-marinho" },
      { src: "/property-01/bedroom-twin-blue-2.jpg", alt: "Quarto twin com parede azul-clara, outro ângulo" },
      { src: "/property-01/balcony.jpg", alt: "Varanda com vista para os telhados de telha da vizinhança" },
      { src: "/property-01/bathroom-shower.jpg", alt: "Banheiro com box e ladrilho verde" },
      { src: "/property-01/bathroom-blue.jpg", alt: "Banheiro com box em ladrilho azul e espelho redondo" },
      { src: "/property-01/bathroom-green.jpg", alt: "Banheiro com espelho dourado e ladrilho verde" },
      { src: "/property-01/bathroom-rattan.jpg", alt: "Banheiro com espelho em rattan e box em ladrilho azul" },
      { src: "/property-01/bathroom-powder.jpg", alt: "Lavabo com papel de parede dourado" },
      { src: "/property-01/game-room.jpg", alt: "Sala de jogos com mesa de matraquilhos" },
      { src: "/property-01/storage-room.jpg", alt: "Divisão de arrumação com decoração vintage" },
    ],
    storyPhotos: [
      { src: "/property-01/bedroom-carved-gold.jpg", alt: "Quarto com cabeceira entalhada branca e almofadas em tom dourado" },
      { src: "/property-01/bathroom-rattan.jpg", alt: "Banheiro com espelho em rattan e box em ladrilho azul" },
      { src: "/property-01/garden.jpg", alt: "Jardim com banco de ferro branco e trepadeiras" },
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
