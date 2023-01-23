import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import sessionFileStore from 'session-file-store';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FileStore = sessionFileStore(session);

function config(app) {
  const { SESSION_SECRET } = process.env;
  //cookie + сессии
  const sessionConfig = {
    name: 'user_sid',
    store: new FileStore(),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    },
  };
  //статика
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.urlencoded({ extended: true }));

  app.use(session(sessionConfig));
}

export default config;
