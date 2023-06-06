var pai = document.querySelector('#container')
var filhos = [...document.querySelectorAll('.teste')]

pai.addEventListener('click', () => {
    console.log('CLICOU EM TUDO!');
})

filhos.map((filhos) => {
    filhos.addEventListener('click', (filhos) => {
        filhos.stopPropagation()
        console.log('CLIQUEI NÃO!');
    })
})