// buscaUsuario.js

function buscaUsuario(id){
    return new Promise((resolve, rejects) => {
        setTimeout(()=>{
            const usuario = {id: id, nome: 'Joao'} // simulaçao de um usuario
            resolve(usuario)
        }, 100) // simula uma latencia de rede 100ms
    })

}

module.exports = buscaUsuario