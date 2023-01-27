import express from 'express';
import { checkUser } from '../middleware/checkUser.js';
import { userLogin, userRegister } from './controllers/login.controller.js';
import { logoutUser } from './controllers/user.controller.js';

const router = express.Router();

router.get('/logout', checkUser, logoutUser);
router.post('/login', userLogin);
router.post('/register', userRegister);

export default router;
