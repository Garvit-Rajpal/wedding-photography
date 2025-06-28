"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const galleryImages = [
    { id: 1, src: "/portfolio_1.jpg", alt: "Bride and groom first dance", category: "ceremony" },
    { id: 2, src: "/portfolio_2.jpg", alt: "Wedding rings detail", category: "details" },
    { id: 3, src: "/portfolio_3.JPG", alt: "Couple portrait in nature", category: "portraits" },
    { id: 4, src: "/portfolio_4.JPG", alt: "Wedding ceremony kiss", category: "ceremony" },
    { id: 5, src: "/portfolio_5.jpg", alt: "Bridal bouquet details", category: "details" },
    { id: 6, src: "/portfolio_6.jpg", alt: "Romantic couple embrace", category: "portraits" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
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
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-zoom-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <div className="w-full flex flex-row items-center justify-center">
        <button
          onClick={() => router.push("/portfolio")}
          className="mt-8 bg-wedding-gold hover:bg-wedding-gold/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-110"
        >
          View Our Work
        </button>
      </div>
    </section>
  );
};

export default PortfolioGallery;