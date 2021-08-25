/*
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.
*/

let mac = 7
let numMacCompradas
let custoTotalCompra = mac 

if (mac <= 6)
{ 
  custoTotalCompra = mac * 1.30
  console.log("Custo Total da Compra: " + custoTotalCompra.toFixed(2))
}

else
{
  custoTotalCompra = mac * 1.00
  console.log("Custo Total da Compra: " + custoTotalCompra.toFixed(2))
}



