import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            type: "education",
            role: "Computer Programming & Analysis",
            organization: "Seneca Polytechnic",
            period: "Jan 2023 – Aug 2025",
            location: "Toronto, ON",
            description: "Ontario College Advanced Diploma | GPA: 3.1",
            details: [
                "Dean's List: Fall 2024 (3.4 GPA)",
                "Specialized in Cloud Computing, Mobile Development, Database Systems",
                "Key Courses: Web Programming (A+), Advanced Databases (A), Cloud Computing, Software Design"
            ]
        },
        {
            type: "work",
            role: "Team Member",
            organization: "Blondies Pizza",
            period: "Jan 2023 – Present",
            location: "Toronto, ON",
            description: "Service & Operations",
            details: [
                "Demonstrated reliability and clear communication while supporting daily operations",
                "Coordinated with team members to manage order flow during high-volume hours",
                "Maintained attention to detail ensuring quality service delivery"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-surface/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey so <span className="text-primary">Far</span></h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        My academic foundation and professional experience.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Icon Bubble */}
                            <div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 bg-surface border border-border rounded-full flex items-center justify-center z-10 shadow-lg">
                                {exp.type === 'education' ? (
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                ) : (
                                    <Briefcase className="w-6 h-6 text-secondary" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="ml-20 md:ml-0 md:w-[calc(50%-40px)] p-6 bg-surface border border-border rounded-xl hover:border-text-secondary/30 transition-colors">
                                <div className="flex flex-col gap-1 mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded w-fit ${exp.type === 'education' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                                        }`}>
                                        {exp.type}
                                    </span>
                                    <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                                    <div className="text-lg text-text-primary/80 font-medium">{exp.organization}</div>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </div>
                                </div>

                                <p className="text-text-secondary mb-4 font-medium">{exp.description}</p>

                                <ul className="space-y-2">
                                    {exp.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
