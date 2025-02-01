// Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a lista exibida
    inputNome.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia, adicione pelo menos um nome.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa o resultado anterior

    let li = document.createElement("li");
    li.textContent = `O amigo secreto é: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}