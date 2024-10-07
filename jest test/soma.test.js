const somar = require('./indes');

test('somar 1 + 2 deve ser igual a 3', ()=> {
    
    expect(somar(1,2)).toBe(3);
});