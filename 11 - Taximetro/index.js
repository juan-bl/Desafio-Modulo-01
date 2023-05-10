function solucao(min, km) {
    //seu codigo aqui
    let contMin = 0, contKm = 0, somaTotal = 0;

    if (min <= 20) {
        somaTotal += min * 50;
    } else {
        somaTotal += 20 * 50
        somaTotal += (min - 20) * 30
    }
    if (km <= 10) {
        somaTotal = somaTotal + (km * 70);
    } else {
        somaTotal = somaTotal + (10 * 70);
        somaTotal = somaTotal + ((km - 10) * 50);
    }

    console.log(somaTotal);
}

solucao(25, 11.5);