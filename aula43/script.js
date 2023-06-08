var selecionar = document.querySelector('#selecionar')
var remover = document.querySelector('#remover')
var adicionar = document.querySelector('#adicionar')

function selecionado() {
    const todosAnimais = [...document.querySelectorAll('input[type=radio]')]
    var animalSelecionado = todosAnimais.filter((animal) => {
        return animal.checked
    })
    return animalSelecionado[0]
}

selecionar.addEventListener('click', () => {
    let animalEscolhido = selecionado()

    if(animalEscolhido == undefined){
        alert('Selecione uma opção')
    } else {
        const animalAlerta = animalEscolhido.previousSibling.previousSibling.textContent
        alert("O animal selecionado foi: " + animalAlerta)
    }

})

remover.addEventListener('click', () => {
    let animalEscolhido = selecionado()

    if(animalEscolhido == undefined){
        alert('Selecione uma opção')
    } else {
        animalEscolhido.parentNode.remove()
    }
})

adicionar.addEventListener('click', () => {
    const todosAnimais = [...document.querySelectorAll('input[type=radio]')]
    let nomeAnimalNovo = document.querySelector('.texto-animal-novo').value
    if(nomeAnimalNovo == '') {
        alert('Digite o nome do animal antes de adicionar')
    } else {
        if(todosAnimais.length <= 7) {
            let animais = document.querySelector('#animais')
            
            let novoAnimal = document.createElement('div')
            novoAnimal.setAttribute('class', 'radio')
            novoAnimal.innerHTML = '<p>'+ nomeAnimalNovo +'</p> <input type="radio" name="escolha">'
    
            animais.appendChild(novoAnimal) 
        } else {
            alert('Já tem muitos animais, remova um antes de criar outro.')
        }
    }
})