const caixa = document.querySelector('#caixa')

var mapinha = new Map()
mapinha.set('Caminho', 'Rua Churusbago')
mapinha.set('Ovinho', 'Richarlyson')

console.log(mapinha);

if(mapinha.has('Ovinho')) {
    caixa.innerHTML = mapinha.get('Ovinho') + ' esta vivo'
} else {
    caixa.innerHTML = 'você perdeu seu ovo F'
}

console.log(mapinha.size);

mapinha.delete('Caminho')

console.log(mapinha);

console.log(mapinha.size);

