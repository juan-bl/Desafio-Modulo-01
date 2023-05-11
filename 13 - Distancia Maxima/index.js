function processData(input) {
    const linhas = input.trim().split('\n');
    linhas.shift();

    let coordenadas = [];
    let maior = 0;

    for (let linha of linhas) {
        const parArray = linha.trim().split(' ');
        const obj = {
            x: Number(parArray[0]),
            y: Number(parArray[1])
        };
        coordenadas.push(obj);
    };

    for (let c1 of coordenadas) {
        for (let c2 of coordenadas) {
            const distancia = Math.sqrt((c1.x - c2.x) ** 2 + (c1.y - c2.y) ** 2);
            if (distancia > maior) {
                maior = distancia;
            };
        };
    };

    console.log(maior)
};

processData('3\n0 0\n0 3\n4 0');