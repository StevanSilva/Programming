/*38) Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.*/

let codigo = 1234
let senha = 9999
let codigoDigitado = 1234
let senhaDigitada = 9999

if (codigoDigitado != codigo){
  console.log("Usuário Inválido!")
}else{
  console.log(senha)
}

if (senhaDigitada != senha){
  console.log("Senha Incorreta!")
}else {
  console.log("Acesso Permitido!")
}

