//QUESTÂO  1

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


//Questão 2


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


//Questão 3  

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

