const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres());

describe('Postgres Strategy', function ()  {
    this.timeout(Infinity);
    
    it('PostgresSQL Connection', async () => {
        const expected = true;
        const result = await context.isConected();

        assert.deepEqual(result, expected);
    });
});