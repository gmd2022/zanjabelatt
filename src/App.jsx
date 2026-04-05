import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'   // no HashRouter here

// pages & components
import Home from './pages/Home'
import Tours from './pages/Tours'
import Visa from './pages/Visa'
import Blogs from './pages/blogs'
import About from './pages/About'
import Contact from './pages/Contact'
import ToursPage from './pages/ToursPage'
import Footer from './components/Footer'
import Layout from './components/Layout'
import OfferModal from './components/OfferModel'
import tripPackages from './data/tripPackages'

// blogs
import TheMostDeliciousFood from './pages/blog/TheMostDeliciousFood'
import HowToGetToLibya from './pages/blog/HowToGetToLibya'
import LibyasNaturalWonders from './pages/blog/LibyasNaturalWonders'
import LibyansCulture from './pages/blog/LibyansCulture'
import LibyanDesserts from './pages/blog/LibyanDesserts'
import GetToKnowLibyanSculptorAbdallaSaeed from './pages/blog/GetToKnowLibyanSculptorAbdallaSaeed'

// GA
import { initGA, trackPageView } from "./gaTracker"
const GA_ID = "G-D07Z1GZFCN"

function TrackRoutes() {
  const location = useLocation()
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])
  return null
}

export default function App() {
  useEffect(() => { initGA(GA_ID) }, [])

  return (
    <>
      <TrackRoutes />
      <OfferModal />

      <Routes>
        <Route path="/" element={<Layout><Home tripPackages={tripPackages} /></Layout>} />
        <Route path="/tours" element={<Layout><Tours tripPackages={tripPackages} /></Layout>} />
        <Route path="/tour/:slug" element={<Layout><ToursPage tripPackages={tripPackages} /></Layout>} />
        <Route path="/visa" element={<Layout><Visa /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Blog Articles */}
        <Route path="/blog/the-most-delicious-dishes-you-must-try-in-libya" element={<Layout><TheMostDeliciousFood /></Layout>} />
        <Route path="/blog/how-to-get-to-libya-a-comprehensive-guide" element={<Layout><HowToGetToLibya /></Layout>} />
        <Route path="/blog/libyas-natural-wonders-a-journey-through-the-sahara" element={<Layout><LibyasNaturalWonders /></Layout>} />
        <Route path="/blog/libyans-cultural-heritage-ghat-festivals-and-traditions" element={<Layout><LibyansCulture /></Layout>} />
        <Route path="/blog/three-libyan-desserts-you-must-try" element={<Layout><LibyanDesserts /></Layout>} />
        <Route path="/blog/get-to-know-libyan-sculptor-abdalla-saeed" element={<Layout><GetToKnowLibyanSculptorAbdallaSaeed /></Layout>} />
      </Routes>

      <Footer />
    </>
  )
}