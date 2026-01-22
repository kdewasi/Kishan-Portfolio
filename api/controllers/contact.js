import Message from '../models/Message.js';
import { sendContactEmail } from '../utils/email.js';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Please provide name, email, and message'
            });
        }

        const newMessage = await Message.create({
            name,
            email,
            subject: subject || 'No Subject',
            message,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
        });

        // 3. (DISABLED due to Render Blocks) Send Email Notification
        // try {
        //   await sendContactEmail(newMessage);
        // } catch (emailError) {
        //   console.error('Email sending failed (Internal):', emailError);
        //   // Continue execution - don't fail the request if email fails, since we have it in DB
        // }

        res.status(201).json({
            success: true,
            message: 'Your message has been sent successfully!',
            data: { id: newMessage._id }
        });

    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error. Please try again later.'
        });
    }
};

// @desc    Get all messages (Admin)
// @route   GET /api/contact
// @access  Private
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: messages.length,
            data: messages
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
};

// @desc    Mark message as read
// @route   PATCH /api/contact/:id/read
// @access  Private
export const markAsRead = async (req, res) => {
    try {
        const message = await Message.findByIdAndUpdate(
            req.params.id,
            { isRead: true },
            { new: true }
        );

        if (!message) {
            return res.status(404).json({
                success: false,
                error: 'Message not found'
            });
        }

        res.status(200).json({
            success: true,
            data: message
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
};
