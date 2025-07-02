
import React from 'react';
import { Brain, Code, Rocket, Users, Trophy, Gamepad2 } from 'lucide-react';

const VisionSection = () => {
  return (
    <div className="py-12 sm:py-16 space-y-12 sm:space-y-16 px-4">
      {/* Hero Vision */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          "Coding the Future, <span className="text-cyan-400">One Game at a Time</span>"
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
            Ladies and gentlemen, today I stand before you with a vision—one that merges education with entertainment, 
            where young minds don't just play, but learn, create, and innovate.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            We envision Space Invaders: Final Frontier as more than just a game. It will be a pioneering platform that 
            transforms coding, artificial intelligence, and STEM concepts into an immersive adventure. Through AI-driven 
            challenges and interactive lessons, children will explore the digital universe, unlocking their creativity 
            while developing essential problem-solving skills.
          </p>
        </div>
      </div>

      {/* Vision Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 sm:p-8 border border-cyan-500/30 hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 sm:mb-4 text-center md:text-left">AI-Driven Platform</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center md:text-left">
            Transform into a STEM EdTech solution with AI-powered adaptive learning modules and personalized coding challenges.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 sm:p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4 text-center md:text-left">Coding Lessons</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center md:text-left">
            Integrated, adaptive learning modules that make coding education fun and engaging through gamified experiences.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 sm:p-8 border border-orange-500/30 hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-3 sm:mb-4 text-center md:text-left">Immersive Challenges</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center md:text-left">
            Inspire creativity and critical thinking through interactive coding puzzles and real-time problem-solving scenarios.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl p-8 sm:p-12 border border-cyan-500/30">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
          "Empowering Young Minds Through AI & Play"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Our approach is simple: make learning fun. By integrating AI-powered analysis questions, we encourage 
              children to think critically, solve problems, and develop a deep understanding of coding and artificial intelligence.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              With adaptive learning mechanics, real-time feedback, and gamified experiences, every challenge will feel 
              less like schoolwork and more like an exciting quest.
            </p>
          </div>
          <div className="relative order-first md:order-last">
            <img 
              src="/lovable-uploads/475a9af2-99a6-4f7a-a5df-24745f5fe265.png" 
              alt="Educational Gaming Concept" 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      {/* From Players to Programmers */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8">
          "From Players to Programmers—Shaping the Next Generation"
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
            Our mission goes beyond entertainment. We are preparing children for the future, nurturing curiosity and 
            innovation as they embark on thrilling adventures within the universe of Space Invaders. This game is where 
            imagination meets innovation, where young learners transform into future creators, programmers, and AI pioneers.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            This is not just a game. It's a movement—a revolution in learning. With Space Invaders: Final Frontier, 
            we are turning play into knowledge, one challenge at a time, ensuring that every child has the tools to 
            unlock the digital universe and code their future.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {[
            { icon: Users, label: "Future Creators", value: "10M+" },
            { icon: Code, label: "Coding Skills", value: "15+" },
            { icon: Trophy, label: "AI Challenges", value: "50+" },
            { icon: Gamepad2, label: "Learning Modules", value: "25+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
