// Função que irá gerarexecutar quando clicar no botão btnGerar
function gerarTabuada() {
    // PEGA O VALOR DO CAMPO INPUT HTML
    const numeroUnput = document.getElementById('numeroInput')
    let numero = parseInt(numeroInput.value)

    // PEGA O ELEMENTO ONDE A TABUADA SERÁ EXIBIDA
    const resultadoDiv = document.getElementById('resultadoTabuada')
    
    // LIMPA O CONTEÚDO ANTERIOR
    resultadoDiv.innerHTML = ''

    // ADICIONA UM TITULO PARA A TABUADA
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}: </h2>`

    // LAÇO DE REPETIÇÃO PARA GERAR YABUADA DE 1 A 10
    for (let i= 1; i <= 10; i++ ) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado} </p>`
    }
}

// FAZ A FUNÇÃO GERARTABUADA() SER EXECUTADA QUANDO CLICAR NO BOTÃO.
const btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', gerarTabuada)

