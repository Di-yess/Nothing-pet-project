import * as dotenv from 'dotenv';
dotenv.config();

//config
import express from 'express';
import config from './appconfig.js';
import indexRouter from './routes/index.router.js';
import userRouter from './routes/user.router.js';
import feedsRouter from './routes/feeds.router.js';

const app = express();
const PORT = process.env.PORT || 5000;

//middleware + confign
config(app);

//use Route
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/feeds', feedsRouter);

app.listen(PORT, () => console.log(`port started on ${PORT}`));
