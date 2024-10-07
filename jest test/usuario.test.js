const criarUsuario = require("./criarUsuario")

test('deve criar um usuario com nome e idade', ()=> {
    const usuario = criarUsuario('João',30);

    expect(usuario).toEqual({
        nome: 'João',
        idade: 30
    });
});