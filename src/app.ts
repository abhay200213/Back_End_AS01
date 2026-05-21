import express, { Request, Response } from 'express';
import healthRoutes from './api/v1/routes/healthRoutes';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Backend Assignment 1 API is running',
  });
});

app.use('/api/v1', healthRoutes);

export default app;