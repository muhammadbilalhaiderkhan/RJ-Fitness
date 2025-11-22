import React from "react";
import { Dumbbell, Flame, Users } from "lucide-react";
import serviceBG from "../../assets/services.webp";

export default function ServicesSection() {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "Customized workout plans tailored to your body, goals, and lifestyle with one-on-one expert guidance."
    },
    {
      icon: Flame,
      title: "Strength Coaching",
      description: "Build raw strength with professional guidance and structured programs designed for maximum gains."
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-intensity group sessions to boost stamina, burn calories, and stay motivated with community support."
    }
  ];

  return (
    <section
      id="services"
      style={{
        backgroundImage: `url(${serviceBG})`,
      }}
      className="w-full bg-fixed bg-center bg-cover py-24 md:py-32 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">

          <h2 style={{ fontFamily: 'Teko, sans-serif' }} className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6">
            Transform Your<br />
            <span className="text-orange-500">Fitness Journey</span>
          </h2>

          <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We provide the perfect environment to help you transform your strength, stamina, mindset, and lifestyle.
            Explore our premium services designed to elevate your fitness journey.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-xl border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/15"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative mb-6 inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-all duration-300">
                  <Icon className="w-8 h-8 text-orange-400 group-hover:text-orange-300" />
                </div>

                {/* Content */}
                <h3 style={{ fontFamily: 'Teko, sans-serif' }} className="relative text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="relative text-gray-300 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="relative inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-300 group-hover:gap-3"
                >
                  Learn More
                  <span className="text-lg">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
