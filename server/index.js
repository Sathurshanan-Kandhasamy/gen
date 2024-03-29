import path from 'path';
import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import connectToDatabase from './configuration/database.js';
import { notFound, errorHandler } from './middleware/error.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import uploadRoute from './routes/upload.js';
const port = process.env.PORT;

connectToDatabase();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (request, response) => {
  response.send('API is running.');
});

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoute);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}.`));
