import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Loader2 } from 'lucide-react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Prepare template parameters matching your EmailJS template variables
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        try {
            // 1. Send Email via EmailJS (Frontend)
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            // 2. Save Message to Database (Backend) - Optional but good for backup
            // We don't await this or fail if it fails, ensuring the user sees "Success" if email sent
            fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).catch(err => console.error("Failed to save to DB:", err));

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Email</h4>
                                    <a href="mailto:kishandewasi606@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                                        kishandewasi606@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Toronto, Canada
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <FaGithub size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Github</h4>
                                    <a href="https://github.com/kdewasi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                                        github.com/kdewasi
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                <a href="https://github.com/kdewasi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-dark-paper rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <FaGithub size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/kishan-dewasi-09724b251/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-dark-paper rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href="https://www.instagram.com/kishan_dewasi_900/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-dark-paper rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <FaInstagram size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white dark:bg-dark-paper p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full py-4 rounded-lg font-semibold text-white transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2 ${status === 'loading'
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25'
                                    }`}
                            >
                                {status === 'loading' ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-center font-medium"
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-center font-medium"
                                >
                                    {errorMessage}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
