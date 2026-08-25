// Para adicionar um projeto, preencha os campos abaixo.
// coverImage e images[] devem ser caminhos relativos à pasta /public
// Ex: coverImage: '/projetos/residencia-pituba/capa.jpg'
//
// coverImage: foto usada como capa no grid de Projetos.
// images[]: galeria completa mostrada (com setas de navegação) ao abrir o projeto.
//   Se vazio, o modal usa coverImage como única foto; se coverImage também
//   estiver vazio, mostra "Imagens em breve".

const projects = [
  {
    id: 1,
    title: 'Canal Goat Youtube',
    category: 'Comercial',
    year: 2025,
    location: 'São Paulo, SP',
    coverImage: '/projetos/canal-goat/capa.jpg',
    images: [
      '/projetos/canal-goat/foto-01.jpg',
      '/projetos/canal-goat/foto-02.jpg',
      '/projetos/canal-goat/foto-03.jpg',
      '/projetos/canal-goat/foto-04.jpg',
      '/projetos/canal-goat/foto-05.jpg',
      '/projetos/canal-goat/foto-06.jpg',
      '/projetos/canal-goat/foto-07.jpg',
      '/projetos/canal-goat/foto-08.jpg',
    ],
    description:
      'Projeto de interiores para o estúdio do canal Canal Goat, com ambientes voltados à produção de conteúdo esportivo e identidade visual da marca.',
  },
  {
    id: 2,
    title: 'Loja Alice Salazar',
    category: 'Comercial',
    year: 2021,
    location: 'Salvador Shopping, Salvador, BA',
    coverImage: '/projetos/loja-alice-salazar/capa.jpg',
    images: [
      '/projetos/loja-alice-salazar/foto-01.jpg',
      '/projetos/loja-alice-salazar/foto-02.jpg',
      '/projetos/loja-alice-salazar/foto-03.jpg',
      '/projetos/loja-alice-salazar/foto-04.jpg',
      '/projetos/loja-alice-salazar/foto-05.jpg',
      '/projetos/loja-alice-salazar/foto-06.jpg',
      '/projetos/loja-alice-salazar/foto-07.jpg',
      '/projetos/loja-alice-salazar/foto-08.jpg',
      '/projetos/loja-alice-salazar/foto-09.jpg',
    ],
    description:
      'Projeto de interiores para loja de cosméticos e maquiagem multimarcas no Salvador Shopping, com identidade de marca aplicada ao ambiente de venda.',
  },
  {
    id: 3,
    title: 'Mini Apartamento Azul',
    category: 'Residencial',
    year: 2026,
    location: 'São Paulo, SP',
    coverImage: '/projetos/mini-apt-azul/capa.jpg',
    images: [
      '/projetos/mini-apt-azul/sala-01.jpg',
      '/projetos/mini-apt-azul/sala-02.jpg',
      '/projetos/mini-apt-azul/sala-03.jpg',
      '/projetos/mini-apt-azul/banheiro.jpg',
      '/projetos/mini-apt-azul/quarto-casal.jpg',
      '/projetos/mini-apt-azul/quarto-filha.jpg',
    ],
    description:
      'Projeto de interiores para apartamento compacto, otimizando espaço e funcionalidade em ambientes integrados.',
  },
  {
    id: 4,
    title: 'Mini Apartamento Verde',
    category: 'Residencial',
    year: 2026,
    location: 'São Paulo, SP',
    coverImage: '/projetos/mini-apt-verde/capa.jpg',
    images: [
      '/projetos/mini-apt-verde/sala-03.jpg',
      '/projetos/mini-apt-verde/sala-cozinha.jpg',
      '/projetos/mini-apt-verde/quarto-casal.jpg',
      '/projetos/mini-apt-verde/quarto-02.jpg',
      '/projetos/mini-apt-verde/quarto-hospedes.jpg',
      '/projetos/mini-apt-verde/banheiro.jpg',
    ],
    description:
      'Projeto de interiores para apartamento compacto, otimizando espaço e funcionalidade em ambientes integrados.',
  },
  {
    id: 5,
    title: 'Residência Praia do Castelo',
    category: 'Residencial',
    year: 2027,
    location: 'Praia do Castelo',
    coverImage: '/projetos/praia-do-castelo/capa.jpg',
    images: [
      '/projetos/praia-do-castelo/em-obras-2026.jpg',
    ],
    description:
      'Projeto residencial unifamiliar em fase de construção, com previsão de conclusão em 2027.',
  },
]

export default projects
