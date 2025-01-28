// Declara uma lista para armazenar os amigos
let amigos = [];

// Função para adicionar o amigo à lista
function adicionarAmigo() {
    // Obtém o valor do campo de input
    const nomeAmigo = document.getElementById("amigo").value.trim();

    // Verifica se o nome não está vazio
    if (nomeAmigo) {
        // Adiciona o nome na lista de amigos
        amigos.push(nomeAmigo);
        
        // Atualiza a lista de amigos na tela
        atualizarListaAmigos();

        // Limpa o campo de input
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, digite um nome.");
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById("listaAmigos");
    
    // Limpa a lista antes de atualizar
    listaAmigosElement.innerHTML = "";

    // Adiciona cada amigo na lista de exibição
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    // Verifica se há amigos suficientes para sortear
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para sortear.");
        return;
    }

    // Cria uma cópia da lista de amigos para sortear
    const amigosSorteados = [...amigos];

    // Embaralha a lista de amigos
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    for (let i = 0; i < amigosSorteados.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${amigosSorteados[i]} foi sorteado para o amigo secreto de ${amigosSorteados[(i + 1) % amigosSorteados.length]}`;
        resultadoElement.appendChild(li);
    }
}
