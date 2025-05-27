
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAdmin } from '@/contexts/AdminContext';
import VideoUpload from './VideoUpload';
import EnhancedVideoPlayer from './EnhancedVideoPlayer';

const GameGallery = () => {
  const { isAdminLoggedIn } = useAdmin();
  const [currentImage, setCurrentImage] = useState(0);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  
  const gameImages = [
    {
      src: '/lovable-uploads/8170ab67-e8e2-4848-80e8-b54102b22934.png',
      title: 'Game Start Screen',
      description: 'Player setup with name input, gender selection, and game settings configuration'
    },
    {
      src: '/lovable-uploads/80afbf43-e0aa-43ea-9807-4bb743af2633.png',
      title: 'Player Configuration',
      description: 'Customized player profile with sensitivity settings and audio options'
    },
    {
      src: '/lovable-uploads/1a54af6a-c52d-4eb6-b969-a8056eefd85d.png',
      title: 'Active Gameplay',
      description: 'Intense space battle with enemy formations and danger level indicators'
    },
    {
      src: '/lovable-uploads/5f00f8bc-22b6-4525-89b0-34b2be3e87ca.png',
      title: 'Pause Screen',
      description: 'Game paused state with clear instructions for resuming gameplay'
    },
    {
      src: '/lovable-uploads/1bc3d041-f0c6-4341-8e6d-59c96277a3fb.png',
      title: 'Enemy Encounters',
      description: 'Various enemy ship formations attacking from different angles'
    },
    {
      src: '/lovable-uploads/9aeb9616-1d18-4a89-87c0-5fd9314e7b40.png',
      title: 'Combat Action',
      description: 'Player ship engaging enemies with laser fire and evasive maneuvers'
    },
    {
      src: '/lovable-uploads/40e57fe9-338c-42ac-abcb-025af925d36c.png',
      title: 'Strategic Positioning',
      description: 'Tactical gameplay showing enemy formations and player positioning'
    },
    {
      src: '/lovable-uploads/53dc9280-28d8-4939-8b02-0fe9d8afad47.png',
      title: 'Advanced Combat',
      description: 'High-intensity gameplay with multiple enemy waves and threats'
    },
    {
      src: '/lovable-uploads/86c1ef88-d64b-4e0d-b9ef-8e4a50c0af57.png',
      title: 'Game Over Screen',
      description: 'End game state with instructions to return to the main menu'
    }
  ];

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching videos:', error);
        return;
      }

      setVideos(data || []);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const allMedia = [...gameImages, ...videos.map(video => ({
    ...video,
    src: video.file_path,
    isVideo: true
  }))];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % allMedia.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const currentMedia = allMedia[currentImage];

  return (
    <div className="pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-wider">
            Game <span className="text-cyan-400">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore screenshots and videos from our Space Invaders gameplay experience
          </p>
        </div>

        {/* Admin Upload Section */}
        {isAdminLoggedIn && (
          <VideoUpload onVideoUploaded={fetchVideos} />
        )}

        {/* Main Gallery */}
        <div className="relative mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-cyan-500/30 overflow-hidden">
            <div className="relative aspect-video">
              {currentMedia?.isVideo ? (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <video
                    src={currentMedia.src}
                    className="w-full h-full object-contain"
                    poster=""
                    preload="metadata"
                  />
                  <button
                    onClick={() => setSelectedVideo(currentMedia)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300 group"
                  >
                    <div className="bg-cyan-500 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play size={40} className="text-white ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-4 right-4 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    HD VIDEO
                  </div>
                </div>
              ) : (
                <img
                  src={currentMedia?.src}
                  alt={currentMedia?.title}
                  className="w-full h-full object-contain bg-black"
                />
              )}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ArrowLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ArrowRight size={24} />
              </button>
              
              {/* Media Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                {currentImage + 1} / {allMedia.length}
              </div>

              {/* Video Indicator */}
              {currentMedia?.isVideo && (
                <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  VIDEO
                </div>
              )}
            </div>
          </div>
          
          {/* Media Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              {currentMedia?.title}
            </h3>
            <p className="text-gray-300 text-lg">
              {currentMedia?.description}
            </p>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {allMedia.map((media, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                currentImage === index
                  ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-transparent'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {media.isVideo ? (
                <div className="relative w-full h-full">
                  <video
                    src={media.src}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={16} className="text-white" />
                  </div>
                </div>
              ) : (
                <img
                  src={media.src}
                  alt={media.title}
                  className="w-full h-full object-cover"
                />
              )}
              {currentImage === index && (
                <div className="absolute inset-0 bg-cyan-400/20"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Video Player Modal */}
        {selectedVideo && (
          <EnhancedVideoPlayer
            src={selectedVideo.src}
            title={selectedVideo.title}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </div>
  );
};

export default GameGallery;
