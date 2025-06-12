import React from 'react';
import '../styles/style.css';

function Contact() {
  return (
    <section className="contact-form" id="contact">
      <h2 >Contact Us</h2>
      <p className="section-para">
        Have a question or need help with a reservation? Reach out to us using the form below.
      </p>

      <form className="reservation-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
