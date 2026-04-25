import { motion } from 'framer-motion';
import { 
  Palette, 
  PenTool, 
  Layout, 
  Briefcase, 
  MonitorPlay, 
  MessageSquare, 
  Clock,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "Adobe Photoshop", icon: <Palette className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Adobe Illustrator", icon: <PenTool className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Canva Expert", icon: <Layout className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Microsoft Office", icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "PowerPoint", icon: <MonitorPlay className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Communication", icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Time Management", icon: <Clock className="w-6 h-6 md:w-8 md:h-8" /> },
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    /* pt-8 se upper ka gap kum kiya gaya hai */
    <section id="skills" className="pt-8 pb-24 bg-[#0a0a0a] overflow-hidden font-sans">
      
      {/* Header Section - mb-10 se slider aur heading ka gap kum kiya */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-12 h-[1px] bg-[#bef264]"></span>
          <span className="text-[#bef264] font-bold tracking-[0.3em] text-xs uppercase">Abilities</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">
          MY <span className="text-[#bef264]">EXPERTISE.</span>
        </h2>
      </div>

      {/* Top Slider (Moves Left) */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#111111] border border-white/5 px-8 py-5 md:px-12 md:py-8 mx-3 rounded-2xl md:rounded-[2rem] hover:border-[#bef264]/50 transition-colors group/item"
            >
              <div className="text-[#bef264] group-hover/item:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-lg md:text-2xl font-bold uppercase tracking-wider text-gray-300 group-hover/item:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Bottom Slider (Moves Right) */}
      <div className="relative flex overflow-x-hidden mt-6 md:mt-8 group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['-33.33%', '0%'] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-transparent border border-white/10 px-8 py-5 md:px-12 md:py-8 mx-3 rounded-2xl md:rounded-[2rem] hover:bg-white/5 transition-all group/item"
            >
              <div className="text-gray-500 group-hover/item:text-[#bef264] transition-colors">
                {skill.icon}
              </div>
              <span className="text-lg md:text-2xl font-bold uppercase tracking-wider text-gray-600 group-hover/item:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Decorator Sparkle - Spacing adjusted */}
      <div className="mt-12 flex justify-center">
        <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="text-white/10"
        >
          <Sparkles size={50} strokeWidth={1} />
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        #skills { font-family: 'Inter', sans-serif; }
      `}</style>
    </section>
  );
};

export default Skills;