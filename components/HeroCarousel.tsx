"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '@/data/CaraousalSlides';
// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: "/caraousal_1.JPG",
//       title: "Your moments our legacy",
//       subtitle: "Every moment, every emotion, beautifully preserved"
//     },
//     {
//       image: "/caraousal_2.JPG",
//       title: "Your moments our legacy",
//       subtitle: "Creating memories that last forever"
//     },
//     {
//       image: "/caraousal_3.ARW",
//       title: "Your moments our legacy",
//       subtitle: "Artistically capturing your wedding journey"
//     },
//     {
//       image: "/caraousal_4.JPG",
//       title: "Your moments our legacy",
//       subtitle: "Artistically capturing your wedding journey"
//     },
//     {
//       image: "/caraousal_5.jpg",
//       title: "Your moments our legacy",
//       subtitle: "Artistically capturing your wedding journey"
//     }

//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative h-screen bg-contain overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//             index === currentSlide
//               ? 'opacity-100 scale-100'
//               : 'opacity-0 scale-110'
//           }`}
//         >
//           <div
//             className="w-full h-full bg-cover bg-no-repeat bg-center fixed"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center text-white max-w-4xl px-4">
//                 <h1 className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
//                   index === currentSlide ? 'animate-fade-up' : ''
//                 }`}>
//                   {slide.title}
//                 </h1>
//                 <p className={`text-lg md:text-xl lg:text-2xl font-light mb-8 ${
//                   index === currentSlide ? 'animate-fade-up animation-delay-300' : ''
//                 }`}>
//                   {slide.subtitle}
//                 </p>
//                 <button 
//                 onClick={() => window.location.href = '/portfolio'}
//                 className={`bg-wedding-gold hover:bg-wedding-gold/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-110 ${
//                   index === currentSlide ? 'animate-fade-up animation-delay-600' : ''
//                 }`}>
//                   View Our Work
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'bg-wedding-gold scale-125'
//                 : 'bg-white/50 hover:bg-white/70'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-contain overflow-hidden z-[-10]"
      style={{ zIndex: -10 }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1
                  className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                    index === currentSlide ? "animate-fade-up" : ""
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg md:text-xl lg:text-2xl font-light mb-8 ${
                    index === currentSlide
                      ? "animate-fade-up animation-delay-300"
                      : ""
                  }`}
                >
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => (window.location.href = "/portfolio")}
                  className={`bg-wedding-gold hover:bg-wedding-gold/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-110 ${
                    index === currentSlide
                      ? "animate-fade-up animation-delay-600"
                      : ""
                  }`}
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-wedding-gold scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
// export default HeroCarousel;
