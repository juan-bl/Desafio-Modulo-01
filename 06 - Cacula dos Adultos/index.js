function solucao(lista) {
    // seu codigo aqui
    let menor = Math.max(...lista), resultado = [];
    
    for (let numero of lista) {
        if (menor >= numero && numero >= 18) {
            menor = numero;
            resultado.push(menor);
        };
    };

    if (resultado.length === 0) {
        console.log('CRESCA E APARECA');
    } else {
        console.log(Math.min(...resultado));
    };
};

solucao([12, 18, 27]);