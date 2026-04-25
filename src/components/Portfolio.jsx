import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { 
      id: 1, 
      title: "Floating House with Fallen Moon", 
      category: "Manipulation", 
      tools: "Adobe Photoshop",
      img: "/gallery/pro1.jpeg",
      desc: "A surreal fantasy artwork exploring the interplay between dreams and reality, featuring intricate digital manipulation."
    },
    { 
      id: 2, 
      title: "Minimalist Brand Identity", 
      category: "Branding", 
      tools: "Illustrator / Canva",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600",
      desc: "Strategic branding project focused on clean aesthetics and modern visual storytelling."
    },
    { 
      id: 3, 
      title: "Social Media Kit", 
      category: "Digital", 
      tools: "Photoshop / Canva",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600",
      desc: "High-impact social media assets designed to drive engagement and brand awareness."
    }
  ];

  const categories = ["All", "Manipulation", "Branding", "Digital"];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative overflow-hidden font-sans">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#bef264]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#bef264]"></span>
            <span className="text-[#bef264] font-bold tracking-[0.3em] text-xs uppercase">Selected Works</span>
            <span className="w-8 h-[1px] bg-[#bef264]"></span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            Featured <span className="text-[#bef264]">Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(c => (
            <button 
              key={c} 
              onClick={() => setFilter(c)} 
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === c 
                ? 'bg-[#bef264] text-black border-[#bef264]' 
                : 'bg-transparent text-gray-500 border-white/10 hover:border-[#bef264] hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode='wait'>
            {filtered.map(p => (
              <motion.div 
                key={p.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5"
              >
                {/* Image Container */}
                <div className="relative h-[350px] overflow-hidden">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  />
                  
                  {/* Category Tag on Image */}
                  <div className="absolute top-6 left-6 bg-[#bef264] text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {p.category}
                  </div>
                </div>

                {/* Content Overlay / Info */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#bef264] transition-colors">{p.title}</h3>
                      <p className="text-[#bef264] text-xs font-bold uppercase tracking-widest">{p.tools}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-full text-white group-hover:bg-[#bef264] group-hover:text-black transition-all">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>
                
                {/* Neon Bottom Border on Hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#bef264] w-0 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Catchy Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 italic">
            * More projects coming soon. Stay tuned for <span className="text-white">Visual Magic</span>.
          </p>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        #portfolio { font-family: 'Inter', sans-serif; }
      `}</style>
    </section>
  );
};

export default Portfolio;