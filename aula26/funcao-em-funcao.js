const funcao = (n1, n2, n3) => {
    let resultado = n1 + n2
    const multiplicar = (resultado, n3) => {
        return resultado * n3
    }
    return multiplicar(resultado, n3)
}

console.log(funcao(9, 12, 43));