import React from 'react';
import './Homesection2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTooth, faHeartbeat, faBaby,faBabyCarriage,fakidn,faFilter } from '@fortawesome/free-solid-svg-icons'
import { faKidneys } from '@fortawesome/free-solid-svg-icons'





const Homesection2 = () => {
  return (
    
<div className='Homesection2_container'>

    <h2 className='Homesection2__text'> We specialize in 5 branches</h2>
       <div className='Homesection2'>
            
        <div className='Homesection2_blocks'>
            <div>
                <div><FontAwesomeIcon icon={faEye} size="10x" color='#4169E1' /></div>
            </div>
            <div>
                <div className='Homesection2_card_title'> Ophthalmology</div>
            </div>
        </div>
        <div className='Homesection2_blocks'>
            <div>
                <div><FontAwesomeIcon icon={faTooth} size="10x" color='#4169E1' /></div>
            </div>
            <div>
                <div className='Homesection2_card_title'>Dental Treatment Delivery System</div>
            </div>
        </div>
        <div className='Homesection2_blocks'>
            <div>
                
                <div><FontAwesomeIcon icon={faHeartbeat} size="10x" color='#4169E1' /></div>
            </div>
            <div>
                <div className='Homesection2_card_title'>ICU Equipment</div>
            </div>
        </div>
        <div className='Homesection2_blocks'>
            <div>
                <div><FontAwesomeIcon icon={faBabyCarriage}  size="10x" color='#4169E1'/></div>
            </div>
            <div>
                <div className='Homesection2_card_title'>Neonatal/Pediatric</div>
            </div>
        </div>
        <div className='Homesection2_blocks'>
            <div>
                <div><FontAwesomeIcon icon={faFilter} size="10x" color='#4169E1'/>
</div>
            </div>
            <div>
                <div className='Homesection2_card_title'>Nephrology</div>
            </div>
        </div>





    </div>
</div>
  )
}

export default Homesection2