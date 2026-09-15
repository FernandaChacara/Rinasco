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
  storyImage: PropertyPhoto;
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
      { src: "/property-01/dining-kitchen-open.jpg", alt: "Sala de jantar com lustre de rattan e cozinha aberta ao fundo" },
      { src: "/property-01/dining-room-fireplace.jpg", alt: "Sala de jantar com lareira de pedra e móvel de TV" },
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
    storyImage: { src: "/property-01/patio-bbq.jpg", alt: "Pátio coberto com churrasqueira de alvenaria" },
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
      { src: "/property-02/living-room-sofa.jpg", alt: "Sala de estar com sofá branco e almofadas vermelhas, vista ampla até a sala de jantar" },
      { src: "/property-02/dining-balcony-door.jpg", alt: "Sala de jantar com estante de madeira e porta de vidro para a varanda" },
      { src: "/property-02/balcony-wood-table.jpg", alt: "Varanda com mesa e bancos de madeira, vista para os pinheiros" },
      { src: "/property-02/kitchen-orange.jpg", alt: "Cozinha com armários em madeira laranja e bancada de granito" },
      { src: "/property-02/bedroom-1-headboard.jpg", alt: "Cabeceira da cama com almofadas azuis simétricas" },
      { src: "/property-02/bedroom-2-blue-pillow.jpg", alt: "Cama com almofada azul e mesa de cabeceira em mármore" },
      { src: "/property-02/hallway-art.jpg", alt: "Corredor com quadro de arte e vista para dois quartos" },
      { src: "/property-02/twin-sofa-beds.jpg", alt: "Quarto com dois sofás-cama listrados e vista para a colina" },
      { src: "/property-02/hallway-jacuzzi.jpg", alt: "Corredor com vista para a banheira de hidromassagem" },
      { src: "/property-02/bathroom-jacuzzi.jpg", alt: "Banheiro com banheira de hidromassagem" },
    ],
    storyPhotos: [
      { src: "/property-02/balcony-wood-table.jpg", alt: "Varanda com mesa e bancos de madeira, vista para os pinheiros" },
      { src: "/property-02/dining-balcony-door.jpg", alt: "Sala de jantar com estante de madeira e porta de vidro para a varanda" },
      { src: "/property-02/bedroom-1-headboard.jpg", alt: "Cabeceira da cama com almofadas azuis simétricas" },
    ],
    storyImage: { src: "/property-02/kitchen-orange.jpg", alt: "Cozinha com armários em madeira laranja e bancada de granito" },
  },
  {
    // Facts below marked "A confirmar" are placeholders — the user hasn't
    // given real numbers yet. Only 2 photos exist for this one so far
    // (terrace + BBQ patio) — storyPhotos has just 1 entry as a result.
    slug: "casa-cascais",
    name: "Casa Cascais",
    year: "A confirmar",
    category: "Residencial",
    status: "Disponível",
    area: "A confirmar",
    location: "Cascais",
    price: "Sob consulta",
    timeline: "A confirmar",
    description: [
      "Um pátio coberto abriga uma churrasqueira de alvenaria, pronta para reuniões ao ar livre mesmo em dias de sol forte.",
      "No terraço da cobertura, grama sintética, chuveiro externo e espaço reservado para espreguiçadeiras completam a área de lazer exterior.",
    ],
    gallery: [
      { src: "/property-03/patio-bbq-covered.jpg", alt: "Pátio coberto com churrasqueira de alvenaria" },
      { src: "/property-03/rooftop-terrace.jpg", alt: "Terraço na cobertura com grama sintética e chuveiro externo" },
    ],
    storyPhotos: [
      { src: "/property-03/patio-bbq-covered.jpg", alt: "Pátio coberto com churrasqueira de alvenaria" },
    ],
    storyImage: { src: "/property-03/rooftop-terrace.jpg", alt: "Terraço na cobertura com grama sintética e chuveiro externo" },
  },
  {
    // Facts below marked "A confirmar" are placeholders — the user hasn't
    // given real numbers yet. Only 5 photos exist for this one so far.
    slug: "casa-cascais-sul",
    name: "Casa Cascais Sul",
    year: "A confirmar",
    category: "Residencial",
    status: "Disponível",
    area: "A confirmar",
    location: "Cascais",
    price: "Sob consulta",
    timeline: "A confirmar",
    description: [
      "A sala reúne uma lareira de canto, sofás estofados em bege e um conjunto de almofadas coloridas, com portas de vidro que se abrem para uma varanda com cortinado leve. O ambiente é amplo e recebe luz natural durante todo o dia.",
      "A cozinha conserva os armários brancos originais, com friso decorativo nos azulejos e bancada em granito; uma copa junto à janela serve de apoio e liga o espaço à área de lavandaria.",
      "O quarto tem cômodas brancas e roupa de cama em tons terracota.",
    ],
    gallery: [
      { src: "/property-04/kitchen-granite-counter.jpg", alt: "Bancada de granito com armários brancos entalhados" },
      { src: "/property-04/living-room-fireplace.jpg", alt: "Sala de estar com lareira de canto e sofás bege" },
      { src: "/property-04/living-room-armchairs.jpg", alt: "Poltronas e sofá bege com almofadas coloridas" },
      { src: "/property-04/kitchen-window.jpg", alt: "Cozinha branca com copa junto à janela e acesso à lavandaria" },
      { src: "/property-04/bedroom-terracotta-pillows.jpg", alt: "Quarto com cômodas brancas e almofadas em tons terracota" },
    ],
    storyPhotos: [
      { src: "/property-04/living-room-fireplace.jpg", alt: "Sala de estar com lareira de canto e sofás bege" },
      { src: "/property-04/living-room-armchairs.jpg", alt: "Poltronas e sofá bege com almofadas coloridas" },
      { src: "/property-04/bedroom-terracotta-pillows.jpg", alt: "Quarto com cômodas brancas e almofadas em tons terracota" },
    ],
    storyImage: { src: "/property-04/kitchen-window.jpg", alt: "Cozinha branca com copa junto à janela e acesso à lavandaria" },
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
