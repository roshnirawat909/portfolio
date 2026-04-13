import React from 'react';
import GithubIcon from '../icons Components/GithubIcon';
import LinkedinIcon from '../icons Components/LinkedinIcon';
import LeetCodeIcon from '../icons Components/LeetCodeIcon';
import ExternalLinkIcon from '../icons Components/ExternalLinkIcon';

function HomeSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Profile Image */}
                    <div className="order-2 lg:order-1 flex-shrink-0">
                        <div className="relative">
                            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 shadow-2xl border-[#3B82F6]">
                                <img
                                    src="/Roshni.jpeg"
                                    alt="Roshni Rawat"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#3B82F6] opacity-20 animate-pulse"></div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#22D3EE] opacity-20"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left max-w-2xl">
                        <p className="font-sans text-sm md:text-base font-medium mb-3 text-[#22D3EE]">
                            Hello, I'm
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="font-pricedown text-[#F8FAFC]">Roshni </span>
                            <span className="font-pricedown text-[#6366F1]">Rawat</span>
                        </h1>
                        <h2 className="font-sans text-xl md:text-2xl font-semibold mb-6 text-[#94A3B8]">
                            Full Stack Developer & Generative AI
                        </h2>
                        <p className="font-sans text-base md:text-lg leading-relaxed mb-8 text-[#CBD5E1]">
                            I create fast, responsive, and user-friendly web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I also work with Generative AI to add smart features like search, automation, and intelligent workflows, making apps future-ready.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4 mb-8">
                            <a
                                href="https://github.com/roshnirawat909"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-[#3B82F6]/20 text-[#F8FAFC] hover:bg-[#3B82F6]/40 hover:text-[#22D3EE]"
                                aria-label="GitHub"
                            >
                                <GithubIcon className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/roshni-rawat-561656335"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-[#3B82F6]/20 text-[#F8FAFC] hover:bg-[#3B82F6]/40 hover:text-[#22D3EE]"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon className="w-6 h-6" />
                            </a>
                            <a
                                href="https://leetcode.com/roshnirawat909"
                                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-[#3B82F6]/20 text-[#F8FAFC] hover:bg-[#3B82F6]/40 hover:text-[#22D3EE]"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                            >
                                <LeetCodeIcon className="w-6 h-6" />
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="font-sans inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/30"
                            >
                                View My Work
                                <ExternalLinkIcon className="w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="font-sans inline-flex items-center justify-center font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 border-2 border-[#3B82F6] text-[#F8FAFC] hover:bg-[#3B82F6]/20"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;

