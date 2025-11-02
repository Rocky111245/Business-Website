import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    return (
        <a
            href="https://wa.me/8801713141783"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contact us on WhatsApp"
        >
            <div className="relative">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

                {/* WhatsApp Button */}
                <div className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110">
                    <FaWhatsapp className="text-3xl" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    Chat with us on WhatsApp
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                        <div className="border-8 border-transparent border-l-gray-900"></div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default WhatsAppIcon;