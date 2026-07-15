import React from 'react';
import { Building2, Award, Code2, Folder } from 'lucide-react';

function AchievementsSection() {
    const achievements = [
        {
            id: 1,
            number: '2',
            label: 'Internship Projects',
            description: 'Real-world business features & integrations.',
            icon: Building2,
            bgColor: 'from-[#6366F1] to-[#7C3AED]'
        },
        {
            id: 2,
            number: '5',
            label: 'Certifications',
            description: 'Web technology & algorithm certifications.',
            icon: Award,
            bgColor: 'from-[#22D3EE] to-[#06B6D4]'
        },
        {
            id: 3,
            number: '150',
            label: 'Coding Practice',
            description: 'Problems solved on LeetCode & HackerRank using C++.',
            icon: Code2,
            bgColor: 'from-[#10B981] to-[#059669]'
        },
        {
            id: 4,
            number: '4',
            label: 'Personal Projects',
            description: 'Full-stack apps & frontend widgets.',
            icon: Folder,
            bgColor: 'from-[#F59E0B] to-[#D97706]'
        }
    ];

    return (
        <section id="achievements" className="min-h-screen flex flex-col justify-center py-20 bg-[var(--color-background)]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-[#22D3EE] font-semibold text-sm tracking-widest mb-4">MILESTONES ACHIEVED</p>
                    <h2 className="font-pricedown text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                        Key Achievements
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-[#22D3EE] rounded"></div>
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement) => {
                        const IconComponent = achievement.icon;
                        return (
                            <div
                                key={achievement.id}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Container */}
                                <div className="mb-6 relative">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.bgColor} flex items-center justify-center border-2 border-opacity-30 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                        style={{
                                            borderColor: achievement.bgColor.split(' ')[1]
                                        }}
                                    >
                                        <IconComponent className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl border-2 border-opacity-20 pointer-events-none"
                                        style={{
                                            borderColor: achievement.bgColor.split(' ')[1]
                                        }}
                                    ></div>
                                </div>

                                {/* Stats */}
                                <div className="space-y-2">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="font-pricedown text-5xl font-bold text-[var(--color-text)]">
                                            {achievement.number}
                                        </span>
                                        <span className="text-2xl text-[#22D3EE] font-bold">+</span>
                                    </div>

                                    {/* Category Label */}
                                    <p className="text-xs font-semibold text-[var(--color-text-muted)] tracking-widest">
                                        {achievement.label}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AchievementsSection;
