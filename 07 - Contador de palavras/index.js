const inputTexto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer "

const novo = inputTexto.split(' ');

    while (novo.indexOf('') !== -1) {
    let index = novo.indexOf('')
    novo.splice(index, 1)
}
    
novo.trim().length === novo.length ? console.log(novo.length) : console.log(novo.length - 1)
