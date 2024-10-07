function calculadora(operacao, numeros) {
    let resultado = numeros[0]; // Usar o primeiro número como base para todas as operações

    switch (operacao) {
        case '+':
            for (let i = 1; i < numeros.length; i++) {
                resultado += numeros[i];
            }
            return resultado
            ;

        case '-':
            for (let i = 1; i < numeros.length; i++) {
                resultado -= numeros[i];
            }
            return resultado
    

        case '*':
            for (let i = 1; i < numeros.length; i++) {
                resultado *= numeros[i];
            }
            return resultado

        case '/':
            for (let i = 1; i < numeros.length; i++) {
                if (numeros[i] !== 0) {
                    resultado /= numeros[i];
                } else {
                    return 'Erro: Divisão por zero';
                }
            }
            return resultado
            ;

       
    }

    return resultado;
}


module.exports = calculadora;
