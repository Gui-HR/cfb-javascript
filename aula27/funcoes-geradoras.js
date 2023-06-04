function* somain (n1, n2=0) {
    let resultado = n1 + n2 
    yield resultado
    
    resultado += n1
    yield resultado
}

const iterador = somain(1,2)

console.log(iterador.next().value);
console.log(iterador.next().value);
