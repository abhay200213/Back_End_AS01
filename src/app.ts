import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Backend Assignment 1 API is running',
  });
});

export default app;