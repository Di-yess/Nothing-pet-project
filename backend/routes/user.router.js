import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import {
  getUser,
  updateUser,
  logoutUser,
  deleteUser,
} from './controllers/user.controller.js';
const router = express.Router();

// /user
router.get('/', getUser);
router.get('/logout', logoutUser);
router.put('/', updateUser);
router.delete('/', checkUser, deleteUser);

export default router;
