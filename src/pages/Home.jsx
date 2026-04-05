import React from 'react';
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import BlogCard from '../components/BlogCard';
import blogsArticles from '../data/blogsArticles';




import tripadvisorIcon from '../assets/tripadvisor.svg';
import googleIcon from '../assets/google.svg';
import facebookIcon from '../assets/facebook.svg';
import almed from '../assets/almed.png';
import M from '../assets/m.jpg';
import black from '../assets/plane-2.png';



import TourCard from '../components/TourCard';
import '../styles/Home.css';
import cave from '../assets/subra.jpeg';
import nafoosa from '../assets/top.jpeg';
import sabra from '../assets/lib.jpeg';
import q from '../assets/q.jpg';
import desert from '../assets/plan.jpg';
import g from '../assets/g.jpeg';
import s from '../assets/s.jpeg';
import concert from '../assets/concert.png'
import visa from '../assets/visa.png';
import rental from '../assets/rental.png';
import hotel from '../assets/hotel.png';
import camping from '../assets/camping.png';
import guide from '../assets/guide.png';
import lepdus from '../assets/lepdus.jpeg';
import crene from '../assets/crene.jpeg';

import gadames from '../assets/ghadmes.jpg';
import theis from '../assets/theis.jpg';






const services = [
  { title: 'Visa Assistance', image: visa, description: 'We help you with the visa process.' },
  { title: 'Guidance', image: guide, description: 'Explore Libya with our expert guides.' },
   { title: 'Camping', image: camping, description: 'Experience the desert with our camping services.' },
     { title: 'Hotel Booking', image: hotel, description: 'Book hotels at the best rates.' },
  { title: 'Concerts & Events', image: concert, description: 'Enjoy local concerts and events.' },
      { title: 'Car Rental', image: rental, description: 'Rent a car for your convenience.' },
    
];
const reviews = [
  {
    name: 'Nick Angelos',
    country: 'Ireland',
    image: M,
    review: 'Amazing experience in the desert!',
    platform: 'TripAdvisor',
    icon: tripadvisorIcon
  },
  {
    name: 'Theis',
    country: 'Denmark',
    image: theis,
    review: 'The Nafoosa mountains are breathtaking.',
    platform: 'Google',
    icon: googleIcon
  },
  {
    name: 'philip',
    country: 'Germany',
    image: M,
    review: 'Great service and unforgettable tours.',
    platform: 'Facebook',
    icon: facebookIcon
  },
  {
    name: 'Anna Müller',
    country: 'Germany',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    review: 'A truly memorable experience, thanks to the team!',
    platform: 'TripAdvisor',
    icon: tripadvisorIcon
  },
  {
    name: 'Almedin',
    country: 'Switzerland',
    image: almed,
    review: 'Highly recommended! The tour guides were fantastic.',
    platform: 'Google',
    icon: googleIcon
  },
  {
    name: 'will Rossi',
    country: 'USA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    review: 'This was an amazin trip, Strongly recommended.',
    platform: 'Google',
    icon: googleIcon
  },
  {
    name: 'mike smith',
    country: 'UK',
    image: M,
    review: 'Amazing experience in the desert!,highly recommended and Thanks for Yousef',
    platform: 'TripAdvisor',
    icon: tripadvisorIcon
  },
];


const images = [cave, nafoosa, sabra];


export default function Home({tripPackages}) {
  const allTripPackages = Object.values(tripPackages).flat();

   
return (
  <div className="home">
    <Helmet>
        <title>Zanjabela Tours | Libya Tour Packages & Cultural Adventures</title>
        <meta name="description" content="Discover Libya with Zanjabela Tours — from desert camping and Roman ruins to Tuareg festivals and guided tours. Book your Libyan adventure today!" />
        <meta name="keywords" content="Libya tours, travel Libya, Zanjabela Tours, Libyan desert, Sahara, Safari,Mountains,Culture, Oasis , Mediterranean Beaches,Ghat festival, Roman ruins Libya, guided tours Libya, Libyan culture" />
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
    <Hero/>
   <WhoWeAre/>

<div className="services">
        
         <div className="services-container">
            
            <div className="service-cards">
                {services.map((service, i) => (
                    <div key={i} className="service-card1">
                        <img src={service.image} alt={service.title} />
                        <p>{service.title}</p>
                       </div>
                      
                ))}
             </div>    
         </div>
        </div>
        <ExclusiveOffer allTripPackages={allTripPackages}/>
 <div className='explore-tours'>  <h3>Explore Our Tours</h3>
<div className="cards">

  {allTripPackages.slice(0, 3).map((tour, i) => (
    <div className="carousel-item" key={i}>
     

      <Link
        to={`/tour/${tour.slug}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <TourCard {...tour} />
      </Link>
    </div>
  ))}
</div>
</div>



        

        <ReviewsCarousel/>
       
        <div className='blog-container'>
        <h1>Explore our latest blogs on Libyan culture,</h1>
        <div className='blog-cards'>
        {blogsArticles.slice(0,3).map((blog,) => (
          
            <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                duration={blog.duration}
                link={blog.link}
                date={blog.date}
            />
            
        ))}
       
   </div>
</div>



        <ImageGallery/>



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




 function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-carousel">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`hero-image ${i === current ? "active" : ""}`}
          />
        ))}
        <div className="hero-overlay">
          <h2>Explore Undiscovered Treasure with Zanjabela Tours</h2>
        
        </div>
      </div>
    </div>
  );
 }

function ReviewsCarousel() {

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

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

  return (
    <div className="reviews-carousel-section">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={handlePrev} disabled={startIndex === 0}>
          &#10094;
        </button>

        <div className="reviews-carousel">
          {visibleReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img src={review.image} alt={review.name} className="review-avatar" />
              <h4>{review.name}</h4>
              <p className="review-country">{review.country}</p>
              <p className="review-text">"{review.review}"</p>
              <div className="review-stars">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <div className="platform-icon">
                {review.platform === 'TripAdvisor' && (
                  <img src="https://img.icons8.com/color/48/tripadvisor.png" alt="TripAdvisor" />
                )}
                {review.platform === 'Google' && (
                  <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
                )}
                {review.platform === 'Facebook' && (
                  <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn next"
          onClick={handleNext}
          disabled={startIndex + visibleCards >= reviews.length}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="who-we-are">
      <h2 className="who-we-title">Who We Are</h2>
      <p>
        Zanjabela Tours is a fully licensed and Local Libyan operated by Libyan Youth , specializing in journeys to some of the least visited and most extraordinary places.

       As a travel company, we focus on taking travelers to unique, off-the-beaten-path destinations like Roman ruins ,Sahara Desert and Mountains  .


      </p>
      <p>
        With a team of experienced guides and a passion for exploration, we ensure every journey is unique and memorable.
      </p>
    </div>
  );
}



function ImageGallery() {
  const images = [cave,s,gadames,desert,g, nafoosa,q, sabra, lepdus, crene];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <h2 className="gallery-title">Moments from Our Tours</h2>
      
      <div className="main-image-wrapper">
        <img src={mainImage} alt="Selected" className="main-image" />
      </div>
      
      <div className="thumbnail-row">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            className={`thumbnail ${mainImage === img ? 'active' : ''}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}


function ExclusiveOffer({ allTripPackages }) {

  return (
    <div className="exclusive-offer-section">
   <div class="exclusive-offer">
            <h2>Exclusive Limited-Time Offer!</h2>
            <p><strong>From 15 NOV 2025 till 20 NOV 2025 </strong></p>
            <p>Book our 7-Days Libya Adventure Tour now and get 50% off!  </p>
               <span class="price-tag tag">Original Price: €1,394</span> 
               <span class="price-tag">Now Only: €899</span>
           
        </div>
      <div className="itinerary-cards">
              {allTripPackages.slice(1,2).map((pkg, index) => (
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
                            
       
                            <p><strong>Type:</strong> Public Group </p>
                            <p><strong>Duration:</strong>{pkg.duration}</p>
                            <p><strong>Special Message:</strong> Exclusive offer !! from 15 Nov till 21 Nov && from 15 Dec to 21 </p>
                          </div>
                        </div>
                    
                        <div className="right-section">
                          <div>
                            <h3>TOURIST PASS</h3>
                           
                            <p><strong>Duration:</strong> {pkg.duration}</p>
                            <p><strong>Type:</strong> Public</p>
                            <p><strong>Price:</strong> <del>${pkg.price}</del></p>
                            <p className="discounted-price">Now: <span>€899</span></p>
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
      
    </div>
  );
}



