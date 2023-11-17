// 4.	Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.

var num = [];

for (let i = 0; i < 5; i++) {
    numDigitado = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));
    num.push(numDigitado);   
}
console.log(num);

var maiorNumero = Math.max(...num);

console.log("Maior Número: " + maiorNumero);