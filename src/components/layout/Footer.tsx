/**
 * Footer Component
 * Site footer with social links and copyright information
 */

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/vishalp23', ariaLabel: 'Visit GitHub profile' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vishalvp23/', ariaLabel: 'Visit LinkedIn profile' },
    { name: 'Email', icon: Mail, url: 'mailto:vishalp2399@gmail.com', ariaLabel: 'Send email' },
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors">
              VP
            </Link>
            <p className="mt-1 text-sm text-gray-400">
              Software Engineer building scalable systems and exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-1">
                <li>
                  <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold mb-2">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {currentYear} Vishal Patil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
