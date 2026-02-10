Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/02/2026
Var
// Seção de Declarações das variáveis 
   primeira_nota: real
   segunda_nota: real
   soma: real
   media: real
   resultado: caractere
   nome: caractere
   idade: inteiro
   
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   //ENTRADA DE DADOS
   
   escreva("Digite seu nome: ")
   leia(nome)
   
   escreva("Digite sua idade: ")
   leia(idade)
   
   escreva("Digite sua primeira nota: ")
   leia(primeira_nota)
   
   escreva("Digite sua segunda nota: ")
   leia(segunda_nota)
   
   //PROCESSAMENTO
   
   soma <- primeira_nota + segunda_nota
   media <- soma / 2
   //Outra forma de fazer os outros 2 comandos: media <- (primeira_nota + segunda_nota)
   
   se media >=7 entao
      resultado <-"aprovado"
   senao
        resultado <- "reprovado"
   fimse
   
   
   
   //SAÍDA
   escreval
   escreval("Média: ", media)
   escreval("Resultado: ", nome," ", resultado)



Fimalgoritmo