import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import GithubIcon from '../icons Components/GithubIcon';
import LinkedinIcon from '../icons Components/LinkedinIcon';
import LeetCodeIcon from '../icons Components/LeetCodeIcon';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [copied, setCopied] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('roshni7rawat@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20 bg-[var(--color-background)]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[#22D3EE] font-semibold tracking-widest uppercase text-sm mb-2">
                        GET IN TOUCH
                    </p>
                    <h2 className="font-pricedown text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text)]">
                        Contact Me
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#22D3EE] to-[#6366F1] mx-auto"></div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16">
                    {/* Left Side - Contact Info */}
                    <div className="flex flex-col justify-between">
                        {/* Discussion Text */}
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                                Let's discuss something great.
                            </h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">
                                I am eager to explore full-stack engineering internships, contract roles, and collaborative open-source projects. Feel free to shoot me an email or find me on social channels.
                            </p>
                        </div>

                        {/* Email Box */}
                        <div className="bg-[var(--color-surface)] border border-[var(--color-border)]/50 rounded-xl p-6 mb-8">
                            <p className="text-[#94A3B8] text-xs font-semibold tracking-widest uppercase mb-3">
                                SEND EMAIL
                            </p>
                            <div className="flex items-center justify-between group cursor-pointer" onClick={handleCopyEmail}>
                                <a 
                                    href="mailto:gk6644771@gmail.com" 
                                    className="text-[var(--color-text)] font-semibold hover:text-[#6366F1] transition-colors duration-300"
                                >
                                    roshni7rawat@gmail.com
                                </a>
                                <Copy 
                                    size={20} 
                                    className="text-[#64748B] group-hover:text-[#22D3EE] transition-colors duration-300 opacity-0 group-hover:opacity-100"
                                />
                            </div>
                        </div>

                        {/* Follow Profiles */}
                        <div>
                            <p className="text-[#94A3B8] text-xs font-semibold tracking-widest uppercase mb-4">
                                FOLLOW MY PROFILES
                            </p>
                            <div className="flex gap-6">
                                <a 
                                    href="https://github.com/roshnirawat909" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300"
                                >
                                    <GithubIcon />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/roshni-rawat-561656335" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300"
                                >
                                    <LinkedinIcon />
                                </a>
                                <a 
                                    href="https://leetcode.com/roshnirawat909" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300"
                                >
                                    <LeetCodeIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase mb-3 text-[#94A3B8]">
                                    FULL NAME
                                </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    className="w-full rounded-lg py-3 px-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6366F1] bg-[var(--color-surface)] border border-[var(--color-border)]/50 text-[var(--color-text)] placeholder-[#64748B]" 
                                    placeholder="Enter your name" 
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase mb-3 text-[#94A3B8]">
                                    EMAIL ADDRESS
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    className="w-full rounded-lg py-3 px-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6366F1] bg-[var(--color-surface)] border border-[var(--color-border)]/50 text-[var(--color-text)] placeholder-[#64748B]" 
                                    placeholder="Enter your email" 
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase mb-3 text-[#94A3B8]">
                                    MESSAGE DETAILS
                                </label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows="5" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                    className="w-full rounded-lg py-3 px-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6366F1] bg-[var(--color-surface)] border border-[var(--color-border)]/50 text-[var(--color-text)] placeholder-[#64748B] resize-none" 
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#3730A3] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366F1]/30 flex items-center justify-center gap-2"
                            >
                                <span>✈</span> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;

