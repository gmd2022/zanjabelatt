import React from 'react'
import '../styles/BlogCard.css';
import { Link } from 'react-router-dom';




export default function BlogCard({image, title, description,link, date, duration}) {
  return (
    <div className='blog-card-container'>
  
        <div className='blog-card'>
            <img src={image} alt={title} />
            <div className='blog-card-content'>
                <h3>{title}</h3>
               <div className='blogCard'><p>{date}</p> <p>{duration}</p></div>
                <p>{description}</p>
                <Link to={link}>Read More</Link>

            </div>
        </div>
      
    </div>
  )
}
