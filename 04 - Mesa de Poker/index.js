function solucao(min, max, valores) {
    //seu codigo aqui
    const resulatdo = valores.filter((numero) => {
        return numero >= min && numero <= max;
    })

    console.log(resulatdo);
}

solucao(2, 10, [0, 5, 6, 10, 11]);