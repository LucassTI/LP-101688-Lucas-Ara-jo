// CRIANDO UM VETOR
const vetorNumeros = [10,25,30,45,50]

console.log('Listando todos os elementos do vetor: ')
console.log(vetorNumeros)


console.log('\nMultiplicando cada elemento do vetor por 2:')
const dobrados = vetorNumeros.map(n => n* 2)
console.log(dobrados)


console.log('\nFiltrando elementos pares:')
const pares = vetorNumeros.filter(numero => numero % 2 == 0)
console.log(pares)

console.log('\nFiltrando elementos pares:')
vetorNumeros.push(55)
const impares = vetorNumeros.filter(numero => numero % 2 == 1)
console.log(impares)

console.log('\nFiltrando elementos negativos:')
vetorNumeros.push(-1)
vetorNumeros.push(-2)
const negativos = vetorNumeros.filter(numero => numero < 0)
console.log(negativos)

console.log('\nSomando todos os elemento0s do vetor: ')
const total = vetorNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(total)