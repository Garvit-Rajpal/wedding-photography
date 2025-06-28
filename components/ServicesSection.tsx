
import React from 'react';
import { Camera, Heart, Users, Gift } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete wedding day coverage capturing every precious moment from preparation to celebration.",
      features: ["Candid Wedding Photography", "Traditional Photography", "Couple Potraits", "Haldi, Mehendi & Sangeet Coverage","Maternity & Baby Shoots"]
    },
    {
      icon: Camera,
      title: "Wedding Videography",
      description: "Romantic wedding videos to celebrate your love story and connection.",
      features: ["Cinematic Wedding Films", "Pre-Wedding Films", "Drone Coverage", "Wedding Teasers & Highlight Reels", "Save the Date Films"]
    },
    {
      icon: Users,
      title: "Family Portraits",
      description: "Beautiful family moments captured with artistic flair and natural emotions.",
      features: ["1 hour session", "30+ edited photos", "Studio or outdoor", "All family sizes"]
    },
    {
      icon: Gift,
      title: "Additional Services",
      description: "Specialized services to enhance your photography experience and preserve your memories.",
      features: ["Premium Wedding Albums", "Social Media Reels & Edits", "Digital Invitations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-wedding-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up">
            We offer a comprehensive range of photography services to capture your most precious moments
            with artistic excellence and emotional depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-wedding-gold/10 p-3 rounded-full mr-4">
                  <service.icon className="h-8 w-8 text-wedding-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-wedding-charcoal">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-wedding-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
