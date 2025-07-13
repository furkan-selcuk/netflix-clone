import React from 'react';
import MovieRow from '../components/MovieRow';

// Mock data for different categories
const actionMovies = [
  {
    id: '1',
    title: 'John Wick',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2014',
    duration: '1s 41dk'
  },
  {
    id: '2',
    title: 'Mad Max: Fury Road',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2015',
    duration: '2s 0dk'
  },
  {
    id: '3',
    title: 'Mission: Impossible',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'PG-13',
    year: '1996',
    duration: '1s 50dk'
  },
  {
    id: '4',
    title: 'The Matrix',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '1999',
    duration: '2s 16dk'
  },
  {
    id: '5',
    title: 'Die Hard',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '1988',
    duration: '2s 12dk'
  },
  {
    id: '6',
    title: 'Top Gun: Maverick',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'PG-13',
    year: '2022',
    duration: '2s 10dk'
  }
];

const comedyMovies = [
  {
    id: '7',
    title: 'The Hangover',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2009',
    duration: '1s 40dk'
  },
  {
    id: '8',
    title: 'Superbad',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2007',
    duration: '1s 53dk'
  },
  {
    id: '9',
    title: 'Bridesmaids',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2011',
    duration: '2s 5dk'
  },
  {
    id: '10',
    title: 'The 40-Year-Old Virgin',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2005',
    duration: '1s 56dk'
  },
  {
    id: '11',
    title: 'Knocked Up',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2007',
    duration: '2s 9dk'
  },
  {
    id: '12',
    title: 'This Is the End',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '2013',
    duration: '1s 47dk'
  }
];

const dramaMovies = [
  {
    id: '13',
    title: 'The Shawshank Redemption',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '1994',
    duration: '2s 22dk'
  },
  {
    id: '14',
    title: 'Forrest Gump',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'PG-13',
    year: '1994',
    duration: '2s 22dk'
  },
  {
    id: '15',
    title: 'The Green Mile',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '1999',
    duration: '3s 9dk'
  },
  {
    id: '16',
    title: 'Schindler\'s List',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '1993',
    duration: '3s 15dk'
  },
  {
    id: '17',
    title: 'The Godfather',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '1972',
    duration: '2s 55dk'
  },
  {
    id: '18',
    title: 'Goodfellas',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 'R',
    year: '1990',
    duration: '2s 26dk'
  }
];

const Browse: React.FC = () => {
  return (
    <div className="min-h-screen bg-netflix-black pt-20">
      <div className="pt-8">
        <MovieRow title="Aksiyon Filmleri" movies={actionMovies} />
        <MovieRow title="Komedi Filmleri" movies={comedyMovies} />
        <MovieRow title="Drama Filmleri" movies={dramaMovies} />
        <MovieRow title="Bilim Kurgu" movies={actionMovies.slice(0, 4)} />
        <MovieRow title="Korku" movies={comedyMovies.slice(0, 4)} />
        <MovieRow title="Romantik" movies={dramaMovies.slice(0, 4)} />
      </div>
    </div>
  );
};

export default Browse; 