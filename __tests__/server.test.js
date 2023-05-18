const supertest = require('supertest');
const { server } = require('../src/server');
const request = supertest(server);
const { sequelize } = require('../src/models/index')

beforeAll(async () => {
    await sequelize.sync();
    await request.post('/food').send({
        type: "apple", color: "red"
    });
});

afterAll(async () => {
    await sequelize.drop
});

describe('/food', () => {
    it('create', async () => {
        const response = await request.post('/food').send({
            type: "apple", color: "red"
        });
        expect(response.status).toEqual(200);
    });

    it('read all', async () => {

        const response = await request.get('/food');
        expect(response.status).toEqual(200);
    });

    it('read one', async () => {
        const response = await request.get('/food/1');
        expect(response.status).toEqual(200);

    });

    it.skip('update', async () => {
        await request.post('/food').send({
            type: "apple", color: "red"
        });
        const response = await request.put('/food/1').send({ type: "bannana", color: "green" });
        expect(response.status).toBe(200);
    });


    it.skip('delete', async () => {
        await request.post('/food').send({
            type: "apple", color: "red"
        });
        const response = await request.delete('/food/1');
        expect(response.status).toEqual(200);
        expect(response.body).toBe('Item Deleted');
    });


    it('bad route', async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });



    it('bad method', async () => {
        const response = await request.patch('/food');
        expect(response.status).toEqual(404);

    });

});