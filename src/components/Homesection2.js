import React from 'react';
import './Homesection2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTooth, faHeartbeat, faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import { GiKidneys } from "react-icons/gi";

const Homesection2 = () => {
  return (
    <div className='Homesection2_container'>
      <h2 className='Homesection2__text'>We specialize in 5 branches</h2>
      <div className='Homesection2'>

        <div className='Homesection2_blocks'>
          <a href="/Products" className='icon-link' >
            <FontAwesomeIcon className='icon' icon={faEye}  color='#4169E1' />
            <div className='Homesection2_card_title'>Ophthalmology</div>
          </a>
        </div>

        <div className='Homesection2_blocks'>
          <a href="/Products" className='icon-link'>
            <FontAwesomeIcon className='icon' icon={faTooth}  color='#4169E1' />
            <div className='Homesection2_card_title'>Dental Treatment Delivery System</div>
          </a>
        </div>

        <div className='Homesection2_blocks'>
          <a href="/Products" className='icon-link'>
            <FontAwesomeIcon className='icon' icon={faHeartbeat}color='#4169E1' />
            <div className='Homesection2_card_title'>ICU Equipment</div>
          </a>
        </div>

        <div className='Homesection2_blocks'>
          <a href="/Products" className='icon-link'>
            <FontAwesomeIcon className='icon' icon={faBabyCarriage}  color='#4169E1' />
            <div className='Homesection2_card_title'>Neonatal/Pediatric</div>
          </a>
        </div>

        <div className='Homesection2_blocks'>
          <a href="/Products" className='icon-link'>
            <GiKidneys className='icon'  color='#4169E1' />
            <div className='Homesection2_card_title'>Nephrology</div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Homesection2;
