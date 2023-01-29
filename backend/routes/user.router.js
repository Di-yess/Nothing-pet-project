import express from 'express';
import multer from 'multer';
import { checkUser } from '../middleware/checkUser.js';
import {
  deleteUser,
  getAllUsers,
  getUser,
  getUserById,
  updateUser,
} from './controllers/user.controller.js';
const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();

// /user
router.get('/', getUser);
router.get('/all', getAllUsers);
router.get('/all/:id', getUserById);
router.put('/', checkUser, upload.single('avatar'), updateUser);
router.delete('/', checkUser, deleteUser);

export default router;
