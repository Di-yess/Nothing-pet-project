import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import {
  getChats,
  newChat,
  postMessage,
  getMessages,
  readMessages,
  findOrCreateChat,
  newGroupChat,
  getGroupChats,
} from './controllers/chats.controller.js';

const router = express.Router();

// /chats
router.get('/', checkUser, getChats);
router.get('/groupchats', checkUser, getGroupChats);
router.get('/chatmessages/:id', checkUser, getMessages);
router.post('/', checkUser, newChat);
router.post('/newChat', checkUser, findOrCreateChat);
router.post('/newGroupChat', checkUser, newGroupChat);
router.post('/message', checkUser, postMessage);
router.put('/message', checkUser, readMessages);

export default router;
