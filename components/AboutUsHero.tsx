import React from 'react'

function AboutUsHero() {
  return (
    <div>
    <section className="pt-20 pb-16 bg-gradient-to-b from-wedding-cream to-white">
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
            src="Owner_image.DNG"
            alt="Our photography team"
            className="rounded-2xl w-[25rem] h-[25rem] shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default AboutUsHero