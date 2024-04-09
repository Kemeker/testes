const buscaUsuario = require('../Codigos/buscaUsuario')

test('busca o usuario com id 1', async ()=>{
    const usuario = await buscaUsuario(1)
    expect(usuario.id).toBe(1)
})