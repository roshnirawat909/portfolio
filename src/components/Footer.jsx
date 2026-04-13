import React from 'react';
import GithubIcon from '../icons Components/GithubIcon';
import LinkedinIcon from '../icons Components/LinkedinIcon';
import LeetCodeIcon from '../icons Components/LeetCodeIcon';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { 
            name: 'GitHub', 
            href: 'https://github.com/roshnirawat909', 
            icon: <GithubIcon className="w-5 h-5" /> 
        },
        { 
            name: 'LinkedIn', 
            href: 'https://www.linkedin.com/in/roshni-rawat-561656335', 
            icon: <LinkedinIcon className="w-5 h-5" /> 
        },
        { 
            name: 'LeetCode', 
            href: 'https://leetcode.com/roshnirawat909', 
            icon: <LeetCodeIcon className="w-5 h-5" /> 
        }
    ];

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <footer className="py-12 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand & Description */}
                    <div className="text-center md:text-left">
                        <h3 className="font-pricedown text-2xl md:text-3xl font-bold mb-2 text-[#F8FAFC]">
                            <span className="text-[#6366F1]">Roshni</span> Rawat
                        </h3>
                        <p className="font-pricedown text-base md:text-lg text-[#94A3B8]">
                            Full Stack Developer & Generative AI 
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {navLinks.map(link => (
                            <a 
                                key={link.href}
                                href={link.href} 
                                className="text-sm font-medium hover:text-[#6366F1] transition-colors duration-300 text-[#94A3B8]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map(link => (
                            <a 
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full transition-all duration-300 hover:scale-110 bg-[#3B82F6]/20 text-[#94A3B8] hover:bg-[#3B82F6]/40 hover:text-[#22D3EE]"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-[#3B82F6]/20 border-t"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-sm text-[#64748B]">
                        © {currentYear} Roshni Rawat. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

