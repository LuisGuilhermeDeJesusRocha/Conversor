

document.getElementById("converterButton").addEventListener("click", function() {
    const baseSelect = document.getElementById("baseSelect");
    const numeroInput = document.getElementById("numeroInput");
    const resultadoContainer = document.getElementById("resultadoContainer");
    
    const escolha = baseSelect.value;
    const numero = parseFloat(numeroInput.value); // Sempre converte para número decimal
    
    switch (escolha) {
        case "1":
            const resultadoDecimal = binarioParaDecimal(numero.toString());
            resultadoContainer.textContent = `O número em decimal é: ${resultadoDecimal}`;
            break;
        case "2":
            const resultadoBinario = decimalParaBinario(numero);
            resultadoContainer.textContent = `O número em binário é: ${resultadoBinario}`;
            break;
        case "3":
            const resultadoDecimalHex = decParaHex(Math.floor(numero));
            resultadoContainer.textContent = `O número em hexadecimal é: ${resultadoDecimalHex}`;
            break;
        case "4":
            const resultadoOctal = decimalParaOctal(numero);
            resultadoContainer.textContent = `O número em octal é: ${resultadoOctal}`;
            break;
        default:
            resultadoContainer.textContent = "Escolha inválida!";
    }
});

function decimalParaBinario(decimal) {
    if (decimal === 0) {
        return "0"; // Trata o caso especial de entrada 0
    }

    let binario = ""; // Inicializa uma string vazia para armazenar o resultado binário

    while (decimal > 0) {
        const resto = decimal % 2; // Calcula o resto da divisão por 2
        binario = resto + binario; // Adiciona o dígito binário na frente da string
        decimal = Math.floor(decimal / 2); // Divide o decimal por 2 (descarta a parte fracionária)
    }

    return binario;
}

function binarioParaDecimal(binario) {
    let decimal = 0;

    // Inverte a string binária para começar pelo dígito mais significativo
    binario = binario.split('').reverse().join('');

    for (let i = 0; i < binario.length; i++) {
        const digito = parseInt(binario[i], 10); // Converte o dígito binário em decimal
        decimal += digito * Math.pow(2, i); // Calcula o valor decimal do dígito e adiciona ao total
    }

    return decimal;
}

function decimalParaOctal(decimal) {
    if (decimal === 0) {
        return "0"; // Trata o caso especial de entrada 0
    }

    let octal = ""; // Inicializa uma string vazia para armazenar o resultado octal

    while (decimal > 0) {
        const resto = decimal % 8; // Calcula o resto da divisão por 8
        
        octal = resto + octal; // Adiciona o dígito octal na frente da string

        decimal = Math.floor(decimal / 8); // Divide o decimal por 8 (descarta a parte fracionária)
    }

    return octal;
}

function decParaHex(decimal) {
    let resultado, t = 0;
    let hexaContra = [];
    
    while (decimal > 0) {
        resultado = decimal % 16;
        decimal = Math.floor(decimal / 16);

        switch (resultado) {
            case 10:
                hexaContra[t] = 'A';
                break;
            case 11:
                hexaContra[t] = 'B';
                break;
            case 12:
                hexaContra[t] = 'C';
                break;
            case 13:
                hexaContra[t] = 'D';
                break;
            case 14:
                hexaContra[t] = 'E';
                break;
            case 15:
                hexaContra[t] = 'F';
                break;
            default:
                hexaContra[t] = resultado.toString(); // Para dígitos de 0 a 9
                break;
        }
        t++;
    }
    const hexaResultado = hexaContra.reverse().join('');
    return hexaResultado;
}
