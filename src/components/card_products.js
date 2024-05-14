// CardSection.js
import React from 'react';
import './card_products.css';

const CardSection = ({ activeCard, onCardClick }) => {
    const categories = [
        { id: 'Ophthalmology', name: 'Eye Care' },
        { id: 'ICU', name: 'Intensive Care Units' },
        { id: 'Dental Instruments', name: 'Dental Instruments' },
        { id: 'Neonatal/Pediatric', name: 'Baby Equipments' },
        { id: 'Nephrology', name: 'Kidney Health' }
    ];

    return (
        <div className="card-container">
            {categories.map((category) => (
                <div 
                    key={category.id}
                    className={`card ${activeCard === category.id ? 'card_active' : ''}`}
                    onClick={() => onCardClick(category.id)}
                >
                    {category.name}
                </div>
            ))}
        </div>
    );
}

export default CardSection;
