// CALCULE A MÉDIA DO VETOR ABAIXO:
// UTILISE FUNÇÕES DO ES6

notas = [10, 10, 10]

console.log('\nSomando média  dos elementos do vetor: ')
const soma = notas.reduce((soma, atual) => soma + atual , 0)
const mediafinal = soma / notas.length
console.log(mediafinal)

