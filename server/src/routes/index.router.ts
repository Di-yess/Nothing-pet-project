import express from 'express';
import { userLogin, userRegister } from '../controllers/login.controller';
import { checkUser } from '../middleware/checkUser';
import { logoutUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/logout', checkUser, logoutUser);
router.post('/login', userLogin);
router.post('/register', userRegister);

export default router;
