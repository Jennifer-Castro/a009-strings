// #Exercicio 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3

const nomeDoUsuario = prompt("Qual o seu nome?")
const comidafavorita1 = prompt("Qual sua comida favorita?")
const comidafavorita2 = prompt("Qual sua 2ª comida favorita?")
const comidafavorita3 = prompt("Qual sua 3ª comida favorita?")


console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}: \n ${comidafavorita1}\n ${comidafavorita2}\n ${comidafavorita3}`)