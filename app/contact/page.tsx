import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Footer from "@/components/Footer";
// import LeafletMap from "../components/LeafletMap"; // Ensure you have this component created

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["Opposite SDM court, Nainital road", "Haldwani"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 82798 93922"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["Abhaypaliwal028@gmail.com","vasundharastudios8@gmail.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sun: 9:00AM to 8:00PM"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-wedding-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up">
              Ready to capture your love story? We'd love to hear from you and
              discuss how we can make your wedding photography dreams come true.
              Let's create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-wedding-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-wedding-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-wedding-charcoal">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-wedding-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up">
              Fill out the form below and we'll get back to you within 24 hours.
              We can't wait to hear about your special day!
            </p>
          </div>
          <div className="flex items-center w-full">
            <img 
            className="hidden lg:block flex-1 w-[40%] h-[458px] rounded-l-2xl shadow-lg animate-fade-up"
            src="https://res.cloudinary.com/dp289ksxm/image/upload/v1751213268/portfolio_8_yg37al.jpg"
            alt="Contact Us"
            />
            <div className="flex-1">
             <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
              Find Our Studio
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-up">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-wedding-gold mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-500">123 Photography Lane, Creative District</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
              Find Our Studio
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-up h-96">
            <LeafletMap />
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Contact;
