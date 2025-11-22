import React from "react";
import { ArrowRight, Award, Users, Zap } from "lucide-react";
import aboutImage from "../../assets/about.webp"

export default function AboutSection() {
  const highlights = [
    {
      icon: Zap,
      title: "High-Energy",
      description: "Cutting-edge training methods"
    },
    {
      icon: Users,
      title: "Community",
      description: "Supportive fitness family"
    },
    {
      icon: Award,
      title: "Results",
      description: "Proven transformation track record"
    }
  ];

  return (
    <section id="about" className="w-full bg-gradient-to-b from-black to-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            <h2 style={{ fontFamily: 'Teko, sans-serif' }} className="pt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              About<br />
              <span className="text-orange-500">Next Level Fitness</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Next Level Fitness was built to bring a training space where limits don't exist. Every individual is different — and our approach to fitness honors that uniqueness.
            </p>

            <p className="text-gray-400 text-sm md:text-md leading-relaxed mb-8 md:mb-10">
              Our environment is crafted to motivate, challenge, and elevate your performance. Each session moves you closer to becoming your strongest, most confident self.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/40 transition-colors mb-2">
                      <Icon className="w-5 md:w-6 h-5 md:h-6 text-orange-400" />
                    </div>
                    <h3 style={{ fontFamily: 'Teko, sans-serif' }} className="text-white font-bold text-lg md:text-lg">{item.title}</h3>
                    <p className="text-white/70 text-xs">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <a
            style={{ fontFamily: 'Teko, sans-serif' }}
              href="#contact"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white font-bold text-lg md:text-2xl rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 group"
            >
              Book a Tour
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 relative w-full h-72 md:h-96 lg:h-[600px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-orange-500/20">
              <img
                src= {aboutImage}
                alt="About Next Level Fitness"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* FLOATING CARD */}
            <div  className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-black border border-orange-500/50 rounded-lg md:rounded-xl p-4 md:p-6 shadow-2xl max-w-xs backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 md:w-3 h-2 md:h-3 bg-orange-500 rounded-full"></div>
                <span className="text-orange-400 font-bold text-xs md:text-sm">SINCE 2013</span>
              </div>
              <p className="text-white font-bold text-sm md:text-lg">
                Transforming lives through fitness excellence
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
