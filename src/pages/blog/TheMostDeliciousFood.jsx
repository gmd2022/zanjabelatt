import React from 'react'
import '../../styles/TheMostDeliciousFood.css';

import BlogPostLayout from '../../components/BlogPostLayout';
import imbaten from '../../assets/embatten.jpeg';
import osban from '../../assets/osban1.jpg';
import coscos from '../../assets/coscos.jpg';




const TheMostDeliciousFood = () => {
  return (
    <BlogPostLayout 
      title="The most delicious dishes you must try in Libya"
      description="Explore Libya's bold, diverse cuisine — from savory Imbaten to festive Osban. Discover must-try recipes, local ingredients, and more."
    >
      <div className='blog-post'>
        <h2>Libyan Culinary Gems: Imbaten, Osban & Couscous</h2>
        <p>Libyan food is a bold, flavorful fusion of Mediterranean, Berber, and Arabic traditions. It’s one of the most underrated yet richly satisfying culinary experiences in North Africa. If you’re visiting Libya, don’t leave without tasting these three local treasures: <strong>Imbaten</strong>, <strong>Osban</strong>, and <strong>Libyan Couscous</strong>.</p>

        <h3>🥟 1. Imbaten (Stuffed Potatoes)</h3>
        <img src={imbaten} alt="Imbaten Libyan food" style={{ width: '100%', borderRadius: '8px' }} />
        <p>Imbaten is a hearty Libyan delicacy where potato slices are stuffed with seasoned ground beef, dipped in egg, and deep-fried to golden perfection.</p>
        <strong>Ingredients:</strong>
        <ul>
          <li>Potatoes (sliced)</li>
          <li>Ground beef or lamb</li>
          <li>Garlic & parsley</li>
          <li>Cumin, black pepper, salt</li>
          <li>Eggs (for coating)</li>
          <li>Oil (for frying)</li>
        </ul>

        <h3>🐑 2. Osban (Stuffed Sausage)</h3>
        <img src={osban} alt="Osban Libyan sausage" style={{ width: '100%', borderRadius: '8px' }} />
        <p>Osban is a celebratory dish made by stuffing lamb intestines with a spiced mix of rice, liver, and herbs, then boiling and frying it.</p>
        <strong>Ingredients:</strong>
        <ul>
          <li>Lamb intestines</li>
          <li>Rice</li>
          <li>Liver (finely chopped)</li>
          <li>Coriander, mint, garlic</li>
          <li>Paprika, cumin, cinnamon</li>
        </ul>

        <h3>🍲 3. Libyan Couscous</h3>
        <img src={coscos} alt="Libyan couscous" style={{ width: '100%', borderRadius: '8px' }} />
        <p>A North African staple, Libya’s version of couscous is traditionally steamed and served with lamb, chickpeas, pumpkin, and tomato-based sauce.</p>
        <strong>Ingredients:</strong>
        <ul>
          <li>Couscous semolina</li>
          <li>Lamb or chicken</li>
          <li>Tomato paste</li>
          <li>Chickpeas</li>
          <li>Pumpkin or carrots</li>
          <li>Onion, garlic, cumin</li>
        </ul>

        <h3>📍 Where to Taste These?</h3>
        <p>Find these dishes in Tripoli’s Old Medina or served in traditional homes during our tours.</p>

        <p><a href="/tour/6-days-tripoli-ghadames-leptis-adventure">Book the 6-Day Tripoli, Ghadames & Leptis Tour →</a></p>

        <h3>🔗 Related Reads</h3>
        <ul>
          <li><a href="/blog/how-to-get-to-libya-a-comprehensive-guide">How to get to Libya ?</a></li>
          <li><a href="/tour/4-days-tripoli-nafusa-leptis-sabratha">Exploring the Rich History of Libya</a></li>
          <li><a href="/blog/libyans-cultural-heritage-ghat-festivals-and-traditions">Libya’s Cultural Festivals & Traditions</a></li>
        </ul>

        <h3>📝 Final Thought</h3>
        <p>From street vendors to home kitchens, Libya’s food tells a story. Don’t just visit — taste the culture, and you’ll carry its flavor long after your journey ends.</p>
      </div>
    </BlogPostLayout>
  );
}

export default TheMostDeliciousFood;
