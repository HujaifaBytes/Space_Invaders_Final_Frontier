
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useAdmin } from '@/contexts/AdminContext';
import { Upload, X } from 'lucide-react';

interface VideoUploadProps {
  onVideoUploaded: () => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUploaded }) => {
  const { adminData } = useAdmin();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleVideoUpload = async (file: File) => {
    if (!adminData) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Upload video to Supabase storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `videos/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('videos')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('videos')
        .getPublicUrl(filePath);

      // Save video metadata to database
      const { error: dbError } = await supabase
        .from('videos')
        .insert({
          title: title || file.name,
          description: description,
          file_path: publicUrl,
          file_size: file.size,
          mime_type: file.type,
          uploaded_by: adminData.id
        });

      if (dbError) {
        throw dbError;
      }

      // Reset form
      setTitle('');
      setDescription('');
      setShowForm(false);
      onVideoUploaded();
      
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
      handleVideoUpload(file);
    } else {
      alert('Please select a valid video file.');
    }
  };

  if (!showForm) {
    return (
      <Button
        onClick={() => setShowForm(true)}
        className="bg-cyan-600 hover:bg-cyan-700 text-white mb-6"
      >
        <Upload size={16} className="mr-2" />
        Upload Video
      </Button>
    );
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-cyan-400">Upload Video</h3>
        <Button
          onClick={() => setShowForm(false)}
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white"
        >
          <X size={16} />
        </Button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Video Title
          </label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description (Optional)
          </label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter video description"
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Video File
          </label>
          <Input
            type="file"
            accept="video/*"
            onChange={handleFileSelect}
            disabled={isUploading}
            className="bg-gray-800 border-gray-700 text-white file:bg-cyan-600 file:text-white file:border-0 file:rounded file:px-4 file:py-2"
          />
        </div>
        
        {isUploading && (
          <div className="mt-4">
            <div className="text-sm text-cyan-400 mb-2">Uploading...</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;
