const  input = "cubos\ncuggbyos"

const novoInput = input.split('\n')


const arrTentativa = novoInput[1].split('')
const arrCofreSenha = novoInput[0].split('')

const resposta = arrCofreSenha.filter((letraSenha) => {
    // a letra da senha existe no input?
    let inclui = arrTentativa.includes(letraSenha) 

        // qual o index a letra da senha esta no input?
        const index = arrTentativa.findIndex((letraInput) => {
            return letraInput === letraSenha
        }) 
    
    // remove as letras que atecedem o 1 digito encontrado da senha
    arrTentativa.splice(0, index + 1); 

    // retorna a letra da senha encontrada em array
    return inclui
});

// junta a array da senha.. e confere se é igual a senha original
resposta.join('') === novoInput[0] ? console.log('SIM') : console.log('NAO'); 

// Existe uma entrada forçada... que é simplesmente repetindo todas as letras do alfabeto varias vezes...
// Para resolver, basta limitar o numero de caracteres do input apos recebe-lo.