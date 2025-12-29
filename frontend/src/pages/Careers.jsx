import React from 'react';
import { Users, Briefcase, GraduationCap, Heart, ArrowRight } from 'lucide-react';

const Careers = () => {
  const openings = [
    { title: 'Senior Procurement Specialist', location: 'Lagos, Nigeria', type: 'Full-time', dept: 'Oil & Gas' },
    { title: 'Agro-Commodity Trader', location: 'Remote / Accra, Ghana', type: 'Full-time', dept: 'Agriculture' },
    { title: 'Logistics Operations Manager', location: 'Port Harcourt', type: 'Full-time', dept: 'Transportation' },
    { title: 'Sustainability Analyst', location: 'London, UK', type: 'Contract', dept: 'ESG' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-og-dark">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Team working" />
          <div className="absolute inset-0 bg-gradient-to-r from-og-dark via-og-dark/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-og-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Join Our Team</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">Careers at <br /><span className="text-og-green">Olive Gem</span></h1>
            <p className="text-xl text-gray-300 font-medium max-w-xl">
              We strive to create an environment in which individuals from a diverse range of backgrounds can reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-og-dark uppercase tracking-tight">Our Culture</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our people are our business. They are a key differentiating factor that drives our success. It is their ideas, dedication and the way they work together that makes a difference.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Heart className="text-og-green mb-4" size={32} />
                  <h4 className="font-bold text-og-dark mb-2">Inclusion</h4>
                  <p className="text-sm text-gray-500">A workplace where everyone belongs and thrives.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Users className="text-og-gold mb-4" size={32} />
                  <h4 className="font-bold text-og-dark mb-2">Collaboration</h4>
                  <p className="text-sm text-gray-500">Working together to solve global energy challenges.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Office Culture" className="w-full h-64 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="openings" className="py-24 bg-og-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold uppercase tracking-tight">Open Roles</h2>
              <div className="w-20 h-2 bg-og-gold mt-4"></div>
            </div>
            <button className="hidden sm:block text-og-gold font-bold uppercase tracking-widest text-xs border-b-2 border-og-gold pb-1">View All Positions</button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {openings.map((role, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 transition-all cursor-pointer">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-og-green mb-2 block">{role.dept}</span>
                  <h3 className="text-xl font-bold group-hover:text-og-gold transition-colors">{role.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {role.type}</span>
                    <span className="flex items-center gap-1">📍 {role.location}</span>
                  </div>
                </div>
                <button className="mt-6 md:mt-0 bg-white text-og-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs group-hover:bg-og-gold group-hover:text-white transition-all flex items-center gap-2">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Careers */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="mx-auto text-og-green mb-6" size={64} />
          <h2 className="text-4xl font-bold text-og-dark mb-6 uppercase tracking-tight">Early Careers & Internships</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Are you a student or recent graduate looking to start your journey in the energy sector? Our internship programs provide hands-on experience and mentorship.
          </p>
          <button className="bg-og-dark text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-og-green transition-all shadow-xl">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;

