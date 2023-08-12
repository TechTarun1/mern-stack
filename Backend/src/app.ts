import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
import { Server } from 'http';
import createHttpError from 'http-errors';
import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const app: Application = express();
const cors = require('cors');
const USerRoutes = require('./routes/UserRoutes');
const TodoRoutes = require('./routes/TodoRoutes');
const ExpenseRoutes = require('./routes/ExpenseRoutes');
const BookRoutes = require('./routes/BookRoutes');

app.use(cors('*'))
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/learn-mern').then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello from Tarun')
})

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    res.send({ status: 'Ok' })
})

app.use('/user', USerRoutes);
app.use('/todo', TodoRoutes);
app.use('/expense', ExpenseRoutes);
app.use('/book', BookRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound())
})

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
}

app.use(errorHandler)

const PORT: Number = Number(process.env.PORT) || 4000

const server: Server = app.listen(PORT, () => console.log(`app is running on ${PORT}`))