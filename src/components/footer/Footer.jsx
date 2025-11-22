import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Dumbbell, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from "../../assets/RJ-logo.webp";

export default function Footer() {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScroll = () => {
    setScrollToTop(window.scrollY > 300);
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="pt-10 bg-gradient-to-b from-black to-[#202020] border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          <div className="col-span-1">
          <div  className="pb-3 flex items-center gap-3 cursor-pointer group">
            <div  className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
              <img src={logo} alt="RJ Fitness Logo" className="w-12 h-12 rounded-3xl" />
            </div>
            <span  className="text-white font-bold text-2xl tracking-tight group-hover:text-orange-500 transition-colors duration-300">
              RJ <span className="text-orange-500 group-hover:text-white">Fitness</span>
            </span>
          </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              Transform your body, mind, and lifestyle with our world-class fitness programs and expert trainers.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/rjfitness_sydney/?hl=en" target='_blank' className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Classes', 'Membership', 'Trainers', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xs sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-6 uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              {['Personal Training', 'Group Classes', 'Nutrition Coaching', 'Online Coaching', 'Corporate Wellness', 'Kid Programs'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xs sm:text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-6 uppercase tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs sm:text-sm">
                  50 Francis Street<br />
                  Glebe NSW 2037, Australia
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xs sm:text-sm">
                  +61 430 838 919
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@rjfitness.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-xs sm:text-sm">
                  info@rjfitness.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © 2025 RJ Fitness. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm justify-center">
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
