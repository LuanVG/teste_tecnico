/*Teste técnico
Observe o trecho de código abaixo: */

// 1) Qual será a saída do código abaixo?

let INDICE = 13, SOMA = 0, K = 0; // 13, 0, 0

while (K < INDICE) { // K < 13
  SOMA = SOMA + K; // ou SOMA += K
  K = K + 1; // K++ ou K += 1
}
console.log(SOMA); // a soma da variável será 78

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

function verificaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    while (atual <= numero) {
        if (atual === numero) {
            return true;
        }
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return false;
}

// Número a ser verificado
const numeroVerificar = 21;

if (verificaFibonacci(numeroVerificar)) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
}

/*IMPORTANTE:
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

// 3)Descubra a lógica e complete o próximo elemento:

/* a) 1, 3, 5, 7, 9, 11, 13... 

b) 2, 4, 8, 16, 32, 64, 128, 256...

c) 0, 1, 4, 9, 16, 25, 36, 49, 64... 

d) 4, 16, 36, 64, 100, 144, 196... 

e) 1, 1, 2, 3, 5, 8, 13, 21, 34... */


// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

//a) Como você faria para descobrir, usando apenas uma ida até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

/* reposta:
1. Ligue o primeiro interruptor e espere um pouco.
2. Desligue o primeiro interruptor e ligue o segundo interruptor.
3. Entre na sala.
4. A lâmpada que estiver acesa está conectada ao segundo interruptor.
5. Toque na lâmpada que está apagada.
6. A lâmpada que estiver quente está conectada ao primeiro interruptor.
7. A lâmpada que estiver fria está conectada ao terceiro interruptor.*/

// 5) Escreva um programa que inverta os caracteres de um string.

function inverteString(string) {
    return string.split('').reverse().join('');
}

const string = 'Teste técnico';
console.log(inverteString(string)); // ocicnét etseT

// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverteString(string2) {
    let novaString = '';

    for (let i = string2.length - 1; i >= 0; i--) {
        novaString += string2[i];
    }

    return novaString;
}

const string2 = 'Teste técnico';
console.log(inverteString(string2)); // ocicnét etseT


