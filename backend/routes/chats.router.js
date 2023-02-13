import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import { userInChat } from '../middleware/userInChat.js';
import { userInGroupChat } from '../middleware/userInGroupChat.js';
import {
  getChats,
  newChat,
  postMessage,
  postGroupMessage,
  getMessages,
  readMessages,
  findOrCreateChat,
  newGroupChat,
  getGroupChats,
} from './controllers/chats.controller.js';

const router = express.Router();

// /chats
router
  .get('/', checkUser, getChats)
  .get('/groupchats', checkUser, getGroupChats)
  .get('/chatmessages/:id', checkUser, getMessages)
  .post('/', checkUser, newChat)
  .post('/newChat', checkUser, findOrCreateChat)
  .post('/newGroupChat', checkUser, newGroupChat)
  .post('/message', checkUser, userInChat, postMessage)
  .post('/groupmessage', checkUser, userInGroupChat, postGroupMessage)
  .put('/message', checkUser, readMessages);

export default router;
