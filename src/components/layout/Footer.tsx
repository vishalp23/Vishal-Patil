import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vishalp23', ariaLabel: 'Visit GitHub profile', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vishalvp23/', ariaLabel: 'Visit LinkedIn profile', color: 'hover:bg-blue-700' },
    { name: 'Email', icon: Mail, url: 'mailto:vishalp2399@gmail.com', ariaLabel: 'Send email', color: 'hover:bg-red-600' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-8 overflow-hidden border-t border-white/5">
      
      {/* --- 3D Background Elements (Subtler & Lower Profile) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '30px 30px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-50px) scale(1.5)',
            transformOrigin: 'top center'
          }} 
        />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary-600/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-[60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Content Row: Logo, Socials, Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-6">
          
          {/* Left: Brand & Socials */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                VP
            </Link>
            <div className="h-6 w-px bg-white/10 hidden md:block" />
            
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all ${social.color}`}
                  >
                    <Icon size={16} className="text-gray-300 hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right: Horizontal Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-sm font-medium text-gray-400 hover:text-primary-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Vishal Patil. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
           

            <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors pl-6 border-l border-white/10"
            >
                <span>Top</span>
                <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
