import express, { Request, Response } from 'express';
import healthRoutes from './api/v1/routes/healthRoutes';
import portfolioRoutes from './api/v1/routes/portfolioRoutes';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Backend Assignment 1 API is running',
  });
});

app.use('/api/v1', healthRoutes);
app.use('/api/v1', portfolioRoutes);

export default app;