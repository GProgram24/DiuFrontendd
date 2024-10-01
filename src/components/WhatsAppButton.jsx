import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Replace with your WhatsApp number
  const whatsappNumber = '8369341912';
  const message = 'Hello! I need help!'; // Default message

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className='w-8 h-8'/> {/* Use FontAwesome or any icon library */}
    </a>
  );
};

export default WhatsAppButton;
