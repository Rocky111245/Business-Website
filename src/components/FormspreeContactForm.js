import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function FormspreeContactForm() {
  const [state, handleSubmit] = useForm("mdoqbpaq"); // Use your Formspree form ID here
  if (state.succeeded) {
      return <p className='contact-us__form__succeeded'>Thank you for your inquiry! You email will be responded to within 1 business day.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-us__form">
      <div className="contact-us__form-group">
        <label className="contact-us__label" htmlFor="name">Your Name/Company Name</label>
        <input id="name" type="text" name="name" className="contact-us__input contact-us__input--name" required />
      </div>

      <div className="contact-us__form-group">
        <label className="contact-us__label" htmlFor="email">Email</label>
        <input id="email" type="email" name="email" className="contact-us__input contact-us__input--email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="contact-us__form-group">
        <label className="contact-us__label" htmlFor="subject">Subject</label>
        <select id="subject" name="subject" className="contact-us__select">
          <option>Opthalmology</option>
          <option>Dental Treatment Delivery System</option>
          <option>ICU Equipment</option>
          <option>Neonatal/Pediatric</option>
          <option>Nephrology</option>
          <option>Set up a formal meeting</option>
          <option>Others</option>
        </select>
      </div>

      <div className="contact-us__form-group">
        <label className="contact-us__label" htmlFor="message">Ask Us</label>
        <textarea id="message" name="message" className="contact-us__textarea text"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" className="contact-us__submit-button" disabled={state.submitting}>
        Submit Inquiry
      </button>
    </form>
  );
}

export default FormspreeContactForm;
