// src/Home.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Trophy, Target, Zap, BarChart3, FileSpreadsheet, Rocket, Shield, Gamepad2,
  Lightbulb, Users, Smartphone, TrendingUp, Briefcase, DollarSign, AlertTriangle,
  Mail, Phone, MessageSquare, Sparkles, Brain, BookOpen, LineChart as LineChartIcon
} from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './components/ui/chart'; // Assuming ./components/ui/chart
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, CartesianGrid } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'; // Assuming ./components/ui/table
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'; // Assuming ./components/ui/card

const Home = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const robotRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for robot
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Robot rotation based on mouse position
  useEffect(() => {
    if (robotRef.current) {
      const robot = robotRef.current;
      const rect = robot.getBoundingClientRect();
      const robotCenterX = rect.left + rect.width / 2;
      const robotCenterY = rect.top + rect.height / 2;
      const angle = Math.atan2(mousePosition.y - robotCenterY, mousePosition.x - robotCenterX);
      const rotation = (angle * 180) / Math.PI;
      robot.style.transform = `rotate(${rotation + 90}deg)`;
    }
  }, [mousePosition]);

  // Chart data (existing)
  const difficultyData = [
    { level: 'Easy', enemies: 10, speed: 2, score: 100 },
    { level: 'Medium', enemies: 15, speed: 3, score: 200 },
    { level: 'Hard', enemies: 20, speed: 4, score: 300 },
    { level: 'Expert', enemies: 25, speed: 5, score: 500 }
  ];

  const performanceData = [
    { session: 1, score: 1200, accuracy: 85, time: 180 },
    { session: 2, score: 1800, accuracy: 78, time: 220 },
    { session: 3, score: 2400, accuracy: 92, time: 190 },
    { session: 4, score: 3200, accuracy: 88, time: 250 },
    { session: 5, score: 2800, accuracy: 94, time: 210 }
  ];

  const gameStatsData = [
    { name: 'Hits', value: 245, color: '#00ffff' },
    { name: 'Misses', value: 55, color: '#ff6b7a' },
    { name: 'Power-ups', value: 12, color: '#ffd700' },
    { name: 'Bonus', value: 8, color: '#9d4edd' }
  ];

  // Excel demo data (existing)
  const playerStatsData = [
    { player: 'Player 1', score: 15420, level: 8, accuracy: '94%', time: '3:45', date: '2024-01-15' },
    { player: 'Player 2', score: 12350, level: 6, accuracy: '87%', time: '4:12', date: '2024-01-14' },
    { player: 'Player 3', score: 18750, level: 10, accuracy: '96%', time: '3:28', date: '2024-01-13' },
    { player: 'Player 4', score: 9840, level: 5, accuracy: '82%', time: '5:03', date: '2024-01-12' },
    { player: 'Player 5', score: 21200, level: 12, accuracy: '98%', time: '3:15', date: '2024-01-11' }
  ];

  // New Market Data for Analytics Tab
  const marketGrowthData = [
    { year: '2024', value: 23.99, label: '$23.99B' },
    { year: '2025', value: 30.17, label: '$30.17B' },
    // Assuming linear interpolation for a few more points for better visualization up to 2028
    { year: '2026', value: 37.93, label: '$37.93B (est.)' }, // CAGR applied
    { year: '2027', value: 47.70, label: '$47.70B (est.)' }, // CAGR applied
    { year: '2028', value: 59.99, label: '$59.99B (est.)' }, // CAGR applied
    { year: '2033', value: 188.53, label: '$188.53B' }
  ]; //
  const marketCAGR = "25.74%"; //

  const keyTrends = [
    { title: "Gamification in Learning", description: "Turning education into a fun, engaging experience with rewards and challenges.", icon: Gamepad2, color: "text-cyan-400" },
    { title: "AI-Powered Learning", description: "AI-driven adaptive learning and personalized education are becoming more popular.", icon: Brain, color: "text-purple-400" },
    { title: "Mobile & Online Learning", description: "More students are using smartphones and tablets for education, increasing accessibility.", icon: Smartphone, color: "text-green-400" },
    { title: "EdTech Partnerships", description: "Schools and universities are integrating educational games into their curriculum.", icon: Users, color: "text-orange-400" }
  ]; //

  const revenueOpportunities = [
    { title: "Freemium Model", description: "Offer a free version with paid upgrades for advanced learning features.", icon: Shield, color: "text-cyan-400" },
    { title: "Subscription-Based Learning", description: "Monthly or yearly plans for exclusive AI-driven coding lessons.", icon: DollarSign, color: "text-purple-400" },
    { title: "Institutional Collaborations", description: "Partner with schools and EdTech platforms for bulk licensing.", icon: Briefcase, color: "text-green-400" },
    { title: "In-App Purchases", description: "Sell new coding challenges, AI modules, and game skins.", icon: Zap, color: "text-orange-400" },
    { title: "Sponsorships & Brand Deals", description: "Collaborate with tech companies to support AI education.", icon: Sparkles, color: "text-pink-400" }
  ]; //

  const marketChallenges = [
    { title: "Competition", description: "The market is growing, but standing out requires unique features and strong branding.", icon: Target, color: "text-red-400" },
    { title: "User Engagement", description: "Keeping kids motivated to learn while playing is crucial.", icon: TrendingUp, color: "text-yellow-400" },
    { title: "Monetization Balance", description: "Ensuring affordability while generating revenue.", icon: AlertTriangle, color: "text-orange-400" }
  ]; //


  const VisionSection = () => (
    <div className="my-16 text-left max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-cyan-400 mb-4 text-center">
        Coding the Future, One Game at a Time
      </h2>
      <p className="text-2xl text-gray-300 mb-10 text-center italic">
        The Vision for Space Invaders: Final Frontier
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <img 
            src="/placeholder_vision_image.jpg" // Replace with actual path to your image in public folder
            alt="Space Invaders: Final Frontier Vision" 
            className="rounded-xl shadow-2xl border-2 border-cyan-500/50 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-xs text-gray-400 mt-2 text-center">A visual representation of learning and play.</p>
        </div>
        <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
          <p>Ladies and gentlemen, today I stand before you with a vision—one that merges education with entertainment, where young minds don’t just play, but learn, create, and innovate.</p>
          <p>We envision <strong className="text-cyan-300">Space Invaders: Final Frontier</strong> as more than just a game. It will be a pioneering platform that transforms coding, artificial intelligence, and STEM concepts into an immersive adventure. Through AI-driven challenges and interactive lessons, children will explore the digital universe, unlocking their creativity while developing essential problem-solving skills.</p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 mb-12 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-3xl font-semibold text-purple-400 mb-4 flex items-center">
          <Brain className="w-10 h-10 mr-3" /> Empowering Young Minds Through AI & Play
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our approach is simple: make learning fun. By integrating AI-powered analysis questions, we encourage children to think critically, solve problems, and develop a deep understanding of coding and artificial intelligence. With adaptive learning mechanics, real-time feedback, and gamified experiences, every challenge will feel less like schoolwork and more like an exciting quest.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 mb-12 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-3xl font-semibold text-green-400 mb-4 flex items-center">
          <Rocket className="w-10 h-10 mr-3" /> From Players to Programmers—Shaping the Next Generation
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our mission goes beyond entertainment. We are preparing children for the future, nurturing curiosity and innovation as they embark on thrilling adventures within the universe of Space Invaders. This game is where imagination meets innovation, where young learners transform into future creators, programmers, and AI pioneers.
        </p>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 hover:scale-[1.02] transition-transform duration-300">
         <h3 className="text-3xl font-semibold text-yellow-400 mb-4 flex items-center">
          <DollarSign className="w-10 h-10 mr-3" /> Sustainable Growth & Accessibility
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          But a vision like this must be sustainable. To ensure growth and accessibility, we have developed a strategic model for revenue generation. By offering premium features, subscriptions for advanced lessons, and partnerships with schools and EdTech platforms, we will create a self-sustaining educational experience. Sponsorships, merchandise, and interactive coding kits will further fuel this mission.
        </p>
        <p className="text-gray-200 text-xl font-semibold">
          This is not just a game. It’s a movement—a revolution in learning. With Space Invaders: Final Frontier, we are turning play into knowledge, one challenge at a time, ensuring that every child has the tools to unlock the digital universe and code their future.
        </p>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-12 px-6 relative">
      {/* 3D Robot */}
      <div className="fixed top-1/2 right-10 z-30 pointer-events-none">
        <div 
          ref={robotRef}
          className="robot-container relative transition-transform duration-200 ease-out"
          style={{ transformOrigin: 'center center' }}
        >
          {/* Robot Head */}
          <div className="w-12 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-lg mx-auto mb-2 relative border-2 border-cyan-300 shadow-lg shadow-cyan-400/50">
            {/* Eyes */}
            <div className="absolute top-3 left-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3 right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-cyan-300"></div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          </div>
          
          {/* Robot Body */}
          <div className="w-10 h-12 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-md mx-auto relative border-2 border-blue-400 shadow-lg shadow-blue-400/50">
            {/* Chest Panel */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-cyan-300 rounded"></div>
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded border border-green-300"></div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-14 -left-2 w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded border border-blue-400"></div>
          <div className="absolute top-14 -right-2 w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded border border-blue-400"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 tracking-wider">
            Space Invaders: <span className="text-cyan-400">Final Frontier</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the ultimate retro gaming adventure reimagined for the modern era.
            Defend Earth against alien invaders in this thrilling space combat simulator.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap">
            {[
              { id: 'overview', label: 'Overview & Vision', icon: Rocket },
              { id: 'analytics', label: 'Market & Strategy', icon: LineChartIcon },
              { id: 'journey', label: 'Player Journey', icon: Gamepad2 },
              { id: 'excel', label: 'Excel Demo', icon: FileSpreadsheet }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm md:text-base my-1 ${
                  activeTab === id 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-lg shadow-cyan-400/30' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-transparent'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <VisionSection /> {/* Displaying the new vision section */}
            
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

            {/* Project at a Glance */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-cyan-400 mb-12">Project at a Glance</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                  <h3 className="text-4xl font-bold text-cyan-400 mb-2">Python 3</h3>
                  <p className="text-gray-300">Core Language</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-8 border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                  <h3 className="text-4xl font-bold text-purple-400 mb-2">Pygame</h3>
                  <p className="text-gray-300">Core Library</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-8 border-2 border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:scale-105">
                  <h3 className="text-4xl font-bold text-orange-400 mb-2">15+</h3>
                  <p className="text-gray-300">Major Features</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-8 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
                  <h3 className="text-4xl font-bold text-green-400 mb-2">Excel</h3>
                  <p className="text-gray-300">Data Persistence</p>
                </div>
              </div>
            </div>

            {/* Core Technology Stack */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Core Technology Stack</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Python</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The entire game logic, state management, and data processing is built on Python 3.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Pygame</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Pygame serves as the core library for graphics, input, sound, and game loops.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">OpenPyXL</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This library enables robust data persistence, saving results to Excel files.
                  </p>
                </div>
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
                    <h3 className="text-cyan-400 font-semibold mb-2">Technology Stack</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Python 3.x</li>
                      <li>• Pygame Library</li>
                      <li>• OpenPyXL for Excel</li>
                      <li>• Audio Processing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
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
        )}

        {activeTab === 'journey' && (
          <div className="space-y-16">
            {/* Player Journey Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">The Player Journey</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Experience an immersive gameplay progression designed to challenge and engage players at every level
              </p>
            </div>

            {/* Journey Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Game Launch",
                  description: "Welcome screen with music selection and difficulty settings",
                  icon: Play,
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  step: "02", 
                  title: "Combat Phase",
                  description: "Engage enemies with strategic movement and precise shooting",
                  icon: Target,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Progression",
                  description: "Dynamic difficulty scaling with increasing enemy speed and count",
                  icon: Zap,
                  color: "from-orange-500 to-red-500"
                },
                {
                  step: "04",
                  title: "Victory",
                  description: "Score recording and performance analysis with Excel integration",
                  icon: Trophy,
                  color: "from-green-500 to-emerald-500"
                }
              ].map((phase, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full hover:scale-105">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-cyan-400 font-semibold mb-2">PHASE {phase.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Game Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30 hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Defense</h3>
                <p className="text-gray-300">
                  Strategic gameplay mechanics with collision detection, power-ups, and defensive positioning systems.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Dynamic Scaling</h3>
                <p className="text-gray-300">
                  Intelligent difficulty adjustment based on player performance, ensuring optimal challenge levels.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/30 hover:scale-105 transition-all duration-300">
                <BarChart3 className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Performance Analytics</h3>
                <p className="text-gray-300">
                  Comprehensive data tracking with Excel integration for detailed performance analysis and improvement.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">Market Insights & Project Potential</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The educational games market shows significant growth, presenting exciting opportunities.
              </p>
            </div>

            {/* Market Growth Chart */}
            <Card className="bg-white/5 backdrop-blur-sm border-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-cyan-400">Global Educational Games Market Growth</CardTitle>
                <CardDescription className="text-gray-300">Projected growth from 2024 to 2033. (CAGR: {marketCAGR})</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={marketGrowthData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                    <XAxis dataKey="year" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" unit="B" label={{ value: 'Market Value (Billion USD)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
                    <ChartTooltip 
                       contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #00ffff', borderRadius: '8px' }}
                       labelStyle={{ color: '#00ffff', fontWeight: 'bold' }}
                       itemStyle={{ color: '#ffffff' }}
                       formatter={(value, name, props) => [`$${value} Billion`, `Market Value`]}
                    />
                    <Legend wrapperStyle={{ color: '#e0e0e0' }} />
                    <Bar dataKey="value" name="Market Value (Billion USD)" fill="url(#colorMarketValue)" radius={[4, 4, 0, 0]} />
                     <defs>
                      <linearGradient id="colorMarketValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00ffff" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0080ff" stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* Key Trends, Revenue Opportunities, Challenges */}
             <div className="grid lg:grid-cols-3 gap-8 mt-12">
              <Card className="bg-white/5 backdrop-blur-sm border-purple-500/30 hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-purple-400 flex items-center"><TrendingUp className="mr-2"/>Key Market Trends</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {keyTrends.map(item => (
                    <div key={item.title} className="flex items-start space-x-3">
                      <item.icon className={`w-6 h-6 ${item.color} mt-1 shrink-0`} />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-green-500/30 hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-400 flex items-center"><DollarSign className="mr-2"/>Strategic Revenue Streams</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {revenueOpportunities.map(item => (
                     <div key={item.title} className="flex items-start space-x-3">
                      <item.icon className={`w-6 h-6 ${item.color} mt-1 shrink-0`} />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-orange-500/30 hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-orange-400 flex items-center"><AlertTriangle className="mr-2"/>Addressing Market Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {marketChallenges.map(item => (
                    <div key={item.title} className="flex items-start space-x-3">
                      <item.icon className={`w-6 h-6 ${item.color} mt-1 shrink-0`} />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Existing Charts Grid (if any, or can be removed/merged) */}
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
                {/* Difficulty Progression Chart (Existing) */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">Difficulty Progression</h3>
                   <ChartContainer config={{
                    enemies: { label: "Enemies", color: "#00ffff" },
                    speed: { label: "Speed", color: "#ff6b7a" },
                  }}>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={difficultyData}>
                        <XAxis dataKey="level" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="enemies" fill="var(--color-enemies)" />
                        <Bar dataKey="speed" fill="var(--color-speed)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                {/* Performance Trends (Existing) */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">Performance Trends</h3>
                  <ChartContainer config={{
                    score: { label: "Score", color: "#9d4edd" },
                    accuracy: { label: "Accuracy %", color: "#00ffff" }
                  }}>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={performanceData}>
                        <XAxis dataKey="session" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="score" stroke="var(--color-score)" strokeWidth={3} />
                        <Line type="monotone" dataKey="accuracy" stroke="var(--color-accuracy)" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'excel' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">Excel Integration Demo</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Real-time data export and analysis using OpenPyXL for comprehensive player statistics
              </p>
            </div>

            {/* Excel Demo Interface */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-500/30 overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <FileSpreadsheet className="w-6 h-6 text-cyan-400" />
                  <span className="text-white font-semibold">Player_Statistics.xlsx</span>
                  <div className="flex space-x-2 ml-auto">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Sheet: Player Performance Data</h3>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/30 transition-colors hover:scale-105">
                      Export Data
                    </button>
                    <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm hover:bg-purple-500/30 transition-colors hover:scale-105">
                      Generate Report
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/20 hover:bg-white/5">
                        <TableHead className="text-cyan-400 font-semibold">Player ID</TableHead>
                        <TableHead className="text-cyan-400 font-semibold">Final Score</TableHead>
                        <TableHead className="text-cyan-400 font-semibold">Max Level</TableHead>
                        <TableHead className="text-cyan-400 font-semibold">Accuracy</TableHead>
                        <TableHead className="text-cyan-400 font-semibold">Play Time</TableHead>
                        <TableHead className="text-cyan-400 font-semibold">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {playerStatsData.map((player, index) => (
                        <TableRow key={index} className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="text-white font-mono">{player.player}</TableCell>
                          <TableCell className="text-cyan-400 font-bold">{player.score.toLocaleString()}</TableCell>
                          <TableCell className="text-purple-400">{player.level}</TableCell>
                          <TableCell className="text-green-400">{player.accuracy}</TableCell>
                          <TableCell className="text-orange-400">{player.time}</TableCell>
                          <TableCell className="text-gray-300">{player.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="bg-cyan-500/10 rounded-lg p-4 hover:scale-105 transition-all duration-300">
                    <h4 className="text-cyan-400 font-semibold mb-2">Data Export Features</h4>
                    <ul className