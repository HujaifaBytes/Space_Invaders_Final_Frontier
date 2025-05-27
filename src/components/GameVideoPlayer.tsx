// src/components/GameVideoPlayer.tsx
import React from 'react';

const GameVideoPlayer = () => {
  const videoEmbedUrl = "https://drive.google.com/file/d/1yCJhU97OKW-MVCAEpBdcCmkxdvD52neE/preview";

  return (
    <div className="pt-24 pb-12 px-6 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-white mb-10 tracking-wider">
          Gameplay <span className="text-cyan-400">Showcase</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          Check out the action-packed gameplay of Space Invaders: Final Frontier!
        </p>
        <div 
          className="aspect-video w-full bg-black rounded-xl shadow-2xl overflow-hidden border-2 border-cyan-500/50
                     hover:border-cyan-400/80 transition-all duration-300"
          style={{
            boxShadow: '0 0 25px rgba(0, 255, 255, 0.2), 0 0 50px rgba(0, 255, 255, 0.1)',
          }}
        >
          <iframe
            src={videoEmbedUrl}
            width="100%"
            height="100%"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Game Video"
            className="rounded-lg"
          ></iframe>
        </div>
        <p className="text-sm text-gray-400 mt-8">
          Video hosted on Google Drive. Please ensure you have access if it doesn't load.
        </p>
      </div>
    </div>
  );
};

export default GameVideoPlayer;