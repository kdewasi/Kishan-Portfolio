import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Atom, Server, Cloud, Container, Database } from 'lucide-react';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = "Full-Stack Developer | Cloud Architecture | Real-Time Systems";
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        if (typingIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[typingIndex]);
                setTypingIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [typingIndex]);

    const socialLinks = [
        { icon: Github, href: "https://github.com/kishandewasi", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/kishandewasi", label: "LinkedIn" },
        { icon: Mail, href: "mailto:kishandewasi606@gmail.com", label: "Email" },
    ];

    const techIcons = [
        { Icon: Atom, color: "text-blue-500", label: "React" },
        { Icon: Server, color: "text-green-500", label: "Node.js" },
        { Icon: Cloud, color: "text-orange-500", label: "AWS" },
        { Icon: Container, color: "text-blue-400", label: "Docker" },
        { Icon: Database, color: "text-green-600", label: "MongoDB" },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Animated Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-2 bg-surface border border-border rounded-full">
                        <span className="text-primary text-sm font-medium">Available for work</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kishan</span>
                    </h1>

                    <div className="h-8 md:h-10">
                        <p className="text-xl md:text-2xl text-text-secondary font-mono">
                            {text}<span className="animate-blink">|</span>
                        </p>
                    </div>

                    <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
                        Building production-ready applications with React, Node.js, and AWS.
                        Specialized in scalable cloud microservices and real-time communication systems.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/25"
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/resume.pdf" // Placeholder, user needs to add resume
                            className="px-8 py-3 bg-surface border border-border text-text-primary rounded-lg font-medium hover:bg-neutral-800 transition-all hover:scale-105 flex items-center gap-2"
                        >
                            Download CV <Download className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="flex gap-4 pt-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-surface border border-border rounded-lg text-text-secondary hover:text-primary hover:border-primary transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Tech Stack Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:flex items-center justify-center h-[500px]"
                >
                    {/* Central Element */}
                    <div className="relative w-24 h-24 bg-surface border border-border rounded-2xl flex items-center justify-center shadow-2xl z-20">
                        <div className="text-4xl font-bold">KD</div>
                    </div>

                    {/* Orbiting Icons */}
                    {techIcons.map((tech, index) => {
                        const angle = (index * 360) / techIcons.length;
                        const radius = 160; // Distance from center

                        return (
                            <motion.div
                                key={tech.label}
                                className="absolute p-4 bg-surface border border-border rounded-xl shadow-xl flex flex-col items-center gap-2 z-10"
                                initial={{
                                    x: Math.cos((angle * Math.PI) / 180) * radius,
                                    y: Math.sin((angle * Math.PI) / 180) * radius
                                }}
                                animate={{
                                    y: [
                                        Math.sin((angle * Math.PI) / 180) * radius - 10,
                                        Math.sin((angle * Math.PI) / 180) * radius + 10,
                                        Math.sin((angle * Math.PI) / 180) * radius - 10
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <tech.Icon className={`w-8 h-8 ${tech.color}`} />
                                <span className="text-xs font-medium text-text-secondary">{tech.label}</span>
                            </motion.div>
                        );
                    })}

                    {/* Connecting Lines (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <circle cx="50%" cy="50%" r="160" stroke="currentColor" strokeWidth="1" fill="none" className="text-border" strokeDasharray="4 4" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
