import React from 'react';
import { Mail, Instagram, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/oggclogo.png';

const Footer = () => {
  return (
    <footer className="bg-og-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Olive Gem Logo" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Delivering unexploited value to the Oil and Gas and Agriculture industries through innovation and operational excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-og-green transition-all"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-og-green transition-all"><Mail size={18}/></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-og-green transition-all"><Phone size={18}/></a>
            </div>
          </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-og-gold">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            {/* <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li> */}
            <li><Link to="/esg" className="hover:text-white transition-colors">ESG</Link></li>
            <li><Link to="/esg#ethics" className="hover:text-white transition-colors">Ethics & Compliance</Link></li>
            <li><Link to="/global-presence" className="hover:text-white transition-colors">Global Presence</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-og-gold">Products</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li><Link to="/products" className="hover:text-white transition-colors">Oil & Gas</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Agriculture</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Mining & Metals</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Procurement Services</Link></li>
          </ul>
        </div>

        {/* <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-og-gold">Media</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li><Link to="/media" className="hover:text-white transition-colors">Latest News</Link></li>
            <li><Link to="/media" className="hover:text-white transition-colors">Olive Gem in Focus</Link></li>
            <li><Link to="/media" className="hover:text-white transition-colors">Film & Media</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Media</Link></li>
          </ul>
        </div> */}

      
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">© Copyright {new Date().getFullYear()} Olive Gem Global Company Ltd</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

