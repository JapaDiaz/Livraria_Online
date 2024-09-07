// Define o modo escuro como padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const temaAtual = localStorage.getItem("tema");
    const iconeTema = document.getElementById("icone-tema");

    // Verifica o tema salvo no localStorage e aplica o tema adequado
    if (!temaAtual || temaAtual === "escuro") {
        document.body.classList.add("dark-mode");
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-moon");
        localStorage.setItem("tema", "escuro"); // Armazena o tema no localStorage
    } else {
        document.body.classList.remove("dark-mode");
        iconeTema.classList.remove("fa-moon");
        iconeTema.classList.add("fa-sun");
    }
});

// Adiciona funcionalidade ao botão para alternar tema
document.getElementById("alternar-tema").addEventListener("click", function () {
    const iconeTema = document.getElementById("icone-tema");
    document.body.classList.toggle("dark-mode");

    // Altera o ícone do botão de acordo com o tema selecionado
    if (document.body.classList.contains("dark-mode")) {
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-moon");
        localStorage.setItem("tema", "escuro"); // Salva o tema escuro
    } else {
        iconeTema.classList.remove("fa-moon");
        iconeTema.classList.add("fa-sun");
        localStorage.setItem("tema", "claro"); // Salva o tema claro
    }
});

// Função que fixa a barra de pesquisa ao rolar a página
window.onscroll = function () {
    fixarBarraDePesquisa();
};

let barraDePesquisa = document.querySelector('.pesquisa-fixa');
let posicaoInicialBarra = barraDePesquisa.offsetTop; // Obtém a posição inicial da barra

function fixarBarraDePesquisa() {
    // Se o usuário rolar a página até a posição da barra de pesquisa, fixa ela no topo
    if (window.pageYOffset > posicaoInicialBarra) {
        barraDePesquisa.classList.add("fixa");
    } else {
        barraDePesquisa.classList.remove("fixa");
    }
}

// Listener para buscar quando apertar Enter
document.getElementById("campo-pesquisa").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        pesquisar(); // Chama a função de pesquisa
    }
});

// Listener para buscar enquanto o usuário digita
document.getElementById("campo-pesquisa").addEventListener("input", function () {
    pesquisar(); // Realiza a pesquisa ao detectar mudanças no campo de texto
});

// Limpa a pesquisa e restaura a tela inicial
document.getElementById("limpar-pesquisa").addEventListener("click", function () {
    document.getElementById("campo-pesquisa").value = "";
    document.getElementById("resultados-pesquisa").style.display = "none";
    document.querySelector('.inicial').style.display = "block"; // Mostra a seção inicial novamente
    this.style.display = "none"; // Esconde o botão "X"
});

// Carrega comentários e avaliações do LocalStorage ao iniciar
function carregarComentarios() {
    let comentariosSalvos = localStorage.getItem("comentariosLivros");
    if (comentariosSalvos) {
        livros = JSON.parse(comentariosSalvos); // Carrega os dados salvos
    }
}

// Salva os comentários e avaliações no LocalStorage
function salvarComentarios() {
    localStorage.setItem("comentariosLivros", JSON.stringify(livros)); // Salva os dados no localStorage
}

// Função de pesquisa por título, autor, descrição ou gênero
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um livro ou autor</p>";
        section.style.display = "none"; // Esconde a seção se não houver busca
        document.getElementById("limpar-pesquisa").style.display = "none"; // Esconde o botão "X"
        document.querySelector('.inicial').style.display = "block"; // Mostra a seção inicial
        return;
    }

    document.querySelector('.inicial').style.display = "none"; // Esconde a seção inicial ao pesquisar
    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";

    // Procura em todos os livros da lista
    for (let livro of livros) {
        let titulo = livro.titulo.toLowerCase();
        let descricao = livro.descricao.toLowerCase();
        let genero = livro.genero.toLowerCase();
        let autor = livro.autor.toLowerCase();

        // Verifica se o campo de pesquisa corresponde a qualquer uma dessas propriedades
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || autor.includes(campoPesquisa)) {
            resultados += gerarHTMLLivro(livro);  // Gera o HTML para o livro encontrado
        }
    }

    // Se não houver resultados, mostra a mensagem
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;  // Exibe os resultados na página
    section.style.display = "block"; // Exibe a seção de resultados
    document.getElementById("limpar-pesquisa").style.display = "block"; // Exibe o botão "X"
}

// Função que gera o HTML para um livro encontrado
function gerarHTMLLivro(livro) {
    return `
    <div class="card">
        <h2>${livro.titulo}</h2>
        <p class="descricao-meta">${livro.descricao}</p>
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <p><strong>Gênero:</strong> ${livro.genero}</p>
        <a href="${livro.link}" target="_blank">Mais informações</a>
        <br><br>
        <input type="text" placeholder="Digite seu comentário" id="comentario-${livro.id}" />
        <button onclick="comentar(${livro.id})">Comentar</button>
        <div id="comentarios-${livro.id}">
            <h3>Comentários:</h3>
            <ul>${livro.comentarios.map(comentario => `<li>${comentario}</li>`).join('')}</ul>
        </div>
        <label for="rating">Avaliação:</label>
        <select id="rating-${livro.id}" onchange="avaliar(${livro.id})">
            <option value="1">1 estrela</option>
            <option value="2">2 estrelas</option>
            <option value="3">3 estrelas</option>
            <option value="4">4 estrelas</option>
            <option value="5">5 estrelas</option>
        </select>
        <p id="media-avaliacao-${livro.id}">Média de Avaliação: ${calcularMedia(livro.avaliacao)} estrelas</p>
    </div>
    `;
}

// Função para adicionar um comentário ao livro
function comentar(id) {
    let inputComentario = document.getElementById(`comentario-${id}`);
    let novoComentario = inputComentario.value;

    if (novoComentario.trim() !== "") {
        let livro = livros.find(livro => livro.id === id);  // Encontra o livro pelo ID
        livro.comentarios.push(novoComentario);  // Adiciona o novo comentário ao array

        // Atualiza a lista de comentários na interface
        let comentariosDiv = document.getElementById(`comentarios-${id}`);
        comentariosDiv.innerHTML = `
            <h3>Comentários:</h3>
            <ul>${livro.comentarios.map(comentario => `<li>${comentario}</li>`).join('')}</ul>
        `;

        // Limpa o campo de comentário
        inputComentario.value = "";

        // Salva os comentários no LocalStorage
        salvarComentarios();
    } else {
        alert("O comentário não pode estar vazio!");
    }
}

// Função para avaliar um livro
function avaliar(id) {
    let rating = document.getElementById(`rating-${id}`).value;
    let livro = livros.find(livro => livro.id === id);  // Encontra o livro pelo ID
    livro.avaliacao.push(Number(rating));  // Adiciona a avaliação ao array

    // Calcula e exibe a média de avaliação
    let media = calcularMedia(livro.avaliacao);
    document.getElementById(`media-avaliacao-${livro.id}`).innerText = `Média de Avaliação: ${media.toFixed(1)} estrelas`;

    // Salva as avaliações no LocalStorage
    salvarComentarios();
}

// Função para calcular a média de avaliações
function calcularMedia(avaliacoes) {
    if (avaliacoes.length === 0) return 0;
    return avaliacoes.reduce((a, b) => a + b, 0) / avaliacoes.length;
}

// Ao carregar a página, recupera os comentários e avaliações salvos
carregarComentarios();
