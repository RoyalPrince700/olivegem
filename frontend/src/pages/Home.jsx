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

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-og-dark">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1454165833767-02a6ed8a587a?auto=format&fit=crop&q=80&w=2000" 
        alt="Industrial connectivity" 
        className="w-full h-full object-cover opacity-60 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-og-dark via-og-dark/50 to-transparent"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10 text-white">
      <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
        <h2 className="text-7xl md:text-9xl font-extrabold leading-[0.85] tracking-tighter">
          Global <br />
          <span className="text-og-gold italic">Excellence</span>
        </h2>
        <p className="text-2xl md:text-3xl text-gray-200 max-w-2xl font-medium border-l-4 border-og-green pl-8 py-4">
          Adding unexploited value to the Oil and Gas & Agriculture industries.
        </p>
        <div className="pt-10 flex flex-wrap gap-6">
          <Link to="/about" className="bg-og-green text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-og-light-green transition-all flex items-center gap-3 group shadow-2xl">
            Our Mission <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link to="/products" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-og-dark transition-all">
            Products
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, image, link }) => (
  <Link to={link} className="group relative h-[450px] overflow-hidden rounded-[32px] cursor-pointer block shadow-xl hover:shadow-og-green/20 transition-all duration-500">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-og-dark via-og-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
    <div className="absolute bottom-0 left-0 p-10 text-white space-y-4">
      <div className="w-12 h-12 bg-og-green rounded-2xl flex items-center justify-center group-hover:bg-og-gold transition-colors duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold uppercase tracking-tight leading-tight">{title}</h3>
      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-og-gold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        Learn More <ChevronRight size={14} />
      </div>
    </div>
  </Link>
);

const Operations = () => {
  const services = [
    { title: "Transportation & Hauling", icon: Truck, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600", link: "/products" },
    { title: "Petroleum Products", icon: Droplet, image: "https://images.unsplash.com/photo-1544115089-577a1974435f?auto=format&fit=crop&q=80&w=600", link: "/products" },
    { title: "Storage & Blending", icon: Database, image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=600", link: "/products" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-og-green font-bold uppercase tracking-[0.4em] text-xs">Our Core Expertise</span>
            <h2 className="text-5xl md:text-6xl font-black text-og-dark mt-4 uppercase tracking-tighter">Oil and Gas Operations</h2>
          </div>
          <Link to="/products" className="text-og-green font-bold uppercase tracking-widest text-xs border-b-2 border-og-green pb-1 hover:text-og-gold hover:border-og-gold transition-all">
            All Services
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => (
  <section className="py-32 bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-og-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative z-10 grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[32px] shadow-xl space-y-4 translate-y-12">
              <ShieldCheck className="text-og-green" size={40} />
              <h4 className="font-bold text-og-dark uppercase tracking-tight">Integrity</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Acting in a trustworthy manner with the highest standards.</p>
            </div>
            <div className="bg-og-dark p-8 rounded-[32px] shadow-xl text-white space-y-4">
              <TrendingUp className="text-og-gold" size={40} />
              <h4 className="font-bold uppercase tracking-tight">Excellence</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Encouraging high performance and continuous improvement.</p>
            </div>
            <div className="bg-og-green p-8 rounded-[32px] shadow-xl text-white space-y-4 translate-y-12">
              <Ship className="text-white" size={40} />
              <h4 className="font-bold uppercase tracking-tight">Global Reach</h4>
              <p className="text-white/70 text-xs leading-relaxed">Maintaining strategic partnerships in 15+ countries.</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] shadow-xl space-y-4">
              <Factory className="text-og-gold" size={40} />
              <h4 className="font-bold text-og-dark uppercase tracking-tight">Innovation</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Embracing new methods to solve complex challenges.</p>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <span className="bg-og-gold/10 text-og-gold text-xs font-black uppercase px-6 py-2 rounded-full tracking-widest">Why Olive Gem?</span>
          <h2 className="text-5xl md:text-6xl font-black text-og-dark uppercase tracking-tighter leading-[0.9]">Delivering <span className="text-og-green">Untapped</span> Value</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            We are a privately owned corporation rendering procurement services with a focus on meeting local and international demands safely and efficiently.
          </p>
          <div className="pt-6">
            <Link to="/about" className="bg-og-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-og-green transition-all shadow-2xl">
              About Our Company
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
      <section className="py-32 bg-og-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe className="w-full h-full scale-150 -mr-32 text-og-gold" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter italic">Global Presence</h2>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto mb-16 font-medium">
            Operating across 15+ countries, we maintain a localized presence in key energy hubs.
          </p>
          <Link to="/global-presence" className="bg-og-gold text-og-dark px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
            Explore Our Network
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

