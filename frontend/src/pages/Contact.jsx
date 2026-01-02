import React from 'react';
import { Phone, Mail, MapPin, Instagram, FileText, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Phone, title: 'Call Us', details: ['+234 806 125 1833', '+234 915 274 3011'], color: 'text-og-green' },
    { icon: Mail, title: 'Email Us', details: ['ogcinfo21@gmail.com', 'gemsfoodbr@gmail.com'], color: 'text-og-gold' },
    { icon: Instagram, title: 'Instagram', details: ['@olivegemglobal_ng'], color: 'text-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-og-dark pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-og-green/10 -skew-x-[45deg] translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tighter">Get In <span className="text-og-gold italic">Touch</span></h1>
          <p className="text-xl text-gray-400 max-w-xl">
            We're here to answer any questions you may have about our products and services.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                  <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-og-dark mb-4 uppercase tracking-tight">{item.title}</h3>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 font-medium">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-2xl">
                <h2 className="text-3xl font-bold text-og-dark mb-10 uppercase tracking-tight">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-og-green transition-all outline-none font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-og-green transition-all outline-none font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                    <input type="text" placeholder="Inquiry about procurement" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-og-green transition-all outline-none font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Message</label>
                    <textarea rows="6" placeholder="How can we help you?" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-og-green transition-all outline-none font-medium resize-none"></textarea>
                  </div>
                  <button className="w-full bg-og-green text-white font-bold uppercase tracking-widest py-5 rounded-2xl hover:bg-og-gold transition-all shadow-xl hover:shadow-og-gold/20 flex items-center justify-center gap-3 group">
                    Send Inquiry
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Image Section */}
      <section className="h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-1000">
         <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Office" />
      </section>
    </div>
  );
};

export default Contact;

