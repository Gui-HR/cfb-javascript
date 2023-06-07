const pai = document.querySelector('#container')
var champ = ["Ekko", "Lee Sin", "Pyke", "Riven", "Samira"]

champ.map((champ) => {
    const novoChamp = document.createElement('div')
    novoChamp.innerHTML = champ
    novoChamp.setAttribute('class', 'teste')
    pai.appendChild(novoChamp)

    let lixo = document.createElement('div')
    lixo.setAttribute('class', 'lixo')
    lixo.addEventListener('click', (evento) => {
        console.log(evento.target.parentNode);
        pai.removeChild(evento.target.parentNode)
    })
    novoChamp.appendChild(lixo)
})







