// Imports
import express, { Application } from 'express';
import { config } from 'dotenv';
config();
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler';
import { connectDB } from './config/db';
import eventRoutes from './routes/eventRoutes';
import authUserRoutes from './routes/authUserRoutes';

// Variables
const port = process.env.PORT || 5000;

// App
const app: Application = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/users', authUserRoutes);

// Error handler middleware
app.use(errorHandler);

// Start server and connect to database
if (process.env.NODE_ENV !== 'test') {
  try {
    connectDB().then(() => {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    });
  } catch (err) {
    console.log(`Error while connecting to the server: ${err}`);
  }
}

export default app;
