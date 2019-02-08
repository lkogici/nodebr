const service = require('./service');

async function main() {
    try {
        const results = await service.obterPessoas('a');
        /* const names = []; */

        /* console.time('foreach');
        results.results.forEach(function (item) {
            names.push(item.name);
        });
        console.timeEnd('foreach'); */

        /* const names = results.results.map(function (pessoa) {
            return pessoa.name;
        }); */

        console.time('map');
        const names = results.results.map((pessoa) => pessoa.name);
        console.timeEnd('map');

        console.log('names', names);

    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main();