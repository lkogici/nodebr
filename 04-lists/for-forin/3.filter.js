const { obterPessoas } = require('./service');

/* 
const item = {
    nome: 'Lucas',
    idade: 21
}

const { nome } = item;

console.log('nome', nome); 
*/

async function main() {
    try {

        const { results } = await obterPessoas('a');

        //não encontrou == -1
        //encontrou == posição no array
        const familiaLars = results.filter(function (item) {
            const result = item.name.toLowerCase().indexOf('lars') !== -1;
            return result;
        });

        const names = familiaLars.map(pessoa => pessoa.name);

        console.log('names', names);

    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main();