let livros = [
    {
        id: 1,
        titulo: "1984",
        autor: "George Orwell",
        descricao: "Uma distopia sobre um regime totalitário onde a vigilância é extrema.",
        genero: "Ficção",
        link: "https://pt.wikipedia.org/wiki/1984_(livro)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 2,
        titulo: "O Conto da Aia",
        autor: "Margaret Atwood",
        descricao: "Uma sociedade distópica onde as mulheres são subjugadas e usadas para reprodução.",
        genero: "Ficção, Distopia",
        link: "https://pt.wikipedia.org/wiki/O_Conto_da_Aia",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 3,
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        descricao: "Uma alegoria sobre o poder e a corrupção, retratando uma revolução de animais contra os humanos.",
        genero: "Ficção, Sátira",
        link: "https://pt.wikipedia.org/wiki/A_Revolução_dos_Bichos",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 4,
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        descricao: "As aventuras de um homem que acredita ser um cavaleiro em um mundo onde a cavalaria já não existe.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Don_Quijote_de_la_Mancha",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 5,
        titulo: "Cem Anos de Solidão",
        autor: "Gabriel García Márquez",
        descricao: "A saga da família Buendía em um vilarejo fictício, misturando realismo mágico e história.",
        genero: "Ficção, Realismo Mágico",
        link: "https://pt.wikipedia.org/wiki/Cem_Anos_de_Solidão",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 6,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        descricao: "Uma épica jornada para destruir o Anel do Poder e salvar a Terra-média.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/O_Senhor_dos_Anéis",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 7,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        descricao: "A história do jovem bruxo Harry Potter que descobre seu destino no mundo mágico.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/Harry_Potter_e_a_Pedra_Filosofal",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 8,
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        descricao: "A jornada de Bilbo Bolseiro, um hobbit pacato, que se envolve em uma aventura épica.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/O_Hobbit",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 9,
        titulo: "A Arte da Guerra",
        autor: "Sun Tzu",
        descricao: "Um tratado militar antigo atribuído a Sun Tzu, que fala sobre estratégia e táticas de guerra.",
        genero: "História, Estratégia",
        link: "https://pt.wikipedia.org/wiki/A_Arte_da_Guerra",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 10,
        titulo: "Moby Dick",
        autor: "Herman Melville",
        descricao: "A busca obsessiva do Capitão Ahab pela baleia Moby Dick.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Moby_Dick",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 11,
        titulo: "O Apanhador no Campo de Centeio",
        autor: "J.D. Salinger",
        descricao: "A história de Holden Caulfield, um jovem que enfrenta crises existenciais.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Apanhador_no_Campo_de_Centeio",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 12,
        titulo: "O Grande Gatsby",
        autor: "F. Scott Fitzgerald",
        descricao: "A tragédia de Jay Gatsby e sua busca pelo amor em uma sociedade superficial e rica.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Grande_Gatsby",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 13,
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        descricao: "O cientista Victor Frankenstein cria uma criatura que causa tragédia em sua vida.",
        genero: "Ficção, Horror",
        link: "https://pt.wikipedia.org/wiki/Frankenstein",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 14,
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        descricao: "A história do relacionamento complicado entre Elizabeth Bennet e o Sr. Darcy.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/Orgulho_e_Preconceito",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 15,
        titulo: "Drácula",
        autor: "Bram Stoker",
        descricao: "O icônico romance de Bram Stoker que conta a história do Conde Drácula e sua chegada a Londres.",
        genero: "Horror, Clássico",
        link: "https://pt.wikipedia.org/wiki/Drácula",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 16,
        titulo: "As Crônicas de Nárnia",
        autor: "C.S. Lewis",
        descricao: "Uma série de aventuras em um mundo mágico chamado Nárnia, onde crianças se tornam heróis.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/As_Crônicas_de_Nárnia",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 17,
        titulo: "Jane Eyre",
        autor: "Charlotte Brontë",
        descricao: "A história de uma jovem órfã que enfrenta adversidades e encontra o amor em circunstâncias difíceis.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/Jane_Eyre",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 18,
        titulo: "A Ilha do Tesouro",
        autor: "Robert Louis Stevenson",
        descricao: "A história de Jim Hawkins e sua busca por um tesouro escondido, enfrentando piratas e perigos.",
        genero: "Aventura, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_Ilha_do_Tesouro",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 19,
        titulo: "Crime e Castigo",
        autor: "Fyodor Dostoyevsky",
        descricao: "A narrativa sobre um jovem que comete um assassinato e lida com as consequências psicológicas.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Crime_e_Castigo",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 20,
        titulo: "Os Miseráveis",
        autor: "Victor Hugo",
        descricao: "A jornada de redenção de Jean Valjean, um ex-prisioneiro, em uma França pós-revolução.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Os_Miseráveis",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 21,
        titulo: "O Sol é para Todos",
        autor: "Harper Lee",
        descricao: "Um clássico da literatura americana sobre justiça racial, narrado por uma jovem no sul dos EUA.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Sol_é_para_Todos",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 22,
        titulo: "O Nome da Rosa",
        autor: "Umberto Eco",
        descricao: "Um romance histórico de mistério ambientado em um mosteiro medieval, onde ocorrem assassinatos misteriosos.",
        genero: "Mistério, Romance Histórico",
        link: "https://pt.wikipedia.org/wiki/O_Nome_da_Rosa",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 23,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        descricao: "A história de um piloto que encontra um príncipe de outro planeta, abordando temas filosóficos.",
        genero: "Ficção, Fábula",
        link: "https://pt.wikipedia.org/wiki/O_Pequeno_Príncipe",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 24,
        titulo: "O Código Da Vinci",
        autor: "Dan Brown",
        descricao: "Um thriller que mistura arte, religião e ciência, enquanto um professor de simbologia desvenda um segredo antigo.",
        genero: "Thriller, Mistério",
        link: "https://pt.wikipedia.org/wiki/O_Código_Da_Vinci",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 25,
        titulo: "Os Irmãos Karamazov",
        autor: "Fyodor Dostoyevsky",
        descricao: "Uma obra-prima de Dostoiévski que aborda temas como fé, dúvida, e a natureza humana, centrada em uma família disfuncional.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Os_Irmãos_Karamazov",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 26,
        titulo: "Admirável Mundo Novo",
        autor: "Aldous Huxley",
        descricao: "Um romance distópico sobre uma sociedade futurista onde a felicidade é manipulada por meio de drogas e controle social.",
        genero: "Ficção, Distopia",
        link: "https://pt.wikipedia.org/wiki/Admirável_Mundo_Novo",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 27,
        titulo: "A Metamorfose",
        autor: "Franz Kafka",
        descricao: "A história surreal de Gregor Samsa, um homem que se transforma em um inseto.",
        genero: "Ficção, Surrealismo",
        link: "https://pt.wikipedia.org/wiki/A_Metamorfose",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 28,
        titulo: "O Processo",
        autor: "Franz Kafka",
        descricao: "Um romance sobre um homem que é preso e julgado por um crime que nunca lhe é explicado.",
        genero: "Ficção, Surrealismo",
        link: "https://pt.wikipedia.org/wiki/O_Processo",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 29,
        titulo: "O Morro dos Ventos Uivantes",
        autor: "Emily Brontë",
        descricao: "Uma trágica história de amor e vingança ambientada nos pântanos da Inglaterra.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Morro_dos_Ventos_Uivantes",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 30,
        titulo: "Drácula",
        autor: "Bram Stoker",
        descricao: "A história do Conde Drácula e seu ataque a Londres, uma obra clássica de horror.",
        genero: "Ficção, Horror",
        link: "https://pt.wikipedia.org/wiki/Drácula",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 31,
        titulo: "O Senhor das Moscas",
        autor: "William Golding",
        descricao: "Um grupo de garotos presos em uma ilha deserta cria sua própria sociedade, com resultados brutais.",
        genero: "Ficção, Distopia",
        link: "https://pt.wikipedia.org/wiki/O_Senhor_das_Moscas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 32,
        titulo: "O Velho e o Mar",
        autor: "Ernest Hemingway",
        descricao: "A luta de um velho pescador contra um enorme peixe e contra sua própria solidão.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Velho_e_o_Mar",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 33,
        titulo: "A Divina Comédia",
        autor: "Dante Alighieri",
        descricao: "Um épico poema de Dante Alighieri que descreve sua jornada pelo Inferno, Purgatório e Paraíso.",
        genero: "Poesia, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_Divina_Comédia",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 34,
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        descricao: "Uma alegoria sobre o poder e a corrupção, retratando uma revolução de animais contra os humanos.",
        genero: "Ficção, Sátira",
        link: "https://pt.wikipedia.org/wiki/A_Revolução_dos_Bichos",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 35,
        titulo: "Laranja Mecânica",
        autor: "Anthony Burgess",
        descricao: "A história de Alex, um jovem delinquente, e suas aventuras em um futuro distópico e violento.",
        genero: "Ficção Científica, Distopia",
        link: "https://pt.wikipedia.org/wiki/Laranja_Mecânica",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 36,
        titulo: "O Apanhador no Campo de Centeio",
        autor: "J.D. Salinger",
        descricao: "A história de Holden Caulfield, um jovem que enfrenta crises existenciais.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Apanhador_no_Campo_de_Centeio",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 37,
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        descricao: "Uma alegoria sobre o poder e a corrupção, retratando uma revolução de animais contra os humanos.",
        genero: "Ficção, Sátira",
        link: "https://pt.wikipedia.org/wiki/A_Revolução_dos_Bichos",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 38,
        titulo: "Crime e Castigo",
        autor: "Fyodor Dostoyevsky",
        descricao: "A narrativa sobre um jovem que comete um assassinato e lida com as consequências psicológicas.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Crime_e_Castigo",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 39,
        titulo: "Os Miseráveis",
        autor: "Victor Hugo",
        descricao: "A jornada de redenção de Jean Valjean, um ex-prisioneiro, em uma França pós-revolução.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Os_Miseráveis",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 40,
        titulo: "O Senhor das Moscas",
        autor: "William Golding",
        descricao: "Um grupo de garotos presos em uma ilha deserta cria sua própria sociedade, com resultados brutais.",
        genero: "Ficção, Distopia",
        link: "https://pt.wikipedia.org/wiki/O_Senhor_das_Moscas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 41,
        titulo: "O Iluminado",
        autor: "Stephen King",
        descricao: "Um romance de Stephen King sobre um hotel assombrado e um homem que perde o controle de sua sanidade.",
        genero: "Horror, Suspense",
        link: "https://pt.wikipedia.org/wiki/O_Iluminado",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 42,
        titulo: "Neuromancer",
        autor: "William Gibson",
        descricao: "Um romance de ficção científica que ajudou a definir o gênero cyberpunk.",
        genero: "Ficção Científica, Cyberpunk",
        link: "https://pt.wikipedia.org/wiki/Neuromancer",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 43,
        titulo: "A Máquina do Tempo",
        autor: "H.G. Wells",
        descricao: "Um romance clássico sobre um cientista que viaja no tempo e descobre o futuro sombrio da humanidade.",
        genero: "Ficção Científica, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_Máquina_do_Tempo",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 44,
        titulo: "O Homem Invisível",
        autor: "H.G. Wells",
        descricao: "A história de um cientista que descobre como se tornar invisível, mas paga um preço alto por isso.",
        genero: "Ficção Científica, Suspense",
        link: "https://pt.wikipedia.org/wiki/O_Homem_Invisível",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 45,
        titulo: "It: A Coisa",
        autor: "Stephen King",
        descricao: "Um romance de horror sobre um grupo de amigos que enfrenta uma entidade maligna.",
        genero: "Horror, Suspense",
        link: "https://pt.wikipedia.org/wiki/It_(romance)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 46,
        titulo: "A Torre Negra",
        autor: "Stephen King",
        descricao: "A épica série de Stephen King que mistura fantasia, faroeste e horror, centrada no pistoleiro Roland Deschain.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/A_Torre_Negra_(série)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 47,
        titulo: "Duna",
        autor: "Frank Herbert",
        descricao: "Um épico de ficção científica sobre política, ecologia e poder em um planeta deserto chamado Arrakis.",
        genero: "Ficção Científica, Aventura",
        link: "https://pt.wikipedia.org/wiki/Duna_(romance)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 48,
        titulo: "A Fundação",
        autor: "Isaac Asimov",
        descricao: "Um clássico de ficção científica sobre a criação de uma fundação para preservar o conhecimento da humanidade.",
        genero: "Ficção Científica",
        link: "https://pt.wikipedia.org/wiki/Fundação_(série)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 49,
        titulo: "O Jogo do Exterminador",
        autor: "Orson Scott Card",
        descricao: "Um romance de ficção científica sobre um menino que é treinado para ser um líder militar em uma guerra contra alienígenas.",
        genero: "Ficção Científica, Aventura",
        link: "https://pt.wikipedia.org/wiki/O_Jogo_do_Exterminador",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 50,
        titulo: "O Código Da Vinci",
        autor: "Dan Brown",
        descricao: "Um thriller que mistura arte, religião e ciência, enquanto um professor de simbologia desvenda um segredo antigo.",
        genero: "Mistério, Thriller",
        link: "https://pt.wikipedia.org/wiki/O_Código_Da_Vinci",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 51,
        titulo: "A Bússola de Ouro",
        autor: "Philip Pullman",
        descricao: "O primeiro livro da série Fronteiras do Universo, sobre uma jovem em uma jornada épica para salvar seu mundo.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/A_Bússola_de_Ouro",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 52,
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        descricao: "A história de dois adolescentes que se apaixonam enquanto lutam contra o câncer.",
        genero: "Romance, Drama",
        link: "https://pt.wikipedia.org/wiki/A_Culpa_é_das_Estrelas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 53,
        titulo: "O Lado Bom da Vida",
        autor: "Matthew Quick",
        descricao: "Um homem com transtorno bipolar tenta reconstruir sua vida e relacionamento após sair de uma instituição.",
        genero: "Romance, Drama",
        link: "https://pt.wikipedia.org/wiki/O_Lado_Bom_da_Vida",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 54,
        titulo: "Cidade de Papel",
        autor: "John Green",
        descricao: "A história de um adolescente que embarca em uma jornada para encontrar sua amiga desaparecida.",
        genero: "Romance, Drama",
        link: "https://pt.wikipedia.org/wiki/Cidade_de_Papel",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 55,
        titulo: "O Chamado de Cthulhu",
        autor: "H.P. Lovecraft",
        descricao: "Uma história de horror cósmico sobre uma entidade antiga e poderosa.",
        genero: "Horror, Ficção",
        link: "https://pt.wikipedia.org/wiki/O_Chamado_de_Cthulhu",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 56,
        titulo: "Jogador Número 1",
        autor: "Ernest Cline",
        descricao: "Um romance de ficção científica que se passa em um mundo de realidade virtual, onde um jovem busca um tesouro escondido.",
        genero: "Ficção Científica, Aventura",
        link: "https://pt.wikipedia.org/wiki/Jogador_Número_1",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 57,
        titulo: "O Sol é Para Todos",
        autor: "Harper Lee",
        descricao: "Um clássico da literatura americana que trata de justiça e racismo, narrado por uma jovem no sul dos EUA.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Sol_é_para_Todos",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 58,
        titulo: "A Menina que Roubava Livros",
        autor: "Markus Zusak",
        descricao: "A história de uma jovem que encontra consolo em livros durante a Segunda Guerra Mundial.",
        genero: "Ficção Histórica",
        link: "https://pt.wikipedia.org/wiki/A_Menina_que_Roubava_Livros",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 59,
        titulo: "O Símbolo Perdido",
        autor: "Dan Brown",
        descricao: "Mais um thriller de Dan Brown, onde o professor Robert Langdon investiga mistérios envolvendo sociedades secretas.",
        genero: "Mistério, Thriller",
        link: "https://pt.wikipedia.org/wiki/O_Símbolo_Perdido",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 60,
        titulo: "Inferno",
        autor: "Dan Brown",
        descricao: "Mais um thriller de Dan Brown, onde Robert Langdon desvenda mistérios relacionados à obra de Dante Alighieri.",
        genero: "Mistério, Thriller",
        link: "https://pt.wikipedia.org/wiki/Inferno_(Dan_Brown)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 61,
        titulo: "A Guerra dos Mundos",
        autor: "H.G. Wells",
        descricao: "Um clássico da ficção científica sobre a invasão da Terra por alienígenas.",
        genero: "Ficção Científica, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_Guerra_dos_Mundos",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 62,
        titulo: "O Senhor das Moscas",
        autor: "William Golding",
        descricao: "Um grupo de garotos presos em uma ilha deserta cria sua própria sociedade, com resultados brutais.",
        genero: "Ficção, Distopia",
        link: "https://pt.wikipedia.org/wiki/O_Senhor_das_Moscas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 63,
        titulo: "O Leão, a Feiticeira e o Guarda-Roupa",
        autor: "C.S. Lewis",
        descricao: "O primeiro livro das Crônicas de Nárnia, onde crianças entram em um mundo mágico através de um guarda-roupa.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/O_Leão,_a_Feiticeira_e_o_Guarda-Roupa",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 64,
        titulo: "A Bússola de Ouro",
        autor: "Philip Pullman",
        descricao: "O primeiro livro da série Fronteiras do Universo, sobre uma jovem em uma jornada épica para salvar seu mundo.",
        genero: "Fantasia, Aventura",
        link: "https://pt.wikipedia.org/wiki/A_Bússola_de_Ouro",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 65,
        titulo: "A Mão Esquerda da Escuridão",
        autor: "Ursula K. Le Guin",
        descricao: "Um romance de ficção científica sobre exploração espacial e gêneros sociais e biológicos.",
        genero: "Ficção Científica",
        link: "https://pt.wikipedia.org/wiki/A_Mão_Esquerda_da_Escuridão",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 66,
        titulo: "O Poderoso Chefão",
        autor: "Mario Puzo",
        descricao: "A história da família mafiosa Corleone, que mistura crime, poder e lealdade.",
        genero: "Ficção, Crime",
        link: "https://pt.wikipedia.org/wiki/O_Poderoso_Chefão",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 67,
        titulo: "O Chamado Selvagem",
        autor: "Jack London",
        descricao: "A jornada de um cão domesticado que retorna à natureza selvagem no Alasca.",
        genero: "Aventura, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Chamado_Selvagem",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 68,
        titulo: "O Silmarillion",
        autor: "J.R.R. Tolkien",
        descricao: "Uma coleção de mitos e histórias que expandem o universo de O Senhor dos Anéis.",
        genero: "Fantasia, Mitologia",
        link: "https://pt.wikipedia.org/wiki/O_Silmarillion",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 69,
        titulo: "A Esperança",
        autor: "Suzanne Collins",
        descricao: "O terceiro livro da trilogia Jogos Vorazes, onde Katniss Everdeen lidera uma rebelião contra o governo.",
        genero: "Ficção Científica, Distopia",
        link: "https://pt.wikipedia.org/wiki/Jogos_Vorazes:_A_Esperança",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 70,
        titulo: "A Máquina do Tempo",
        autor: "H.G. Wells",
        descricao: "Um romance clássico sobre um cientista que viaja no tempo e descobre o futuro sombrio da humanidade.",
        genero: "Ficção Científica, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_Máquina_do_Tempo",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 71,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        descricao: "Uma distopia sobre uma sociedade onde os livros são proibidos e queimados.",
        genero: "Ficção, Distopia",
        link: "https://pt.wikipedia.org/wiki/Fahrenheit_451",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 72,
        titulo: "Os Três Mosqueteiros",
        autor: "Alexandre Dumas",
        descricao: "A história de D'Artagnan e os três mosqueteiros, seus companheiros de aventura e lealdade.",
        genero: "Aventura, Clássico",
        link: "https://pt.wikipedia.org/wiki/Os_Três_Mosqueteiros",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 73,
        titulo: "A Odisseia",
        autor: "Homero",
        descricao: "A jornada épica de Odisseu para retornar para casa após a Guerra de Troia.",
        genero: "Poesia, Clássico",
        link: "https://pt.wikipedia.org/wiki/Odisseia",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 74,
        titulo: "A República",
        autor: "Platão",
        descricao: "Um diálogo filosófico que explora a justiça, a sociedade e o governo ideal.",
        genero: "Filosofia, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_República_(Platão)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 75,
        titulo: "O Príncipe",
        autor: "Nicolau Maquiavel",
        descricao: "Um tratado político sobre o poder, a liderança e a manipulação.",
        genero: "Filosofia, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Príncipe",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 76,
        titulo: "A Divina Comédia",
        autor: "Dante Alighieri",
        descricao: "Um épico poema que narra a jornada de Dante pelo Inferno, Purgatório e Paraíso.",
        genero: "Poesia, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_Divina_Comédia",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 77,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        descricao: "A história de Bentinho e seu ciúme obsessivo por Capitu.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/Dom_Casmurro",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 78,
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        descricao: "Um romance narrado por um defunto, onde Brás Cubas reflete sobre sua vida.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Memórias_Póstumas_de_Brás_Cubas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 79,
        titulo: "O Alienista",
        autor: "Machado de Assis",
        descricao: "A história de um médico que decide internar toda uma cidade em um manicômio.",
        genero: "Ficção, Sátira",
        link: "https://pt.wikipedia.org/wiki/O_Alienista",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 80,
        titulo: "Grande Sertão: Veredas",
        autor: "João Guimarães Rosa",
        descricao: "Um romance sobre o sertão brasileiro e a luta entre jagunços e coronéis.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Grande_Sertão:_Veredas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 81,
        titulo: "Vidas Secas",
        autor: "Graciliano Ramos",
        descricao: "A saga de uma família de retirantes nordestinos em busca de sobrevivência durante a seca.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Vidas_Secas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 82,
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        descricao: "A vida em um cortiço no Rio de Janeiro, retratando a desigualdade social e os conflitos de classe.",
        genero: "Ficção, Realismo",
        link: "https://pt.wikipedia.org/wiki/O_Cortiço",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 83,
        titulo: "Iracema",
        autor: "José de Alencar",
        descricao: "A história de amor entre a índia Iracema e o colonizador Martim Soares Moreno.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/Iracema",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 84,
        titulo: "O Guarani",
        autor: "José de Alencar",
        descricao: "A história de amor entre o indígena Peri e a jovem Ceci, no Brasil colonial.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Guarani",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 85,
        titulo: "O Auto da Compadecida",
        autor: "Ariano Suassuna",
        descricao: "Uma peça que mistura humor, religião e cultura popular nordestina.",
        genero: "Teatro, Comédia",
        link: "https://pt.wikipedia.org/wiki/O_Auto_da_Compadecida",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 86,
        titulo: "Macunaíma",
        autor: "Mário de Andrade",
        descricao: "A jornada do anti-herói Macunaíma, uma sátira da cultura brasileira.",
        genero: "Ficção, Modernismo",
        link: "https://pt.wikipedia.org/wiki/Macunaíma",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 87,
        titulo: "Capitães da Areia",
        autor: "Jorge Amado",
        descricao: "A vida de um grupo de crianças abandonadas que vivem nas ruas de Salvador.",
        genero: "Ficção, Realismo",
        link: "https://pt.wikipedia.org/wiki/Capitães_da_Areia",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 88,
        titulo: "Gabriela, Cravo e Canela",
        autor: "Jorge Amado",
        descricao: "A história de Gabriela, uma jovem retirante que muda a vida de um comerciante em Ilhéus.",
        genero: "Ficção, Romance",
        link: "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 89,
        titulo: "Domingo no Parque",
        autor: "Gilberto Gil",
        descricao: "Uma crônica em forma de música que descreve um crime passional.",
        genero: "Música, Cultura Brasileira",
        link: "https://pt.wikipedia.org/wiki/Domingo_no_Parque",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 90,
        titulo: "Morte e Vida Severina",
        autor: "João Cabral de Melo Neto",
        descricao: "Um poema que narra a dura vida de um retirante nordestino.",
        genero: "Poesia, Clássico",
        link: "https://pt.wikipedia.org/wiki/Morte_e_Vida_Severina",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 91,
        titulo: "O Quinze",
        autor: "Rachel de Queiroz",
        descricao: "A seca de 1915 no Ceará e seu impacto em uma família de retirantes.",
        genero: "Ficção, Regionalismo",
        link: "https://pt.wikipedia.org/wiki/O_Quinze",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 92,
        titulo: "Senhora",
        autor: "José de Alencar",
        descricao: "A história de Aurélia, uma jovem rica que se vinga de um amor que a havia desprezado.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/Senhora_(romance)",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 93,
        titulo: "O Tempo e o Vento",
        autor: "Érico Veríssimo",
        descricao: "A saga de uma família no sul do Brasil, ao longo de gerações.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/O_Tempo_e_o_Vento",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 94,
        titulo: "A Moreninha",
        autor: "Joaquim Manuel de Macedo",
        descricao: "Um romance de amor juvenil ambientado no Rio de Janeiro do século XIX.",
        genero: "Romance, Clássico",
        link: "https://pt.wikipedia.org/wiki/A_Moreninha",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 95,
        titulo: "Memórias de um Sargento de Milícias",
        autor: "Manuel Antônio de Almeida",
        descricao: "As aventuras de Leonardo, um malandro do Rio de Janeiro colonial.",
        genero: "Ficção, Clássico",
        link: "https://pt.wikipedia.org/wiki/Memórias_de_um_Sargento_de_Milícias",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 96,
        titulo: "A Hora da Estrela",
        autor: "Clarice Lispector",
        descricao: "A trágica vida de Macabéa, uma nordestina que tenta sobreviver no Rio de Janeiro.",
        genero: "Ficção, Modernismo",
        link: "https://pt.wikipedia.org/wiki/A_Hora_da_Estrela",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 97,
        titulo: "A Paixão Segundo G.H.",
        autor: "Clarice Lispector",
        descricao: "A introspecção de uma mulher que enfrenta uma crise existencial após um encontro perturbador.",
        genero: "Ficção, Filosofia",
        link: "https://pt.wikipedia.org/wiki/A_Paixão_Segundo_G.H.",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 98,
        titulo: "Os Sertões",
        autor: "Euclides da Cunha",
        descricao: "A obra narra a Guerra de Canudos e as condições adversas do sertão brasileiro.",
        genero: "História, Clássico",
        link: "https://pt.wikipedia.org/wiki/Os_Sertões",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 99,
        titulo: "O Pagador de Promessas",
        autor: "Dias Gomes",
        descricao: "A história de Zé do Burro, um homem que cumpre uma promessa de carregar uma cruz até uma igreja.",
        genero: "Teatro, Drama",
        link: "https://pt.wikipedia.org/wiki/O_Pagador_de_Promessas",
        comentarios: [],
        avaliacao: []
    },
    {
        id: 100,
        titulo: "Marília de Dirceu",
        autor: "Tomás Antônio Gonzaga",
        descricao: "Uma coletânea de poesias líricas que narram o amor entre Marília e Dirceu.",
        genero: "Poesia, Clássico",
        link: "https://pt.wikipedia.org/wiki/Marília_de_Dirceu",
        comentarios: [],
        avaliacao: []
    }
];
