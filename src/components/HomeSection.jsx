import React from 'react';
import GithubIcon from '../icons Components/GithubIcon';
import LinkedinIcon from '../icons Components/LinkedinIcon';
import LeetCodeIcon from '../icons Components/LeetCodeIcon';
import { CheckCircle } from 'lucide-react';

function HomeSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-[var(--color-background)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#22D3EE] animate-pulse"></div>
                            <span className="text-[var(--color-text)] font-medium text-sm">Open for Internships & Full-time Roles</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-pricedown leading-tight">
                                <span className="text-[var(--color-text)]">Hi, I am </span>
                                <span className="bg-gradient-to-r from-[#6366F1] via-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">Roshni Rawat</span>
                            </h1>

                            {/* Subtitle */}
                            <h2 className="text-2xl md:text-3xl font-semibold">
                                <span className="text-[var(--color-text)]">I'm a </span>
                                <span className="text-[#22D3EE] font-bold">Full Stack Developer</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                            {/* Building modern web applications with React, Node.js, Express.js, and MongoDB. */}
                             I create fast, responsive, and user-friendly web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#6366F1] hover:from-[#6D28D9] hover:to-[#4F46E5] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/50"
                            >
                                View Projects →
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] font-semibold rounded-full hover:bg-[#22D3EE]/10 transition-all duration-300 hover:scale-105"
                            >
                                📧 Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Profile Section */}
                    <div className="relative flex justify-end">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6366F1]/20 via-[#22D3EE]/10 to-[#3B82F6]/20 blur-3xl -z-10"></div>

                        {/* Profile Card Container */}
                        <div className="relative">

                            {/* Profile Image */}
                            <div className="relative rounded-3xl overflow-hidden border-2 border-[#22D3EE]/50 shadow-2xl w-64 h-64 md:w-80 md:h-80">
                                <div className="relative w-full h-full bg-gradient-to-br from-[#3B82F6]/30 via-transparent to-[#22D3EE]/30">
                                    <img
                                        src="/Roshni.jpeg"
                                        alt="Roshni Rawat"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Glowing border effect */}
                                    <div className="absolute inset-0 rounded-3xl border border-[#22D3EE] opacity-50"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;

