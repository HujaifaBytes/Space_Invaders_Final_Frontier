
import React from 'react';

const Home = () => {
  return (
    <div className="pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 tracking-wider">
            Space Invaders: <span className="text-cyan-400">Final Frontier</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate retro gaming adventure reimagined for the modern era.
            Defend Earth against alien invaders in this thrilling space combat simulator.
          </p>
        </div>

        {/* 3D Space Elements */}
        <div className="relative mb-16">
          <div className="floating-spaceship">
            <div className="spaceship-body"></div>
            <div className="spaceship-wing-left"></div>
            <div className="spaceship-wing-right"></div>
          </div>
          
          <div className="floating-enemies">
            <div className="enemy-ship enemy-1"></div>
            <div className="enemy-ship enemy-2"></div>
            <div className="enemy-ship enemy-3"></div>
          </div>
        </div>

        {/* Project Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Project Overview</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Our Space Invaders: Final Frontier is a modern interpretation of the classic arcade game, 
                built with Python and Pygame. This project showcases advanced game development concepts 
                including collision detection, dynamic difficulty scaling, and immersive audio-visual effects.
              </p>
              <p className="text-lg leading-relaxed">
                The game features multiple difficulty levels, customizable controls, background music options, 
                and a comprehensive scoring system with Excel-based data persistence for tracking player statistics.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30">
                <h3 className="text-cyan-400 font-semibold mb-2">Technology Stack</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Python 3.x</li>
                  <li>• Pygame Library</li>
                  <li>• OpenPyXL for Excel</li>
                  <li>• Audio Processing</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30">
                <h3 className="text-cyan-400 font-semibold mb-2">Key Features</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Dynamic Difficulty</li>
                  <li>• Score Tracking</li>
                  <li>• Multiple Audio Tracks</li>
                  <li>• Customizable Controls</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="game-preview-container">
              <div className="game-screen">
                <div className="screen-content">
                  <div className="game-ui">
                    <div className="score-display">Score: 1480</div>
                    <div className="danger-level">DANGER LEVEL: 1</div>
                    <div className="lives">❤️ ❤️ ❤️</div>
                  </div>
                  <div className="game-world">
                    <div className="player-ship"></div>
                    <div className="enemy-formation">
                      <div className="enemy"></div>
                      <div className="enemy"></div>
                      <div className="enemy"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
