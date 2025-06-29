
import React from 'react';
import Navbar from '@/components/Navbar';
import { Heart, Camera, Award, Users } from 'lucide-react';
import Footer from "@/components/Footer";
import AboutUsHero from '@/components/AboutUsHero';

const About = () => {
  const stats = [
    { icon: Heart, number: "500+", label: "Weddings Captured" },
    { icon: Camera, number: "25+", label: "Years Experience" },
    { icon: Award, number: "25+", label: "Awards Won" },
    { icon: Users, number: "1000+", label: "Happy Couples" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      {/* <section className="pt-20 pb-16 bg-gradient-to-b from-wedding-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-wedding-charcoal mb-6">
                About Our Story
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vasundhara Studio - A Legacy of Love & Lenses With over two decades of experience, Vasundhara Studio has become a trusted name in wedding storytelling.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 1999, our passion for preserving emotions, rituals, and timeless love stories has only grown stronger.
              From intimate pre-wedding shoots to grand destination weddings, we blend creativity with tradition, delivering cinematic and heart-touching memories for generations.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop"
                alt="Our photography team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> */}
      <AboutUsHero/>

      {/* Stats Section */}
      <section className="py-16 bg-wedding-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-wedding-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-wedding-gold" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-wedding-gold font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up">
              We believe in creating a comfortable, natural environment where authentic emotions can flourish, 
              resulting in photographs that truly reflect your unique love story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-wedding-gold/10 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-12 w-12 text-wedding-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-wedding-charcoal">Authentic Moments</h3>
              <p className="text-gray-600 leading-relaxed">
                We capture genuine emotions and candid moments that tell your authentic story, 
                not just posed portraits.
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-wedding-gold/10 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Camera className="h-12 w-12 text-wedding-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-wedding-charcoal">Artistic Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our artistic approach combines technical excellence with creative vision to create 
                timeless, beautiful images.
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '600ms' }}>
              <div className="bg-wedding-gold/10 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-wedding-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-wedding-charcoal">Personal Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                We take time to understand your story, your style, and your vision to ensure 
                every moment is captured perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-wedding-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <img
              src="logo.jpeg"
              alt="Lead photographer"
              loading='lazy'
              className="w-[10rem] h-[10rem] rounded-full mx-auto mb-8 shadow-lg"
            />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wedding-charcoal mb-6">
              Meet Abhay
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              "Photography chose us as much as we chose it. What started as a passion project has become our life's work. 
              We've been blessed to witness countless love stories unfold before our lens, and each one has taught us 
              something new about love, commitment, and the beauty of human connection."
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Our goal isn't just to document your wedding day—it's to create heirloom images that will be treasured 
              for generations to come. Images that will make you smile, laugh, and maybe even cry happy tears every time 
              you look at them."
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
