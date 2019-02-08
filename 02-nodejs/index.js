/*  
    0 - Obter um usuário
    1 - Obter o número do telefone de um usuário a partir de seu Id
    2 - Obter o endereço de um usuário pelo Id
*/

function obterUsuario(callback){
    setTimeout( () => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout( () => {
        return callback(null,{
            numero: '4002-8922',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback){
    setTimeout( () => {
        return callback(null, {
            tipo: 'Rua',
            logradouro: 'São Paulo',
            numero: 999
        });
    }, 2000);
}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario);
}

obterUsuario(function resolverUsuario(erro, usuario) {
    if(erro){
        console.error("Deu ruim com usuário", erro);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(erro2, telefone){
        if(erro2){
            console.error("Deu ruim com telefone", erro2);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(erro3, endereco){
            if(erro3){
                console.error("Deu ruim com endereço", erro3);
                return;
            }

            console.log(`
                Nome: ${usuario.nome}
                Data de nascimento: ${usuario.dataNascimento}
                Telefone: (${telefone.ddd}) ${telefone.numero}
                Endereço: ${endereco.tipo} ${endereco.logradouro}, ${endereco.numero}
            `);
        });
    });
});