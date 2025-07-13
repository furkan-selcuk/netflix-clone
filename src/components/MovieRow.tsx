import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

interface Movie {
  id: string;
  title: string;
  image: string;
  rating?: string;
  year?: string;
  duration?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerRow = 6;

  const nextSlide = () => {
    setStartIndex(prev => Math.min(prev + itemsPerRow, movies.length - itemsPerRow));
  };

  const prevSlide = () => {
    setStartIndex(prev => Math.max(prev - itemsPerRow, 0));
  };

  const canGoNext = startIndex + itemsPerRow < movies.length;
  const canGoPrev = startIndex > 0;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4 px-4 md:px-16">{title}</h2>
      
      <div className="relative group">
        {/* Navigation Buttons */}
        {canGoPrev && (
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        
        {canGoNext && (
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Movie Grid */}
        <div className="flex space-x-2 px-4 md:px-16 overflow-x-auto scrollbar-hide">
          {movies.slice(startIndex, startIndex + itemsPerRow).map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-48">
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow; 