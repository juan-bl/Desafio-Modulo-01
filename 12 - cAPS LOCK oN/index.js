function processData(input) {
    //Enter your code here
    let contador = 0, inputCorrigido = '';

    // Precisa ter no maximo 5000 caracteres
    if (input.length <= 5000) {

        // CAPS precisa ser caps
        if (input === input.toUpperCase()) {
            console.log(input.toLowerCase());

        } else if (input[0] === input[0].toLowerCase() && input[1] === input[1].toUpperCase()) {
            
            for (let letra of input.trim()) {
                if (letra === letra.toLowerCase()) {
                    contador++;
                };
            };

            // cAPS precisa ser Caps
            if (contador === 1) {
                inputCorrigido = input.toLowerCase();
                inputCorrigido = inputCorrigido.replace(inputCorrigido[0], inputCorrigido[0].toUpperCase());
                console.log(inputCorrigido);

            } else {
               // cApS precisa ser cApS
               console.log(input);
            };
            
        } else {
            // caps continua caps
            console.log(input);
        };
    };
};

processData('cAPS');