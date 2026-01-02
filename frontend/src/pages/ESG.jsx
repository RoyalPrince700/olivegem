import React from 'react';
import { Leaf, ShieldCheck, Heart, Globe, Scale, Droplets } from 'lucide-react';

const ESG = () => {
  const pillars = [
    { title: 'Environment', icon: Leaf, desc: 'Reducing our carbon footprint and investing in renewable energy transitions.', color: 'text-green-500' },
    { title: 'Social', icon: Heart, desc: 'Supporting the communities where we operate through the Olive Gem Foundation.', color: 'text-red-500' },
    { title: 'Governance', icon: Scale, desc: 'Maintaining the highest standards of ethics, compliance, and transparency.', color: 'text-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-og-dark pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1466611653911-95282fc365d5?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Wind turbines" />
          <div className="absolute inset-0 bg-gradient-to-r from-og-dark via-og-dark/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-og-green font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Sustainability</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">ESG at <br /><span className="text-og-gold">Olive Gem</span></h1>
            <p className="text-xl text-gray-300 font-medium max-w-xl">
              Our ESG framework sets out our beliefs and requirements. We are determined to be an active participant in the energy transition.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((p, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-2xl transition-all group">
                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${p.color}`}>
                  <p.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-og-dark mb-4 uppercase tracking-tight">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Focus */}
      <section className="py-24 bg-og-green text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <Globe size={400} className="translate-x-1/2 -translate-y-1/4" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Environmental <br /> Responsibility</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                As a physical trader of energy, we recognize our role in the global transition to a lower-carbon economy. We are investing in:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className="flex items-center gap-3 font-bold"><Droplets className="text-og-gold" /> Carbon Capture</li>
                <li className="flex items-center gap-3 font-bold"><Leaf className="text-og-gold" /> Biofuels</li>
                <li className="flex items-center gap-3 font-bold"><Globe className="text-og-gold" /> Solar Projects</li>
                <li className="flex items-center gap-3 font-bold"><ShieldCheck className="text-og-gold" /> Efficiency Upgrades</li>
              </ul>
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000" alt="Solar panels" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Compliance Section */}
      <section id="ethics" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <ShieldCheck className="mx-auto text-og-gold" size={64} />
            <h2 className="text-4xl font-bold text-og-dark uppercase tracking-tight">Ethics & Compliance</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to ethics and compliance starts with leadership. We are all responsible for conducting our business in a way that meets our commitment and strengthens compliance across the organisation.
            </p>
            <div className="pt-8 flex flex-wrap justify-center gap-6">
              <button className="bg-og-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-og-green transition-all shadow-xl">
                Our Code of Conduct
              </button>
              <button className="border-2 border-og-dark text-og-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-og-dark hover:text-white transition-all">
                Ethics Reporting
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESG;

