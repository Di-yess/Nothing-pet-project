import * as dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';

const FileStore = sessionFileStore(session);

function config(app: Express) {
  const { SESSION_SECRET } = process.env;
  //cookie + сессии
  const sessionConfig = {
    name: 'user_sid',
    store: new FileStore(),
    secret: SESSION_SECRET ?? 'secret word',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    },
  };
  //статика
  app.use(express.json());
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));

  app.use(session(sessionConfig));
}

export default config;
