import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { Express } from 'express';
import config from './config';
import chatsRouter from './routes/chats.router.js';
import feedsRouter from './routes/feeds.router.js';
import indexRouter from './routes/index.router.js';
import userRouter from './routes/user.router.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

//middleware + confign
config(app);
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

//use Route
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/feeds', feedsRouter);
app.use('/chats', chatsRouter);
app.use('*', (req, res) => res.status(404).json('nope'));

app.listen(PORT, () => console.log(`port started on ${PORT}`));
