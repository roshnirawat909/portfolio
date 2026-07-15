import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServiceSection from './components/ServiceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        document.documentElement.classList.add('scroll-smooth');
        document.documentElement.classList.toggle('dark', isDarkTheme);
        document.documentElement.classList.toggle('light', !isDarkTheme);
        document.documentElement.style.setProperty('--color-background', isDarkTheme ? '#0F172A' : '#F8FAFC');
        document.documentElement.style.setProperty('--color-text', isDarkTheme ? '#F8FAFC' : '#111827');

        return () => {
            document.documentElement.classList.remove('scroll-smooth');
        };
    }, [isDarkTheme]);

    return (
        <div className="min-h-screen transition-colors duration-300 bg-[var(--color-background)] text-[var(--color-text)]">
            <Header isDarkTheme={isDarkTheme} onToggleTheme={() => setIsDarkTheme((prev) => !prev)} />
            <main>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ServiceSection />
                <AchievementsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;

