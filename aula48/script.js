var textoArray = document.querySelector('#texto-array')
var botao = document.querySelector('#botao')
var resultado = document.querySelector('#texto-resultado')

var array = [10, 26, 4, 8, 30, 6, 2]
textoArray.innerHTML = '[' + array + ']'

botao.addEventListener('click', () => {
    let ovo = array.every((elemento, indice) => {
        if((elemento % 2) != 0){
            resultado.innerHTML = 'Erro na posição:' + indice
        }

        return (elemento % 2) == 0
    })

    if(ovo == true) {
        resultado.innerHTML = 'OK'
    }
})

