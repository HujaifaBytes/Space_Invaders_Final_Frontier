
import React, { useState } from 'react';
import { Play, Trophy, Target, Zap, BarChart3, FileSpreadsheet, Rocket, Shield, Gamepad2 } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const Home = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Chart data
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

  // Excel demo data
  const playerStatsData = [
    { player: 'Player 1', score: 15420, level: 8, accuracy: '94%', time: '3:45', date: '2024-01-15' },
    { player: 'Player 2', score: 12350, level: 6, accuracy: '87%', time: '4:12', date: '2024-01-14' },
    { player: 'Player 3', score: 18750, level: 10, accuracy: '96%', time: '3:28', date: '2024-01-13' },
    { player: 'Player 4', score: 9840, level: 5, accuracy: '82%', time: '5:03', date: '2024-01-12' },
    { player: 'Player 5', score: 21200, level: 12, accuracy: '98%', time: '3:15', date: '2024-01-11' }
  ];

  return (
    <div className="pt-24 pb-12 px-6">
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
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { id: 'overview', label: 'Overview', icon: Rocket },
              { id: 'journey', label: 'Player Journey', icon: Gamepad2 },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'excel', label: 'Excel Demo', icon: FileSpreadsheet }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === id 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
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
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full">
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
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Defense</h3>
                <p className="text-gray-300">
                  Strategic gameplay mechanics with collision detection, power-ups, and defensive positioning systems.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Dynamic Scaling</h3>
                <p className="text-gray-300">
                  Intelligent difficulty adjustment based on player performance, ensuring optimal challenge levels.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/30">
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
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">Game Analytics & Performance</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Advanced data visualization and performance metrics for comprehensive game analysis
              </p>
            </div>

            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Difficulty Progression Chart */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Difficulty Progression</h3>
                <ChartContainer config={{
                  enemies: { label: "Enemies", color: "#00ffff" },
                  speed: { label: "Speed", color: "#ff6b7a" },
                  score: { label: "Score Multiplier", color: "#ffd700" }
                }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={difficultyData}>
                      <XAxis dataKey="level" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="enemies" fill="#00ffff" />
                      <Bar dataKey="speed" fill="#ff6b7a" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Performance Trends */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
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
                      <Line type="monotone" dataKey="score" stroke="#9d4edd" strokeWidth={3} />
                      <Line type="monotone" dataKey="accuracy" stroke="#00ffff" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Game Statistics Pie Chart */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Game Statistics</h3>
                <ChartContainer config={{
                  hits: { label: "Hits", color: "#00ffff" },
                  misses: { label: "Misses", color: "#ff6b7a" },
                  powerups: { label: "Power-ups", color: "#ffd700" },
                  bonus: { label: "Bonus", color: "#9d4edd" }
                }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={gameStatsData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {gameStatsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Real-time Metrics */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Real-time Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyan-500/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400">15,420</div>
                    <div className="text-sm text-gray-300">Highest Score</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400">96%</div>
                    <div className="text-sm text-gray-300">Best Accuracy</div>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-orange-400">12</div>
                    <div className="text-sm text-gray-300">Max Level</div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">3:15</div>
                    <div className="text-sm text-gray-300">Best Time</div>
                  </div>
                </div>
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
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-500/30 overflow-hidden">
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
                    <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/30 transition-colors">
                      Export Data
                    </button>
                    <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm hover:bg-purple-500/30 transition-colors">
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
                        <TableRow key={index} className="border-white/10 hover:bg-white/5">
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
                  <div className="bg-cyan-500/10 rounded-lg p-4">
                    <h4 className="text-cyan-400 font-semibold mb-2">Data Export Features</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Real-time score tracking</li>
                      <li>• Performance metrics analysis</li>
                      <li>• Automated report generation</li>
                      <li>• Historical data comparison</li>
                    </ul>
                  </div>

                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <h4 className="text-purple-400 font-semibold mb-2">Analytics Integration</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• OpenPyXL library integration</li>
                      <li>• Formatted Excel outputs</li>
                      <li>• Chart generation in Excel</li>
                      <li>• Custom formula calculations</li>
                    </ul>
                  </div>

                  <div className="bg-orange-500/10 rounded-lg p-4">
                    <h4 className="text-orange-400 font-semibold mb-2">Future Enhancements</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Cloud data synchronization</li>
                      <li>• Multi-player leaderboards</li>
                      <li>• Advanced AI opponents</li>
                      <li>• Tournament mode support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
