import React from 'react';
import '../styles/Contact.css';
import '../styles/global.css'; 
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Zanjabela Tours | Libya Tour Packages & Cultural Adventures</title>
        <meta name="description" content="Discover Libya with Zanjabela Tours — from desert camping and Roman ruins to Tuareg festivals and guided tours. Book your Libyan adventure today!" />
        <meta name="keywords" content="Libya tours, travel Libya, Zanjabela Tours, Libyan desert, Sahara, Ghat festival, Roman ruins Libya, guided tours Libya, Libyan culture" />
        <meta property="og:title" content="Zanjabela Tours | Explore Libya's Culture & Desert Adventures" />
        <meta property="og:description" content="Book unforgettable cultural and desert experiences in Libya. Guided tours, visa help, and more." />
        <meta property="og:url" content="https://zanjbela.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zanjbela.xyz/images/sab.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@travel2libya" />
        <meta name="twitter:title" content="Zanjabela Tours" />
        <meta name="twitter:description" content="Explore Libya through culture, history, and desert adventure." />
        <meta name="twitter:image" content="https://zanjbela.xyz/assets/subra.jpeg" />

        <link rel="canonical" href="https://zanjbela.xyz/" />
      </Helmet>
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <div className="contact-detail">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div>
              <h4>Address</h4>
              <p>2nd floor, Wahat center - Hay Alandalus, Tripoli - Libya</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <div>
              <h4>Phone</h4>
              <p>+218 92 591 9782</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon"><FaEnvelope /></div>
            <div>
              <h4>Email</h4>
              <p>gmd89y@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon"><FaWhatsapp /></div>
            <div>
              <h4>WhatsApp</h4>
              <p>+218 92 591 9782</p>
              <a href="https://wa.me/218925919782" className="btn btn-whatsapp">
                <FaWhatsapp /> Message Us
              </a>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/218916310613?text=Hi, I'm interested in booking a tour with Indinan Tours."
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="Chat on WhatsApp"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
