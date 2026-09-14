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
      { src: "/property-01/game-room-foosball.jpg", alt: "Sala de jogos com mesa de matraquilhos" },
      { src: "/property-01/living-room-art.jpg", alt: "Sala de estar com sofá e arte de parede em folhagem" },
      { src: "/property-01/kitchen-shelves.jpg", alt: "Prateleiras da cozinha com plantas e galo de Barcelos" },
      { src: "/property-01/kitchen-island.jpg", alt: "Ilha da cozinha com bancos e luminárias suspensas" },
      { src: "/property-01/garden.jpg", alt: "Jardim com banco de ferro branco e trepadeiras" },
      { src: "/property-01/patio-bbq.jpg", alt: "Pátio coberto com churrasqueira de alvenaria" },
      { src: "/property-01/lounge-tv.jpg", alt: "Sala de estar ampla com sofá cinza e móvel de TV" },
      { src: "/property-01/bedroom-ornate-teal.jpg", alt: "Quarto com cabeceira entalhada branca e almofadas em verde-água" },
      { src: "/property-01/bedroom-purple-balcony.jpg", alt: "Quarto com almofada roxa e varanda com vista" },
      { src: "/property-01/bedroom-purple-wardrobe.jpg", alt: "Quarto com roupeiro branco entalhado e manta em tons roxos" },
      { src: "/property-01/bedroom-carved-neutral.jpg", alt: "Quarto com cabeceira entalhada branca em tons neutros" },
      { src: "/property-01/bedroom-twin-teal.jpg", alt: "Quarto com duas camas e parede verde-água" },
      { src: "/property-01/bedroom-twin-blue-seahorse.jpg", alt: "Quarto twin com parede azul-clara e motivo de cavalo-marinho" },
      { src: "/property-01/bathroom-green-ladder.jpg", alt: "Banheiro com box em ladrilho verde e escada porta-toalhas dourada" },
      { src: "/property-01/bathroom-gray-tile.jpg", alt: "Banheiro com box em ladrilho cinza e espelho redondo" },
    ],
    storyPhotos: [
      { src: "/property-01/living-room-art.jpg", alt: "Sala de estar com sofá e arte de parede em folhagem" },
      { src: "/property-01/kitchen-island.jpg", alt: "Ilha da cozinha com bancos e luminárias suspensas" },
      { src: "/property-01/bedroom-twin-blue-seahorse.jpg", alt: "Quarto twin com parede azul-clara e motivo de cavalo-marinho" },
    ],
  },
  {
    // Facts below marked "A confirmar" are placeholders — the user hasn't
    // given real numbers yet. quartos/tipologia are a count from the photos
    // themselves (3 distinct sleeping rooms), not invented.
    slug: "apartamento-caparica",
    name: "Apartamento Caparica",
    year: "A confirmar",
    category: "Residencial",
    status: "Disponível",
    area: "A confirmar",
    location: "Costa da Caparica",
    price: "Sob consulta",
    tipologia: "T3",
    quartos: "3",
    timeline: "A confirmar",
    description: [
      "O apartamento fica num prédio residencial em tom salmão, com as janelas redondas características da fachada, a poucos minutos da praia. A sala reúne lareira, estantes de madeira embutidas e acesso direto à varanda, com vista para as colinas e os telhados da vizinhança.",
      "A cozinha conserva os armários originais em madeira e a bancada em granito. Os três quartos têm roupeiros embutidos e roupa de cama em tons de azul; um deles, com dois sofás-cama, serve tanto de quarto extra quanto de sala de repouso.",
      "O banheiro tem banheira de hidromassagem, e o prédio conta com elevador e hall de entrada em mármore.",
    ],
    gallery: [
      { src: "/property-02/living-room-fireplace.jpg", alt: "Sala de estar com lareira, estantes de madeira e poltronas listradas" },
      { src: "/property-02/living-room-sofa.jpg", alt: "Sala de estar com sofá branco e almofadas vermelhas" },
      { src: "/property-02/living-room-fireplace-2.jpg", alt: "Sala de estar, outro ângulo, com mesa de jantar ao fundo" },
      { src: "/property-02/dining-balcony-door.jpg", alt: "Sala de jantar com estante de madeira e porta de vidro para a varanda" },
      { src: "/property-02/kitchen-orange.jpg", alt: "Cozinha com armários em madeira laranja e bancada de granito" },
      { src: "/property-02/kitchen-fridge.jpg", alt: "Cozinha com geladeira e toalha de mesa quadriculada" },
      { src: "/property-02/kitchen-entry.jpg", alt: "Entrada da cozinha com pia e bancada de granito" },
      { src: "/property-02/balcony-wood-table.jpg", alt: "Varanda com mesa e bancos de madeira, vista para os pinheiros" },
      { src: "/property-02/balcony-chairs.jpg", alt: "Varanda com cadeiras dobráveis e vista para o morro" },
      { src: "/property-02/balcony-chairs-2.jpg", alt: "Varanda com cadeiras dobráveis, outro ângulo" },
      { src: "/property-02/bedroom-1.jpg", alt: "Quarto com roupa de cama azul e cômoda de madeira" },
      { src: "/property-02/bedroom-1-nightstand.jpg", alt: "Detalhe do criado-mudo de mármore e cortina" },
      { src: "/property-02/bedroom-1-headboard.jpg", alt: "Cabeceira da cama com almofadas azuis simétricas" },
      { src: "/property-02/bedroom-2.jpg", alt: "Quarto com roupeiro embutido e roupa de cama azul" },
      { src: "/property-02/bedroom-2-detail.jpg", alt: "Quarto, detalhe do roupeiro com portas de vidro fosco" },
      { src: "/property-02/twin-room.jpg", alt: "Quarto com dois sofás-cama listrados e pufes vermelhos" },
      { src: "/property-02/twin-room-hallway.jpg", alt: "Quarto de sofás-cama visto a partir do corredor" },
      { src: "/property-02/hallway.jpg", alt: "Corredor com quadro e portas para os quartos" },
      { src: "/property-02/hallway-jacuzzi.jpg", alt: "Corredor com vista para a banheira de hidromassagem" },
      { src: "/property-02/bathroom-jacuzzi.jpg", alt: "Banheiro com banheira de hidromassagem e armário de madeira" },
      { src: "/property-02/building-facade.jpg", alt: "Fachada do prédio em tom salmão com janelas redondas" },
      { src: "/property-02/building-lobby.jpg", alt: "Hall de entrada do prédio com elevador e escada" },
      { src: "/property-02/street-view.jpg", alt: "Vista da rua a partir da varanda" },
      { src: "/property-02/street-view-2.jpg", alt: "Vista da rua, outro ângulo" },
    ],
    storyPhotos: [
      { src: "/property-02/living-room-fireplace.jpg", alt: "Sala de estar com lareira, estantes de madeira e poltronas listradas" },
      { src: "/property-02/balcony-wood-table.jpg", alt: "Varanda com mesa e bancos de madeira, vista para os pinheiros" },
      { src: "/property-02/bathroom-jacuzzi.jpg", alt: "Banheiro com banheira de hidromassagem e armário de madeira" },
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
