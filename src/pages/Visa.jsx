import React from 'react'
import '../Styles/Visa.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import visa1 from '../assets/visa1.jpg';
import visa2 from '../assets/visa2.jpg';
import visa3 from '../assets/visa3.jpg';
import visa4 from '../assets/visa4.jpg';
import visa5 from '../assets/visa5.jpeg';

function Visa() {
  return (
    <div className='visa-container'>
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
        <h1>Visa FAQ</h1>
        <div className='visa-info'>
            <h2>HOW TO GET VISA</h2>
            <p>After you chosse one of our tour packges you will send us copy of your passport and your occupation upon on the information we will issue sponsorship letter to apply through Evisa.gov.ly website and must attach these two letters in attachment space after you fill out your information </p>
        </div>
        <div className='visa-info'>
            <h2>how long does it take to get visa </h2>
            <p>it takes maximum 5 working days if you apply on Sunday.</p>
        </div>
        <div className='visa-info'>
            <h2>what's the required document to apply for visa  </h2>
            <ul>
                <li>Passport copy (JPG/JPEG format, under 1MB)</li>
                <li>Personal photo (600x600px, white background, under 1MB)</li>
                <li>Letter of Invitation Provided by US</li>
                <li>Sponsor details provided by Us </li>
            </ul>
        </div>
        <div className='visa-info'>
            <h2>What's visa fees</h2>
            <p>you gonna pay 63$ online </p>
        </div>
        <div className='visa-info'>
            <h2>What's the offcial website for Visa ?</h2>
            <p><a href="https://evisa.gov.ly/travel-type"
                  target="_blank"
                  rel="noopener noreferrer">https://evisa.gov.ly/travel-type</a></p>
        </div>
       <div className="visa-info">
  <h2>What's the steps for that?</h2>

  <div className="visa-info-section">
    {/* Left side - steps */}
    <div className="visa-info-forum">
      <p>you go to 👉🏿 
      <a href="https://evisa.gov.ly/travel-type"
         target="_blank"
         rel="noopener noreferrer">
        https://evisa.gov.ly/travel-type
        </a>
        </p>
      <ul>
        <li>Follow the steps for creating a visa account</li>
        <li>Choose individual</li>
        <li>Fill up your nationality & birthday</li>
        <li>Then fill up your name — don't leave middle/last name/email/password empty</li>
        <li>If you don't know middle name, just repeat your last name</li>
        <li>After that, you will fill up your info form</li>
      </ul>
    </div>

    {/* Right side - image grid */}
    <div className="visa-image-grid">
      <div className="visa-image-item">
        <img src={visa1} alt="visa step 1" />
        <p>Step 1</p>
      </div>
      <div className="visa-image-item">
        <img src={visa2} alt="visa step 2" />
        <p>Step 2</p>
      </div>
      <div className="visa-image-item">
        <img src={visa3} alt="visa step 3" />
        <p>Step 3</p>
      </div>
      <div className="visa-image-item">
        <img src={visa4} alt="visa step 4" />
        <p>Step 4</p>
      </div>
    </div>
  </div>
  <div className="visa-info-look">
  <h2>How visa looks like?</h2>
  <div className="visa-info-look2">
    <div className="visa-look">
      <p>
        You will receive the visa directly to your email — just like in the example shown here.
      </p>
    </div>
    <div className="visa-look-img">
      <img src={visa5} alt="visa sample" />
    </div>
  </div>
</div>
</div>

       
    </div>
  )
}

export default Visa