Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/02/2026
Var
// Seção de Declarações das variáveis 
   salario:real
   nome:caractere
   base_salario:real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

   //ENTRADA DE DADOS
   escreva("Nome do Contratado: ")
   leia(nome)
   
   escreva("Salário do contratado: ")
   leia(salario)
   
   //PROCESSAMENTO
   
   base_salario <- salario / 1621
   
   
   //SAÍDA
    escreval
    escreval ("Nome: ",nome)
    escreval("Salario em quantidades de salários mínimos: " , base_salario:3:1)

Fimalgoritmo