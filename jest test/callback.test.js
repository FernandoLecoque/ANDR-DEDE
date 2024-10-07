const executarCallback = require('./callback');

test('deve chamar o callback com o valor "Executado"',() =>{
    
    const mockCallback = jest.fn();
    
    executarCallback(mockCallback);
    
    expect(mockCallback).toHaveBeenCalledTimes(1);
    
    expect(mockCallback).toHaveBeenCalledWith('Executado');

});