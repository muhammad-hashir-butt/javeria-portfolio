import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-[100] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 cursor-pointer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="home" smooth={true} className="cursor-pointer">
          <div className="text-2xl font-bold text-white tracking-tighter">JS</div>
        </Link>
        
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((item) => (
            <Link 
              key={item.id} 
              to={item.id} 
              smooth={true} 
              spy={true} 
              offset={-80}
              activeClass="active-link"
              className="group cursor-pointer flex items-center text-[15px] font-medium text-gray-400 hover:text-white transition-all duration-300 relative"
            >
              <span className="dot hidden w-1.5 h-1.5 bg-[#bef264] rounded-full mr-2 shadow-[0_0_8px_#bef264]"></span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button (Only Visible on Mobile) */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none z-[110] cursor-pointer" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-10 space-y-8">
              {links.map(item => (
                <Link 
                  key={item.id} 
                  to={item.id} 
                  smooth={true} 
                  spy={true}
                  offset={-80}
                  activeClass="text-[#bef264]"
                  className="text-2xl font-bold text-gray-400 hover:text-[#bef264] transition-colors" 
                  onClick={() => setIsOpen(false)} // Menu band ho jayega click karne par
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for Active State */}
      <style>{`
        .active-link {
          color: white !important;
        }
        .active-link .dot {
          display: inline-block !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;