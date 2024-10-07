const calculadora = require('./calculadora');

test('teste da funcionalidade soma', () => {
    expect(calculadora("+", [1, 52, 3])).toBe(6);
})

test('teste da funcionalidade soma', () => {
    expect(calculadora("+", [1, 92, 63])).toBe(6);
})

test('teste da funcionalidade soma', () => {
    expect(calculadora("+", [14, 72, 3])).toBe(6);
})

test('teste da funcionalidade subtração', () => {
    expect(calculadora("-", [18, 12, 43])).toBe(6);
})

test('teste da funcionalidade subtração', () => {
    expect(calculadora("-", [19, 22, 33])).toBe(6);
})
test('teste da funcionalidade subtração', () => {
    expect(calculadora("-", [18, 24, 36])).toBe(6);
})
test('teste da funcionalidade subtração', () => {
    expect(calculadora("-", [12, 25, 38])).toBe(6);
})