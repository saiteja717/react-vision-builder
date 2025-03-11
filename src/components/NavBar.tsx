
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur shadow-sm py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold mr-2">
            SK
          </div>
          <span className="font-bold text-lg text-gray-900">SEO Keyword Guru</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Button variant="primary">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
