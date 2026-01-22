
import express from 'express';
import { sendContactEmail } from '../utils/email.js';

const router = express.Router();

router.get('/test-email', async (req, res) => {
    try {
        console.log('🧪 Triggering manual email test...');

        await sendContactEmail({
            name: 'Debug Test',
            email: process.env.EMAIL_USER,
            subject: 'Render Debug Test',
            message: 'If you are reading this, the email service is working!'
        });

        res.status(200).json({
            success: true,
            message: 'Email sent successfully!',
            config: {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                user: process.env.EMAIL_USER ? 'Set' : 'Missing'
            }
        });
    } catch (error) {
        console.error('Test email failed:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            code: error.code,
            command: error.command,
            stack: error.stack,
            config: {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT
            }
        });
    }
});

export default router;
