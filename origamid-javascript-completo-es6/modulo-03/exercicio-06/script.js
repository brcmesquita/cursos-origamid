// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event){
  event.preventDefault();
  this.classList.add('ativo');
  console.log(this)
}

linksInternos.forEach((link) => {
  link.classList.remove('ativo');
  link.addEventListener('click', handleLink);
})

const cep = fetch('https://viacep.com.br/ws/49050485/json');

cep.then(res => res.json()).then(body => {
  console.log(body.complemento);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 