import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import tripPackages from '../data/tripPackages';

import black from '../assets/plane-2.png';

import '../styles/Tours.css';
import '../styles/global.css';

const allPackages = Object.values(tripPackages).flat();

export default function Tours() {
const [_tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://zanjbela.xyz/backend/api/tours.php")
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(err => console.error(err));
  }, []);

  return (
    
    <div className="tours-page">
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
      <h1>Discover Libya's Rich Heritage & Desert Tours</h1>
      <div className='tours-about-libya'>
        
        <p>Libya is a dream destination for travelers seeking to explore North Africa’s lesser-known archaeological wonders and pre-Islamic heritage. From the Phoenician roots of Tripolitania to the Hellenistic cities of Cyrenaica, Libya’s UNESCO sites like Leptis Magna and Cyrene reflect its central role in the ancient Mediterranean world. Combined with Berber highlands and Saharan oases, Libya offers a deep and varied cultural journey beyond the well-trodden paths of North Africa.</p>
      </div>
      <h2>Available Tour Packages</h2>

      <div className="itinerary-cards">
        {allPackages.map((pkg, index) => (
          <div key={pkg.id || index} className="tour-wrapper">
        

            
              <div key={pkg.id || index} className="boarding-pass">
                  
                  <div className="left-image">
                    <img src={pkg.images?.[0]} alt={pkg.title} />
                  </div>
              
                  <div className="center-info">
                    <h1>{pkg.title}</h1>
                    <div className="flight-icon">
                      <img src={black} alt="plane-icon" />
                    </div>
                    <h1>TIP</h1>
                    <h2 className='tour-location'>{pkg.location}</h2>
                    <div className="details">
                      <p><strong>Tour Name:</strong> {pkg.title}</p>
                      <p><strong>Date:</strong> Any time</p>
                      <p><strong>Type:</strong> {pkg.type}</p>
                      <p><strong>Duration:</strong>{pkg.duration}</p>
                      <p><strong>Special Message:</strong> Complete journey from your destination to Libya</p>
                    </div>
                  </div>
              
                  <div className="right-section">
                    <div>
                      <h3>TOURIST PASS</h3>
                      <p><strong>Passenger:</strong><br />{pkg.description}</p>
                      <p><strong>Duration:</strong> {pkg.duration}</p>
                      <p><strong>Type:</strong> {pkg.type}</p>
                      <p><strong>Price:</strong> ${pkg.price}</p>
                    </div>
               
                    <Link
                                       to={`/tour/${pkg.slug}`}
                                       style={{ textDecoration: 'none', color: 'inherit' }}
                                     >
                         <div className="barcodee"> ▶ Click Here for More Details... </div>
                         </Link>
                  </div>
                </div>
            
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/218925919782?text=Hi, I'm interested in booking a tour with Indinan Tours."
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
  );
}
