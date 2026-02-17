import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://i.ibb.co/qYGNQGNv/Picsart-26-01-26-13-43-08-173-jpg.jpg" 
              alt="Mission MLT Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-teal-500 shadow-sm"
            />
            <span className={`font-bold text-lg sm:text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-slate-800'}`}>
              Mission MLT Cracker <span className="text-teal-600">2026 Edition</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Problem', 'Solution', 'Bonus', 'Pricing'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors hover:text-teal-600 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-teal-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-md transform hover:-translate-y-0.5"
            >
              Get the Book
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-teal-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col space-y-4 animate-fade-in-down">
          {['Problem', 'Solution', 'Bonus', 'Pricing'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-slate-700 font-medium py-2 px-4 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-teal-600 text-white w-full py-3 rounded-lg font-bold shadow-md"
          >
            Get the Book Now
          </button>
        </div>
      )}
    </header>
  );
};