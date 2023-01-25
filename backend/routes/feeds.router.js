import express from 'express';
import { getFeeds, addFeed } from './controllers/feeds.controller.js';
const router = express.Router();

// /feeds
router.get('/', getFeeds);
router.post('/', addFeed);

export default router;
