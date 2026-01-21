import { motion } from 'framer-motion';

export default function About() {
    const stats = [
        { label: "Experience", value: "3+ Years" },
        { label: "Projects", value: "15+" },
        { label: "Technologies", value: "10+" },
        { label: "Commitment", value: "100%" },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    {/* Left Column: Image & Stats */}
                    <div className="space-y-8">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-surface border border-border relative group">
                            {/* Photo Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:opacity-80 transition-opacity" />
                            <div className="w-full h-full flex items-center justify-center text-text-secondary">
                                <span className="text-6xl">KD</span>
                                {/* User should replace with <img src="/path/to/photo.jpg" alt="Kishan" className="w-full h-full object-cover" /> */}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 bg-surface border border-border rounded-xl text-center hover:border-primary/50 transition-colors">
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-text-secondary">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Bio */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6"> <span className="text-primary">About</span> Me</h2>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    I'm a full-stack developer with expertise in building scalable web applications and cloud-native microservices.
                                    Recently graduated from Seneca Polytechnic with an Advanced Diploma in Computer Programming & Analysis (GPA: 3.1).
                                </p>
                                <p>
                                    My work focuses on creating robust backend systems, implementing real-time features, and deploying cloud infrastructure on AWS.
                                    I've built production applications handling authentication, data synchronization, and distributed systems architecture.
                                </p>
                                <p>
                                    When I'm not coding, I'm exploring animation films, story-driven games, or optimizing my development workflow with new tools and frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
