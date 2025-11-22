import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Member since 2022",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Next Level Fitness completely changed my routine. The trainers are amazing and the environment keeps me motivated every day.",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "Member since 2021",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The group classes are high-energy and fun! I've seen incredible results in strength and stamina.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Member since 2023",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Personalized coaching helped me break my limits and achieve my fitness goals faster than I imagined.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Textured background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">

          <h2 style={{ fontFamily: 'Teko, sans-serif' }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            What Our Members<br />
            <span className="text-white">Say About Us</span>
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Real stories from real members. Discover how Next Level Fitness transformed their fitness journey and helped them achieve their dreams.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/15 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Stars Rating */}
              <div className="relative flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              {/* Quote */}
              <p className="relative text-white/95 text-base md:text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* User Profile */}
              <div className="relative flex items-center gap-4 pt-6 border-t border-white/20">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/40 group-hover:border-white/70 transition-all duration-300"
                />
                <div  className="text-left">
                  <h3 style={{ fontFamily: 'Teko, sans-serif' }} className="text-white font-bold text-2xl group-hover:text-orange-100 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <span className="text-white/70 text-sm">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className=" mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: "2000+", label: "Active Members" },
            { number: "50+", label: "Expert Trainers" },
            { number: "15+", label: "Group Programs" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <div style={{ fontFamily: 'Teko, sans-serif' }} className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
