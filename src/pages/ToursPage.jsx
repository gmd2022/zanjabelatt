import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaGoogle, FaFacebook, FaTripadvisor,FaEnvelope,FaMapMarkerAlt,FaTags,FaPhoneAlt,FaWhatsapp } from 'react-icons/fa';
import '../styles/ToursPage.css';
import { Link } from 'react-router-dom';
import TourCard  from '../components/TourCard';
import { Helmet } from 'react-helmet';


import Tap from '../components/Tab';
import M from '../assets/m.jpg';
import almed from '../assets/almed.png';
import theis from '../assets/theis.jpg';
import black from '../assets/plane-2.png';

const reviews = [
  {
    name: 'Nick Angelos',
    country: 'Ireland',
    image: M,
    review: 'Amazing experience in the desert!',
    platform: 'TripAdvisor',
    icon: FaTripadvisor,
    stars: 5
  },
  {
    name: 'Theis',
    country: 'Denmark',
    image: theis,
    review: 'The Nafoosa mountains are breathtaking.',
    platform: 'Google',
    icon: FaGoogle,
    stars: 5
  },
  {
    name: 'Philip',
    country: 'Germany',
    image: M,
    review: 'Great service and unforgettable tours.',
    platform: 'Facebook',
    icon: FaFacebook,
    stars: 4
  },
  {
    name: 'Anna Müller',
    country: 'Germany',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    review: 'A truly memorable experience, thanks to the team!',
    platform: 'TripAdvisor',
    icon: FaTripadvisor,
    stars: 5
  },
  {
    name: 'Almedin',
    country: 'Switzerland',
    image: almed,
    review: 'Highly recommended! The tour guides were fantastic.',
    platform: 'Google',
    icon: FaGoogle,
    stars: 5
  },
  {
    name: 'Will Rossi',
    country: 'USA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    review: 'This was an amazing trip, strongly recommended.',
    platform: 'Google',
    icon: FaGoogle,
    stars: 5
  },
  {
    name: 'Mike Smith',
    country: 'UK',
    image: M,
    review: 'Amazing experience in the desert! Highly recommended and thanks for Yousef',
    platform: 'TripAdvisor',
    icon: FaTripadvisor,
    stars: 5
  },
];



export default function ToursPage({ tripPackages }) {
  const { slug } = useParams();
  const allTours = Object.values(tripPackages).flat();
  const tour = allTours.find(pkg => pkg.slug === slug);
  
    // Filter out the current tour for the "More Tours" section
  const otherTours = allTours.filter(tour => tour.slug !== slug);

  if (!tour) return <div>Tour not found</div>;

  return (
   
    <div className="tour-details-page" >
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
      {/* Gallery Section */}
      {tour.images?.length > 0 && (
        <div className="gallery-section" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {tour.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Tour image ${index + 1}`}
                style={{
                  width: '32%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tour Header */}
       <div className="tour-header">
      <h1>{tour.title}</h1>
      <div className="tag-container">
        {/* Price Tag */}
       <div className="hanging-tag price-tag">
      <div className="tag-string"></div>
      <span>${tour.price}</span>
       </div>
    
       {/* Duration Tag */}
      <div className="hanging-tag duration-tag">
      <div className="tag-string"></div>
      <span>{tour.duration} Days</span>
      </div>
    
       {/* Hotel Tag */}
    <div className="hanging-tag hotel-tag">
      <div className="tag-string"></div>
      <span>'4 star '|| '3★ Hotels'</span>
    </div>
     <div className="hanging-tag pickup-tag">
      <div className="tag-string"></div>
      <span>Airport Pickup</span>
        </div>
       </div>
          </div>
     <div className="ticket-highlights-wrapper">
     
        <div className="ticket-highlight" >
          <div className="ticket-left">
            <h3>Special Pass </h3>
          </div>

          <div className="ticket-stub">
           
            <p className="highlight-detail">What's important for you </p>
            <span>HLT-{tour.highlights}</span>
          </div>

          <div className="ticket-right">
            <span>VIP</span>
          </div>
        </div>
     
    </div>
    {/* Airport Pickup Tag */}
      

      {/* Itinerary Section */}
      <div className='itinerary-section'>
        <h3>Daily Itinerary</h3>
        {tour.dailyPlan.map((day) => (
          <div key={day.day}>
            <Tap title={`Day ${day.day}: ${day.title}`}>
              <p>{day.description}</p>
              {day.meals && <p><strong>Meals:</strong> {day.meals.join(", ")}</p>}
              {day.accommodation && <p><strong>Accommodation:</strong> {day.accommodation}</p>}
            </Tap>
          </div>
        ))}
      </div>

      {/* Included/Not Included Section */}
      <div className='not-included-section'>
        <h3>What's Included</h3>
        <ul>
          <li>Airport meet & greet</li>
          <li>Libya visa, permits, registrations</li>
          <li>3★ hotels, transfers, and guides</li>
          <li>All entrance fees</li>
          <li>Traditional Tuareg experience</li>
        </ul>

        <h3>What's Not Included</h3>
        <ul>
          <li>International flights</li>
          <li>Travel insurance</li>
          <li>Tips and personal expenses</li>
        </ul>
      </div>
      <div className='how-to-get-the-visa'>
  <h3>Tour - FAQ</h3>
 <Tap title= 'How to Get the Visa'>
  <p>
    Getting a visa for Libya is straightforward. You can apply online at https://evisa.gov.ly after we support you with invitation letter after you pay deposit.and you should get it in 5 days . 
    
  </p>
  </Tap>
  <Tap title='What is the best time to visit Libya?'>
  <p>
    The best time to visit Libya is from October to April when the weather is mild and suitable for desert tours. Summer can be extremely hot, especially in the desert regions.
  </p>
  </Tap>
  <Tap title='What should I pack for a desert tour?'>
  <p>
    For a desert tour, pack lightweight, breathable clothing, a wide-brimmed hat, sunscreen, sunglasses, and sturdy footwear. Don't forget a reusable water bottle to stay hydrated.
  </p>
  </Tap>
  <Tap title='Is it safe to travel to Libya?'>
  <p>
    While Libya has experienced political instability, many areas, especially tourist destinations, are safe to visit. Always check travel advisories and stay updated on the current situation.
  </p>
  </Tap>
  <Tap title='What is the currency used in Libya?'>
  <p>
    The currency used in Libya is the Libyan dinar (LYD). It's advisable to exchange some money before your trip, as ATMs may not be widely available in remote areas.
  </p>
  </Tap>
  <Tap title='Do I need a guide for desert tours?'>
  <p>
    Yes, it's highly recommended to have a local guide for desert tours. They are familiar with the terrain, can ensure your safety, and enhance your experience with local knowledge and cultural insights.
  </p>
  </Tap>
  
</div>

        <ReviewsCarousel />
     
<div className="get-in-touch-wrapper">
  <div className="background-image-layer"></div>
  <div className="headline-box">Get in Touch</div>

  <div className="signpost">
    <div className="contact-sign right">
     
      <span> gmd89y@gmail.com</span>
    </div>
    <div className="contact-sign left">
     
      <span>WhatsApp: +218 925919782</span>
    </div>
  </div>
<div className="note-sign ">
  <span>
  FLY INTO MITIGA,TRIPOLI
  </span>
  </div>
</div>
<h5 className='more-tours'>MORE TOURS...</h5>
{otherTours.slice(0, 1).map((pkg, index) => (
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
      <h2>{pkg.location}</h2>
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
        <p><strong>Price:</strong> {pkg.price}</p>
      </div>
                    <Link
                    to={`/tour/${pkg.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
      <div className="barcodee"> ▶ Click Here for More Details... </div>
      </Link>
    </div>
  </div>
))}

<a
  href="https://wa.me/218925919782?text=Hi, I'm interested in booking a tour with you ."
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









function ReviewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3; // Show 3 cards at a time for better mobile responsiveness

  const handleNext = () => {
    if (startIndex + visibleCards < reviews.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCards);

  const PlatformIcon = ({ platform }) => {
    switch (platform) {
      case 'Google':
        return <FaGoogle className="google-icon" />;
      case 'Facebook':
        return <FaFacebook className="facebook-icon" />;
      case 'TripAdvisor':
        return <FaTripadvisor className="tripadvisor-icon" />;
      default:
        return null;
    }
  }

  return (
    <div className="reviews-section">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="carousel-container">
        <button 
          className="carousel-button prev" 
          onClick={handlePrev} 
          disabled={startIndex === 0}
          aria-label="Previous reviews"
        >
          &lt;
        </button>
        
        <div className="reviews-container">
          {visibleReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="reviewer-avatar-container">
                <img src={review.image} alt={review.name} className="reviewer-avatar" />
              </div>
              <div className="review-content">
                <h4 className="reviewer-name">{review.name}</h4>
                <p className="reviewer-country">{review.country}</p>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < review.stars ? '#FFD700' : '#C0C0C0'} />
                  ))}
                </div>
                <p className="review-text">"{review.review}"</p>
                <div className="platform-icon">
                  <PlatformIcon platform={review.platform} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-button next"
          onClick={handleNext}
          disabled={startIndex + visibleCards >= reviews.length}
          aria-label="Next reviews"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}