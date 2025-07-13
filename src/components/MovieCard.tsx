import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface MovieCardProps {
  id: string;
  title: string;
  image: string;
  rating?: string;
  year?: string;
  duration?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  id, 
  title, 
  image, 
  rating = 'TV-MA', 
  year = '2023', 
  duration = '2s 15dk' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Image */}
      <div className="relative overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-4">
            {/* Top Icons */}
            <div className="flex justify-between items-start">
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Play size={16} className="text-black" />
                </button>
                <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <Plus size={16} />
                </button>
                <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <ThumbsUp size={16} />
                </button>
              </div>
              <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Bottom Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-green-400 font-semibold">%98 Eşleşme</span>
                <span className="text-gray-400">{rating}</span>
                <span className="text-gray-400">{duration}</span>
              </div>
              <div className="flex space-x-1">
                <span className="text-xs text-gray-400">{year}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400">HD</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Title (shown when not hovered) */}
      {!isHovered && (
        <div className="mt-2">
          <h3 className="text-sm font-medium text-white truncate">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default MovieCard; 