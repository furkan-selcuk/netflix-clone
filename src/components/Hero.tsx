import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Stranger Things
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            1983 yılında, Indiana'nın küçük kasabasında bir çocuk kaybolur. 
            Bu olay, doğaüstü güçler, korkunç devlet sırları ve garip küçük bir kızı ortaya çıkarır.
          </p>
          
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
              <Play size={20} className="mr-2" />
              Oynat
            </button>
            <button className="flex items-center px-6 py-3 bg-gray-600/70 text-white font-semibold rounded hover:bg-gray-600 transition-colors">
              <Info size={20} className="mr-2" />
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 