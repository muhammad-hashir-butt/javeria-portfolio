import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Services = () => {
  const services = [
    "Graphic Design",
    "Video Editing",
    "Accounting",
    "Web Design",
    "Financial Analysis",
    "Brand Identity",
    "UI/UX Design",
    "Editing"
  ];

  // Animation variants jo index ke hisab se direction set karengi
  const itemVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Even index Left se, Odd index Right se
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
  };

  return (
    /* pt-10 se upper ka gap kum ho gaya hai */
    <section id="services" className="pt-10 pb-24 bg-[#0a0a0a] relative overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bef264]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bef264]/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-[1px] bg-[#bef264]"></span>
            <span className="text-[#bef264] font-bold tracking-[0.3em] text-xs uppercase">Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight flex items-center gap-4"
          >
            My <span className="text-[#bef264]">Services</span> <Sparkles className="text-[#bef264]" size={40} />
          </motion.h2 >
        </div>

        {/* Services Tags Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-[#bef264] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative bg-[#111111] border border-white/5 group-hover:border-[#bef264] px-8 py-6 md:px-10 md:py-8 rounded-2xl transition-all duration-300 flex items-center justify-between overflow-hidden">
                <span className="text-white text-xl md:text-3xl font-bold group-hover:text-[#bef264] transition-colors tracking-tight z-10">
                  {service}
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#bef264] group-hover:text-black transition-all duration-300 z-10">
                   <ArrowRight size={22} className="group-hover:-rotate-45 transition-transform" />
                </div>
                
                <span className="absolute -right-4 -bottom-2 text-6xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[#bef264]/[0.05] transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12"
        >
          <p className="text-gray-500 text-lg md:text-xl font-medium italic text-center md:text-left">
            * Creating <span className="text-white font-semibold">visual impact</span> through <br className="hidden md:block" /> strategic design and creative analysis.
          </p>
          
          <Link 
            to="contact" 
            smooth={true} 
            className="cursor-pointer group flex items-center gap-4 bg-white/5 hover:bg-[#bef264] px-8 py-4 rounded-full text-white hover:text-black font-bold tracking-widest text-sm uppercase transition-all duration-500"
          >
            Let's work together 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
        #services { font-family: 'Inter', sans-serif; }
      `}</style>
    </section>
  );
};

export default Services;