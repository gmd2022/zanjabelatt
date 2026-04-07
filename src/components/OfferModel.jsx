
import React, { useState, useEffect } from 'react';
import '../styles/OfferModel.css';
import {FaWhatsapp} from 'react-icons/fa';

const OfferModel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if modal was shown in the last 7 days
    
      // Set timeout to show modal after 15 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      
      }, 15000);

      return () => {
        clearTimeout(timer);
      };
    }
  , []);
  
  const closeModal = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>×</button>
        
        
       
        
        <div className="offer-header">
          <h2>Limited Time Offer!</h2>
          <p><b>From 15 Dec till 21 Dec</b> </p>
          <p>Hurry! This offer expires on October 25th</p>
        </div>
        
        <div className="offer-body">
          <div className="discount-badge">50% OFF</div>
          <h3>6-Days Libya Adventure Tour</h3>
          <p className="original-price">Original Price: €1,798</p>
          <p className="discounted-price">Now Only: <span>€950</span></p>
          
          <ul className="offer-features">
            <li className="feature-item">✓ Guided tours of historical sites</li>
            <li className="feature-item">✓ Accommodation included</li>
            <li className="feature-item">✓ Local cuisine experiences</li>
            <li className="feature-item">✓ Desert safari adventure</li>
          </ul>
          
          <a href="https://wa.me/218925919782" className="btn btn-whatsappS">
                          <FaWhatsapp />Book Now & Save</a>
        </div>
        
        <div className="offer-footer">
          <p>Offer expires on October 25, 2025. Terms and conditions apply.</p>
        </div>
      </div>
    </div>
  );
};

export default OfferModel;