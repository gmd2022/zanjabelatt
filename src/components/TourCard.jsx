import React from 'react';
import '../styles/TourCard.css';
import Tours from '../pages/Tours';
export default function TourCard({ title, images, description, price, duration, type, location }) {
  return (
    <div className="tour-card">
      <div className="tour-card-header">
        <img src={images?.[0]} alt={title} />
        

      </div>
      <div className='tour-card-footer'>
      <h3>{title}</h3>
      <p>{description}</p>
     <hr className="dotted-line"/> 
      <p className="tour-type">
        <span style={{ verticalAlign: 'middle', marginRight: 4 }}>
          {/* Double Person SVG */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="7" cy="8" r="3" />
            <circle cx="13" cy="10" r="2.5" />
            <path d="M2 16c0-2.5 3-4 5-4s5 1.5 5 4v1H2v-1z" />
            <path d="M11 16c0-1.5 2-2.5 4-2.5s4 1 4 2.5v1h-8v-1z" />
          </svg>
        </span>
        {type}
        </p>
     <p className="tour-duration icon-row">
  <svg className="tour-icon" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="9" y="5" width="2" height="6" rx="1" fill="currentColor"/>
    <rect x="10" y="10" width="5" height="2" rx="1" fill="currentColor" transform="rotate(45 10 10)"/>
  </svg>
  <span>{duration}</span>
</p>


      <p className="tour-location">
        <span style={{ verticalAlign: 'middle', marginRight: 4 }}>
          {/* Location Pin SVG */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 9.5A1.5 1.5 0 1 1 10 6.5a1.5 1.5 0 0 1 0 3z"/>
          </svg>
        </span>
        <span>
        {location}
        </span>
      </p>
      <p className="tour-price">
        <span style={{ verticalAlign: 'middle', marginRight: 4 }}>
          {/* Dollar SVG */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 0 1 1 1v1.07c2.282.207 4 1.64 4 3.43 0 1.657-1.343 3-3 3h-2a1 1 0 1 0 0 2h2c2.21 0 4 1.343 4 3s-1.79 3-4 3v1a1 1 0 1 1-2 0v-1.07c-2.282-.207-4-1.64-4-3.43 0-1.657 1.343-3 3-3h2a1 1 0 1 0 0-2h-2c-2.21 0-4-1.343-4-3s1.79-3 4-3V3a1 1 0 0 1 1-1zm1 12c1.104 0 2-.672 2-1.5s-.896-1.5-2-1.5h-2c-1.104 0-2 .672-2 1.5s.896 1.5 2 1.5h2zm-2-6c-1.104 0-2 .672-2 1.5s.896 1.5 2 1.5h2c1.104 0 2-.672 2-1.5s-.896-1.5-2-1.5h-2z"/>
          </svg>
        </span>
        {price}€
      </p>
      </div>
    </div>
  );
}
