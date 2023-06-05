var local1 = document.querySelector('#axolote')
var local2 = document.querySelector('#local-vazio')
var axolote = [...document.querySelectorAll('img')]
var botao = document.querySelector('#botao')
botao.addEventListener('click', mover)
botao.addEventListener('click', voltar)

axolote.map((img) => {
    img.addEventListener('click', (img) => {
        const axoloteEscolhido = img.target
        axoloteEscolhido.classList.toggle('escolhido')
    })
})

function mover() {
    let escolhidos = [...document.querySelectorAll('.escolhido')]
    escolhidos.map((axolote) => {
        local2.appendChild(axolote)
        axolote.classList.add('volta')
        remove()
        function remove() {
            setTimeout(10)
            axolote.classList.remove('escolhido')
        }
    })
}