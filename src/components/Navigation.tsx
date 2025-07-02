
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'team', label: 'Team Members', icon: '👥' },
    { id: 'gallery', label: 'Game Gallery', icon: '🎮' },
    { id: 'code', label: 'Game Code', icon: '💻' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/30">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider">
            Space Invaders: Final Frontier
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 lg:px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20 hover:text-cyan-300'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">{item.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-cyan-500/30">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                    activeSection === item.id
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:text-cyan-300'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
