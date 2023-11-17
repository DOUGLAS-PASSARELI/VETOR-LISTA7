// 3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.

var num = [];
var numMultiplicado = [];

for (let i = 0; i < 5; i++) {
    numDigitado = parseInt(prompt("Digite 5 numeros para mostrar a quantidade números pares e impares:  "));
    num.push(numDigitado); 
    

    numMultiplicado[i] = num[i]* 2;
    // numMultiplicado.push(numMultiplicado);
}

console.log(num);

// for (let i = 0; i < 5; i++){
//     if(i != null || i == 0)
//     {
//         numMultiplicado[i] = num[i] * 2;
//     }      
// }
console.log(numMultiplicado);

console.log("Números digitados: " + num + "\n" + "Multiplicados: " + numMultiplicado);