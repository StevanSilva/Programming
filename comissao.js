/*24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.*/


let comissao = 0.03
let salarioFixo = 1000
let valorDasVendas = 700

if (valorDasVendas <= 1500)
{
  totalComissao = comissao * valorDasVendas
} else{
  totalComissao = (comissao * 1500) + (valorDasVendas - 1500) * 0.05
}

let salarioTotal = salarioFixo + totalComissao
console.log("Salário Total: " + salarioTotal)


