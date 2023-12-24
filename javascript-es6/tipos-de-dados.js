var nome = 'Raphael';
console.log(typeof nome, '->', nome);
var sobrenome = 'Mesquita';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var idade = 39;
console.log(typeof idade);

var time = null;
console.log(typeof time);

var simbolo = Symbol();
console.log(typeof simbolo);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log('(',typeof frase,')', '->', frase);

var ano = '2023';
var mes = 8;
var anoMes = ano + mes;
console.log(typeof anoMes,'->',anoMes);

var ano = 1984;
var mes = 39;
var anoMes = ano + mes;
console.log(typeof anoMes,'->',anoMes);

var melhorJogo = '"melhor"';
var frase1 = 'Esse é o "melhor" jogo';
console.log(frase1);

var frase2 = "Esse é o \"melhor\" jogo";
console.log(frase2);

var frase3 = "Esse é o " + melhorJogo + " jogo";
console.log(frase3);

var golsRomario = 1000;
var frase4 = `Romário fez ${golsRomario} gols`; 
console.log(frase4);




