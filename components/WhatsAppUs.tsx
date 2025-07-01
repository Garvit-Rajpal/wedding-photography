// components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${process.env.WA_RECIPIENT_NUMBER}?text=Hi%20there%2C%20I%20found%20you%20on%20your%20website%20for%20wedding%20photography%20would%20like%20to%20enquire%20about%20my%20event!`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[1rem] right-[0.5rem] z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
