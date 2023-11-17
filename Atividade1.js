// 1.	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, e mostre a quantidade de números pares e ímpares deste vetor.

var num = [];
num[0] = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));
num[1] = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));
num[2] = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));
num[3] = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));
num[4] = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));

var numPares = 0;
var numImpares = 0;

for (let i = 0; i < num.length; i++){
    if(num[i] % 2 != 0){
        numImpares ++;
    }
    else {
        numPares ++;
    }    
}
console.log("Quantidade de Números Pares: " + numPares + "\n" + "Quantidades de Números Impares: " + numImpares);



/// modo 2

var num = [];

numPares = 0;
numImpares = 0;

for (let i = 0; i < 5; i++) {
    numDigitado = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));
    num.push(numDigitado);   
}
console.log(num);

for (let i = 1; i < num.length; i++){
    if(num[i] % 2 == 0){
        numPares ++;
    }
    else {
        numImpares ++;
    }    
}
console.log("Quantidade de Números Pares: " + numPares + "\n" + "Quantidades de Números Impares: " + numImpares);