//cadastro de pessoa

let nome = prompt("Informe seu nome completo:")
console.log(typeof nome)

let nascimento = (prompt ("Informe sua data de nascimento (dd/mm/aaaa):"))
console.log(typeof nascimento)

let endereco = prompt ("Informe seu endereço:")
console.log(typeof endereco)

let escolaridade = prompt ("Qual a sua escolaridade?")
console.log(typeof escolaridade)

let cnh = prompt ("Possui CNH?")
console.log(typeof cnh)

let filhes = Number (prompt ("Quantos filhos você possui?"))
console.log(typeof filhos)

let cargo = prompt ("Qual seu cargo atual?")
console.log(typeof cargo)

let salario = Number (prompt ("Qual seu salário atual?"))
console.log(typeof salario)

let comissao = Number (prompt ("Você recebe comissão? Se sim," +
    "informe porcentagem, caso não, responda com 0:"));
console.log(typeof comissao)

let admissao = prompt ("Informe seu ano de admissão")
console.log(typeof admissao)

console.log(nome,nascimento,endereco,escolaridade,cnh,filhes,cargo,salario,comissao,admissao)

//como formata linha comprida? data é Number?g
//a: linha comprida, da enter e concatena, data no formato /// usa como string.