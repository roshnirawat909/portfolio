import React, { useState } from 'react';
import MenuIcon from '../icons Components/MenuIcon';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0F172A]/95 backdrop-blur-lg border-b border-[#3B82F6]/30">
            <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
                <a href="#home" className="text-2xl md:text-3xl font-bold transition-colors duration-300 text-[#F8FAFC]">
                    <span className="text-[#6366F1]">Roshni</span> Rawat
                </a>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="text-lg md:text-xl font-medium hover:text-[#6366F1] transition-colors duration-300 relative group text-[#F8FAFC]"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6366F1] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="p-2 text-[#F8FAFC]"
                        aria-label="Toggle menu"
                    >
                        <MenuIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
                isMenuOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-4'
            } bg-[#0F172A]/98 backdrop-blur-lg shadow-lg`}>
                <div className="px-4 py-4 space-y-2">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={handleLinkClick}
                            className="block py-3 px-4 rounded-lg font-medium text-xl transition-all duration-300 text-[#F8FAFC] hover:bg-[#3B82F6]/20"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;

