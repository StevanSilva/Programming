/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool
até 20 litros, desconto de 3% por litro. 
acima de 20 litros, desconto de 5% por litro 

Gasolina
até 20 litros, desconto de 4% por litro
acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.*/

let alcool
let gasolina
let precoA = 2.90
let precoG = 3.30
let litrosVendidosA = 10
let litrosVendidosG = 30

if (litrosVendidosA <= 20){
  
  alcool = (precoA * litrosVendidosA) - 0.97
}
else{
  alcool = (precoA * litrosVendidosA) - 0.95
}

console.log("Valor a ser pago ao cliente: " + alcool)

if (litrosVendidosG <= 20){

  gasolina = (precoG * litrosVendidosG) - 0.96

} else{
  gasolina = (precoG * litrosVendidosG) - 0.94
}

console.log("Valor a ser pago ao cliente: " + gasolina)