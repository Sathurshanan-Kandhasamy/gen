import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/error.js';
import userRoutes from './routes/user.js';
const port = process.env.PORT;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (request, response) => {
  response.send('API is running.');
});

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}.`));
