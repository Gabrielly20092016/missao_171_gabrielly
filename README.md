# Nome: Gabrielly Viória


# Questão 1


## A Explique o que a função faz

A função `calcularDesconto` serve para calcular o desconto de um produto a partir do preço e da porcentagem informada.
Primeiro, ela verifica se os valores estão corretos. Caso o preço seja menor ou igual a zero, ou a porcentagem seja menor que 0% ou maior que 100%, ela apresenta uma mensagem de erro.
Se estiver tudo certo, a função calcula o valor do desconto e diminui esse valor do preço original, mostrando quanto o cliente vai pagar pelo produto.


## B - Cenários de testes

## Teste 01 -– Desconto válido de 10%

- Valor de entrada: calcularDesconto(100, 10)
- Resultado esperado: 90, pois o desconto será de R$ 10,00.



## Test02 -- Desconto de 100%

- valor de entrada: calcularDesconto(200, 100)
- Resultado esperado: 0, pois o produto ficará totalmente descontado.

## Test03 -- Valor inválido

- Valor de entrada: calcularDesconto(-50, 10)
- Resultado esperado: 0, pois o produto ficará totalmente descontado.


## C  -  Testes unitários

// Agrupa os testes da função calcularDesconto
describe('Testes da função calcularDesconto', () => {

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


## QUESTÃO 2



## A 

- A função verificarAprovacao(nota) verifica se o aluno foi aprovado ou reprovado de acordo com sua nota. Primeiro, confere se a nota está entre 0 e 10. Se estiver fora desse intervalo, apresenta um erro. Depois, verifica se a nota é maior ou igual a 7, retornando "Aprovado". Caso seja menor que 7, retorna "Reprovado".


## B  Cenários de teste

| Teste | Valor de entrada | Resultado esperado |
|:---:|:---:|:---|
| 1 | 8 | Aprovado |
| 2 | 5 | Reprovado |
| 3 | 7 | Aprovado |
| 4 | 11 | Erro: Nota inválida |



## C Testes Unitários

const verificarAprovacao = require('./verificarAprovacao');

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

## D 

Testar apenas uma nota de aprovação não é suficiente, pois a função precisa funcionar em diferentes situações. Também é importante testar notas de reprovação e valores inválidos para garantir que tudo esteja funcionando corretamente e que os resultados sejam apresentados como esperado.




## QUESTÃO 3 – Testes unitários com Jest

## A

Para o cadastro ser válido, o nome precisa estar preenchido, a idade deve ser entre 18 e 100 anos e o e-mail precisa conter o @. Se todos os dados estiverem corretos, o cadastro será aceito. Caso algum deles esteja errado ou vazio, a função retorna false.


## B

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


## C

Se apenas um dos dados estiver inválido, a função retorna false, mesmo que os outros dois estejam corretos. Isso acontece porque todos os campos precisam atender às condições para que o cadastro seja considerado válido.