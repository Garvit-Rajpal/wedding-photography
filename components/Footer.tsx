// components/Footer.tsx
"use client";

import {
  Heart,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/vasundhara_photo_studio?igsh=dDNvNDh2Ymo4Y3lm&utm_source=qr",
      color: "hover:text-pink-500",
    },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   url: "https://twitter.com/eternalmomentsphoto",
    //   color: "hover:text-blue-400",
    // },
    // {
    //   name: "Youtube",
    //   icon: Youtube,
    //   url: "https://youtube.com/@eternalmomentsphoto",
    //   color: "hover:text-red-500",
    // },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   url: "https://linkedin.com/company/eternal-moments-photography",
    //   color: "hover:text-blue-600",
    // },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-wedding-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-wedding-gold" />
              <span className="font-serif text-2xl font-bold">
                Vasundhara Studios
              </span>
            </Link>
            <p className="text-gray-300 mb-6 text-left max-w-md">
              At times, we may be traveling or fully engaged in documenting
              life’s most elegant occasions.<br/><br/>
              If you find us unreachable, please
              connect with us on WhatsApp or email at
              vasundharastudios8@gmail.com.<br/><br/>
              We look forward to responding
              promptly and curating memories that last a lifetime.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-wedding-gold" />
                <a
                  href="mailto:info@eternalmomentsphoto.com"
                  className="text-gray-300 hover:text-wedding-gold transition-colors"
                >
                  vasundharastudios8@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-wedding-gold" />
                <a
                  href="tel:+918279893922"
                  className="text-gray-300 hover:text-wedding-gold transition-colors"
                >
                  +91 82798 93922
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-wedding-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-wedding-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-wedding-gold">
              Follow Us On Instagram
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 transition-colors ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Vasundhara Studios. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-300 hover:text-wedding-gold text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-wedding-gold text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
