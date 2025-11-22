import { Dumbbell, Apple, Droplets, Target } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Quality Equipment',
    description: 'All our gyms are equipped with a wide range of industry-leading machines and training tools to support every style of workout.'
  },
  {
    icon: Apple,
    title: 'Healthy Nutrition Plans',
    description: 'Whether you\'re preparing for a competition, event, or simply improving your lifestyle, our coaches create customized meal plans designed to fuel your goals.'
  },
  {
    icon: Droplets,
    title: 'Shower Facilities',
    description: 'Enjoy the convenience of clean, well-maintained shower facilities available 24 / 7 so you can train before or after work without any hassle.'
  },
  {
    icon: Target,
    title: 'Tailored to Your Needs',
    description: 'Our certified, experienced, and fully insured trainers design personalized programs specifically crafted to match your fitness level, goals, and lifestyle.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-orange-500 opacity-95"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 140, 0, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 100, 0, 0.2) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0, 0, 0, 0.02) 10px,
              rgba(0, 0, 0, 0.02) 20px
            )
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 style={{ fontFamily: 'Teko, sans-serif' }} className="text-4xl md:text-5xl font-bold text-white mb-3">
            Push Beyond Your Limits
          </h2>
          <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Train with top-tier bodybuilding experts dedicated to transforming your fitness journey.
            With cutting-edge workout trends, modern equipment, and personalized nutrition plans,
            your results will speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 transform"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontFamily: 'Teko, sans-serif' }} className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
