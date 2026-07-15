import React from 'react';
import { Monitor, Server, Layers, Smartphone } from 'lucide-react';

function ServiceSection() {
    const services = [
        {
            id: 1,
            title: 'Frontend Development',
            description: 'Crafting responsive, high-performance user interfaces using React.js and modern styling systems like Tailwind CSS. Focused on micro-interactions and visual details.',
            icon: Monitor,
            bgColor: 'from-[#6366F1] to-[#7C3AED]',
            specialties: [
                'Single Page Apps (SPAs)',
                'GSAP Animations',
                'Reusable Component Architectures',
                'State Management Integration'
            ]
        },
        {
            id: 2,
            title: 'Backend Development',
            description: 'Engineering robust and secure backend servers using Node.js and Express.js. Structuring optimal relational/non-relational database schemas.',
            icon: Server,
            bgColor: 'from-[#22D3EE] to-[#06B6D4]',
            specialties: [
                'RESTful API Architectures',
                'JWT & OAuth Authentication',
                'Express Middleware Pipelines',
                'MongoDB & Mongoose Schema Design'
            ]
        },
        {
            id: 3,
            title: 'Full Stack Development',
            description: 'Combining frontend components with backend systems. Orchestrating client-to-server data streams and handling integrations.',
            icon: Layers,
            bgColor: 'from-[#10B981] to-[#059669]',
            specialties: [
                'MERN Stack Integrations',
                'State Synchronization & API Fetching',
                'Cross-Origin Resource Sharing (CORS)',
                'Security Header Configurations'
            ]
        },
        {
            id: 4,
            title: 'Responsive Web Design',
            description: 'Building mobile-first layouts that fluidly render on Mobile, Tablet, Laptop, and Ultra-wide Desktop displays. Optimized for speed and loading metrics.',
            icon: Smartphone,
            bgColor: 'from-[#F59E0B] to-[#D97706]',
            specialties: [
                'Mobile-First CSS Layouts',
                'Fluid Graphics & SVG Assets',
                'Flexbox & Grid Systems',
                'SEO Friendly Markup Structuring'
            ]
        }
    ];

    return (
        <section id="services" className="min-h-screen flex flex-col justify-center py-20 bg-[var(--color-background)]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#22D3EE] font-semibold text-sm tracking-widest mb-4">WHAT I OFFER</p>
                    <h2 className="font-pricedown text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                        Services & Expertise
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-[#22D3EE] rounded"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[#22D3EE]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#22D3EE]/10"
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="font-pricedown text-2xl font-bold text-[var(--color-text)] mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Key Specialties */}
                                <div>
                                    <p className="text-xs font-semibold text-[#22D3EE] tracking-widest mb-3">KEY SPECIALTIES:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {service.specialties.map((specialty, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 flex-shrink-0"></div>
                                                <span className="text-sm text-[var(--color-text-muted)]">
                                                    {specialty}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#22D3EE]/5 to-transparent pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
