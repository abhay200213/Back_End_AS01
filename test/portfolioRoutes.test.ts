import request from 'supertest';
import app from '../src/app';

describe('Portfolio performance endpoint', () => {
  it('should return excellent performance for a strong gain', async () => {
    const response = await request(app)
      .get('/api/v1/portfolio/performance')
      .query({
        initialInvestment: 10000,
        currentValue: 16000,
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      initialInvestment: 10000,
      currentValue: 16000,
      profitOrLoss: 6000,
      percentageChange: 60,
      performanceSummary: 'Excellent performance! Your investments are doing great.',
    });
  });

  it('should return no change when investment value is unchanged', async () => {
    const response = await request(app)
      .get('/api/v1/portfolio/performance')
      .query({
        initialInvestment: 10000,
        currentValue: 10000,
      });

    expect(response.status).toBe(200);
    expect(response.body.performanceSummary).toBe(
      'No change. Your portfolio is holding steady.'
    );
  });
});