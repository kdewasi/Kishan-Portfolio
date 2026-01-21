import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-surface/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="text-center md:text-left">
                        <span className="font-bold text-lg tracking-tight block mb-2">
                            Kishan<span className="text-primary">.dev</span>
                        </span>
                        <p className="text-sm text-text-secondary">
                            © {new Date().getFullYear()} Kishan Dewasi. Built with React & Tailwind CSS.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#about" className="text-sm text-text-secondary hover:text-primary transition-colors">About</a>
                        <a href="#projects" className="text-sm text-text-secondary hover:text-primary transition-colors">Projects</a>
                        <a href="#skills" className="text-sm text-text-secondary hover:text-primary transition-colors">Skills</a>
                        <a href="#contact" className="text-sm text-text-secondary hover:text-primary transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/kishandewasi" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/kishandewasi" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:kishandewasi606@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-text-secondary">
                    <p>Deployed on Vercel | <a href="https://github.com/kishandewasi/portfolio" className="underline hover:text-primary">View Source Code</a></p>
                </div>
            </div>
        </footer>
    );
}
