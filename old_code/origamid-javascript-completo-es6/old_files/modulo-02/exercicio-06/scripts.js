// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  01: {
    nome: 'Bruno',
    sobrenome: 'Raphael',
    idade: 37,
    natural: 'Rio de Janeiro',
    rg: 1234567890,
    cnh: 1234567890,
  }
}

// Crie um método no objeto anterior, que mostre o seu nome completo
function nomeCompleto(){
  return `${pessoa[01].nome} ${pessoa[01].sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  labrador: {
    cor: 'preta',
    idade: 10,
    latir(pessoa){
      if (pessoa === 'homem') {
        return 'Au-au!'
      }
    }
  }
}

