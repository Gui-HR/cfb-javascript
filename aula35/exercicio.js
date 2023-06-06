var local1 = document.querySelector('#axolote')
var local2 = document.querySelector('#local-vazio')
var axolote = [...document.querySelectorAll('img')]
var botao = document.querySelector('#botao')
botao.addEventListener('click', mover)

axolote.map((img) => {
    img.addEventListener('click', (img) => {
        const axoloteEscolhido = img.target
        axoloteEscolhido.classList.toggle('escolhido')
        axoloteEscolhido.classList.toggle('esse')
    })
})

function mover() {
    let escolhidos = [...document.querySelectorAll('.escolhido')]
    escolhidos.map((axolote) => {
        local2.appendChild(axolote)
        axolote.classList.remove('escolhido')
    })

    let voltando = [...document.querySelectorAll('#local-vazio > .esse')]
    voltando.map((axolote) => {
        local1.appendChild(axolote)
    })
}