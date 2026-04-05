import React from 'react';
import BlogPostLayout from '../../components/BlogPostLayout';
import baklava from '../../assets/balava1.jpg';
import cake from '../../assets/cake .jpeg';
import garieba from '../../assets/garieba.jpeg';

const LibyanDesserts = () => {
  return (
    <BlogPostLayout 
      title="3 Libyan Desserts You Must Try"
      description="Discover three iconic Libyan desserts: Baklava, sweet semolina cake with tea and milk, and Garieeba — the buttery melt-in-your-mouth cookie."
    >
      <div className="blog-post">
        <h2>🍰 3 Libyan Desserts You Must Try</h2>
        <p>Libya’s culinary world isn’t just about savory dishes. The country boasts a rich dessert culture deeply tied to family, tradition, and hospitality. Here are three sweets you absolutely must try during your visit:</p>

        <h3>1. 🥮 Libyan Baklava</h3>
        <img src={baklava} alt="Libyan Baklava with pistachios and honey" style={{ width: '100%', borderRadius: '8px', margin: '20px 0' }} />
        <p>Libyan baklava differs slightly from other regional versions. Made with layers of phyllo pastry, crushed nuts (often pistachios or almonds), and soaked in rosewater-scented syrup, it’s a must-have during weddings and Ramadan evenings.</p>

        <strong>Ingredients:</strong>
        <ul>
          <li>Phyllo dough</li>
          <li>Chopped nuts</li>
          <li>Butter or ghee</li>
          <li>Rosewater syrup</li>
        </ul>

        <h3>2. 🍵 Sweet Semolina Cake with Tea & Milk</h3>
        <img src={cake} alt="Semolina cake served with sweet tea and milk" style={{ width: '100%', borderRadius: '8px', margin: '20px 0' }} />
        <p>This humble dessert is a household favorite. Semolina cake, known locally as <em>basbousa</em>, is often paired with hot mint tea or sweetened milk. It's slightly dense, subtly sweet, and has a crumbly texture that melts perfectly with warm drinks.</p>

        <strong>Ingredients:</strong>
        <ul>
          <li>Semolina</li>
          <li>Sugar</li>
          <li>Yogurt or milk</li>
          <li>Baking powder</li>
          <li>Coconut flakes (optional)</li>
        </ul>

        <h3>3. 🍪 Garieeba (Libyan Butter Cookies)</h3>
        <img src={garieba} alt="Traditional Libyan garieeba cookies with almonds" style={{ width: '100%', borderRadius: '8px', margin: '20px 0' }} />
        <p>Garieeba is a soft, crumbly cookie that dissolves in your mouth. Often served during Eid and special occasions, it's made with just three main ingredients and topped with almonds. The secret lies in the slow mixing and gentle baking.</p>

        <strong>Ingredients:</strong>
        <ul>
          <li>Ghee or unsalted butter</li>
          <li>Powdered sugar</li>
          <li>All-purpose flour</li>
          <li>Whole almonds (for garnish)</li>
        </ul>
        
        <div><p>if you wanna try that contact us through WhatsApp </p><p><a href="/tour/6-days-tripoli-ghadames-leptis-adventure">Book the 6-Day Libya tour →</a></p></div>

        <h3>🔗 Related Reads</h3>
        <ul>
          
          <li><a href="/blog/the-most-delicious-dishes-you-must-try-in-libya">The Most Delicious Dishes You Must Try in Libya</a></li>
          <li><a href="/blog/how-to-get-to-libya-a-comprehensive-guide">How to Get to Libya: A Comprehensive Guide</a></li>
        </ul>
        <h3>☕ Final Thought</h3>
        <p>Desserts in Libya are more than just sweet treats — they’re an invitation to connect. Whether it’s a slice of baklava during a wedding, or Garieeba shared with tea during Eid, these dishes tell a delicious story of hospitality and heritage.</p>
      </div>
    </BlogPostLayout>
  );
};

export default LibyanDesserts;
