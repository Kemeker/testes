
const multiplica = require('../Codigos/multiplica')

test('multiplica 1 * 2 deve ser igual a 2', ()=>{
    expect(multiplica(1, 2)).toBe(2)
})

test('multiplica 3 * 3 deve ser igual a 9', ()=>{
    expect(multiplica(3, 3)).toBe(9)
})

test('multiplica 1 * 0 deve ser igual a 0', ()=>{
    expect(multiplica(1, 0)).toBe(0)
})

test('multiplicar 1 * -1 deve ser igual a -1', ()=>{
    expect(multiplica(1, -1)).toBe(-1)
})