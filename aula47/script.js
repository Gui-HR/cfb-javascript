var textoArray = document.querySelector('#texto-array')
var pesquisa =  document.querySelector('#texto-pesquisa')
var botao = document.querySelector('#botao')
var resultado = document.querySelector('#texto-resultado')

var array = [10, 24, 3, 8, 37, 7, 5]

botao.addEventListener('click', () => {
    array.find((elemento, indice) => {
        if(elemento == pesquisa.value){
            resultado.innerHTML = 'Valor encontrado na posição:' + indice
        }
    })
})

textoArray.innerHTML = '[' + array + ']'

console.log(pesquisa.value);

