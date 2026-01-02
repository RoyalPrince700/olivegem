import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/oggclogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Global Presence', path: '/global-presence' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed w-full z-50">
      <nav className={`w-full transition-all duration-500 border-b border-gray-100 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-white backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Olive Gem Logo" 
                className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'} w-auto object-contain group-hover:scale-105`}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-bold uppercase tracking-wider transition-all border-b-2 pb-1 ${
                      isActive
                        ? 'border-og-green text-og-green'
                        : 'border-transparent text-og-dark hover:border-og-green hover:text-og-green'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className={`text-xs font-bold uppercase tracking-wider border-2 px-6 py-2 rounded-full transition-all ${
                  isScrolled
                    ? 'text-og-green border-og-green hover:bg-og-green hover:text-white'
                    : 'text-og-dark border-og-dark hover:bg-og-dark hover:text-white'
                }`}
              >
                Connect
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-og-dark" size={28} /> : <Menu className="text-og-dark" size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold uppercase tracking-wider py-2 ${
                    location.pathname === link.path ? 'text-og-green' : 'text-og-dark hover:text-og-green'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-og-green text-white font-bold uppercase tracking-wider py-3 rounded-xl mt-2 text-center hover:bg-og-gold transition-all"
              >
                Connect
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
