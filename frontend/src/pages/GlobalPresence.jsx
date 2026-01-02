import React from 'react';
import { Globe, MapPin, CheckCircle } from 'lucide-react';

const GlobalPresence = () => {
  const continents = [
    'Africa', 'Asia', 'Europe', 'North America', 'South America',
    'Antarctica', 'Oceania'
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-og-dark pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Global Network" />
          <div className="absolute inset-0 bg-gradient-to-r from-og-dark via-og-dark/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 uppercase tracking-tighter">Global <span className="text-og-gold italic">Presence</span></h1>
            <p className="text-2xl text-gray-300 font-medium max-w-xl">
              Connecting key energy and commodity hubs across every continent.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Countries */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-12">
                <span className="text-og-green font-bold uppercase tracking-[0.3em] text-xs">Our Network</span>
                <h2 className="text-4xl md:text-5xl font-bold text-og-dark mt-4 mb-6">Continents</h2>
                <div className="w-24 h-2 bg-og-green mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  We have established robust strategic partnerships and operational capabilities across all continents, ensuring seamless supply chain management across borders.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {continents.map((continent) => (
                  <div key={continent} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-og-green/5 transition-colors group">
                    <MapPin className="text-og-green group-hover:scale-110 transition-transform" size={18} />
                    <span className="font-bold text-og-dark tracking-wide">{continent}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-full flex items-center justify-center p-20 animate-pulse-slow">
                <Globe className="w-full h-full text-og-green/20" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {/* Decorative Dots */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute w-3 h-3 bg-og-gold rounded-full animate-ping" style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`
                  }}></div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-og-gold rounded-lg text-white"><CheckCircle size={24} /></div>
                  <h4 className="font-bold text-og-dark">Strategic Reliability</h4>
                </div>
                <p className="text-sm text-gray-500">Every partner country represents a localized commitment to our high standards of operational excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-og-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-black text-og-gold mb-2">7</div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Continents</p>
            </div>
            <div>
              <div className="text-6xl font-black text-og-gold mb-2">40+</div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Global Offices</p>
            </div>
            <div>
              <div className="text-6xl font-black text-og-gold mb-2">60+</div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;

