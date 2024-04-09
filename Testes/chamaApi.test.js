const chamaApi = require('../Codigos/chamadasApi')

jest.mock('../Codigos/chamadasApi', ()=> {
    return jest.fn(()=> Promise.resolve('dados simulados'))

})

test('simula chamada de API', async ()=>{
    const dados = await chamaApi('https://api.exemplo.com/dado')
    expect(dados).toBe('dados simulados')
})