const idade = 18

if (idade <= 65){
    resultado = console.log('Voto opcional por idade avançada')
} else if (idade <= 18){
    console.log('Voto Obrigátorio')
} else if (idade <= 16) {
    resultado = console.log("Voto Opcional")
} else if (idade > 15){
    resultado = console.log("Não pode votar")
}

console.log(`Idade: ${idade}`)
console.log(`Situação: ${resultado}`)

