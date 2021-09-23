/*
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

function poderVotar(anoNascimento){

  let anoAtual = new Date().getFullYear()
  let anoLimite = anoAtual - 16

    if (anoNascimento <= anoLimite)
{
      console.log("Pode votar")
}

    else 
{
  console.log("Não pode votar")
}

}

poderVotar(2003)
poderVotar(2006)
poderVotar(2008)
poderVotar(2000)
