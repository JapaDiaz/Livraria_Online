#Desafio Alura: Imersão Dev com Google Gemini


# 📚 Biblioteca de Livros

Biblioteca de Livros é uma aplicação web onde os usuários podem pesquisar livros, ver informações detalhadas, deixar comentários e avaliações. Esta aplicação também permite adicionar novos livros à biblioteca. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript puro.

## 🚀 Funcionalidades

- Pesquisar livros por **título**, **autor** ou **gênero**.
- Exibir resultados em **formato de cards** no estilo do Facebook.
- Cada livro possui uma descrição, gênero, autor e link para mais informações.
- Usuários podem deixar **comentários** e dar **avaliações** (de 1 a 5 estrelas).
- Filtrar livros por **gênero**.
- Interface com tema claro/escuro.
- Possibilidade de **adicionar novos livros** à biblioteca.
- **Ícone de livros** exibido na aba do navegador.

## 🖼 Interface do Usuário

- Página inicial com uma imagem de livraria.
- Campo de pesquisa e botão de pesquisa fixos no topo.
- Resultados exibidos em cards que mostram título, autor, gênero, avaliação e campo para comentários.
- Interface responsiva e moderna.

## 🎨 Estilo dos Cards

Os cards têm um design no estilo dos posts do Facebook, com:

- Borda suave e sombra leve.
- Imagem no topo do card (se disponível).
- Botões de interação para **comentar** e **avaliar**.

## 📂 Estrutura do Projeto

```plaintext
biblioteca-livros/
│
├── assets/
│   └── livros32x32.png  # Ícone de livros para o favicon
├── index.html           # Arquivo principal HTML
├── style.css            # Estilos CSS para a aplicação
├── app.js               # Lógica JavaScript para a aplicação
├── dados.js             # Dados dos livros (lista de livros)
└── README.md            # Documentação do projeto
```

## 🛠 Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização da página e dos componentes, incluindo responsividade e tema claro/escuro.
- **JavaScript**: Lógica de funcionamento da aplicação, manipulação da DOM, armazenamento local para comentários e avaliações.

## 🔧 Configuração e Uso

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/biblioteca-livros.git
```

### 2. Abrir o projeto

Você pode abrir o arquivo `index.html` diretamente no seu navegador ou usar um servidor local, como o Live Server no VSCode.

### 3. Estrutura do código

- **HTML**: A página principal `index.html` contém a estrutura básica da aplicação.
- **CSS**: O arquivo `style.css` define o layout, estilos de imagem, cards, botões e responsividade.
- **JavaScript**: O arquivo `app.js` contém a lógica de pesquisa, exibição de resultados, comentários, avaliações e filtros. O `dados.js` armazena os dados dos livros.

### 4. Adicionar Livros

Você pode adicionar livros diretamente na aplicação através do formulário (a ser exibido na página) ou manualmente no arquivo `dados.js`, seguindo o formato:

```javascript
let livros = [
    {
        id: 1,
        titulo: "1984",
        autor: "George Orwell",
        descricao: "Uma distopia sobre um regime totalitário.",
        genero: "Ficção",
        link: "https://pt.wikipedia.org/wiki/1984_(livro)",
        comentarios: [],
        avaliacao: []
    },
    // Adicione mais livros aqui
];
```

### 5. Personalização

#### Favicon (ícone na aba do navegador)
O favicon padrão é um ícone de livros (`livros32x32.png`), localizado na pasta `assets`. Se quiser trocar o ícone, substitua esse arquivo por outro com o mesmo nome ou altere a linha no `<head>` do `index.html`:

```html
<link rel="icon" href="assets/livros32x32.png" type="image/png">
```

#### Tema Claro/Escuro
A funcionalidade de alternar entre tema claro e escuro está disponível e pode ser ativada por um botão (se adicionado à interface). Para usar, a lógica do tema está contida no `app.js` e pode ser ajustada para atender às suas preferências.

## ⚙ Funcionalidades de Armazenamento Local

- **LocalStorage** é usado para armazenar os **comentários** e **avaliações** de cada livro. Isso permite que os dados sejam persistidos mesmo após o fechamento da página.

## 📝 Processo de Criação e Resumo dos Prompts Google Gemini

Este projeto foi criado utilizando uma abordagem iterativa e colaborativa. Diversos pontos da aplicação foram aprimorados ao longo do processo, com base em sugestões, ajustes e implementação de funcionalidades específicas. Aqui está um resumo do processo de criação e dos **prompts usados**:

1. **Base da Aplicação**:
   - A aplicação começou com uma estrutura básica em HTML e JavaScript, onde foi implementada a funcionalidade de **pesquisar livros**. Um banco de dados simples de livros foi criado no arquivo `dados.js`.

2. **Pesquisa e Exibição de Resultados**:
   - O sistema de busca foi desenvolvido para filtrar livros por título, autor ou gênero. A lógica foi implementada no arquivo `app.js`, onde a função `pesquisar()` faz a busca e exibe os resultados em **cards**.
   
3. **Estilização dos Cards no Estilo Facebook**:
   - Os cards foram estilizados para seguir o modelo dos posts do Facebook, com bordas suaves, sombras leves e hierarquia clara de informações. Cada card exibe informações sobre o livro, como título, autor, gênero e um campo para comentários.

4. **Comentários e Avaliações**:
   - Foi implementada uma funcionalidade para permitir que os usuários **comentassem** e **avaliassem** os livros. Essas interações são armazenadas localmente no navegador usando o **LocalStorage**, o que garante que os comentários e avaliações persistam mesmo após o fechamento da página.

5. **Tema Claro/Escuro**:
   - A funcionalidade de alternar entre o tema claro e escuro foi adicionada para melhorar a experiência do usuário. Um botão foi implementado para permitir a troca de temas.

6. **Responsividade e Estilo Moderno**:
   - Um dos prompts focou na responsividade da aplicação, ajustando os elementos da página para se comportarem bem em dispositivos móveis. A página foi estilizada usando a fonte "Chakra Petch" para dar um toque moderno e clean à interface.
   
7. **Adição de Favicon e Detalhes Visuais**:
   - Um ícone de livros (`livros32x32.png`) foi adicionado como favicon, e o layout geral foi ajustado para tornar a aplicação visualmente agradável. Também foi implementada uma imagem de livraria na página inicial com bordas arredondadas e efeito de opacidade.

### Destaques do que programei diretamente:

- **Sistema de Comentários e Avaliações**:
   - Implementei a lógica de adicionar comentários e avaliações aos livros, armazenando essas informações no LocalStorage. A função `comentar()` e `avaliar()` foram programadas para garantir que o feedback dos usuários seja exibido e persistido corretamente.
   
- **Funcionalidade de Limpar Pesquisa**:
   - Criei o botão "X" no campo de pesquisa que limpa o texto de entrada e oculta a seção de resultados ao clicar. Isso ajuda a melhorar a usabilidade, permitindo ao usuário reiniciar a pesquisa de maneira rápida.

- **Melhoria no Design dos Cards**:
   - A estilização dos cards no estilo do Facebook foi uma adição importante que desenvolvi, criando uma interface moderna e agradável. Cada card foi projetado para destacar as informações do livro de maneira clara e intuitiva.

## 📸 Capturas de Tela

![Biblioteca de Livros - Página Inicial]![Pagina Inicial](/image.png)

## 🔮 Futuras Implementações

- Integração com uma API externa para trazer mais informações sobre livros (como Google Books).
- Sistema de login para salvar comentários e avaliações com o usuário.
- Melhorias na interface com mais animações e feedback ao usuário.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

1. Faça um fork do projeto.
2. Crie sua feature branch: `git checkout -b minha-nova-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
4. Faça push para a branch: `git push origin minha-nova-feature`.
5. Envie um pull request.


---

**Desenvolvido por [Pedro Dias](https://github.com/JapaDiaz)**
