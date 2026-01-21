import { motion } from 'framer-motion';
import { Layout, Server, Cloud, Database, Cpu, Terminal } from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Layout,
            skills: [
                "React.js (Hooks, Context)",
                "Vite",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "Redux Toolkit"
            ]
        },
        {
            title: "Backend Development",
            icon: Server,
            skills: [
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "Socket.IO",
                "JWT Auth",
                "Microservices"
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: Cloud,
            skills: [
                "AWS (S3, EC2, ECR)",
                "Docker",
                "GitHub Actions",
                "Linux/UNIX",
                "Nginx",
                "CI/CD Pipelines"
            ]
        },
        {
            title: "Databases",
            icon: Database,
            skills: [
                "MongoDB Atlas",
                "Oracle SQL",
                "PL/SQL",
                "DynamoDB",
                "Redis",
                "Data Modeling"
            ]
        },
        {
            title: "Languages",
            icon: CodeIcon, // Defined below to avoid conflict if imported
            skills: [
                "JavaScript (ES6+)",
                "TypeScript",
                "Python",
                "Java",
                "C/C++",
                "SQL"
            ]
        },
        {
            title: "Tools & Practices",
            icon: Terminal,
            skills: [
                "Git & GitHub",
                "Postman",
                "VS Code",
                "Agile/Scrum",
                "System Design",
                "Unit Testing"
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and the technologies I use to build scalable solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-text-secondary">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        <span className="text-sm font-medium group-hover:text-text-primary transition-colors">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}
