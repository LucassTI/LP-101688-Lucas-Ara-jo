
const numero = 110;

function analise (numero) {
    if (numero %2 === 0) {
        console.log('O número é par')
    }
    else {
        console.log('O número é ímpar')
    }
    return numero

}

const resultado = analise(numero)

console.log(resultado)