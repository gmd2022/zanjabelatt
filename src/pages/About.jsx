import React from 'react';
import '../styles/About.css';
import '../styles/global.css'; 
import { Helmet } from 'react-helmet';

import ceo from '../assets/tea.jpg';

import ba from '../assets/ba.png';



const About = () => {
  
  return (
    <div className="about-container">
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
  <section className="about-section">
  <div className="about-row">
    <div className="about-image">
      <img src={ceo} alt="CEO of Zanjabela Tours" />
    </div>
    <div className="about-text">
      <h2>Discover Libya with Us </h2>
      <p>Zanjabela is 100% Libyan Tour Agency operated by Libyan youths aiming to help and guide travelers from around the globe.the idea came after I came from the America and lacking of English speakers ,We decided to start Zanjabela agency to help travelers discover Libyan culture.</p>
    </div>
  </div>

  <div className="about-row reverse">
    <div className="about-text">
      
      <p>Together, we synergize our diverse skills and shared passion for travel to ensure that every aspect of your trip, from the initial contact to the final goodbye, is handled with care, expertise, and attention to detail. Our goal is not just to meet your expectations but to exceed them, turning your dream travel experience into reality.</p>
    </div>
    <div className="about-image">
      <img src={ba} alt="Our Team" />
    </div>
  </div>
</section>
  <section className="mission-section">
     <h2>Meet Our Team</h2>
    <div className='meet-our-team'>
      <p>Walid Abdalla</p>
      <span className="position">CEO & operation manager</span>
      </div>
      <div className='meet-our-team'>
        <p>laith gunnas</p>
        <span className="position">sales advisor</span>
        </div>
    </section>

          <section>
          <h5>Services we offer</h5>
          <p>We are committed to providing exceptional service and personalized attention to every detail of your travel plans. Whether you’re seeking a thrilling expedition, a cultural immersion, or an exotic off-the-beaten-path adventure, our team is dedicated to turning your travel dreams into reality. With our dedication and passion for creating extraordinary adventures, we have proudly established ourselves as one of the top adventure tour operators in the world. Thank you for considering Zanjabela Travels for your upcoming adventures. We look forward to working with you and creating unforgettable memories.</p>
          
          <div className="stats">
            <div className="stat-item">
              <h3>32</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>100,000+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Tour Packages</p>
            </div>
          </div>

          <a
            href="https://wa.me/218925919782?text=Hi, I'm interested in booking a tour with you."
            className="whatsapp-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Chat on WhatsApp"
            />
          </a>
        </section>
    </div>
  )
}

export default About;
