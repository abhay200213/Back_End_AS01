import { Router, Request, Response } from 'express';
import { calculatePortfolioPerformance } from '../../../portfolio/portfolioPerformance';

const router = Router();

router.get('/portfolio/performance', (req: Request, res: Response) => {
  const initialInvestment = Number(req.query.initialInvestment);
  const currentValue = Number(req.query.currentValue);

  const result = calculatePortfolioPerformance(initialInvestment, currentValue);

  res.status(200).json(result);
});

export default router;