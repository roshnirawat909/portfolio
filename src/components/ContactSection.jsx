import React, { useState } from 'react';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20 bg-[#0F172A]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-pricedown text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">
                        Get In <span className="text-[#6366F1]">Touch</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#94A3B8]">
                        I'm currently open to new opportunities and collaborations. 
                        If you have a project in mind or just want to say hi, feel free to reach out!
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-[#1E293B]">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#F8FAFC]">
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                className="w-full rounded-lg py-3 px-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 bg-[#0F172A] border border-[#3B82F6]/30 text-[#F8FAFC] placeholder-[#64748B] focus:ring-offset-[#1E293B]" 
                                placeholder="John Doe" 
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#F8FAFC]">
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                className="w-full rounded-lg py-3 px-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 bg-[#0F172A] border border-[#3B82F6]/30 text-[#F8FAFC] placeholder-[#64748B] focus:ring-offset-[#1E293B]" 
                                placeholder="john@example.com" 
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#F8FAFC]">
                                Your Message
                            </label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows="4" 
                                value={formData.message}
                                onChange={handleChange}
                                required 
                                className="w-full rounded-lg py-3 px-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 bg-[#0F172A] border border-[#3B82F6]/30 text-[#F8FAFC] placeholder-[#64748B] focus:ring-offset-[#1E293B]" 
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366F1]/30"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-12 text-center">
                        <p className="mb-4 text-[#94A3B8]">
                            Or reach out directly:
                        </p>
                        <a 
                            href="mailto:roshnirawat909@example.com" 
                            className="text-[#6366F1] hover:text-[#4F46E5] font-medium transition-colors duration-300"
                        >
                            roshnirawat909@example.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;

