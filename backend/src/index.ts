import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Zephyrus Music API is running' });
});

app.get('/api/music', (req: Request, res: Response) => {
  res.json({ message: 'Music endpoint - coming soon' });
});

app.get('/api/music/:id', (req: Request, res: Response) => {
  res.json({ message: 'Music detail endpoint - coming soon' });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// ⬇️ INI yang paling penting — export untuk Vercel serverless
module.exports = app;

// Hanya listen kalau dijalankan lokal (bukan di Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.BACKEND_PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🎵 Zephyrus Music API running on port ${PORT}`);
  });
}
