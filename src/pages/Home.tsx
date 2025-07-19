import React from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

// Mock data
const mockMovies = [
  {
    id: '1',
    title: 'Stranger Things',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-14',
    year: '2016',
    duration: '4 Sezon'
  },
  {
    id: '2',
    title: 'Wednesday',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-14',
    year: '2022',
    duration: '1 Sezon'
  },
  {
    id: '3',
    title: 'The Witcher',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-MA',
    year: '2019',
    duration: '3 Sezon'
  },
  {
    id: '4',
    title: 'Bridgerton',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-MA',
    year: '2020',
    duration: '3 Sezon'
  },
  {
    id: '5',
    title: 'Money Heist',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-MA',
    year: '2017',
    duration: '5 Sezon'
  },
  {
    id: '6',
    title: 'Dark',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-MA',
    year: '2017',
    duration: '3 Sezon'
  },
  {
    id: '7',
    title: 'The Crown',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-MA',
    year: '2016',
    duration: '6 Sezon'
  },
  {
    id: '8',
    title: 'Ozark',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-MA',
    year: '2017',
    duration: '4 Sezon'
  },
  {
    id: '8',
    title: 'Ozark',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'TV-MA',
    year: '2017',
    duration: '4 Sezon'
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-netflix-black">
      <Hero />
      
      <div className="pt-8">
        <MovieRow title="Netflix'te Popüler" movies={mockMovies} />
        <MovieRow title="Devam Et" movies={mockMovies.slice(0, 6)} />
        <MovieRow title="Trendler" movies={mockMovies.slice(2, 8)} />
        <MovieRow title="Yeni Eklenenler" movies={mockMovies.slice(1, 7)} />
        <MovieRow title="Önerilen" movies={mockMovies.slice(3, 9)} />
      </div>
    </div>
  );
};

export default Home; 