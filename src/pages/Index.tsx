// src/pages/Index.tsx
import React, { useState } from 'react';
// import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from 'lucide-react'; // Arrows not used, can be removed
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import TeamMembers from '../components/TeamMembers';
import GameGallery from '../components/GameGallery';
import GameCode from '../components/GameCode';
+import GameVideoPlayer from '../components/GameVideoPlayer'; // + Import new component
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'team':
        return <TeamMembers />;
      case 'gallery':
        return <GameGallery />;
      case 'code':
        return <GameCode />;
+     case 'gamevideo': // + Add case for the new section
+       return <GameVideoPlayer />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <CustomCursor />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;