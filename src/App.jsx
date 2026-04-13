import React, { useEffect } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        document.documentElement.classList.add('scroll-smooth', 'dark');
        return () => {
            document.documentElement.classList.remove('scroll-smooth');
        }
    }, []);

    return (
        <div className="bg-[#0F172A] text-[#F8FAFC]">
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;

