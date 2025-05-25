import React from 'react';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Hujaifa Khan",
      id: "20244103241",
      section: "06",
      intake: "54",
      university: "BUBT",
      role: "Project Lead & Core Developer",
      contributions: "Game initialization, asset management, main game loop",
      avatar: "🚀"
    },
    {
      name: "Saif Siam",
      id: "20244103238",
      section: "06",
      intake: "54",
      university: "BUBT",
      role: "UI/UX Developer",
      contributions: "Home screen design, music selector, user interface",
      avatar: "🎨"
    },
    {
      name: "Triloy Chakma",
      id: "20244103219",
      section: "06",
      intake: "54",
      university: "BUBT",
      role: "Game Logic Developer",
      contributions: "Enemy AI, collision detection, game state management",
      avatar: "🤖"
    },
    {
      name: "Nahian Pial",
      id: "20244103216",
      section: "06",
      intake: "54",
      university: "BUBT",
      role: "Data Management Specialist",
      contributions: "Excel integration, score tracking, data persistence",
      avatar: "📊"
    },
    {
      name: "Mishfikur Rahman Abir",
      id: "20244103212",
      section: "06",
      intake: "54",
      university: "BUBT",
      role: "Graphics & Audio Engineer",
      contributions: "Font management, UI elements, visual effects",
      avatar: "🎵"
    }
  ];

  return (
    <div className="pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-wider">
            Meet Our <span className="text-cyan-400">Development Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind Space Invaders: Final Frontier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8">
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold">{member.role}</p>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Student ID:</span>
                    <span className="text-white font-mono">{member.id}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Section:</span>
                    <span className="text-white">{member.section}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Intake:</span>
                    <span className="text-white">{member.intake}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">University:</span>
                    <span className="text-cyan-400 font-semibold">{member.university}</span>
                  </div>
                </div>

                {/* Contributions */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Contributions:</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{member.contributions}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
