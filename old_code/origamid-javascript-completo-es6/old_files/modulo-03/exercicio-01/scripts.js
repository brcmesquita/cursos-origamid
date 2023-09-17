// Retorne o url da página atual utilizando o objeto window
const url = document.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');
console.log(ativo);

// Retorne a linguagem do navegador
const LinguagemNavegador = navigator.language || navigator.userLanguage;
console.log(LinguagemNavegador);

// Retorne a largura da janela
const larguraJanela = window.outerWidth;
console.log(larguraJanela);
