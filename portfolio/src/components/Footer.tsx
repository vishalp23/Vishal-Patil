import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

/**
 * Footer component with social links and copyright information
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Github: <Github size={20} />,
      Linkedin: <Linkedin size={20} />,
      Twitter: <Twitter size={20} />,
      Mail: <Mail size={20} />,
    };
    return icons[iconName] || null;
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              {'<JD />'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full Stack Software Engineer passionate about building exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1">
            © {currentYear} John Doe. Made with{' '}
            <Heart size={16} className="text-red-500 fill-current" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};
