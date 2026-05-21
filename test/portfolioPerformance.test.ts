import { calculatePortfolioPerformance } from '../src/portfolio/portfolioPerformance';

describe('Portfolio performance calculation', () => {

  it('should return excellent performance for gains above 30%', () => {

    const result = calculatePortfolioPerformance(10000, 16000);

    expect(result.performanceSummary)
      .toBe('Excellent performance! Your investments are doing great.');
  });

  it('should return no change message when values are equal', () => {

    const result = calculatePortfolioPerformance(10000, 10000);

    expect(result.performanceSummary)
      .toBe('No change. Your portfolio is holding steady.');
  });

  it('should return significant loss for losses greater than 10%', () => {

    const result = calculatePortfolioPerformance(10000, 8999.9);

    expect(result.performanceSummary)
      .toBe('Significant loss. Review your portfolio strategy.');
  });

});