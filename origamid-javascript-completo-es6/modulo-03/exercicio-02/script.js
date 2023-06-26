// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
imagens.forEach((item) => {
  console.log(item.outerHTML);
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const filtroImagens = document.querySelectorAll('[src^="img/imagem"]');
console.log(filtroImagens);
filtroImagens.forEach((item) => {
  console.log(item.outerHTML);
})

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos);
linksInternos.forEach((item) => {
  console.log(item);
})

// Selecione o primeiro h2 dentro de .animais-descricao
const AnimaisDescricao = document.querySelector('.animais-descricao');
const h2 = AnimaisDescricao.querySelector('h2');
console.log(h2);

// Selecione o último p do site
const p = document.querySelectorAll('p');
const ultimoP = p.length - 1;
console.log(p[ultimoP]);
console.log(p[--p.length]);




