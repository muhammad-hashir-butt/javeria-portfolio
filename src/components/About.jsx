import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="pt-8 pb-24 bg-[#0a0a0a] text-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* items-start se image aur content top se barabar ho jayenge */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Container with Screenshot-style curving */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-t-[3rem] rounded-br-[3rem] rounded-bl-[12rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/gallery/javeria img.png" 
                alt="Javeria Sajjid" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rotating Badge - "LETS TALK" Circle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-6 md:right-0 z-30 group cursor-pointer"
            >
              <div className="relative w-36 h-36 md:w-44 md:h-44 bg-[#111111] rounded-full flex items-center justify-center shadow-2xl border border-white/10">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-full p-2"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text className="fill-white text-[9px] font-bold uppercase tracking-[0.22em]">
                      <textPath xlinkHref="#circlePath">
                        LETS TALK • LETS TALK • LETS TALK • LETS TALK •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-[#111111] group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <span className="text-xl md:text-2xl font-light">↗</span>
                </div>
                <div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
                A <span className="text-[#bef264]">creative graphic designer</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-medium italic">
                I collaborate with brands globally to design impactful, mission-focused 
                visuals that drive results and achieve business goals.
              </p>
            </div>

            {/* Education Cards */}
            <div className="grid gap-4">
              {/* Card 1 */}
              <motion.div whileHover={{ x: 10 }} className="flex gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-[#bef264]/10 p-4 rounded-xl text-[#bef264] h-fit">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">University Education</h4>
                  <p className="text-gray-400 text-sm mt-1">BS Computer Technology — <span className="text-white">University of Karachi</span></p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div whileHover={{ x: 10 }} className="flex gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-[#bef264]/10 p-4 rounded-xl text-[#bef264] h-fit">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">English Communication</h4>
                  <p className="text-gray-400 text-sm mt-1">Professional course — <span className="text-white">NED University</span></p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div whileHover={{ x: 10 }} className="flex gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-[#bef264]/10 p-4 rounded-xl text-[#bef264] h-fit">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Graphic Design Expert</h4>
                  <p className="text-gray-400 text-sm mt-1">Certified Professional — <span className="text-white">NED University</span></p>
                </div>
              </motion.div>
            </div>

            {/* Resume Button with Download Functionality */}
            <div className="pt-4 flex flex-wrap items-center gap-8">
               <a 
                 href="/gallery/Javeria resume.jpeg" 
                 download="Javeria_Resume.jpeg"
                 className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all inline-block cursor-pointer"
               >
                 Download My Resume
               </a>
               <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-[#bef264]" />
                  <span>Available for Projects</span>
               </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        #about { font-family: 'Inter', sans-serif; }
      `}</style>
    </section>
  );
};

export default About;
