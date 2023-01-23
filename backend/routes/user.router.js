import express from 'express';
import {
  getUser,
  updateUser,
  logoutUser,
} from './controllers/user.controller.js';
const router = express.Router();

// /user
router.get('/', getUser);
router.get('/logout', logoutUser);
router.put('/', updateUser);

export default router;
