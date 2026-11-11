//QUESTÃO 1

function calcularDesconto(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const desconto = valor * (percentual / 100);
    return valor - desconto;
}


// Questão 2


function verificarAprovacao(nota) {
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }
    if (nota >= 7) {
        return "Aprovado";
    }
    return "Reprovado";
}


//QUESTÃO 3

function validarCadastro(nome, idade, email) {
    if (!nome || nome.trim() === "") {
        return false;
    }
    if (!idade || idade < 18 || idade > 100) {
        return false;
    }
    if (!email || !email.includes("@")) {
        return false;
    }
    return true;
}

// Questão 4

function calcularFrete(valorCompra, distancia) {
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }
    if (valorCompra >= 200) {
        return 0;
    }
    return distancia * 2;
}

