import request from 'supertest';
import app from '../src/app';

describe('Health check endpoint', () => {
  it('should return API health status and version', async () => {
    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'OK',
      version: '1.0.0',
      message: 'API is healthy',
    });
  });
});