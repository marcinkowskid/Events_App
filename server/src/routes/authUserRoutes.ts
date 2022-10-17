import express, { Router } from 'express';
const router: Router = express.Router();

import { registerUser, loginUser } from '../controllers/authUser';

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

export default router;
