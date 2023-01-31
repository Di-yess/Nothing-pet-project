import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import { getChats, newChat } from './controllers/chats.controller.js';

const router = express.Router();

// /chats
router.get('/', checkUser, getChats);
router.post('/', checkUser, newChat);

export default router;
