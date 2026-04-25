import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden font-sans">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bef264]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#bef264]"></span>
              <span className="text-[#bef264] font-bold tracking-[0.3em] text-xs uppercase">Get in Touch</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
              Let's build something <span className="text-[#bef264]">legendary</span> together.
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md font-medium leading-relaxed">
              Have a vision? I have the tools to bring it to life. Drop me a message and let's talk design.
            </p>

            <div className="space-y-8">
              {/* Email Link */}
              <a 
                href="mailto:javeriasajid2002@gmail.com" 
                className="group flex items-center gap-6 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#bef264] group-hover:bg-[#bef264]/10 transition-all duration-300">
                  <Mail className="text-[#bef264]" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl md:text-2xl font-bold border-b border-white/20 group-hover:border-[#bef264] transition-all">
                    javeriasajid2002@gmail.com
                  </p>
                </div>
              </a>

              {/* Location (Optional but adds trust) */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="text-[#bef264]" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl md:text-2xl font-bold">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111111] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Name
                    " 
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-[#bef264] focus:bg-white/[0.08] outline-none transition-all text-white font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com" 
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-[#bef264] focus:bg-white/[0.08] outline-none transition-all text-white font-medium" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  placeholder="Tell me about your project or vision..." 
                  rows="5" 
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-[#bef264] focus:bg-white/[0.08] outline-none transition-all text-white font-medium resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#bef264] text-black py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(190,242,100,0.3)] transition-all"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>

            {/* Subtle Design Element */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#bef264]/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>

        {/* Footer Minimal Strip */}
        <div className="mt-24 pt-10 border-t border-white/5 text-center">
            <p className="text-gray-600 text-sm font-medium tracking-widest uppercase">
              © {new Date().getFullYear()} Javeria Sajid Portfolio • All Rights Reserved
            </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        #contact { font-family: 'Inter', sans-serif; }
      `}</style>
    </section>
  );
};

export default Contact;