import React from 'react';
import { Newspaper, Video, MessageCircle, ChevronRight, Calendar, Tag } from 'lucide-react';

const Media = () => {
  const news = [
    { 
      title: 'Olive Gem expands its Agro-Industrial presence in Brazil', 
      date: 'Dec 15, 2025', 
      category: 'Corporate', 
      img: 'https://images.unsplash.com/photo-1590684302910-672520443224?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Announcement regarding New Head of Sustainable Energy', 
      date: 'Dec 10, 2025', 
      category: 'People', 
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Olive Gem enters 20-year LNG supply agreement', 
      date: 'Nov 28, 2025', 
      category: 'Oil & Gas', 
      img: 'https://images.unsplash.com/photo-1544158428-197e44a4f783?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: 'Focus: The role of Lithium in the Global Energy Transition', 
      date: 'Nov 15, 2025', 
      category: 'Insights', 
      img: 'https://images.unsplash.com/photo-1594818371393-3246c406c107?auto=format&fit=crop&q=80&w=600' 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-og-dark text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="News cameras" />
          <div className="absolute inset-0 bg-gradient-to-r from-og-dark via-og-dark/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-og-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Information Center</span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">Media & <br /><span className="text-og-green">Insights</span></h1>
            <p className="text-xl text-gray-300 font-medium max-w-xl">
              Stay updated with the latest news, announcements, and industry perspectives from Olive Gem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-10">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-og-dark border-b-2 border-og-green pb-2">Filter By Category</h3>
                <ul className="space-y-3 text-sm font-bold text-gray-500">
                  <li className="flex justify-between items-center text-og-green cursor-pointer"><span>All News</span> <ChevronRight size={14}/></li>
                  <li className="flex justify-between items-center hover:text-og-dark cursor-pointer"><span>Corporate</span> <ChevronRight size={14}/></li>
                  <li className="flex justify-between items-center hover:text-og-dark cursor-pointer"><span>Oil & Gas</span> <ChevronRight size={14}/></li>
                  <li className="flex justify-between items-center hover:text-og-dark cursor-pointer"><span>Agriculture</span> <ChevronRight size={14}/></li>
                  <li className="flex justify-between items-center hover:text-og-dark cursor-pointer"><span>Sustainability</span> <ChevronRight size={14}/></li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 space-y-6">
                <MessageCircle size={32} className="text-og-green" />
                <h4 className="font-bold text-og-dark uppercase tracking-tight">Media Contact</h4>
                <p className="text-xs text-gray-500 leading-relaxed">For all press and media inquiries, please reach out to our communications team.</p>
                <a href="mailto:media@olivegem.com" className="text-og-green font-bold text-sm block border-b border-og-green w-max">media@olivegem.com</a>
              </div>
            </div>

            {/* News Feed */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {news.map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative h-64 rounded-[32px] overflow-hidden mb-6">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-og-green text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">{item.category}</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-og-dark group-hover:text-og-green transition-colors leading-tight">{item.title}</h3>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-og-gold group-hover:text-og-dark transition-all">
                        Read Story <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center">
                <button className="bg-og-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-og-green transition-all shadow-xl">
                  Load More Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-og-green font-bold uppercase tracking-[0.4em] text-xs">Film & Media</span>
              <h2 className="text-4xl font-bold text-og-dark mt-2 uppercase tracking-tight">Olive Gem on film</h2>
            </div>
            <Video className="text-og-green" size={32} />
          </div>
          <div className="aspect-video bg-og-dark rounded-[40px] overflow-hidden relative shadow-2xl group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200" alt="Video cover" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-og-gold rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;

