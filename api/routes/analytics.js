import express from 'express';
import { trackPageView, getAnalyticsSummary } from '../controllers/analytics.js';

const router = express.Router();

// Public routes
router.post('/pageview', trackPageView);

// Admin routes (add auth middleware later)
router.get('/summary', getAnalyticsSummary);

export default router;
