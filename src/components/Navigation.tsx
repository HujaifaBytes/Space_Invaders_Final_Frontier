
import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'team', label: 'Team Members', icon: '👥' },
    { id: 'gallery', label: 'Game Gallery', icon: '🎮' },
    { id: 'code', label: 'Game Code', icon: '💻' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400 tracking-wider">
            Space Invaders: Final Frontier
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20 hover:text-cyan-300'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
