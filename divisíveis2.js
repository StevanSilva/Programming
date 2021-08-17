//de 0 a 100, quais são os números divisíveis por 2? 

num = 0
while (num <= 100){
	console.log(num)
	num = num + 2
} 

// ou

for (let i=0; i <=100; i++){
if ((i % 2) === 0)
console.log(i)
}

// % verifica o resto, e não o resultado 
// Sobre o if (x % 2 == 0). O operador % é chamado de módulo. Ele serve para você verificar qual o resto da divisão de um número por outro... No seu caso, você está verificando se o resto da divisão de x por 2 resulta em 0, ou seja, você está verificando se x é múltiplo de 2.
