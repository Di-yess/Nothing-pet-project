import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import {
  getChats,
  newChat,
  postMessage,
  getMessages,
  readMessages,
} from './controllers/chats.controller.js';

const router = express.Router();

// /chats
router.get('/', checkUser, getChats);
router.get('/chatmessages/:id', checkUser, getMessages);
router.post('/', checkUser, newChat);
router.post('/message', checkUser, postMessage);
router.put('/message', checkUser, readMessages);

export default router;
