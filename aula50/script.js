var textoArray = document.querySelector('#texto-array')
var botao = document.querySelector('#botao')
var resultado = document.querySelector('#texto-resultado')

var array = [1, 2, 3, 4, 5, 6]
textoArray.innerHTML = '[' + array + ']'

var auxiliar = []

botao.addEventListener('click', () => {
    resultado.innerHTML = array.reduce((anterior, atual, indice) => {
        console.log(anterior);
        return anterior + atual
    })
})

