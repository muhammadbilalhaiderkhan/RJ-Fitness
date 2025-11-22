import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/RJ-logo.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainer', href: '#trainer' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-lg shadow-lg bg-[#202020]/70' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Name */}
          <div  className="flex items-center gap-3 cursor-pointer group">
            <div  className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
              <img src={logo} alt="RJ Fitness Logo" className="w-12 h-12 rounded-3xl" />
            </div>
            <span className="text-white font-bold text-2xl tracking-tight group-hover:text-orange-500 transition-colors duration-300">
              RJ <span className="text-orange-500 group-hover:text-white">Fitness</span>
            </span>
          </div>

          {/* Desktop Links */}
          <ul style={{ fontFamily: 'Teko, sans-serif' }} className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative px-5 py-2 text-white font-medium text-lg uppercase tracking-wide group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#join"
                className="ml-4 px-6 py-2.5 bg-orange-500 text-white font-bold text-lg uppercase tracking-wide rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                Join Now
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-orange-500 transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <div
        style={{ fontFamily: 'Teko, sans-serif' }} className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 bg-[#202020]/95 backdrop-blur-lg' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block px-4 py-3 text-white font-medium text-lg uppercase tracking-wide hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              className="block px-4 py-3 mt-2 bg-orange-500 text-white font-bold text-lg uppercase tracking-wide text-center rounded-lg hover:bg-orange-600 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
