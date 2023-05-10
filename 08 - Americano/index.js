function solucao(numeros) {
    // seu codigo aqui
    const soma = numeros.reduce((acumulador, elementoAtual) => {
        return acumulador + elementoAtual;
    });
   
    let contador = 0, indice = 0;
   
    while (soma !== indice) {
        if (numeros[contador] === undefined) {
            contador = 0;
            //console.log(numeros[contador]);
            contador++;
            indice++;
        } else {
            //console.log(numeros[contador]);
            contador++;
            indice++;
        };
    };
    console.log(contador);
};

solucao([1, 3, 2, 1]);