var selecionar = document.querySelector('#selecionar')
var remover = document.querySelector('#remover')
var adicionar = document.querySelector('#adicionar')

var tirarSelecao = () => {
    const selecionadoRemove = [...document.querySelectorAll('.selecionado')]
    selecionadoRemove.map((selecionado) => {
        selecionado.classList.remove('selecionado')
    })
}

var selecao = [...document.querySelectorAll('.animal')]
selecao.map((animal) => {
    animal.addEventListener('click', (animal) => {
        tirarSelecao()
        animal.target.classList.toggle('selecionado')
    })
})

selecionar.addEventListener('click', () => {
    let animalEscolhido = document.querySelector('.selecionado')

    if(animalEscolhido == undefined){
        alert('Selecione uma opção')
    } else {
        const animalAlerta = animalEscolhido.textContent
        alert("O animal selecionado foi: " + animalAlerta)
    }

})

remover.addEventListener('click', () => {
    let animalEscolhido = document.querySelector('.selecionado')

    if(animalEscolhido == undefined){
        alert('Selecione uma opção')
    } else {
        animalEscolhido.remove()
    }
})

adicionar.addEventListener('click', () => {
    const todosAnimais = [...document.querySelectorAll('animal')]
    let nomeAnimalNovo = document.querySelector('.texto-animal-novo').value
    if(nomeAnimalNovo == '') {
        alert('Digite o nome do animal antes de adicionar')
    } else {
        if(todosAnimais.length <= 7) {
            let animais = document.querySelector('#animais')
            
            let novoAnimal = document.createElement('div')
            novoAnimal.setAttribute('class', 'animal')
            novoAnimal.innerHTML = '<p>'+ nomeAnimalNovo +'</p>'
            novoAnimal.addEventListener('click', (animal) => {
            tirarSelecao()
                animal.target.classList.toggle('selecionado')
            })
    
            animais.appendChild(novoAnimal) 
        } else {
            alert('Já tem muitos animais, remova um antes de criar outro.')
        }
    }
})