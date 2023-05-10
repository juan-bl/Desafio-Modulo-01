function solucao(texto) {
    // Seu codigo aqui
    let contador = '', contadorDeEspaco = 0;
    texto = texto.trim();
    
    contador = texto.split('');
    texto = texto.split(' ');
    
    for (let palavra of texto) {
        if (palavra === '') {
            contadorDeEspaco++;
        };
    };
    
    if (texto[0] === '') {
        console.log(0);
    } else if (contador.length <= 5000) {
        console.log(texto.length - contadorDeEspaco);
    };
};

solucao('    Um texto qualquer ')