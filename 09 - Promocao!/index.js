function solucao(precos) {
    //seu codigo aqui
  
    if (precos.length === 1) {
        console.log(precos[0]);

    } else if (precos.length === 2) {
        const soma = precos.reduce((acumulador, elementoAtual) => {
            return acumulador + elementoAtual;
        })
        console.log(soma);

    } else if (precos.length > 2 && precos.length <= 100) {
        let menor = precos[0];
        let indexDoMenor = 0;
        let novaLista = [];

        menor = Math.min(...precos)
        for (let numero of precos) {
            if (numero === menor && indexDoMenor === 0) {
                indexDoMenor++;
                novaLista.push(menor / 2);
            } else {
                novaLista.push(numero);
            };
        };

        const soma = novaLista.reduce((acumulador, elementoAtual) => {
            return acumulador + elementoAtual;
        });

        console.log(soma);
    };
};

solucao([200, 150, 50, 100]);