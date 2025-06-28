"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "@/data/Testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full z-10 mx-auto bg-white">
      <div className="text-center mb-6 py-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up">
          Hear from couples who have trusted us with their most cherished moments.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        className="max-w-6xl my-auto mx-auto px-4 sm:px-6 lg:px-8"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        // navigation={true}  /* ✅ type-safe for Swiper */
        onInit={(swiper) => {
          // Manually assign refs after Swiper is initialized
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 m-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 text-center max-w-2xl">{testimonial.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 bg-black hover:bg-wedding-charcoal text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        ref={nextRef}
        className="hidden lg:block absolute right-1 top-1/2 -translate-y-1/2 bg-black hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
