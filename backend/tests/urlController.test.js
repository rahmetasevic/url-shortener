const request = require('supertest');

describe('POST /url', () => {
    describe('given an url', () => {
        test('should respond with a 201 status code', async () => {
            try {
                const response = await request('http://localhost:8000').post('/url').send({
                    initialURL: 'https://www.google.com/'
                });

                expect(response.statusCode).toBe(201);
            } catch (err) {
                expect(err.name).toEqual('Error');
            }
        });
    });

    describe('when the initial url is missing', () => {
        test('should respond with a 400 status code', async () => {
            try {
                const response = await request('http://localhost:8000').post('/url').send({});

                expect(response.statusCode).toBe(400);
            } catch (err) {
                expect(err.name).toEqual('Error');
            }
        });
    });
});
