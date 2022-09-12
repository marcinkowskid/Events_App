import express, { Router } from 'express';
const router: Router = express.Router();

import { createEvent } from '../controllers/event';

router.route('/').post(createEvent);

export default router;
