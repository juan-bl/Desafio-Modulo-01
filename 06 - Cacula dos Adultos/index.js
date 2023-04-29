const inputLista = [18, 25, 32, 65, 34, 19]

const maiores = inputLista.filter((numeros) => {
    return numeros >= 18
})
const resultado = maiores.sort((a, b) => {
    return a - b
})

resultado[0] === undefined ? console.log("CRESCA E APARECA") : console.log(resultado[0]);