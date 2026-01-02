import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    // ... values ...
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-og-dark pt-20">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Corporate" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tighter">About Us</h1>
          <div className="w-24 h-2 bg-og-gold mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="bg-og-green/10 text-og-green text-xs font-black uppercase px-4 py-2 rounded-full tracking-widest">Company Overview</span>
              <h2 className="text-4xl md:text-5xl font-bold text-og-dark leading-tight">Olive Gem Global Company (Ltd)</h2>
              <p className="text-2xl text-gray-600 font-bold leading-relaxed">
                OGGC Limited is a privately owned corporation that renders procurement services in the oil and gas, Agriculture industry, and General contract.
              </p>
              <div className="bg-og-green text-white p-8 rounded-2xl relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  <TrendingUp size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-og-gold">Enabler</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3">
                    <Zap className="shrink-0 text-og-gold" size={20} />
                    <span>Leveraging innovation and adopting the highest standards to achieve operational excellence.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="shrink-0 text-og-gold" size={20} />
                    <span>Being a committed and reliable partner in our communities and markets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="shrink-0 text-og-gold" size={20} />
                    <span>Being driven by commercial sustainability.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {/* Mission */}
              <div className="bg-white p-10 rounded-2xl border-l-8 border-og-gold shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-og-gold rounded-xl text-white"><Target size={32} /></div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight text-og-dark">Mission</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We add unexploited value to the Oil and Gas, Agriculture industry to meet local and international demands.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-white p-10 rounded-2xl border-l-8 border-og-green shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-og-green rounded-xl text-white"><Eye size={32} /></div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight text-og-dark">Vision</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a world-class private company through superior operating and excellent executions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-og-dark mb-4">Core Values</h2>
            <div className="w-20 h-1.5 bg-og-green mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">The foundation of our corporate culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-og-green group transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-og-green group-hover:text-white transition-all text-og-green">
                  <v.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-og-dark mb-4 uppercase tracking-tight">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

