import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (request, response) => {
  response.send('API is running.');
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
