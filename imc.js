//Variáveis-----------------------------------------------

let niveis = ["Muito abaixo do peso",
              "Abaixo do peso",
              "Peso normal",
              "Acima do peso",
              "Obesidade grau I",
              "Obesidade grau II",
              "Obesidade grau III"]


let pessoas = ["Stevan", "Pedro", "Eduardo"]
let massas = [76, 72, 89]
let alturas = [1.82, 1.85, 1.80]
let idades = [33, 28, 34]

//--------------------------------------------------------

//Funções-------------------------------------------------

function calcularIMC (massa, altura){
let IMC = massa/(altura**2)
return IMC
}

function verificaNivel (IMC){
  let nivel = 0

  if (IMC < 17){
  let nivel = 0
}else if (IMC < 18.5){
  nivel = 1
}else if (IMC < 25){
  nivel = 2
}else if (IMC < 30){
  nivel = 3
}else if (IMC < 35){
  nivel = 4
}else if (IMC < 40){
  nivel = 5
}else{
  nivel = 6
}

return nivel

}

//--------------------------------------------------------

//Execução do código--------------------------------------

let indice = 0
let pessoa = pessoas[indice]
let massa = massas[indice]
let altura = alturas[indice]
let idade = idades[indice]

let IMC = calcularIMC(massa, altura)
let nivel = verificaNivel(IMC)

console.log("Nome: " + pessoa)
console.log("Idade: " + idade)
console.log("Peso: " + massa)
console.log("Altura: " + altura)
console.log("IMC: " + IMC)
console.log("Nível: " + niveis[nivel])


console.log (niveis[nivel])

//--------------------------------------------------------
