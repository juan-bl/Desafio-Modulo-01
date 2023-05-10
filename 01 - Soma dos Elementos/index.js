function solucao(lista) {
  //seu codigo aqui
    const resultado = lista.reduce((acumulador, elementoAtual) => {
        return acumulador + elementoAtual;
    })
    
    console.log(resultado)
}

const lista = [1, 2, 3, 4];

solucao(lista);