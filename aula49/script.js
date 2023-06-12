var textoArray = document.querySelector('#texto-array')
var botao = document.querySelector('#botao')
var resultado = document.querySelector('#texto-resultado')

var array = [1, 5, 3, 7, 30, 9]
textoArray.innerHTML = '[' + array + ']'

botao.addEventListener('click', () => {
    let ovo = array.some((elemento) => {

        return (elemento % 2) == 0
    })

    if(ovo == true) {
        resultado.innerHTML = 'OK'
    }
})

