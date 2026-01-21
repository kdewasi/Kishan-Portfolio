import express from 'express';
import rateLimit from 'express-rate-limit';
import { submitContact, getMessages, markAsRead } from '../controllers/contact.js';

const router = express.Router();

// Rate limiting for contact form (prevent spam)
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 requests per hour per IP
    message: {
        success: false,
        error: 'Too many messages sent. Please try again later.'
    }
});

// Public routes
router.post('/', contactLimiter, submitContact);

// Admin routes (add auth middleware later)
router.get('/', getMessages);
router.patch('/:id/read', markAsRead);

export default router;
