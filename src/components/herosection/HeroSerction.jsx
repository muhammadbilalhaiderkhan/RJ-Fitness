import { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import BG from "../../assets/bgImage.webp"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header
      className="w-full h-screen relative flex items-center justify-center overflow-hidden pt-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 0px',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">


        <h1
          style={{ fontFamily: 'Teko, sans-serif' }}
          className={`font-bold text-6xl md:text-7xl lg:text-8xl text-white transform transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          Become <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-pulse">
            Stronger
          </span>
          
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          High-energy group classes and personal coaching designed to transform your fitness journey. Push your limits, achieve your goals.
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button style={{ fontFamily: 'Teko, sans-serif' }} className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg uppercase tracking-wide rounded-lg shadow-xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Save Your Spot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button style={{ fontFamily: 'Teko, sans-serif' }} className="teko px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-lg uppercase tracking-wide rounded-lg border border-white/30 hover:border-white/60 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Classes
          </button>
        </div>

        <div
          style={{ fontFamily: 'Teko, sans-serif' }}
          className={` mt-12 flex justify-center gap-8 transform transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center">
            <p className=" text-3xl md:text-4xl font-bold text-orange-500">500+</p>
            <p className="text-gray-400 text-lg uppercase tracking-wide mt-1">Active Members</p>
          </div>
          <div className="w-px bg-white/20"></div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-orange-500">50+</p>
            <p className="teko text-gray-400 text-lg uppercase tracking-wide mt-1">Classes Per Week</p>
          </div>
          <div className="w-px bg-white/20"></div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-orange-500">15+</p>
            <p className="teko text-gray-400 text-lg uppercase tracking-wide mt-1">Expert Trainers</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white-900 to-transparent"></div>
    </header>
  );
}
