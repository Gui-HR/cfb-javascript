const pai = document.querySelector('#container')
var champ = ["Ekko", "Lee Sin", "Pyke", "Riven", "Samira"]

champ.map((champ) => {
    const novoChamp = document.createElement('div')
    novoChamp.innerHTML = champ
    novoChamp.setAttribute('class', 'teste')
    pai.appendChild(novoChamp)
})







