# Nome: Gabrielly Viória
## Missão 171 
## DATA:11/11/26


# Questão 1


## A) Explique o que a função faz

A função `calcularDesconto` serve para calcular o desconto de um produto a partir do preço e da porcentagem informada.
Primeiro, ela verifica se os valores estão corretos. Caso o preço seja menor ou igual a zero, ou a porcentagem seja menor que 0% ou maior que 100%, ela apresenta uma mensagem de erro.
Se estiver tudo certo, a função calcula o valor do desconto e diminui esse valor do preço original, mostrando quanto o cliente vai pagar pelo produto.


## B)- Cenários de testes

## Teste 01 -– Desconto válido de 10%

- Valor de entrada: calcularDesconto(100, 10)
- Resultado esperado: 90, pois o desconto será de R$ 10,00.



## Test02 -- Desconto de 100%

- valor de entrada: calcularDesconto(200, 100)
- Resultado esperado: 0, pois o produto ficará totalmente descontado.

## Test03 -- Valor inválido

- Valor de entrada: calcularDesconto(-50, 10)
- Resultado esperado: 0, pois o produto ficará totalmente descontado.


## C) -  Testes unitários

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



## A)

- A função verificarAprovacao(nota) verifica se o aluno foi aprovado ou reprovado de acordo com sua nota. Primeiro, confere se a nota está entre 0 e 10. Se estiver fora desse intervalo, apresenta um erro. Depois, verifica se a nota é maior ou igual a 7, retornando "Aprovado". Caso seja menor que 7, retorna "Reprovado".


## B  Cenários de teste

| Teste | Valor de entrada | Resultado esperado |
|:---:|:---:|:---|
| 1 | 8 | Aprovado |
| 2 | 5 | Reprovado |
| 3 | 7 | Aprovado |
| 4 | 11 | Erro: Nota inválida |



## C) Testes Unitários

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

## D) 

Testar apenas uma nota de aprovação não é suficiente, pois a função precisa funcionar em diferentes situações. Também é importante testar notas de reprovação e valores inválidos para garantir que tudo esteja funcionando corretamente e que os resultados sejam apresentados como esperado.




## QUESTÃO 3 – Testes unitários com Jest

## A)

Para o cadastro ser válido, o nome precisa estar preenchido, a idade deve ser entre 18 e 100 anos e o e-mail precisa conter o @. Se todos os dados estiverem corretos, o cadastro será aceito. Caso algum deles esteja errado ou vazio, a função retorna false.


## B)

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


## C ) Explicação

Se apenas um dos dados estiver inválido, a função retorna false, mesmo que os outros dois estejam corretos. Isso acontece porque todos os campos precisam atender às condições para que o cadastro seja considerado válido.


## Questão 4


## A) 6 casos de Testes

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

## B ) 

No caso de teste 3, deve retornar zero por que o código estabelece que compras com o valor maior valor ou igual a 200 não pagam frete.   Como a compra atingiu  200 ela atende a esse critério.


## Questão 5


## A)  

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

## B) 

Por que nesse teste só aceita números, e quando colocamos um número "15" com aspas como mostra o exemplo, vai dar erro pois ele vai entender como string por causa das aspas, tudo que tiver copm aspas ele vai pensar que e texto 




## Questão 6

## A) 

Testes Unitários são verificões automatizadas que avaliam o funcionamento de cada parte do código, são importantes pois ele testa cad parte do código e verifica se vai dar erro sim ou não, para que quando for lançado o site ou aplicativo não apresente erros ou falhas 


## B) 

Teste A – PASSA

A função recebe a quantidade 3 e o preço 10. Ao multiplicar os valores, o resultado é 30, que corresponde ao esperado.


Teste B – PASSA

A quantidade é zero e o preço é 10. Como a função permite quantidade igual a zero, o resultado da multiplicação é zero.


Teste C – PASSA

A quantidade é negativa (-2). A função identifica que o valor é inválido e lança o erro esperado: "Valores inválidos".

Teste D – FALHA

O preço unitário é negativo (-5). A função identifica que o valor é inválido e lança um erro, mas o teste espera que o resultado seja -10.


## Resumo dos resultados

| Teste | Resultado |
|:-----:|:---------:|
| A     | PASSA     |
| B     | PASSA     |
| C     | PASSA     |
| D     | FALHA     |




## C )
O teste D apresenta uma expectativa incompatível com a função, pois espera que seja realizado o cálculo mesmo com o preço unitário negativo. Entretanto, o código possui uma condição que não permite valores negativos. Dessa forma, ao identificar o preço inválido, a função lança uma exceção em vez de retornar o resultado esperado de -10.


## Questão 7


## A)

Teste A – PASSA: a senha possui exatamente 8 caracteres, atendendo à condição estabelecida.

Teste B – PASSA: a senha possui apenas 6 caracteres, por isso é rejeitada pela função.

Teste C – FALHA: a senha possui 10 caracteres, então a função retorna true, mas o teste espera false.

Teste D – PASSA: a senha possui 12 caracteres, sendo aceita pela função.

## Resumo dos resultados

| Teste | Resultado |
|:-----:|:---------:|
| A     | PASSA     |
| B     | PASSA     |
| C     | FALHA     |
| D     | PASSA     |



## B) 

O problema do teste C está no resultado esperado, pois a senha possui 10 caracteres e atende ao requisito mínimo de 8 caracteres. Dessa forma, a função retorna true, mas o teste espera false, causando a falha.


## C)

Não. A função só verifica se a senha tem pelo menos 8 caracteres. Ela não confere se tem letras maiúsculas, números ou caracteres especiais, pois não foi programada para verificar essas coisas.

## Questão 8


## A) Teste A

`expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");`

**Resultado: PASSA**

O estoque possui 20 unidades e foram solicitadas apenas 5. Como existe quantidade suficiente, o pedido é aprovado.

### Teste B

`expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");`

**Resultado: PASSA**

Foram solicitadas 10 unidades, mas o estoque possui apenas 5. Por isso, a função informa que o estoque é insuficiente.

### Teste C

`expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");`

**Resultado: PASSA**

A quantidade solicitada é igual ao estoque disponível. Como o pedido não ultrapassa a quantidade em estoque, ele é aprovado.

### Teste D

`expect(verificarEstoque(10, 0)).toBe("Estoque insuficiente");`

**Resultado: FALHA**

A função não aceita uma quantidade igual a zero e apresenta o erro "Quantidade inválida". Porém, o teste espera que seja retornada a mensagem "Estoque insuficiente".

### Teste E

`expect(() => verificarEstoque(10, -2)).toThrow("Quantidade inválida");`

**Resultado: PASSA**

A quantidade solicitada é negativa, por isso a função identifica o valor como inválido e apresenta o erro esperado.


## Resumo dos resultados

| Teste | Resultado |
|:-----:|:---------:|
| A     | PASSA     |
| B     | PASSA     |
| C     | PASSA     |
| D     | FALHA     |
| E     | PASSA     |


## B)

O teste C passa porque o estoque tem exatamente 10 unidades e o cliente pediu as mesmas 10. Como tem a quantidade necessária, o pedido é aprovado normalmente.


## C)  

do resultado da função. mais informal
O problema é que o teste espera que apareça "Estoque insuficiente" quando a quantidade é zero, mas o código entende que zero é inválido e apresenta um erro. Por isso, o teste acaba falhando.


## Questão 9


## A)

Teste 1 – PASSA: As notas são 8 e 6. A média é 7, que é o resultado esperado pelo teste.

Teste 2 – PASSA: As duas notas são 10. A média também é 10, então o teste passa.

Teste 3 – PASSA: Uma das notas é zero e a outra é 8. Como zero é uma nota válida, a média é 4.

Teste 4 – FALHA: A primeira nota é -1, que é inválida. A função apresenta o erro "Notas inválidas", em vez de retornar 3,5 como o teste espera.

Teste 5 – FALHA: A segunda nota é 15, que está acima do limite permitido. Por isso, a função apresenta o erro "Notas inválidas", em ve

### Resultado dos testes

| Teste | Resultado | Status |
|-------|-----------|--------|
| 1     | PASS      | Aprovado |
| 2     | PASS      | Aprovado |
| 3     | PASS      | Aprovado |
| 4     | FAIL      | Reprovado |
| 5     | FAIL      | Reprovado |



## B) 3 Casos de Test

// Teste 6: Deve calcular a média com duas notas iguais
test("Teste 6", () => {
    expect(calcularMedia(7, 7)).toBe(7);
});

// Teste 7: Deve apresentar erro quando a primeira nota for maior que 10
test("Teste 7", () => {
    expect(() => calcularMedia(12, 8))
        .toThrow("Notas inválidas");
});

// Teste 8: Deve apresentar erro quando a segunda nota for negativa
test("Teste 8", () => {
    expect(() => calcularMedia(8, -2))
        .toThrow("Notas inválidas");
});



