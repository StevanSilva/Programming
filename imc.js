//Calcular IMC

let niveis = ["muito abaixo do peso",
              "abaixo do peso",
              "peso normal",
              "acima do Peso",
              "obesidade grau I",
              "obesidade grau II",
              "obesidade grau III"]

let pessoas = ["Stevan Bernardino", "Pedro Naves", "Eduardo Stuart"]
let massas = [76, 70, 89]
let alturas = [1.82, 1.80, 1.80]
let idades = [33, 28, 34]
let sexos = ["masculino","masculino", "masculino" ]

function calcularIMC(massa, altura){
  let IMC = massa/(altura**2)
  return IMC
}

function verificarNivel(IMC){
  let nivel = 0

if (IMC < 17){
  nivel = 0
}else if(IMC < 18.5){
  nivel = 1
}else if(IMC < 25){
  nivel = 2
}else if(IMC < 30){
  nivel = 3
}else if(IMC < 35){
  nivel = 4
}else if(IMC < 40){
  nivel = 5
}else{
  nivel = 6
}
return nivel
}

for (let indice = 0; indice < pessoas.length; indice++){

let pessoa = pessoas[indice]
let massa = massas[indice]
let altura = alturas[indice]
let idade = idades[indice]
let sexo = sexos[indice]

let IMC = calcularIMC(massa, altura)
let nivel = verificarNivel(IMC)

console.log("Nome: " + pessoa)
console.log("Peso: " + massa)
console.log("Altura: " + altura)
console.log("Idade: " + idade)
console.log("IMC: " + IMC.toFixed(2))
console.log("Estado: " + niveis[nivel])
console.log("Sexo: " + sexo)
console.log("")

}


