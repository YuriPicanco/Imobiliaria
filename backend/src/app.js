import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/global/errorHandler';
import 'express-async-errors'

const app = express();
app.use(cors());
app.use(express.json());


app.use(errorHandler);
export default app;