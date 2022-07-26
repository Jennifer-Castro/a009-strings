// Exercício 2

// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim())

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
//antes - apresentou 58 caracteres
const minhaString1 = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString1)
console.log(`Essa frase tem ${minhaString1.length} caracteres`)

//depois - apresentou 52 caracteres
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim())
console.log(`Essa frase tem ${minhaString.trim().length} caracteres`)


// c) Substitua os traços `________` por “sticioso”.
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const trocandoCaracteres = minhaString.replace("________","sticioso")
console.log(trocandoCaracteres)


