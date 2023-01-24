import express from 'express';
import { getFeeds } from './controllers/feeds.controller.js';
const router = express.Router();

// /feeds
router.get('/', getFeeds);

export default router;
