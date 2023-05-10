function solucao(lista) {
    //seu codigo aqui
    let contator = 1;

    const resultado = lista.reduce((acumulador, elementoAtual) => {
        contator++;
        return acumulador + elementoAtual;
    })

    console.log(resultado/contator);
}

const lista = [2, 3, 4];

solucao(lista);