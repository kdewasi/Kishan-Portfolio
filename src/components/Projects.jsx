import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "DevDebugger",
            description: "AI-Powered Error Analysis Platform. Real-time error debugging assistant using Claude API for instant code analysis.",
            tags: ["React", "Node.js", "Claude API", "Socket.IO", "Redis"],
            links: { demo: "#", github: "#" }, // User to update
            metrics: "Analyzes errors in <2s • 99.9% API uptime",
            image: "bg-gradient-to-br from-blue-900 to-slate-900" // Placeholder gradient
        },
        {
            title: "HealthMate",
            description: "Full-Stack Wellness Platform. Comprehensive health tracking app with real-time messaging and Apple Health integration.",
            tags: ["React", "MongoDB", "Socket.IO", "Tailwind"],
            links: { demo: "#", github: "#" },
            metrics: "Real-time msg <100ms • 1000+ users",
            image: "bg-gradient-to-br from-green-900 to-emerald-900"
        },
        {
            title: "Fragments",
            description: "Cloud Microservice Platform. Serverless data management system with AWS infrastructure and CI/CD automation.",
            tags: ["AWS", "Docker", "Node.js", "CI/CD"],
            links: { github: "#" },
            metrics: "Automated deploys <5min • 99.9% availability",
            image: "bg-gradient-to-br from-orange-900 to-amber-900"
        },
        {
            title: "SpendWise",
            description: "Personal Finance Tracker. Smart expense management with budget analytics and spending insights.",
            tags: ["React", "Chart.js", "Firebase"],
            links: { demo: "#", github: "#" },
            metrics: "Visual analytics • Real-time sync",
            image: "bg-gradient-to-br from-purple-900 to-indigo-900"
        },
        {
            title: "Commission DB System",
            description: "Enterprise Database System. Oracle-based commission tracking with automated audit logging.",
            tags: ["Oracle SQL", "PL/SQL", "Stored Procedures"],
            links: { github: "#" },
            metrics: "100% data accuracy • Automated audits",
            image: "bg-gradient-to-br from-red-900 to-rose-900"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-surface/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A selection of projects demonstrating my expertise in full-stack development, cloud architecture, and real-time systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 ${project.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Code className="w-12 h-12 text-white/20" />
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-text-secondary text-sm line-clamp-3 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-background text-[10px] uppercase tracking-wider font-semibold text-text-secondary rounded border border-border">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                    <span className="text-xs text-primary font-mono">{project.metrics}</span>
                                    <div className="flex gap-3">
                                        {project.links.github && (
                                            <a href={project.links.github} className="text-text-secondary hover:text-white transition-colors" title="View Source">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a href={project.links.demo} className="text-text-secondary hover:text-white transition-colors" title="Live Demo">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
