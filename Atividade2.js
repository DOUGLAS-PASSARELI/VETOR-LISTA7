//2.	Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3 primeiros elementos deste vetor.

var num = [];

for (let i = 0; i < 6; i++) {
    numDigitado = parseInt(prompt("Digite 6 números, após o sistema irá somar os 3 primeiros digitados: "));
    num.push(numDigitado);
}
console.log(num);

soma = 0

for (let i = 0; i < 3; i++) {
    soma += num[i];
}
console.log("A Soma dos 3 primeiros numeros é: " + soma);