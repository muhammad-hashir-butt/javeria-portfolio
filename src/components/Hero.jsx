import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    /* pt-32 for navbar space, pb-10 to reduce bottom gap */
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-10 bg-[#0a0a0a] text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
        
        {/* 1. Top Intro Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="text-xl">👋</span>
          <span className="text-lg md:text-xl font-medium tracking-tight text-gray-300">
            Hey! It's me Javeria,
          </span>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-extrabold tracking-tight max-w-5xl"
        >
          Designing <span className="text-[#bef264]">brand identities</span> 
          <br />
          that <span className="text-[#bef264]">speak</span> & connect.
        </motion.h1>

        {/* 3. NEW: Sub-headline Paragraph below the main heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-16"
        >
          Merging technical expertise in <span className="text-white">Canva, Photoshop, and Illustrator</span> with creative vision to build high-impact designs that resonate with your audience.
        </motion.p>

        {/* 4. Footer Section: Line + Buttons (Left) + Description (Right) */}
        <div className="mt-auto border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            
            {/* LEFT SIDE: ACTION BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 w-full md:w-auto"
            >
              <Link to="portfolio" smooth={true} className="group cursor-pointer">
                <button className="bg-[#bef264] text-black px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:scale-105 transition-all">
                  View Projects
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>

              <Link to="contact" smooth={true} className="cursor-pointer">
                <button className="border border-gray-700 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                  Let's Talk
                  <MessageCircle size={18} />
                </button>
              </Link>
            </motion.div>

            {/* RIGHT SIDE: SECONDARY DESCRIPTION */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full md:w-[45%] lg:w-[35%]"
            >
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-normal">
                I help brands stand out through thoughtful graphic design, 
                minimalism, and strategic visuals that drive results and 
                leave a lasting impression globally.
              </p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Global Style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        section {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default Hero;