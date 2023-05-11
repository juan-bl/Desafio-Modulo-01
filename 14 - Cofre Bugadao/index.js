function processData(input) {
    const linha = input.trim().split('\n');    //linha = ['cubos', 'cuggbyos'];

    const correta = linha[0];
    let digitada = linha[1];

    for (let c of correta) {
        let index = digitada.indexOf(c);
        if (index === -1) {
            console.log('NÃO');
            return;
        } else {
            digitada = digitada.slice(index + 1);
        }
    }
    console.log('SIM');
};

processData('cubos\ncuggbyos\n');