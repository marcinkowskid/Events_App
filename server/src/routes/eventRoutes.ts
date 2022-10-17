import express, { Router } from 'express';
const router: Router = express.Router();

import { createEvent } from '../controllers/event';

// Auth
import { auth } from '../middleware/auth';

router.post('/', auth, createEvent);

export default router;
