// Crie uma função para verificar se um valor é Truthy
function seraQueETruthy(valor) {
  if(!!valor) {
    console.log("É Truthyyyy");
  } else {
    console.log("Ah! Não é Truthyyyyy");
  }
}
seraQueETruthy(3 > 9)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroDoQuadrado(a, b, c, d) {
  return a + b + c + d;
}
console.log(perimetroDoQuadrado(10,10,10,10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
let meuNome = nomeCompleto('Bruno', 'Raphael')
console.log(meuNome);

// Crie uma função que verifica se um número é par
function ePar(numero){
  if (numero % 2 === 0) {
    console.log('É Par')
  } else {
    console.log('Não é Par')
  }
}

ePar(34)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function queTipoEEsse(dado){
  console.log(typeof dado)
}
queTipoEEsse("bruno");

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function mostrarNome() {
  console.log("Bruno Raphael");
}
addEventListener('scroll', mostrarNome)

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
var totalPaises = 193;
console.log(precisoVisitar(20));
console.log(jaVisitei(20));