import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Share2, ArrowLeft } from 'lucide-react';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock movie data
  const movie = {
    id: id || '1',
    title: 'Stranger Things',
    description: '1983 yılında, Indiana\'nın küçük kasabasında bir çocuk kaybolur. Bu olay, doğaüstü güçler, korkunç devlet sırları ve garip küçük bir kızı ortaya çıkarır. Bir çocuğun kaybolması, kasabanın karanlık sırlarını, korkunç devlet deneylerini ve çok garip küçük bir kızı ortaya çıkarır.',
    year: '2016',
    rating: 'TV-14',
    duration: '4 Sezon',
    genre: 'Bilim Kurgu, Drama, Korku',
    cast: 'Millie Bobby Brown, Finn Wolfhard, Noah Schnapp',
    director: 'The Duffer Brothers',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  };

  return (
    <div className="min-h-screen bg-netflix-black pt-20">
      {/* Back Button */}
      <div className="px-4 md:px-16 py-4">
        <Link 
          to="/browse" 
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Geri Dön
        </Link>
      </div>

      {/* Movie Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${movie.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full px-4 md:px-16 pb-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
              <span className="text-green-400 font-semibold">%98 Eşleşme</span>
              <span>{movie.year}</span>
              <span>{movie.rating}</span>
              <span>{movie.duration}</span>
              <span>HD</span>
            </div>

            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              {movie.description}
            </p>

            <div className="flex space-x-4">
              <button className="flex items-center px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
                <Play size={20} className="mr-2" />
                Oynat
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-600/70 text-white font-semibold rounded hover:bg-gray-600 transition-colors">
                <Plus size={20} className="mr-2" />
                Listeme Ekle
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-600/70 text-white font-semibold rounded hover:bg-gray-600 transition-colors">
                <ThumbsUp size={20} className="mr-2" />
                Beğen
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-600/70 text-white font-semibold rounded hover:bg-gray-600 transition-colors">
                <Share2 size={20} className="mr-2" />
                Paylaş
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="px-4 md:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">Özet</h3>
            <p className="text-gray-300 leading-relaxed">
              {movie.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Oyuncular</h4>
              <p className="text-white">{movie.cast}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Türler</h4>
              <p className="text-white">{movie.genre}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Yönetmen</h4>
              <p className="text-white">{movie.director}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">İçerik Derecelendirmesi</h4>
              <p className="text-white">{movie.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail; 