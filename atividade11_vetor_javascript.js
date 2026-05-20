let num = [1,2,3,4,5,6]

console.log(`Exibindo os números: ${num}`)


function analise(lista) {
    for (let item of lista) {
        if (item %2 === 0) {
            console.log(`O número ${item} é par`)
        } else {
            console.log(`O número ${item} é ímpar`)
        }
    }
}

analise(num)