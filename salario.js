/*A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).*/

let numeroHorasTrabalhadasUmMes
let salarioPorHora 
let salario 
let valorHoraExtra
let qtdHorasExtras
let salarioExtras = 0

if (numeroHorasTrabalhadasUmMes <= 160)
{
  salario = numeroHorasTrabalhadasUmMes * salarioPorHora;
  valorHoraExtra = 0;
}

else
{
salario = 160 * salarioPorHora;
qtdHorasExtras = numeroHorasTrabalhadasUmMes - 160;
valorHoraExtra = salarioPorHora * 1.5
salarioExtras = valorHoraExtra * qtdHorasExtras;
}

let salarioTotal = salario + salarioExtras
console.log(salarioTotal)
