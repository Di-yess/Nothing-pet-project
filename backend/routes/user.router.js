import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import {
  getUser,
  updateUser,
  logoutUser,
  deleteUser,
  getUserById,
} from './controllers/user.controller.js';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();

// /user
router.get('/', getUser);
router.get('/:id', getUserById);
router.put('/', checkUser, upload.single('avatar'), updateUser);
router.delete('/', checkUser, deleteUser);

export default router;
