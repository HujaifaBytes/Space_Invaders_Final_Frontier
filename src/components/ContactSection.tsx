
import React from 'react';
import { Mail, Phone, MessageCircle, Users } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8801730903744', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:hujaifakhanmdrohid4004@gmail.com', '_blank');
  };

  return (
    <div className="py-16 bg-gradient-to-r from-gray-900/50 via-blue-900/50 to-purple-900/50 rounded-xl border border-cyan-500/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to join the revolution in educational gaming? Contact TragicBytes today!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Email */}
        <div 
          onClick={handleEmailClick}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <p className="text-sm text-gray-300 break-all">hujaifakhanmdrohid4004@gmail.com</p>
        </div>

        {/* Mobile */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 hover:scale-105 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Mobile</h3>
          <p className="text-sm text-gray-300">01730903744</p>
        </div>

        {/* WhatsApp */}
        <div 
          onClick={handleWhatsAppClick}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
          <p className="text-sm text-gray-300">+8801730903744</p>
          <p className="text-xs text-green-400 mt-1">Click to message</p>
        </div>

        {/* Team */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/60 hover:scale-105 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Team</h3>
          <p className="text-sm text-gray-300">TragicBytes</p>
          <p className="text-xs text-orange-400 mt-1">Innovation Squad</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 max-w-2xl mx-auto border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Join the Educational Revolution</h3>
          <p className="text-gray-300 mb-6">
            Transform learning through the power of gaming and AI. Let's build the future of education together.
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            Start the Conversation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
