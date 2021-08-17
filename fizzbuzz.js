//- Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

/*for ([inicialização]; [condição]; [expressão final])
   declaração
*/

for (num=0; num<=100; num++){
  if (num % 15 == 0)
  console.log("FizzBuzz")
  else if (num % 3 == 0)
  console.log("Fizz")
  else if (num % 5 == 0)
  console.log("Buzz")
   else
    console.log(num)
  
}