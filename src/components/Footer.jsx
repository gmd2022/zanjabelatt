import React from 'react'
import '../styles/Footer.css'
import '../styles/global.css'; 
import { Link } from 'react-router-dom';
import {  FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <img src={logo} alt="Zanjabela Tours Logo" className="footer-logo" />
            <h4>Zanjabela Tours</h4>
           
            <p>2nd floor Wahat center , Hay-Alndalus - Tripoli </p>
            <p>Phone: +218 92 591 9782</p>
            <p>gmd89y@gmail.com</p>
            </div>
           
          
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tours">Tours</Link></li>
              <li><Link to='/visa'>Visa</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            
              <li><Link to="/about">AboutUs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="social-links">
              <a href="https://www.x.com/travel2libya?s=21&t=kPTQZ4WCo5DYcoxiBWtQQA"><FaTwitter /></a>
              <a href="https://www.instagram.com/zanjabela9/"><FaInstagram /></a>
              <a href="https://wa.me/218925919782"><FaWhatsapp /></a>
            </div>
          
          
          
        </div>
         
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Zanjabela Tours since 2010. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
