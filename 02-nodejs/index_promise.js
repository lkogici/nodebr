/*  
    0 - Obter um usuário
    1 - Obter o número do telefone de um usuário a partir de seu Id
    2 - Obter o endereço de um usuário pelo Id
*/

function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    });
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                numero: '4002-8922',
                ddd: 11
            })
        }, 2000);
    });
}

function obterEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                tipo: 'Rua',
                logradouro: 'São Paulo',
                numero: 999
            });
        }, 2000);
    });
}

async function main() {
    try{
        console.time('medida-promise');

        const usuario = await obterUsuario();

        /* const telefone = await obterTelefone();
        const endereco = await obterEndereco(); */
    
        const result = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ]);
    
        const telefone = result[0];
        const endereco = result[1];

        console.timeEnd('medida-promise');
    
        console.log(`
            Nome: ${usuario.nome}
            Data de nascimento: ${usuario.dataNascimento}
            Telefone: (${telefone.ddd}) ${telefone.numero}
            Endereço: ${endereco.tipo} ${endereco.logradouro}, ${endereco.numero}
        `);
    }catch(error){
        console.error("Deu ruim: ", error);
    }
}

main();