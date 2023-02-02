import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import {
  getChats,
  newChat,
  postMessage,
  getMessages,
} from './controllers/chats.controller.js';

const router = express.Router();

// /chats
router.get('/', checkUser, getChats);
router.post('/', checkUser, newChat);
router.post('/message', checkUser, postMessage);
router.get('/chatmessages/:id', checkUser, getMessages);

export default router;
