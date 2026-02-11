Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/02/2026
Var
// Seção de Declarações das variáveis 
   primeira_nota:real
   segunda_nota:real
   media:real
   resultado: caractere
   soma:real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

  escreva("Dígite Primeira nota: ")
  leia(primeira_nota)
  
  escreva("Dígite Segunda nota: ")
  leia(segunda_nota)
  
  soma <- primeira_nota + segunda_nota
  media <- soma / 2
  
  se media >= 7 entao
  resultado <- "Aprovado"
  senao
   resultado <- "Reprovado"
  fimse
  
  escreval
  escreval("Média: ", media)
  escreval("Situação: ",resultado)

Fimalgoritmo