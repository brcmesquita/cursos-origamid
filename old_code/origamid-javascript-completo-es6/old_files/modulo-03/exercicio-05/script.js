// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector('img');
console.log(imagem.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
const todasImagens = document.querySelectorAll('img');
let totalWidth = 0;
todasImagens.forEach((img) => {
  totalWidth += img.offsetWidth;
})
console.log(totalWidth)
}

window.onload = somaImagens();

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
  const rect = link.getBoundingClientRect();
  
  console.log(`Link -> Largura: ${rect.x}`);
  console.log(`Link -> Altura: ${rect.y}`);
  
  if (rect.x < 48 || rect.y < 48) {
    console.log(`Este link está fora do padrão recomendado.`);
  }

  console.log('');
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobile = window.matchMedia('(max-width: 600px)');

if (mobile.matches < 720) {
  links.forEach((link) => {
  link.classList.add('mobile');
  })} 

if (mobile.matches < 720) {
  links.forEach((link) => {
  link.classList.remove('mobile');
  })}
