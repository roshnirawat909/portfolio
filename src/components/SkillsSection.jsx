import React from 'react';

function SkillsSection() {
    const skills = [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Generative AI', icon: '/generativeAI1.jpg' },
        { name: 'GitHub', icon: '/github.webp' },
        { name: 'GSAP', icon: '/gsap.webp' },
        { name: 'TanStackQuery', icon: '/tanStackQuery.webp' },
        { name: 'PostMan', icon: '/postMan.webp' },
        { name: 'Redux', icon: '/redux.webp' }
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 bg-[var(--color-background)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-pricedown text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                        My <span className="text-[var(--color-text)]">Tech Stack</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-[var(--color-text-muted)]">
                        Technologies I've been working with recently
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <div 
                            key={skill.name}
                            className="group relative p-4 md:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-[var(--color-surface)] hover:bg-[#3B82F6]/20 border border-[color:var(--color-border)] hover:border-[#3B82F6]/50"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20"></div>
                            
                            <div className="relative z-10 text-center">
                                <div className="flex justify-center mb-3">
                                    <img
                                        src={skill.icon}
                                        className="h-12 w-12 md:h-14 md:w-14 transition-transform duration-300 group-hover:scale-110"
                                        alt={`${skill.name} Icon`}
                                        style={{ filter: skill.invert ? 'invert(1)' : 'none' }}
                                    />
                                </div>
                                <p className="font-semibold text-sm md:text-base text-[var(--color-text)] group-hover:text-[#22D3EE]">
                                    {skill.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;

