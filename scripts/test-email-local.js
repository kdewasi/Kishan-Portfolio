
import 'dotenv/config';
import { sendContactEmail } from '../api/utils/email.js';

console.log('🧪 Testing Email Sending Locally...');
console.log(`Config: User=${process.env.EMAIL_USER}, Port=${process.env.EMAIL_PORT}`);

const testMessage = {
    name: 'Test Setup',
    email: process.env.EMAIL_USER, // Send to self
    subject: 'Local System Test',
    message: 'This is a test message to verify the local email configuration.'
};

try {
    await sendContactEmail(testMessage);
    console.log('✅ TEST PASSED: Email sent via Local Node.js');
} catch (error) {
    console.error('❌ TEST FAILED:', error);
}
