import React, { useState } from 'react';
import { RefreshCcw } from 'lucide-react';

interface CommentFormProps {
  onSubmit: (videoId: string, maxResults: number) => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [videoId, setVideoId] = useState('');
  const [maxResults, setMaxResults] = useState(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(videoId, maxResults);
  };

  return (
<form onSubmit={handleSubmit} className="mb-6">
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-3 mb-4">
    <input
      type="text"
      value={videoId}
      onChange={(e) => setVideoId(e.target.value)}
      placeholder="Video ID"
      required
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-400 bg-gray-800 text-white placeholder-gray-500 border-gray-600"
    />
    <input
      type="number"
      value={maxResults}
      onChange={(e) => setMaxResults(Number(e.target.value))}
      placeholder="Max Results"
      min="1"
      max="100"
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-400 bg-gray-800 text-white placeholder-gray-500 border-gray-600"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-2 md:px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center text-sm md:text-base"
  >
    <RefreshCcw size={16} className="inline-block mr-2" />
    Load Comments
  </button>
</form>

  );
};