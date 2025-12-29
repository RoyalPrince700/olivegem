import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const TopBar = ({ isScrolled }) => (
  <div className={`bg-og-dark text-white py-2 text-[10px] font-bold uppercase tracking-widest hidden md:block transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex gap-6">
        <Link to="/about" className="hover:text-og-gold transition-colors">About us</Link>
        <Link to="/careers" className="hover:text-og-gold transition-colors">Careers</Link>
        <Link to="/media" className="hover:text-og-gold transition-colors">Media</Link>
        <Link to="/contact" className="hover:text-og-gold transition-colors">Contact</Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer hover:text-og-gold">
          <Search size={12} />
          <span>Search</span>
        </div>
      </div>
    </div>
  </div>
);

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
      <TopBar isScrolled={isScrolled} />
      <nav className={`w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-black/10 backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 bg-og-green rounded-lg flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 ${isScrolled ? 'shadow-md' : ''}`}>
                <div className="text-white font-bold text-lg italic text-shadow">OG</div>
              </div>
              <div>
                <h1 className={`font-bold text-xl leading-tight uppercase tracking-tight transition-colors ${isScrolled ? 'text-og-green' : 'text-white'}`}>Olive Gem</h1>
                <p className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-og-dark' : 'text-gray-300'}`}>Global Company Ltd</p>
              </div>
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
                        ? isScrolled 
                          ? 'border-og-green text-og-green' 
                          : 'border-og-gold text-og-gold'
                        : isScrolled
                          ? 'border-transparent text-og-dark hover:border-og-green hover:text-og-green'
                          : 'border-transparent text-white hover:border-og-gold hover:text-og-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button className={`text-xs font-bold uppercase tracking-wider border-2 px-6 py-2 rounded-full transition-all ${
                isScrolled 
                  ? 'text-og-green border-og-green hover:bg-og-green hover:text-white' 
                  : 'text-white border-white hover:bg-white hover:text-og-dark'
              }`}>
                Connect
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className={isScrolled ? 'text-og-dark' : 'text-white'} size={28} /> : <Menu className={isScrolled ? 'text-og-dark' : 'text-white'} size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 border-t animate-in fade-in slide-in-from-top-4">
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
              <button className="bg-og-green text-white font-bold uppercase tracking-wider py-3 rounded-xl mt-2">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
