const inputJogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]

  const boolean = inputJogadores.map((objetos) => {
    return objetos.jogada === 1
})

let contadorDeTrue = 0
let contadorDeFalse = 0 

const contar = boolean.map((boolean) => {
boolean ? contadorDeTrue++ : contadorDeFalse++   
}) 

if(contadorDeTrue === 1) {

const escolhido = inputJogadores.map((objetos) => {
        if(objetos.jogada === 1) {
            return objetos.nome
        } else {
            return ''
        }
    })
    while (escolhido.indexOf('') !== -1) {
        let index = escolhido.indexOf('')
        escolhido.splice(index, 1)
    }

console.log(escolhido[0])

} else if (contadorDeFalse === 1) {

    const escolhido2 = inputJogadores.map((objetos) => {
        if(objetos.jogada === 0) {
            return objetos.nome
        } else {
            return ''
        }
    })
    while (escolhido2.indexOf('') !== -1) {
        let index = escolhido2.indexOf('')
        escolhido2.splice(index, 1)
    }

console.log(escolhido2[0])

} else {
    console.log('NINGUEM')
}