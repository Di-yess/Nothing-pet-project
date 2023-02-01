import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import {
  getChats,
  newChat,
  postMessage,
} from './controllers/chats.controller.js';

const router = express.Router();

// /chats
router.get('/', checkUser, getChats);
router.post('/', checkUser, newChat);
router.post('/message', checkUser, postMessage);

export default router;
