//  VETORES EM JAVASCRIPT

const vetorNomes = ['Marta', 'José' , 'Janusa']

console.log('Exibindo todos os elementos: ')
console.log(vetorNomes)

console.log('\nExibindo o primeiro elemento: ')
console.log(vetorNomes[0])

console.log('\n Adicionando um elemento no final do vetor: ')
vetorNomes.push ('Maria Alice')
console.log(vetorNomes)

console.log('\n Adicionando um elemento no inicio do vetor: ')
vetorNomes.unshift('Fabiana')
console.log(vetorNomes)

console.log('\nRemovendo o primeiro elemento do vetor: ')
vetorNomes.shift()
console.log(vetorNomes)

console.log('\nRemovendo o último elemento do vetor: ')
vetorNomes.pop()
console.log(vetorNomes)

console.log('\n Laço de repetição para percorrer todo o vetor')
console.log('Índice: Nome')
vetorNomes.forEach((nome, index)=> {
    console.log(`${index}: ${nome}`)
})