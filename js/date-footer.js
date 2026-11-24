// Capturando elemento
const anoAtual = document.querySelector("#ano-atual");

// Capturando o ano atual
const data = new Date();
const ano = data.getFullYear();

// Atualizando o span com o ano atual
anoAtual.textContent = ano;
