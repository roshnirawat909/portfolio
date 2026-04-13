import React from 'react';

function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 bg-[#0F172A]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Image Section */}
                    <div className="lg:w-1/3">
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3B82F6]/30">
                                <img 
                                    src="/Roshni.jpeg" 
                                    alt="Roshni Rawat" 
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative card */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10 bg-[#3B82F6]/20"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl -z-10 bg-[#22D3EE]/20"></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h2 className="font-pricedown text-3xl md:text-4xl font-bold mb-6 text-[#F8FAFC]">
                            About <span className="text-[#6366F1]">Me</span>
                        </h2>
                        
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-[#CBD5E1]">
                                Hello! I'm <span className="font-semibold text-[#6366F1]">Roshni Rawat</span>, a passionate full-stack developer based in Bhopal, India. My journey into tech began with a curiosity for how ideas transform into real-world solutions. Today, I thrive on building dynamic applications and solving complex problems across both frontend and backend.
                            </p>
                            <p className="text-lg leading-relaxed text-[#CBD5E1]">
                                I specialize in <span className="font-semibold">MERN stack development</span>, and also have experience with <span className="font-semibold">Generative AI</span>, <span className="font-semibold">C++</span>, and <span className="font-semibold">MySQL</span>. I enjoy crafting clean, efficient, and scalable code, and I'm always eager to explore new technologies and improve my craft.
                            </p>
                            <p className="text-lg leading-relaxed text-[#CBD5E1]">
                                When I'm not coding, you'll often find me exploring the latest in tech trends and contributing to open-source projects.
                            </p>
                        </div>

                        {/* Stats/Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                           
                            <div className="p-4 rounded-xl bg-[#1E293B]">
                                <h3 className="font-pricedown text-2xl md:text-3xl font-bold text-[#6366F1]">5+</h3>
                                <p className="text-sm text-[#94A3B8]">
                                    Projects Completed
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-[#1E293B]">
                                <h3 className="font-pricedown text-2xl md:text-3xl font-bold text-[#6366F1]">5+</h3>
                                <p className="text-sm text-[#94A3B8]">
                                    Technologies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;

