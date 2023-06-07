var selecionar = document.querySelector('#selecionar')

function selecionado() {
    var animais = [...document.querySelectorAll('input[type=radio]')]
    var animalSelecionado = animais.filter((animal) => {
        return animal.checked
    })
    return animalSelecionado[0]
}

selecionar.addEventListener('click', () => {
    var animalEscolhido= selecionado()

    const animalAlerta = animalEscolhido.previousSibling.previousSibling.textContent
    alert("O animal selecionado foi: " + animalAlerta)
})