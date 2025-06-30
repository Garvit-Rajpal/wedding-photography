// rewriting component:
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioImages } from "@/data/portfolioGallery";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12); // start with 12
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && visibleCount < portfolioImages.length) {
      setVisibleCount((prev) => prev + 9); // load 9 more images
    }
  }, [inView]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section
        id="portfolio"
        className="py-20 bg-wedding-cream"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up">
              A glimpse into the beautiful moments we've captured. Each image
              tells a unique love story filled with emotion, joy, and timeless
              elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.slice(0, visibleCount).map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-zoom-in bg-white/100 flex items-center justify-center"
                style={{ height: "20rem", animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:opacity-50 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 rounded-2xl">
                  <span className="text-white font-medium text-lg">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 👇 Trigger element to load more */}
          <div ref={ref} className="h-8 mt-10" />

          {/* Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-wedding-gold transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Portfolio;
