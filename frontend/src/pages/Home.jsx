import React from 'react';
import { 
  Truck, 
  Droplet, 
  Database, 
  Ship, 
  Factory, 
  Anchor, 
  ChevronRight,
  Globe,
  Wheat,
  Pickaxe,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Asset Imports
import oilAndGasImg from '../assets/oilandgas.png';
import agricultureImg from '../assets/agriculture.png';
import miningImg from '../assets/minningandresources.jpg';
import logoImg from '../assets/oggclogo.png';

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-og-dark">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-og-dark/70 via-og-dark/40 to-og-dark z-10" />
      <img 
        src={oilAndGasImg} 
        alt="Global Logistics and Procurement" 
        className="w-full h-full object-cover scale-100 animate-[subtle-zoom_20s_infinite_alternate]"
      />
      {/* Decorative lines/patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-og-green/5 skew-x-12 transform origin-top-right -z-0" />
    </div>

    <div className="container mx-auto px-6 md:px-12 relative z-20">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-og-green/10 border border-og-green/20 text-og-light-green text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-og-gold animate-pulse" />
          Global Procurement Excellence
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          POWERING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            POSSIBILITY
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 mb-12 animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
          <div className="h-24 w-1 bg-gradient-to-b from-og-gold to-transparent hidden md:block" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
            A premier procurement and energy services powerhouse, connecting the Oil & Gas, Agriculture, and Mining sectors with global markets through <span className="text-white font-medium italic underline decoration-og-gold/50 decoration-2 underline-offset-4">unmatched integrity.</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Link 
            to="/about" 
            className="group relative overflow-hidden bg-og-green text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-og-green/40 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Our Vision <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link 
            to="/products" 
            className="group px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm border border-white/30 text-white hover:border-white hover:bg-white/5 transition-all active:scale-95"
          >
            Our Solutions
          </Link>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce z-20 opacity-60">
      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50 [writing-mode:vertical-lr]">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-og-gold to-transparent" />
    </div>

    {/* Floating Stats or Accents */}
    <div className="absolute bottom-12 right-12 hidden xl:flex gap-12 text-white/80 z-20 border-l border-white/10 pl-12">
      <div>
        <div className="text-3xl font-black text-og-gold">15+</div>
        <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Countries</div>
      </div>
      <div>
        <div className="text-3xl font-black text-og-green">24/7</div>
        <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Support</div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, image, link, description }) => (
  <Link to={link} className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer block shadow-2xl transition-all duration-700">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-og-dark via-og-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
    <div className="absolute bottom-0 left-0 p-10 text-white space-y-6 z-10">
      <div className="w-14 h-14 bg-og-green/90 backdrop-blur-md rounded-sm flex items-center justify-center group-hover:bg-og-gold transition-colors duration-500 shadow-xl">
        <Icon size={28} className="text-white group-hover:text-og-dark transition-colors" />
      </div>
      <div className="space-y-3">
        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">{title}</h3>
        <p className="text-sm text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-[280px] leading-relaxed">
          {description || "Delivering specialized procurement solutions tailored to industry standards."}
        </p>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-og-gold group-hover:text-white transition-colors pt-4">
        Discover Solutions <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
    {/* Decorative corner accent */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-og-gold/10 -mr-12 -mt-12 rotate-45 group-hover:bg-og-gold/20 transition-colors" />
  </Link>
);

const Operations = () => {
  const services = [
    { 
      title: "Oil & Gas Operations", 
      icon: Droplet, 
      image: oilAndGasImg, 
      description: "Comprehensive procurement and logistics for upstream and downstream operations.",
      link: "/products" 
    },
    { 
      title: "Agricultural Supply", 
      icon: Wheat, 
      image: agricultureImg, 
      description: "Strategic sourcing of commodities and equipment to power global food security.",
      link: "/products" 
    },
    { 
      title: "Mining & Resources", 
      icon: Pickaxe, 
      image: miningImg, 
      description: "Reliable extraction and transportation solutions for critical mineral resources.",
      link: "/products" 
    },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-og-green" />
              <span className="text-og-green font-black uppercase tracking-[0.4em] text-xs">Core Sectors</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-og-dark uppercase tracking-tighter leading-none">
              Strategic <span className="text-og-green italic">Global</span> <br />
              Operations
            </h2>
          </div>
          <Link to="/products" className="group flex items-center gap-4 text-og-dark font-black uppercase tracking-widest text-xs hover:text-og-green transition-all">
            <span className="border-b-2 border-og-dark group-hover:border-og-green pb-1 transition-all">View All Services</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => (
  <section className="py-40 bg-og-dark overflow-hidden relative">
    {/* Subtle background text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none">
      Olive Gem Excellence
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative group overflow-hidden rounded-sm border border-white/10 hover:border-og-gold/30 transition-all">
            <img 
              src={logoImg} 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
              alt="Integrity"
            />
            <div className="relative p-12 bg-og-dark/60 backdrop-blur-sm h-full">
              <ShieldCheck className="text-og-gold mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4">Integrity</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Maintaining the highest ethical standards in every transaction across our global network.</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-sm shadow-2xl translate-y-8">
            <img 
              src={oilAndGasImg} 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" 
              alt="Performance"
            />
            <div className="relative p-12 bg-og-green/90 h-full">
              <TrendingUp className="text-white mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4">Performance</h4>
              <p className="text-white/80 text-sm leading-relaxed">Driving efficiency and value through innovative procurement and logistics strategies.</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-sm border border-white/10 -translate-y-8 hover:border-og-green/30 transition-all">
            <img 
              src={agricultureImg} 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
              alt="Network"
            />
            <div className="relative p-12 bg-og-dark/60 backdrop-blur-sm h-full">
              <Globe className="text-og-green mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4">Network</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Leveraging strategic partnerships across 15+ countries to ensure seamless supply chains.</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-sm shadow-2xl">
            <img 
              src={miningImg} 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
              alt="Innovation"
            />
            <div className="relative p-12 bg-white/95 h-full">
              <Factory className="text-og-dark mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-xl font-black text-og-dark uppercase tracking-tight mb-4">Innovation</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Pioneering new methods in procurement to solve the world's most complex energy challenges.</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-og-gold" />
              <span className="text-og-gold text-xs font-black uppercase tracking-[0.4em]">Why Partner With Us?</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              UNLEASHING <br />
              <span className="text-white italic">POTENTIAL</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-light max-w-xl">
              Olive Gem is a privately owned corporation dedicated to rendering premier procurement services, meeting both local and international energy demands with safety, efficiency, and scale.
            </p>
          </div>
          <div className="pt-8">
            <Link to="/about" className="group inline-flex items-center gap-6 bg-white text-og-dark px-12 py-6 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-og-gold transition-all">
              Our Corporate Profile
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Operations />
      <ValueProps />
      {/* Global Connectivity CTA */}
      <section className="py-24 md:py-48 bg-og-dark text-white relative overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 scale-100 group-hover:scale-110 transition-transform duration-[20s]"
          style={{ backgroundImage: `url(${oilAndGasImg})` }}
        />

        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <Globe className="w-full h-full scale-150 -mr-32 text-og-gold animate-[subtle-zoom_30s_infinite_linear]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-og-gold/20 text-og-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 md:mb-12">
            Our Network
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-8 md:mb-12 uppercase tracking-tighter leading-none">
            STRATEGIC <br />
            <span className="text-og-green italic">CONNECTIVITY</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 font-light leading-relaxed px-4">
            Operating across <span className="text-white font-bold">15+ countries</span>, we maintain a localized presence in the world's most critical energy hubs, ensuring reliability where it matters most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <Link to="/global-presence" className="bg-og-gold text-og-dark px-8 sm:px-12 md:px-16 py-4 md:py-6 rounded-sm font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white transition-all shadow-2xl hover:shadow-og-gold/20 active:scale-95 w-full sm:w-auto text-center">
              Explore Our Footprint
            </Link>
            <Link to="/contact" className="text-white border-b-2 border-white/20 hover:border-og-green font-black uppercase tracking-[0.3em] text-[10px] py-2 transition-all">
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Decorative corner highlights */}
        <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-og-green" />
        <div className="absolute top-0 right-0 w-1/4 h-1 bg-og-gold" />
      </section>
    </div>
  );
};

export default Home;

