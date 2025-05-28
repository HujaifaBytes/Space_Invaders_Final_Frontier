
import React from 'react';
import { TrendingUp, DollarSign, Users, Globe } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const MarketAnalytics = () => {
  // Market growth data
  const marketGrowthData = [
    { year: '2024', value: 23.99, growth: 0 },
    { year: '2025', value: 30.17, growth: 25.74 },
    { year: '2026', value: 37.93, growth: 25.74 },
    { year: '2027', value: 47.69, growth: 25.74 },
    { year: '2028', value: 59.97, growth: 25.74 },
    { year: '2029', value: 75.42, growth: 25.74 },
    { year: '2030', value: 94.84, growth: 25.74 },
    { year: '2031', value: 119.27, growth: 25.74 },
    { year: '2032', value: 149.98, growth: 25.74 },
    { year: '2033', value: 188.53, growth: 25.74 }
  ];

  // Revenue model data
  const revenueModelData = [
    { model: 'Freemium', percentage: 25, value: 47.13, color: '#00ffff' },
    { model: 'Subscription', percentage: 30, value: 56.56, color: '#9d4edd' },
    { model: 'Institutional', percentage: 20, value: 37.71, color: '#ffd700' },
    { model: 'In-App Purchases', percentage: 15, value: 28.28, color: '#ff6b7a' },
    { model: 'Sponsorships', percentage: 10, value: 18.85, color: '#00ff88' }
  ];

  // Key trends data
  const trendsData = [
    { trend: 'Gamification', adoption: 85, impact: 92 },
    { trend: 'AI Learning', adoption: 78, impact: 88 },
    { trend: 'Mobile Learning', adoption: 95, impact: 85 },
    { trend: 'EdTech Partnerships', adoption: 70, impact: 90 }
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Market Overview Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          An Exploding Galaxy of <span className="text-cyan-400">Possibilities</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-6xl font-bold text-cyan-400 mb-4">$23.99B</div>
            <div className="text-xl text-white mb-2">2024 Market Value</div>
            <div className="text-gray-300">Significant growth potential.</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-purple-400 mb-4">$188.53B</div>
            <div className="text-xl text-white mb-2">2033 Projection</div>
            <div className="text-gray-300">Exponential market expansion.</div>
          </div>
        </div>
      </div>

      {/* Market Growth Chart */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 text-cyan-400 mr-3" />
          Educational Games Market Growth (2024-2033)
        </h3>
        <ChartContainer config={{
          value: { label: "Market Value ($B)", color: "#00ffff" },
          growth: { label: "Growth Rate (%)", color: "#9d4edd" }
        }}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={marketGrowthData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00ffff" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00ffff" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="value" stroke="#00ffff" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 text-center">
          <span className="text-lg font-semibold text-cyan-400">CAGR: 25.74%</span>
          <span className="text-gray-300 ml-4">Compound Annual Growth Rate</span>
        </div>
      </div>

      {/* Key Trends and Gamification */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Key Trends */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6">Key Trends</h3>
          <div className="space-y-4">
            {trendsData.map((trend, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{trend.trend}</span>
                  <span className="text-cyan-400 font-semibold">{trend.adoption}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${trend.adoption}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-2">Gamification</h4>
            <p className="text-gray-300 text-sm">AI, mobile learning driving unprecedented growth in educational technology.</p>
          </div>
        </div>

        {/* Revenue Opportunities Pie Chart */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30 hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <DollarSign className="w-6 h-6 text-orange-400 mr-3" />
            Revenue Opportunities
          </h3>
          <ChartContainer config={{
            freemium: { label: "Freemium Model", color: "#00ffff" },
            subscription: { label: "Subscription-Based", color: "#9d4edd" },
            institutional: { label: "Institutional", color: "#ffd700" },
            inapp: { label: "In-App Purchases", color: "#ff6b7a" },
            sponsorships: { label: "Sponsorships", color: "#00ff88" }
          }}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueModelData}
                  dataKey="percentage"
                  nameKey="model"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ model, percentage }) => `${model}: ${percentage}%`}
                >
                  {revenueModelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Revenue Model Breakdown */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-6">Monetization Model</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { 
              number: "1", 
              title: "Freemium + Premium", 
              desc: "Accessible entry, value upgrades.",
              color: "from-cyan-500 to-blue-500"
            },
            { 
              number: "2", 
              title: "Subscription-Based", 
              desc: "Continuous learning access.",
              color: "from-purple-500 to-pink-500"
            },
            { 
              number: "3", 
              title: "Institutional Licensing", 
              desc: "Schools and organizations.",
              color: "from-orange-500 to-red-500"
            },
            { 
              number: "4", 
              title: "In-App Purchases", 
              desc: "Enhance user experience.",
              color: "from-green-500 to-emerald-500"
            },
            { 
              number: "5", 
              title: "Brand Sponsorships", 
              desc: "Strategic partnerships.",
              color: "from-yellow-500 to-orange-500"
            }
          ].map((model, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${model.color} flex items-center justify-center mb-4 mx-auto`}>
                <span className="text-xl font-bold text-white">{model.number}</span>
              </div>
              <h4 className="text-lg font-semibold text-white text-center mb-2">{model.title}</h4>
              <p className="text-sm text-gray-300 text-center">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges and Solutions */}
      <div className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-xl p-12 border border-orange-500/30">
        <h3 className="text-3xl font-bold text-center text-white mb-12">Strategic Challenges & Solutions</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Competition</h4>
            <p className="text-gray-300 text-sm">Unique AI features, strong branding.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">User Retention</h4>
            <p className="text-gray-300 text-sm">Gamified, adaptive content.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Affordability</h4>
            <p className="text-gray-300 text-sm">Balanced pricing for accessibility.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalytics;
