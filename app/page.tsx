// app/page.tsx
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AboutUsHero from "@/components/AboutUsHero";
import TestimonialsSlider from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <div className="mt-[100vh] z-10">
        <AboutUsHero />
        <ServicesSection />
        <TestimonialsSlider/>
        <PortfolioGallery />
        <ContactForm isHomePage={true} />
        <Footer />
      </div>
    </div>
  );
}
