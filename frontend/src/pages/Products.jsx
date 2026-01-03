import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Factory, Wheat, Package, Ship, Truck, Gem } from 'lucide-react';

// Asset Imports
import fertilizerImg from '../assets/fertilizer.jpg';
import crudePalmOilImg from '../assets/crudepalmoil.jpg';
import maizeImg from '../assets/maize.jpg';
import riceImg from '../assets/rice.jpg';
import sugarImg from '../assets/sugar.jpg';
import dieselImg from '../assets/diesel.jpg';
import jetFuelImg from '../assets/jetfuel.jpg';
import crudeOilImg from '../assets/crudeoil.jpg';
import naturalGasImg from '../assets/naturalgas.jpg';
import pmsImg from '../assets/Premium Motor Spirit.jpg';
import cngImg from '../assets/cng.jpeg';
import goldImg from '../assets/gold.jpg';
import tinOreImg from '../assets/tinore.jpg';
import ironOreImg from '../assets/ironore.jpg';
import gemStonesImg from '../assets/gemstone.jpg';
import barleyMaltImg from '../assets/baleymalt.jpg';
import wheatFlourImg from '../assets/wheatflour.jpg';
import wheatImg from '../assets/wheat.jpg';
import crudeSoyaOilImg from '../assets/crudesoya.jpg';

const Products = () => {
  const agroProducts = [
    { name: 'Fertilizers', img: fertilizerImg },
    { name: 'Crude Palm Oil', img: crudePalmOilImg },
    { name: 'Maize', img: maizeImg },
    { name: 'Rice', img: riceImg },
    { name: 'Sugar', img: sugarImg },
    { name: 'Barley Malt', img: barleyMaltImg },
    { name: 'Wheat flour', img: wheatFlourImg },
    { name: 'Wheat', img: wheatImg },
    { name: 'Crude soya oil', img: crudeSoyaOilImg },
  ];

  const oilProducts = [
    { name: 'EN590', img: dieselImg },
    { name: 'Jet fuel', img: jetFuelImg },
    { name: 'Crude Oil', img: crudeOilImg },
    { name: 'Liquified Natural Gas', img: naturalGasImg },
    { name: 'Premium Motor Spirit', img: pmsImg },
    { name: 'Compressed Natural Gas Cylinders', img: cngImg },
    { name: 'Compressed natural gas', img: naturalGasImg },
  ];

  const mineralsProducts = [
    { name: 'Gold', img: goldImg },
    { name: 'Tin ore', img: tinOreImg },
    { name: 'Iron ore', img: ironOreImg },
    { name: 'Gem Stones', img: gemStonesImg },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-og-dark pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tighter">Products & Services</h1>
            <p className="text-xl text-gray-400 border-l-4 border-og-green pl-6 py-2">
              Comprehensive procurement solutions across the energy and commodity supply chains.
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
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    fetchPriority="low"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581448670546-d4469276d15a?auto=format&fit=crop&q=80&w=800'; // Fallback to a generic industrial image
                    }}
                  />
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
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    fetchPriority="low"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581448670546-d4469276d15a?auto=format&fit=crop&q=80&w=800'; // Fallback to a generic industrial image
                    }}
                  />
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

      {/* Minerals */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Gem className="text-og-green" size={24} />
                <span className="text-og-green font-bold uppercase tracking-[0.3em] text-xs">Industry Segment</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-og-dark uppercase tracking-tight">Minerals</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mineralsProducts.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    fetchPriority="low"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581448670546-d4469276d15a?auto=format&fit=crop&q=80&w=800'; // Fallback to a generic industrial image
                    }}
                  />
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
          <Link 
            to="/contact" 
            className="inline-block bg-white text-og-green px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-og-gold hover:text-white transition-all shadow-2xl"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

