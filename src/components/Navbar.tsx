import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/home" className="text-netflix-red text-2xl font-bold">
            NETFLIX
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/home" className="text-white hover:text-gray-300 transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition-colors">
              Diziler
            </Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition-colors">
              Filmler
            </Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition-colors">
              Yeni ve Popüler
            </Link>
            <Link to="/browse" className="text-white hover:text-gray-300 transition-colors">
              Listem
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <Bell size={20} />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 