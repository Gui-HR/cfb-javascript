const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const resultado = document.querySelector('#resultado')
const adicao = document.querySelector('#adicao')
const subtracao = document.querySelector('#subtracao')
const multiplicacao = document.querySelector('#multiplicacao')
const divisao = document.querySelector('#divisao')

const funcoes = [
    () => {resultado.innerHTML = Number(numero1.value) + Number(numero2.value)},
    () => {resultado.innerHTML = Number(numero1.value) - Number(numero2.value)},
    () => {resultado.innerHTML = Number(numero1.value) * Number(numero2.value)},
    () => {resultado.innerHTML = Number(numero1.value) / Number(numero2.value)}]

adicao.addEventListener('click', funcoes[0])
subtracao.addEventListener('click', funcoes[1])
multiplicacao.addEventListener('click', funcoes[2])
divisao.addEventListener('click', funcoes[3])