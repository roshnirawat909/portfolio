import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Header({ isDarkTheme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b shadow-lg transition-colors duration-300 ${isDarkTheme ? "bg-[#0B1120]/70 border-white/10" : "bg-white/80 border-slate-300/70"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className={`text-3xl font-extrabold tracking-wide ${isDarkTheme ? "text-white" : "text-slate-900"}`}
        >
         
          <span className="text-cyan-400">Roshni</span>
          <span className="text-[var(--color-text)]">Rawat</span>
        
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-2 backdrop-blur-lg border rounded-full px-4 py-2 transition-colors duration-300 ${isDarkTheme ? "bg-white/5 border-white/10" : "bg-slate-100/80 border-slate-300/70"}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`px-5 py-2 rounded-full transition duration-300 font-medium ${
                active === link.href
                  ? isDarkTheme
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "bg-cyan-500/10 text-cyan-600"
                  : isDarkTheme
                    ? "text-gray-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
         

          <button
            onClick={onToggleTheme}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition ${
              isDarkTheme
                ? "border-white/10 hover:bg-white/10 text-yellow-400"
                : "border-slate-300/70 bg-white/70 hover:bg-slate-100 text-slate-700 shadow-sm"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className={`lg:hidden transition-colors duration-300 ${isDarkTheme ? "text-white" : "text-slate-900"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden backdrop-blur-xl ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        } ${isDarkTheme ? "bg-[#0B1120]/95" : "bg-white/95"}`}
      >
        <div className="px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setIsMenuOpen(false);
              }}
              className={`block rounded-lg px-4 py-3 transition ${
                active === link.href
                  ? isDarkTheme
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "bg-cyan-500/10 text-cyan-600"
                  : isDarkTheme
                    ? "text-gray-300 hover:bg-white/10 hover:text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
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