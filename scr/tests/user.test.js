const request = require('supertest');
const app = require('../index');

describe('User Management', () => {
    it('should register a user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
        expect(res.statusCode).toEqual(201);
    });

    it('should login a user', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({ email: 'test@example.com', password: 'password123' });
        expect(res.statusCode).toEqual(200);
    });
});