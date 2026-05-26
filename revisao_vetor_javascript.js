// CRIANDO UM VETOR
const vetorNumeros = [10,20,30,40,50]


console.log("\nExibindo todos os elementos: ")
console.log(vetorNumeros)

console.log("\nExibindo apenas o primeiro elemento: ")
console.log(vetorNumeros[0])

console.log("\nExibindo apenas osegundo elemento: ")
console.log(vetorNumeros[1])

console.log("\nExibindo apenas o terceiro elemento: ")
console.log(vetorNumeros[2])

console.log("\nExibindo apenas o quarto elemento: ")
console.log(vetorNumeros[3])

console.log("\nExibindo apenas o elemento final: ")
console.log(vetorNumeros[4])

console.log('\nAdicionando um elemento no final do vetor: ')
vetorNumeros.push(55)
console.log(vetorNumeros)

console.log('\nAdicionando um elemento no início do vertor: ')
vetorNumeros.unshift(0)
console.log(vetorNumeros)

console.log("\nRemovendo o primeiro elemento do vetor")
vetorNumeros.pop()
console.log(vetorNumeros)

console.log("\nRemovendo o ultimo elemento do vetor")
vetorNumeros.shift()
console.log(vetorNumeros)



