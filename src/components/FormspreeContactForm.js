import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaCheckCircle } from 'react-icons/fa';

function FormspreeContactForm() {
    const [state, handleSubmit] = useForm("mdoqbpaq");

    if (state.succeeded) {
        return (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700 text-lg">
                    Thank you for reaching out to us! We will respond to your inquiry within one business day.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name / Company Name <span className="text-red-500">*</span>
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Enter your name or company name"
                />
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email <span className="text-red-500">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="your.email@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Subject Field */}
            <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    required
                    className="input-field appearance-none cursor-pointer"
                >
                    <option value="">Select a subject</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Dental Treatment Delivery System">Dental Treatment Delivery System</option>
                    <option value="ICU Equipment">ICU Equipment</option>
                    <option value="Neonatal/Pediatric">Neonatal/Pediatric</option>
                    <option value="Nephrology">Nephrology</option>
                    <option value="Set up a formal meeting">Set up a formal meeting</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="input-field resize-none"
                    placeholder="Tell us about your inquiry..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {state.submitting ? (
                    <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
                ) : (
                    'Submit Inquiry'
                )}
            </button>
        </form>
    );
}

export default FormspreeContactForm;