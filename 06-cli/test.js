const { deepEqual, ok } = require('assert');

const DEFAULT_ITEM_CADASTRAR = { id: 1, nome: 'Flash', poder: 'Speed' };

const DEFAULT_ITEM_ATUALIZAR = { id: 2, nome: 'Lanterna Verde', poder: 'Energia do Anel' };

const database = require('./database');

describe('Suite de manipulação de Heróis', () => {
	before(async () => {
		await database.remover();
		await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
		await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
	});

	it('deve pesquisar um herói usando arquivos', async () => {
		const expected = DEFAULT_ITEM_CADASTRAR;

		const [resultado] = await database.listar(expected.id);

		deepEqual(resultado, expected);
	});

	it('deve cadastrar um herói, usando arquivos', async () => {
		const expected = DEFAULT_ITEM_CADASTRAR;
		const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);

		const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);

		deepEqual(atual, expected);
	});

	it('deve remover um herói por id', async () => {
		const expected = true;
		const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
		/* const resultado = await database.remover(); */

		deepEqual(resultado, expected);
	});

	it('deve atualizar um héroi por id', async () => {
		const expected = {
			...DEFAULT_ITEM_ATUALIZAR,
			nome: 'Batman',
			poder: 'Dinheiro'
		}

		const novoDado = {
			nome: 'Batman',
			poder: 'Dinheiro'
		}

		await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);

		const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

		deepEqual(resultado, expected);
	});
});