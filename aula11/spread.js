// let pessoa1 = {nome: 'Guilherme', idade: 19, altura: 1.74, cor: 'branco'}
// let pessoa2 = {nome: 'Henrique', idade: 17, altura: 1.76, habilidade: 'cozinhar'}
// let pessoa3 = {...pessoa1, ...pessoa2}

// console.log(pessoa3);

var soma3Numeros = (n1, n2, n3) => {
    return n1 + n2 + n3
}

let obj = [1, 2, 3]

console.log(soma3Numeros(...obj));