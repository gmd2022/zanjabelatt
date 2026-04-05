import React from 'react'
import BlogCard from '../components/BlogCard'
import blogsArticles from '../data/blogsArticles'
import '../styles/Blogs.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';




export default function Blogs() {
  return (
    <div className='blog-container'>
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
        <h1>Explore our latest blogs on Libyan culture,</h1>
        <p className='paragraph'>Welcome to our all-encompassing travel archive, a boundless repository that opens the door to a world of exploration and discovery. Here, within these digital pages, lies an awe-inspiring collection of travel-related wonders, catering to the wanderlust in every heart. Whether you are a seasoned globetrotter seeking your next escapade or an armchair adventurer yearning for virtual journeys, our diverse selection of travel pages will transport you to far-flung destinations and ignite your imagination.</p>
        <div className='blog-cards'>
        {blogsArticles.map((blog) => (
            <Link
             to={blog.link}
              key={blog.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
            <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                link={blog.link}
                date={blog.date}
                duration={blog.duration}
                description={blog.description}
            />
            </Link>
        ))}
   </div>
</div>
  )
}
