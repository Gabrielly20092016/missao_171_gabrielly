//QUESTÂO  1----------------------------------------------------------------------------------------------------------------------------


// Questão 1 da letra c: Testes Unitários


// Agrupa os testes da função calcularDesconto


describe("Testes da função calcularDesconto", () => {
  // Verifica se a função calcula corretamente um desconto de 10%
    test('Deve calcular um desconto de 10%', () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });




    // Verifica se o valor final é zero quando o desconto é de 100%
    test('Deve retornar zero quando o desconto for de 100%', () => {
        expect(calcularDesconto(200, 100)).toBe(0);
    });




    // Verifica se a função apresenta um erro quando o valor é negativo
    test('Deve apresentar erro quando o valor for inválido', () => {
        expect(() => calcularDesconto(-50, 10))
            .toThrow('Dados inválidos');
    });


});



//Questão 2--------------------------------------------------------------------------------------------------------------------------------------




// Testes da função verificarAprovacao
describe('Testes da função verificarAprovacao', () => {


    // Verifica se o aluno foi aprovado
    test('Deve retornar Aprovado para nota 8', () => {
        expect(verificarAprovacao(8)).toBe('Aprovado');
    });


    // Verifica se o aluno foi reprovado
    test('Deve retornar Reprovado para nota 5', () => {
        expect(verificarAprovacao(5)).toBe('Reprovado');
    });


    // Verifica se a nota mínima para aprovação funciona
    test('Deve retornar Aprovado para nota 7', () => {
        expect(verificarAprovacao(7)).toBe('Aprovado');
    });


    // Verifica se uma nota acima do permitido apresenta erro
    test('Deve apresentar erro para nota 11', () => {
        expect(() => verificarAprovacao(11))
            .toThrow('Nota inválida');
    });


});




//Questão 3-----------------------------------------------------------------------------------------------------------------------------------------


describe('Testes da função validarCadastro', () => {


    // Todos os dados estão corretos
    test('Deve retornar true com todos os dados válidos', () => {
        expect(validarCadastro('Gabrielly', 18, 'teste@gmail.com')).toBe(true);
    });


    // Todos os dados estão inválidos
    test('Deve retornar false com todos os dados inválidos', () => {
        expect(validarCadastro('', 15, 'emailinvalido')).toBe(false);
    });


    // Verifica se o nome está vazio
    test('Deve retornar false quando o nome estiver vazio', () => {
        expect(validarCadastro('', 20, 'teste@gmail.com')).toBe(false);
    });


    // Verifica se o nome contém apenas espaços
    test('Deve retornar false quando o nome tiver apenas espaços', () => {
        expect(validarCadastro('   ', 20, 'teste@gmail.com')).toBe(false);
    });


    // Verifica se a idade está vazia
    test('Deve retornar false quando a idade estiver vazia', () => {
        expect(validarCadastro('Gabrielly', '', 'teste@gmail.com')).toBe(false);
    });


    // Verifica se a idade está abaixo de 18 anos
    test('Deve retornar false para idade abaixo de 18', () => {
        expect(validarCadastro('Gabrielly', 15, 'teste@gmail.com')).toBe(false);
    });


    // Verifica se a idade está acima de 100 anos
    test('Deve retornar false para idade acima de 100', () => {
        expect(validarCadastro('Gabrielly', 105, 'teste@gmail.com')).toBe(false);
    });


    // Verifica se o e-mail está vazio
    test('Deve retornar false quando o e-mail estiver vazio', () => {
        expect(validarCadastro('Gabrielly', 20, '')).toBe(false);
    });


    // Verifica se o e-mail não possui @
    test('Deve retornar false quando o e-mail não tiver @', () => {
        expect(validarCadastro('Gabrielly', 20, 'testegmail.com')).toBe(false);
    });


});




//Questão 4--------------------------------------------------------------------------------------------------------------------------------------------------




describe('Testes da função calcularFrete', () => {


    // Caso 1: Compra acima de R$ 200,00
    test('Deve retornar zero quando a compra for maior que 200', () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });


    // Caso 2: Compra abaixo de R$ 200,00
    test('Deve calcular o frete normalmente', () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });


    // Caso 3: Compra exatamente igual a R$ 200,00
    test('Deve retornar zero quando a compra for igual a 200', () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });


    // Caso 4: Compra com valor zero
    test('Deve calcular o frete quando a compra for zero', () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });


    // Caso 5: Valor da compra negativo
    test('Deve apresentar erro quando o valor da compra for negativo', () => {
        expect(() => calcularFrete(-50, 10)).toThrow('Valores inválidos');
    });


    // Caso 6: Distância negativa
    test('Deve apresentar erro quando a distância for negativa', () => {
        expect(() => calcularFrete(100, -5)).toThrow('Valores inválidos');
    });


});




//Questão 5-----------------------------------------------------------------------------------------------------------------------------------
describe('Testes da função converterCelsiusParaFahrenheit', () => {


    // Caso 1: Converter 0°C
    test('Deve converter 0°C para 32°F', () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });


    // Caso 2: Converter 100°C
    test('Deve converter 100°C para 212°F', () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });


    // Caso 3: Converter -40°C
    test('Deve converter -40°C para -40°F', () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });


    // Caso 4: Converter 25°C
    test('Deve converter 25°C para 77°F', () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });


    // Caso 5: Entrada como texto numérico
    test('Deve apresentar erro quando a entrada for uma string numérica', () => {
        expect(() => converterCelsiusParaFahrenheit("25")).toThrow('A temperatura deve ser numérica');
    });


    // Caso 6: Entrada como texto não numérico
    test('Deve apresentar erro quando a entrada for um texto', () => {
        expect(() => converterCelsiusParaFahrenheit("abc")).toThrow('A temperatura deve ser numérica');
    });


});






//Questão 6------------------------------------------------------------------------------------------------------------------------------
 
//TESTE A


test("deve calcular o total corretamente", () => {
    expect(calcularTotal(3, 10)).toBe(30);
});


//TESTE B


test("deve retornar zero quando a quantidade for zero", () => {
    expect(calcularTotal(0, 10)).toBe(0);
});


//TESTE C


test("deve lançar erro quando a quantidade for negativa", () => {
    expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
});




//TESTE D


test("deve calcular o total com preço negativo", () => {
    expect(calcularTotal(2, -5)).toBe(-10);
});



//Questão 7

//TESTE A
test("deve aceitar senha com 8 caracteres", () => {
    expect(validarSenha("abc12345")).toBe(true);
});


//TESTE B


test("deve rejeitar senha com menos de 8 caracteres", () => {
    expect(validarSenha("abc123")).toBe(false);
});


//TESTE C


test("deve rejeitar senha com 10 caracteres", () => {
    expect(validarSenha("abc1234567")).toBe(false);
});


//TESTE D

test("deve aceitar senha com 12 caracteres", () => {
    expect(validarSenha("abc123456789")).toBe(true);
});


//Questão 8-----------------------------------------------------------------------------------------------------------------

//TESTE A

test("deve aprovar pedido quando há estoque suficiente", () => {
    expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
});

//TESTE B

test("deve informar estoque insuficiente", () => {
    expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
});


//TESTE C
test("deve aprovar pedido com quantidade igual ao estoque", () => {
    expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
});


//TESTE D
test("deve retornar estoque insuficiente para quantidade zero", () => {
    expect(verificarEstoque(10, 0)).toBe("Estoque insuficiente");
});


//TESTE E
test("deve lançar erro para quantidade negativa", () => {
    expect(() => verificarEstoque(10, -2))
        .toThrow("Quantidade inválida");
});



//Questão 9---------------------------------------------------------------------------------------------------------------------


test("Teste 1", () => {
    expect(calcularMedia(8, 6)).toBe(7);
});

test("Teste 2", () => {
    expect(calcularMedia(10, 10)).toBe(10);
});

test("Teste 3", () => {
    expect(calcularMedia(0, 8)).toBe(4);
});
test("Teste 4", () => {
    expect(calcularMedia(-1, 8)).toBe(3.5);
});

test("Teste 5", () => {
    expect(calcularMedia(5, 15)).toBe(10);
});








