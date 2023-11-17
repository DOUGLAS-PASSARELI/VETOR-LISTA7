// 3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.

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