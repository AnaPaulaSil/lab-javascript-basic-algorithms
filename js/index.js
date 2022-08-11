// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops

// const hacker1 (){
//     console.log("The driver's name is XXXX");
// }

// const hacker2 {
//     console.log("The navigator's name is YYYY");
// }

const hacker1 = "jino";
console.log(`the drivers name is ${hacker1}`)

const hacker2 = "karen";
console.log(`The navigators name is ${hacker2}`)

// const frases = [
//     [The driver has the longest name, it has XX characters.]
//     [It seems that the navigator has the longest name, it has XX characters.]
//     [Wow, you both have equally long names, XX characters!]
// ]

if (hacker1.length > hacker2.length) {
    // length conta a quantidade de caracteres da palavra
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

if (hacker1.length === hacker2.length) {
// = simboliza que um se tornou o outro, == que pelo menos um dos dois esta correto, === que sao identicos 
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

console.log(hacker1.toUpperCase().split("").join(" "))
// toUpperCase para capslock, split para separar a palavras, join para retirar as aspas adicionadas

console.log(hacker1.split("").reverse().join(""))

const nomes = [
    // array criada para conseguir receber os comandos de forma simultanea
    hacker1, hacker2
]

nomes.sort();
// "nomes" para invocar a array e sort para deixar em ordem alfabetica
console.log(nomes);
// tambem pode ser simbolizado por console.log(nomes.sort())

if(nomes[0]===hacker1) {
    console.log (`The driver's name goes first.`)
}

if(nomes[0]===hacker2) {
    console.log (`Yo, the navigator goes first definitely.`)
}

if(nomes[0]===nomes[1]) {
    console.log (`What?! You both have the same name?`)
}

// bonus
