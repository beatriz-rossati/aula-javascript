
//parte 1
let nome
let idade
console.log (typeof nome,typeof idade)
// no momento o tipo é undefined

nome = prompt ("Qual o seu nome?")
idade = prompt ("Qual a sua idade?")
console.log (typeof nome, typeof idade)
// agora recebe valores, no caso uma string
// p.s. aprendi que typeof só aceita um parametro por vez

console.log ("Ola",nome, "você têm" ,idade, "anos");
alert ("Olá "+nome+", sua idade é: "+idade)
alert (`Olá ${nome}, sua idade é: ${idade}`)
//mostrando o resultado com console.log, e no alert concatenando e usando template string.



//exercicio 1 parte 2
const pergunta1 = "Você gosta de sorvete?";
const pergunta2 = "Você gosta de praia?";
const pergunta3 = "Você gosta de cachorros?";

let resposta1 = prompt(pergunta1);
let resposta2 = prompt(pergunta2);
let resposta3 = prompt(pergunta3);

console.log(pergunta1, resposta1);
console.log(pergunta2, resposta2);
console.log(pergunta3, resposta3);

//atribuindo perguntas à constantes e usando elas como parâmetro.
