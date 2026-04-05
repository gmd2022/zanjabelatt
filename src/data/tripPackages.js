// src/data/tripPackages.js
import lepdus from '../assets/lepdus.jpeg';
import sabra from '../assets/sab.jpg';
import tripoli from '../assets/al.jpg';
import ghadames from '../assets/ghadmes.jpg';
import leptis from '../assets/original.jpg';
import sabratha from '../assets/sabratha.jpg';
import old from '../assets/old.jpg';
import Plan from '../assets/plan.jpg';
import merdith from '../assets/merdith.jpg';
import q from '../assets/q.jpg';
import lib from '../assets/desertt .jpeg';




 // placeholder for city images
import ubariImg from '../assets/omalm.jpg';

const tripPackages = {
  "3 Days": [
    {
      id : 1,
      slug: "3-days-tripoli-leptis-sabratha",
      title: "3-days Tripoli, Leptis Magna & Sabratha",
      duration: "3 Days",
      bestseller: false,
      type : "Private Tour",
      description: "Explore Tripoli’s Old City, Leptis Magna, and the coastal wonder of Sabratha.",
      highlights: [
        "Tripoli Medina & Arch of Marcus Aurelius",
        "Leptis Magna – UNESCO Roman City",
        "Sabratha Roman Theater & Temples",
        "Tripoli Corniche & Algiers Square"
      ],
      location: "Tripoli • Leptis Magna • Sabratha",
      price: 650,
      images: [
    tripoli,
    leptis,
    sabratha
  ],
     

      dailyPlan: [
        {
          day: 1,
          title: "Tripoli Meet & Greet + Old City Tour",
          description: "Welcome to Libya! Upon your morning arrival in Tripoli, enjoy our personalized Airport Meet & Greet service, ensuring a smooth and stress-free start to your journey. You’ll be transferred comfortably to your hotel, where you can refresh before embarking on your guided Tripoli City Tour. Explore Martyrs’ Square, the vibrant heart of the city, visit the remarkable Arch of Marcus Aurelius, and marvel at the historical Red Castle. Stroll along Bab Al-Menshia Street and immerse yourself in local life at Saraya Market. Your journey continues to the beautiful Gurgi Mosque and concludes with an enriching visit to the historical House of Yusuf Karamanli.",
          accommodation: "4‑star hotels"
        },
        {
          day: 2,
          title: "Leptis Magna & Corniche",
          description: "After breakfast, set out for an unforgettable full-day tour of Leptis Magna, one of the most well-preserved Roman cities in the Mediterranean, and the most famous UNESCO site in Libya. Wander among ancient ruins and impressive architecture as your guide brings history to life. Upon returning to Tripoli, unwind with an afternoon scenic drive along the Coastal Road and Tripoli’s Corniche. Capture memorable moments at the bustling Algiers Square, a favorite spot among locals and travelers alike.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 3,
          title: "Sabratha & Departure",
          description: "On the final day, we drive west of Tripoli to visit Sabratha, another major Roman city on the Mediterranean. Originally a Phoenician trading post, Sabratha was Romanized in the 1st century CE and features a spectacular 3-story theater, temples, Roman baths, and Christian basilicas.",
          meals: ["Breakfast"],
          accommodation: null
        }
      ]
    }
  ],


"6 Days": [
    {
      id : 3,
      slug: "6-days-tripoli-ghadames-leptis-adventure",
      title: "6-daysTripoli, Ghadames & Leptis Adventure",
      duration: "6 Days",
      bestseller: true,
      type : "Private & Public Tour",
      description: "Experience Tripoli's Old City, desert oasis Ghadames, and Roman Leptis & Sabratha within a week.",
      highlights: [
        "Tripoli Medina & Arch of Marcus Aurelius",
        "UNESCO‑listed Ghadames & dunes",
        "Qasr al‑Hajj & Kabaw",
        "Leptis Magna & Sabratha"
      ],
      location: "Tripoli • Sabratha • Ghadames • Leptis Magna",
      price: 1199,
      images:[lepdus,old , q, ghadames,  sabratha],
      dailyPlan: [
        {
          day: 1,
          title: "Arrival & Tripoli Old City",
          description: "Airport meet & greet, hotel check-in. Starting at Martyr’s Square, you’ll proceed to the Arch of Marcus Aurelius, one of the few visible Roman remains in the city, built in 165 CE during the reign of Emperor Marcus Aurelius. From there, you’ll walk to the exterior of the Red Castle (Assaraya al-Hamra), with foundations dating back to the 16th-century Spanish occupation and later Ottoman expansions. Strolling through Bab Al-Menshia Street, you’ll explore Saraya Market and nearby lanes leading to the Gurgi Mosque, a uniquely ornate Ottoman mosque built in 1834. The day ends with a visit to the House of Yusuf Karamanli, home of the former ruling family.",
          accommodation: "3‑star hotels"
        },
        {
          day: 2,
          title: "Sabratha ,nafoosa to Ghadames",
          description: " you’ll explore the impressive 2nd-century CE Roman theater, its well-preserved stage and three-story backdrop among the most striking in North Africa. The site also includes Punic-era foundations, early Christian basilicas, and a forum area. Around 11:30, you’ll arrive at Qasr al-Hajj, a circular fortified granary used by Berber communities. Then, at 14:30, visit Kabaw Qasr, another multi-story stone granary with internal storage cells still intact. By 19:00, you’ll reach the oasis town of Ghadames and check in at your local accommodation.",
          meals: ["Breakfast", "Dinner"],
          accommodation: "3‑star hotels"
        },
        {
          day: 3,
          title: "Ghadames Tour & Safari",
          description: "The Old City of Ghadames features a labyrinth of passages designed for protection from the sun and tribal conflicts. Homes are built from mud, palm wood, and gypsum, with communal water channels and shared courtyards. In the afternoon, the group transitions to 4WD vehicles and heads into the surrounding desert. The tour includes Ras Al-Ghoul Fort, believed to be a watchtower site on ancient caravan routes, followed by a visit to nearby dunes for sunset views. The day ends at a desert Touareg-style fire camp.",
          meals: ["Breakfast", "Dinner"],
          accommodation: "3‑star hotels"
        },
        {
          day: 4,
          title: "Return via Bu Gheilan",
          description: "The cave houses of Bu Gheilan were used by Berber communities and designed for thermal insulation and security. Many still show smoke-blackened ceilings and stone-carved niches. After exploring the site and a short break, you’ll return to Tripoli by 17:00 and check back into your hotel.",
          meals: ["Breakfast"],
          accommodation: "3‑star hotels"
        },
        {
          day: 5,
          title: "Leptis Magna Day",
          description: "Leptis Magna, originally founded by the Phoenicians, flourished under Roman Emperor Septimius Severus (193–211 CE), who was born here. The site includes the grand Severan Basilica, a large amphitheater by the sea, Hadrian’s Baths, and a monumental arch dedicated to the emperor. Returning to Tripoli, you’ll explore the seafront Corniche, Algiers Square, and the Italianate buildings from the colonial era.",
          meals: ["Breakfast"],
          accommodation: "3‑star hotels"
        },
        {
          day: 6,
          title: "Airport Transfer ",
          description: "After breakfast, transfer to Tripoli International Airport at 09:00 for your scheduled departure with Turkish Airlines at 12:05. There are no visits scheduled today.",
          meals: ["Breakfast"], 
          accommodation: "3‑star hotels"
        },
       
      ]
    }
  ],


  "4 Days": [
    {
      id : 2,
      slug: "4-days-tripoli-nafusa-leptis-sabratha",
      title: "4-days Tripoli, Nafusa Mountains, Leptis & Sabratha",
      duration: "4 Days",
      bestseller: false,
      type : "Private Tour",
      description: "Discover Tripoli’s history, Berber hilltop villages, Leptis Magna and Sabratha.",
      highlights: [
        "Tripoli Old City & Gurgi Mosque",
        "Qasr al‑Hajj & Kabaw",
        "Leptis Magna & Sabratha"
      ],
      location: "Tripoli • Jebel Nafusa • Leptis Magna • Sabratha",
      price: 850,
      images:[ q ,sabratha,lepdus, sabra ],
      dailyPlan: [
        {
          day: 1,
          title: "Tripoli Arrival & Old City",
          description: "Welcome to Libya! Upon your morning arrival at Tripoli International Airport, enjoy our personalized Meet & Greet service for a seamless start to your journey. After a comfortable hotel transfer and some rest, your Tripoli City Tour begins. Explore the monumental Martyrs’ Square, visit the Arch of Marcus Aurelius, and roam through the historic Red Castle Museum. Then continue down Bab Al-Menshia Street, shop in the colorful Saraya Market, admire the elegance of Gurgi Mosque, and step back in time at the House of Yusuf Karamanli.",
          accommodation: "4‑star hotels"
        },
        {
          day: 2,
          title: "Nafusa Mountains & Troglodyte Homes",
          description: "Today’s adventure takes you southwest into the Jebel Nafusa Mountains, where Berber heritage lives on in breathtaking hilltop fortresses. Visit the legendary Qasr al-Hajj, a centuries-old granary with a honeycomb design. Then head to Kabaw, another fortified Berber village with dramatic views and rich traditions. In the afternoon, descend into the troglodyte homes of Bu Gheilan, an ancient community where homes are carved into the earth. Return to Tripoli for a well-earned rest.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 3,
          title: "Leptis Magna",
          description: " After breakfast, travel to Leptis Magna, one of the most extraordinary Roman cities in the world and a UNESCO World Heritage Site. Explore vast ruins including the Severan Basilica, Forum, Theater, and Market. Your expert guide will bring every stone to life. Later, return to Tripoli along the Coastal Road, enjoying a scenic drive. Wrap up the day with a relaxing tour of the Corniche and a visit to the lively Algiers Square, a great spot to mingle with locals and grab a bite.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 4,
          title: "Sabratha & Departure",
          description: "On your final day, journey west to Sabratha, an awe-inspiring Roman site with its famous sea-facing theater, temples, and mosaics. Soak in the views of the Mediterranean, where ancient stones meet the surf. Afterward, return to Tripoli for your airport transfer, ending your journey filled with powerful stories and unforgettable impressions of Libya.",
          meals: ["Breakfast"],
          accommodation: null
        }
      ]
    }
  ],
  
  "13 Days": [
    {
      id : 4,
      slug: "13-days-grand-libyan-explorer",
      title: "13-days Grand Libyan Explorer",
      duration: "13 Days",
      bestseller: false,
      type : "Private Tour & Public",
      description: "Complete journey through Libya—from Tripoli to Cyrene, Fezzan deserts, Ghadames and ancient Roman coast.",
      highlights: [
        "Roman Tripoli & Karamanli House",
        "Greek‑Roman Cyrene & Apollonia",
        "Ubari Lakes, Germa & rock art",
        "Ghadames desert experience",
        "Leptis Magna & Sabratha"
      ],
      location: "Tripoli • Cyrenaica • Fezzan • Ghadames • Sabratha",
      price: 2300,
      images:[  lib, merdith,ubariImg,Plan  ],
      dailyPlan: [
        {
          day: 1,
          title: "Arrival Tripoli",
          description: "Upon morning arrival at Mitiga International Airport, you will be met by our local team and transferred to your hotel in Tripoli. After a short rest and briefing, the program begins with an introductory walking tour through the capital’s historic center.",
          accommodation: "4‑star hotels"
        },
        {
          day: 2,
          title: "Flight East & Apollonia",
          description: "After breakfast, we transfer to Mitiga Airport for a domestic flight to Al Abraq in eastern Libya. Upon landing, our driver and guide meet you for a short road journey toward the Mediterranean coast, arriving at the ruins of Apollonia near the town of Susah.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 3,
          title: "Cyrene & Byzantine Churches",
          description: "After breakfast, we depart Al Bayda heading east to visit the UNESCO-listed ruins of Cyrene, the most important Greek city in Libya. Situated on a limestone plateau overlooking the Mediterranean, Cyrene was founded in 631 BCE by settlers from Thera (modern Santorini).",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 4,
          title: "Qsar Libya & Ptolemais",
          description: "We depart early for Qsar Libya, a small village housing a museum with floor mosaics from the nearby Byzantine churches—West and East Church—built in the 6th century CE. These depict mythological figures, animals, and Christian symbols, remarkably preserved and displayed on-site.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 5,
          title: "Flight to Sebha",
          description: "The morning is reserved for rest or optional walks near the hotel. After lunch, we transfer to the airport for a flight to Sebha in southwestern Libya, the gateway to the Fezzan region.",
          meals: ["Breakfast"],
          accommodation: "3‑star accommodation"
        },
        {
          day: 6,
          title: "Ubari Lakes Desert Camp",
          description: "We begin our desert expedition from Sebha, driving deep into the Ubari Sand Sea. After hours of navigating dunes and dry basins, we reach the Ubari Lakes—remnants of a prehistoric wet climate. The most famous is Lake Gaberoun, surrounded by palm trees and the ruins of a former Tuareg settlement.",
          meals: ["Breakfast","Dinner","Lunch"],
          accommodation: "Wild camp"
        },
        {
          day: 7,
          title: "Wadi Mathendous",
          description: "We leave the lake region and continue across the desert to Wadi Mathendous, one of Libya’s most important prehistoric rock art sites. The wadi features carvings of elephants, giraffes, and crocodiles—evidence of a once green Sahara.",
          meals: ["Breakfast","Lunch","Dinner"],
          accommodation: "Wild camp"
        },
        {
          day: 8,
          title: "Germa & Return Flight",
          description: "We begin the day with a visit to the ruins of Germa, once the capital of the Garamantian Kingdom. The Garamantes were a Saharan civilization active between 500 BCE and 700 CE, known for building qanat irrigation systems and controlling trans-Saharan trade routes.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 9,
          title: "Nafusa Mountains & Ghadames",
          description: "After breakfast, we depart Tripoli heading southwest into the Jebel Nafusa mountains, a Berber heartland. Our first stop is Qasr al-Hajj, a fortified granary built in the 13th century CE, known for its circular structure and double-story grain cells used by the local community.",
          meals: ["Breakfast"],
          accommodation: "3‑star hotels"
        },
        {
          day: 10,
          title: "Ghadames & Safari",
          description: "In the morning, we explore the old walled city of Ghadames, a UNESCO World Heritage Site. Walking through its interconnected alleys and covered walkways, you’ll see how this architecture created a naturally air-conditioned environment. Homes are built in vertical layers with public, family, and women-only spaces.",
          meals: ["Breakfast","Dinner"],
          accommodation: "3‑star hotels"
        },
        {
          day: 11,
          title: "Bu Gheilan & Tripoli Return",
          description: "We depart Ghadames and follow the Al Majabrah road northeast, driving through desert plateaus and wadis. En route, we stop at Bu Gheilan, known for its troglodyte houses—subterranean dwellings dug directly into the earth for insulation from desert heat.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 12,
          title: "Leptis Magna & Corniche",
          description: "We begin the day with a drive to Leptis Magna, Libya’s most renowned Roman site, located 130 km east of Tripoli. Founded by the Phoenicians and later expanded by Emperor Septimius Severus (a native of Leptis), the city reached its peak in the 2nd and 3rd centuries CE.",
          meals: ["Breakfast"],
          accommodation: "4‑star hotels"
        },
        {
          day: 13,
          title: "Sabratha & Departure",
          description: "On the final day, we drive west of Tripoli to visit Sabratha, another major Roman city on the Mediterranean. Originally a Phoenician trading post, Sabratha was Romanized in the 1st century CE and features a spectacular 3-story theater, temples, Roman baths, and Christian basilicas.",
          meals: ["Breakfast"],
          accommodation: null
        }
      ]
    }
  ]
};

export default tripPackages;
