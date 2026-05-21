import request from 'supertest';
import app from '../src/app';

describe('Root endpoint', () => {
  it('should return API running message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Backend Assignment 1 API is running',
    });
  });
});