import React from 'react';
import { Droplet, Factory, Wheat, Package, Ship, Truck } from 'lucide-react';

const Products = () => {
  const agroProducts = [
    { name: 'Fertilizers', img: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=600' },
    { name: 'Crude Palm Oil', img: 'https://images.unsplash.com/photo-1622213199650-7f287870371a?auto=format&fit=crop&q=80&w=600' },
    { name: 'Maize', img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=600' },
    { name: 'Rice', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600' },
    { name: 'Sugar', img: 'https://images.unsplash.com/photo-1581448670546-d4469276d15a?auto=format&fit=crop&q=80&w=600' },
  ];

  const oilProducts = [
    { name: 'Diesel', img: 'https://images.unsplash.com/photo-1563770660941-20978e870813?auto=format&fit=crop&q=80&w=600' },
    { name: 'Jet fuel', img: 'https://images.unsplash.com/photo-1559297434-2d8a134e0428?auto=format&fit=crop&q=80&w=600' },
    { name: 'Crude Oil', img: 'https://images.unsplash.com/photo-1544115089-577a1974435f?auto=format&fit=crop&q=80&w=600' },
    { name: 'Liquified Natural Gas', img: 'https://images.unsplash.com/photo-1544158428-197e44a4f783?auto=format&fit=crop&q=80&w=600' },
    { name: 'Premium Motor Spirit', img: 'https://images.unsplash.com/photo-1584126154316-5660b64d06a9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-og-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tighter">Products & Services</h1>
            <p className="text-xl text-gray-400 border-l-4 border-og-green pl-6 py-2">
              Comprehensive procurement solutions across the energy and agricultural supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Agro-Industry */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Wheat className="text-og-green" size={24} />
                <span className="text-og-green font-bold uppercase tracking-[0.3em] text-xs">Industry Segment</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-og-dark uppercase tracking-tight">Agro-Industry</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {agroProducts.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-og-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white font-bold uppercase tracking-widest text-sm">{p.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oil & Gas Industry */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-right">
            <div className="max-w-2xl ml-auto text-right">
              <div className="flex items-center gap-3 mb-4 justify-end">
                <span className="text-og-gold font-bold uppercase tracking-[0.3em] text-xs">Energy Segment</span>
                <Droplet className="text-og-gold" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-og-dark uppercase tracking-tight">Oil and Gas Industry</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {oilProducts.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-og-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white font-bold uppercase tracking-widest text-sm">{p.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-og-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Need a Custom Procurement Solution?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
            Our expert team is ready to help you navigate the complexities of global trade and supply chain management.
          </p>
          <button className="bg-white text-og-green px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-og-gold hover:text-white transition-all shadow-2xl">
            Contact Our Sales Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;

