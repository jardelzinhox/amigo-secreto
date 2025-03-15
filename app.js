// armazenará os amigos inseridos
let amigos = [];

// Função para adicionar um amigo 
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    inputNome.value = "";
    exibirListaAmigos();
}

// Função para exibir a lista de amigos na página
function exibirListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Valida se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo do elemento com id "resultado"
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
