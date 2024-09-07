# 📚 Biblioteca de Livros

Biblioteca de Livros é uma aplicação web simples onde os usuários podem pesquisar livros, ver informações detalhadas, deixar comentários e avaliações. Esta aplicação também permite adicionar novos livros à biblioteca. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript puro.

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
