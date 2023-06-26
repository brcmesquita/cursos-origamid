// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu li');
console.log(menu);

menu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item.classList)
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove('ativo');
  console.log(item.classList)
})

menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const checkAltImages = document.querySelectorAll('img')

checkAltImages.forEach((item) => {
    console.log(item.hasAttribute('alt'))
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'http://brunoraphael.com.br');
console.log(linkExterno);

