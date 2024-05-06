import React from 'react';
import './WhatsAppIcon.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    const phoneNumber = '8801727072868 '; // Replace this with your phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
            <FaWhatsapp size={28} color="white" />
        </a>
    );
};

export default WhatsAppIcon;
