/*
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

let anoAtual = new Date().getFullYear()
let anoNascimento = 2006
let anoLimite = anoAtual - 16

if (anoNascimento <= anoLimite)
{
  console.log("Pode votar")
}

else 
{
  console.log("Não pode votar")
}

