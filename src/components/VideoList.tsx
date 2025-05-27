// src/components/VideoList.tsx
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client'; // Adjust if your path is different
import { Database } from '@/integrations/supabase/types'; // Import generated DB types
import { useAdmin } from '@/contexts/AdminContext'; // To conditionally show delete button

type Video = Database['public']['Tables']['videos']['Row'];

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAdminLoggedIn } = useAdmin(); // Get admin login state

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('videos')
          .select('*')
          .order('created_at', { ascending: false }); // Show newest videos first

        if (fetchError) {
          throw fetchError;
        }

        setVideos(data || []);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (videoToDelete: Video) => {
    if (!isAdminLoggedIn) {
      alert("You must be logged in as an admin to delete videos.");
      return;
    }

    if (!window.confirm(`Are you sure you want to delete "${videoToDelete.title}"?`)) {
      return;
    }

    try {
      // 1. Delete the file from Storage
      const fileName = videoToDelete.file_path.split('/').pop();
      if (!fileName) {
        throw new Error("Could not determine file name from path.");
      }
      const { error: storageError } = await supabase.storage
        .from('videos') // Your bucket name
        .remove([fileName]);

      if (storageError) throw storageError;

      // 2. Delete the record from the database
      const { error: dbError } = await supabase
        .from('videos')
        .delete()
        .match({ id: videoToDelete.id });

      if (dbError) throw dbError;

      // 3. Update the UI by removing the deleted video from the state
      setVideos(currentVideos => currentVideos.filter(v => v.id !== videoToDelete.id));
      alert("Video deleted successfully!");

    } catch (err: any) {
      console.error("Error deleting video:", err);
      alert(`Error: ${err.message}`);
    }
  };


  if (loading) return <p className="text-center text-white py-10">Loading videos...</p>;
  if (error) return <p className="text-red-400 text-center py-10">Error: {error}</p>;

  if (videos.length === 0) {
    return <p className="text-center text-gray-400 py-10">No videos uploaded yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {videos.map((video) => (
        <div key={video.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
          <div className="aspect-video bg-black">
            <video controls preload="metadata" className="w-full h-full object-contain">
              <source src={video.file_path} type={video.mime_type || 'video/mp4'} />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{video.title}</h3>
            {video.description && (
              <p className="text-gray-300 text-sm mb-4 h-16 overflow-y-auto">{video.description}</p>
            )}
            {isAdminLoggedIn && (
              <button
                onClick={() => handleDelete(video)}
                className="mt-2 w-full bg-red-600/80 hover:bg-red-700/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Delete Video
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;