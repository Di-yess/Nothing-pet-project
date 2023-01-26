import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import {
  getUser,
  updateUser,
  logoutUser,
  deleteUser,
  getUserById,
} from './controllers/user.controller.js';
const router = express.Router();

// /user
router.get('/', getUser);
router.get('/:id', getUserById);
router.get('/logout', checkUser, logoutUser);
router.put('/', checkUser, updateUser);
router.delete('/', checkUser, deleteUser);

export default router;
