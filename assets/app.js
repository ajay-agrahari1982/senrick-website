
/* ====== NOTIFICATION SETUP — fill these in, see instructions below ======
   1. WhatsApp: SALON_WHATSAPP already set to your number.
   2. Email: sign up free at https://www.emailjs.com, add an Email Service
      (e.g. connect your Gmail), create an Email Template, then paste your
      Public Key, Service ID and Template ID below. Until you do, the
      WhatsApp step still works on its own — email sending will just be
      silently skipped.
   ========================================================================= */
const SALON_WHATSAPP = '917007636989';
const EMAILJS_PUBLIC_KEY  = 'OcCLQcS_O1faGgUDH';
const EMAILJS_SERVICE_ID  = 'service_u01gss4';
const EMAILJS_TEMPLATE_ID = 'template_ymq2i74';
const EMAILJS_LEAD_TEMPLATE_ID = 'template_dbm0i1h';
if(EMAILJS_PUBLIC_KEY && window.emailjs){ emailjs.init({publicKey: EMAILJS_PUBLIC_KEY}); }

const SERVICES = [
  {cat:'men', grp:'Men Services', name:'Men\'s Hair Cut', price:'₹250'},
  {cat:'men', grp:'Men Services', name:'Shaving', price:'₹150'},
  {cat:'men', grp:'Men Services', name:'Beard Styling', price:'₹200'},
  {cat:'men', grp:'Men Services', name:'Hair Style', price:'₹100'},
  {cat:'men', grp:'Men Services', name:'Head Shaving', price:'₹200'},
  {cat:'men', grp:'Men Services', name:'Hair Wash (Men)', price:'₹100'},
  {cat:'men', grp:'Men Services', name:'Head Massage (Male)', price:'₹400'},
  {cat:'men', grp:'Men Services', name:'Beard Colour (Short)', price:'₹200'},
  {cat:'men', grp:'Men Services', name:'Beard Colour (Medium)', price:'₹300'},
  {cat:'men', grp:'Men Services', name:'Moustache Colour', price:'₹100'},
  {cat:'men', grp:'Men Services', name:'Sidelock Colour', price:'₹300'},
  {cat:'men', grp:'Men Services', name:'Face Massage', price:'₹200'},
  {cat:'men', grp:'Men Services', name:'Blackhead Removal', price:'₹200'},
  {cat:'men', grp:'Hair Colour (Men)', name:'Full Head Colour — Mor', price:'₹900'},
  {cat:'men', grp:'Hair Colour (Men)', name:'Full Head Colour — Loreal', price:'₹1,000'},
  {cat:'men', grp:'Hair Colour (Men)', name:'Full Head Colour — Schwarzkopf', price:'₹1,200'},
  {cat:'men', grp:'Hair Colour (Men)', name:'Hair Highlight (Per Strip)', price:'₹200'},
  {cat:'men', grp:'Keratin / Smoothening / Nanoplastia (Men)', name:'Keratin / Smoothening / Nanoplastia (Short)', price:'₹2,500'},
  {cat:'men', grp:'Keratin / Smoothening / Nanoplastia (Men)', name:'Keratin / Smoothening / Nanoplastia (Medium)', price:'₹3,000'},
  {cat:'men', grp:'Keratin / Smoothening / Nanoplastia (Men)', name:'Keratin / Smoothening / Nanoplastia (Long)', price:'₹3,500'},
  {cat:'hair', grp:'Haircuts', name:'Women\'s Haircut (with wash)', price:'₹500'},
  {cat:'hair', grp:'Haircuts', name:'Women\'s Haircut (without wash)', price:'₹299'},
  {cat:'hair', grp:'Haircuts', name:'Child\'s Haircut', price:'₹250'},
  {cat:'hair', grp:'Haircuts', name:'Trimming', price:'₹250'},
  {cat:'hair', grp:'Haircuts', name:'Split End Removal', price:'₹1,000'},
  {cat:'hair', grp:'Haircuts', name:'Fringes / Flicks', price:'₹150'},
  {cat:'hair', grp:'Head Massage', name:'Head Massage (Olive Oil)', price:'₹600'},
  {cat:'hair', grp:'Head Massage', name:'Deep Conditioning (Regular)', price:'₹500'},
  {cat:'hair', grp:'Head Massage', name:'Deep Conditioning (Moroccan)', price:'₹800'},
  {cat:'hair', grp:'Hair Wash (without Blow-Dry)', name:'Hair Wash — Loreal (no blowdry)', price:'₹250'},
  {cat:'hair', grp:'Hair Wash (without Blow-Dry)', name:'Hair Wash — Schwarzkopf (no blowdry)', price:'₹300'},
  {cat:'hair', grp:'Hair Wash (without Blow-Dry)', name:'Hair Wash — Wella (no blowdry)', price:'₹300'},
  {cat:'hair', grp:'Hair Wash (without Blow-Dry)', name:'Hair Wash — Moroccan (no blowdry)', price:'₹350'},
  {cat:'hair', grp:'Hair Wash (without Blow-Dry)', name:'Hair Wash — GK/Reviver (no blowdry)', price:'₹400'},
  {cat:'hair', grp:'Hair Wash (with Blow-Dry)', name:'Hair Wash — Loreal (with blowdry)', price:'₹350'},
  {cat:'hair', grp:'Hair Wash (with Blow-Dry)', name:'Hair Wash — Schwarzkopf (with blowdry)', price:'₹400'},
  {cat:'hair', grp:'Hair Wash (with Blow-Dry)', name:'Hair Wash — Wella (with blowdry)', price:'₹400'},
  {cat:'hair', grp:'Hair Wash (with Blow-Dry)', name:'Hair Wash — Moroccan (with blowdry)', price:'₹450'},
  {cat:'hair', grp:'Hair Wash (with Blow-Dry)', name:'Hair Wash — GK/Reviver (with blowdry)', price:'₹500'},
  {cat:'hair', grp:'Hair Straightening', name:'Loreal Smoothening (Short)', price:'₹5,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Loreal Smoothening (Medium)', price:'₹7,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Loreal Smoothening (Long)', price:'₹9,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Loreal Smoothening (Extra Long)', price:'₹11,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Schwarzkopf Smoothening (Short)', price:'₹6,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Schwarzkopf Smoothening (Medium)', price:'₹7,500'},
  {cat:'hair', grp:'Hair Straightening', name:'Schwarzkopf Smoothening (Long)', price:'₹9,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Schwarzkopf Smoothening (Extra Long)', price:'₹11,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Straight Therapy (Short)', price:'₹7,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Straight Therapy (Medium)', price:'₹9,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Straight Therapy (Long)', price:'₹11,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Straight Therapy (Extra Long)', price:'₹13,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Prokeratin (Short)', price:'₹7,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Prokeratin (Medium)', price:'₹9,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Prokeratin (Long)', price:'₹11,000'},
  {cat:'hair', grp:'Hair Straightening', name:'Prokeratin (Extra Long)', price:'₹14,000'},
  {cat:'hair', grp:'Botox', name:'Botox (Short)', price:'₹6,000'},
  {cat:'hair', grp:'Botox', name:'Botox (Medium)', price:'₹8,000'},
  {cat:'hair', grp:'Botox', name:'Botox (Long)', price:'₹10,000'},
  {cat:'hair', grp:'Botox', name:'Botox (Extra Long)', price:'₹12,000'},
  {cat:'hair', grp:'Nanoplastia', name:'Nanoplastia (Short)', price:'₹5,000'},
  {cat:'hair', grp:'Nanoplastia', name:'Nanoplastia (Medium)', price:'₹7,000'},
  {cat:'hair', grp:'Nanoplastia', name:'Nanoplastia (Long)', price:'₹9,000'},
  {cat:'hair', grp:'Nanoplastia', name:'Nanoplastia (Extra Long)', price:'₹11,000'},
  {cat:'skin', grp:'Clean Up', name:'Cleanup (Fruit)', price:'₹800'},
  {cat:'skin', grp:'Clean Up', name:'Cleanup (Lotus)', price:'₹1,200'},
  {cat:'skin', grp:'Clean Up', name:'Cleanup (Kanpeki)', price:'₹1,500'},
  {cat:'skin', grp:'Clean Up', name:'Cleanup (O3+ with Masque)', price:'₹2,000'},
  {cat:'skin', grp:'Clean Up', name:'Cleanup (Casmara with Masque)', price:'₹2,500'},
  {cat:'skin', grp:'Facial', name:'Platinum Facial (VLCC)', price:'₹1,000'},
  {cat:'skin', grp:'Facial', name:'Gold Facial (VLCC)', price:'₹1,500'},
  {cat:'skin', grp:'Facial', name:'Diamond Facial (VLCC)', price:'₹1,600'},
  {cat:'skin', grp:'Facial', name:'Aroma Magic Facial', price:'₹1,800'},
  {cat:'skin', grp:'Facial', name:'Lotus Antitan Facial', price:'₹1,800'},
  {cat:'skin', grp:'Facial', name:'Lotus InstaFair Facial', price:'₹2,500'},
  {cat:'skin', grp:'Facial', name:'Lotus 4th Layer Facial', price:'₹2,500'},
  {cat:'skin', grp:'Facial', name:'Lotus Goldsheen Facial', price:'₹2,800'},
  {cat:'skin', grp:'Facial', name:'Lotus Preservita Facial', price:'₹3,000'},
  {cat:'skin', grp:'Facial', name:'Lotus Ultimo Gold Facial', price:'₹4,500'},
  {cat:'skin', grp:'Facial', name:'O3+ Whitening Facial (with Masque)', price:'₹3,000'},
  {cat:'skin', grp:'Facial', name:'O3+ Diamond Luxury Facial (with Masque)', price:'₹3,500'},
  {cat:'skin', grp:'Facial', name:'O3+ Radiant Facial', price:'₹4,000'},
  {cat:'skin', grp:'Facial', name:'Kanpeki Prohydra Facial', price:'₹3,500'},
  {cat:'skin', grp:'Facial', name:'Kanpeki Bridal Facial', price:'₹5,000'},
  {cat:'skin', grp:'Facial', name:'Casmara Facial', price:'₹5,000'},
  {cat:'skin', grp:'Facial', name:'Hydra Facial', price:'₹5,000'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Underarm (Rica)', price:'₹150'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Underarm Brazilian (Rica)', price:'₹200'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Full Hand (Rica)', price:'₹500'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Half Leg (Rica)', price:'₹600'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Full Leg (Rica)', price:'₹800'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Half Back (Rica)', price:'₹300'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Full Back (Rica)', price:'₹600'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Abdomen (Rica)', price:'₹600'},
  {cat:'waxing', grp:'Waxing (Rica)', name:'Full Body (Rica)', price:'₹3,000'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Underarm (Normal)', price:'₹50'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Full Hand (Normal)', price:'₹400'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Half Leg (Normal)', price:'₹400'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Full Leg (Normal)', price:'₹600'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Half Back (Normal)', price:'₹200'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Full Back (Normal)', price:'₹400'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Abdomen (Normal)', price:'₹400'},
  {cat:'waxing', grp:'Waxing (Normal)', name:'Full Body (Normal)', price:'₹2,500'},
  {cat:'waxing', grp:'B Wax', name:'B Wax — Rica', price:'₹2,000'},
  {cat:'waxing', grp:'B Wax', name:'B Wax — Brazilian', price:'₹2,500'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Eyebrows', price:'₹100'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Nose Wax', price:'₹60'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Forehead', price:'₹60'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Upperlip', price:'₹60'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Half Chin', price:'₹60'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Full Chin', price:'₹150'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Neck', price:'₹150'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Sidelock', price:'₹180'},
  {cat:'waxing', grp:'Face Waxing (Brazilian)', name:'Full Face', price:'₹600'},
  {cat:'waxing', grp:'Face Threading', name:'Eyebrows', price:'₹50'},
  {cat:'waxing', grp:'Face Threading', name:'Forehead', price:'₹30'},
  {cat:'waxing', grp:'Face Threading', name:'Upperlip', price:'₹30'},
  {cat:'waxing', grp:'Face Threading', name:'Chin', price:'₹50'},
  {cat:'waxing', grp:'Face Threading', name:'Sidelock', price:'₹100'},
  {cat:'waxing', grp:'Face Threading', name:'Full Face Threading', price:'₹300'},
  {cat:'skin', grp:'Body Bleach', name:'Underarm', price:'₹150'},
  {cat:'skin', grp:'Body Bleach', name:'Neckline', price:'₹400'},
  {cat:'skin', grp:'Body Bleach', name:'Half Hand', price:'₹200'},
  {cat:'skin', grp:'Body Bleach', name:'Full Hand', price:'₹400'},
  {cat:'skin', grp:'Body Bleach', name:'Half Leg', price:'₹300'},
  {cat:'skin', grp:'Body Bleach', name:'Full Leg', price:'₹600'},
  {cat:'skin', grp:'Body Bleach', name:'Half Back', price:'₹300'},
  {cat:'skin', grp:'Body Bleach', name:'Full Back', price:'₹600'},
  {cat:'skin', grp:'Body Bleach', name:'Abdomen', price:'₹600'},
  {cat:'skin', grp:'Body Bleach', name:'Full Body', price:'₹3,000'},
  {cat:'skin', grp:'Body D-Tan', name:'Underarm', price:'₹250'},
  {cat:'skin', grp:'Body D-Tan', name:'Neckline', price:'₹500'},
  {cat:'skin', grp:'Body D-Tan', name:'Half Hand', price:'₹250'},
  {cat:'skin', grp:'Body D-Tan', name:'Full Hand', price:'₹400'},
  {cat:'skin', grp:'Body D-Tan', name:'Half Leg', price:'₹350'},
  {cat:'skin', grp:'Body D-Tan', name:'Full Leg', price:'₹700'},
  {cat:'skin', grp:'Body D-Tan', name:'Half Back', price:'₹350'},
  {cat:'skin', grp:'Body D-Tan', name:'Full Back', price:'₹700'},
  {cat:'skin', grp:'Body D-Tan', name:'Abdomen', price:'₹700'},
  {cat:'skin', grp:'Body D-Tan', name:'Full Body', price:'₹3,500'},
  {cat:'makeup', grp:'Mehendi', name:'Engagement, No Figure (Hand)', price:'₹2,000'},
  {cat:'makeup', grp:'Mehendi', name:'Engagement, No Figure (Feet)', price:'₹2,500'},
  {cat:'makeup', grp:'Mehendi', name:'Bridal, No Figure (Hand)', price:'₹2,500'},
  {cat:'makeup', grp:'Mehendi', name:'Bridal, No Figure (Hand &amp; Feet)', price:'₹4,000'},
  {cat:'makeup', grp:'Mehendi', name:'Bridal, With Figure (Hand)', price:'₹3,500'},
  {cat:'makeup', grp:'Mehendi', name:'Bridal, With Figure (Hand &amp; Feet)', price:'₹5,000'},
  {cat:'skin', grp:'Piercing &amp; Others', name:'Nose Piercing', price:'₹500'},
  {cat:'skin', grp:'Piercing &amp; Others', name:'Ear Piercing', price:'₹500'},
  {cat:'skin', grp:'Piercing &amp; Others', name:'Contact Lens', price:'₹500'},
  {cat:'skin', grp:'Piercing &amp; Others', name:'Eyelashes', price:'₹500'},
  {cat:'tattoo', grp:'Tattoo', name:'Tattoo B/W (per inch)', price:'₹600'},
  {cat:'tattoo', grp:'Tattoo', name:'Tattoo Colour (per inch)', price:'₹800'},
  {cat:'skin', grp:'Massage &amp; Polishing', name:'Body Massage with Steam (Olive Oil)', price:'₹2,500'},
  {cat:'skin', grp:'Massage &amp; Polishing', name:'Body Polishing (Fruit)', price:'₹3,000'},
  {cat:'skin', grp:'Massage &amp; Polishing', name:'Body Polishing (Chocolate)', price:'₹3,500'},
  {cat:'hair', grp:'Spa &amp; Treatment', name:'Spa — Basic', price:'₹800'},
  {cat:'hair', grp:'Spa &amp; Treatment', name:'Spa — Basic Treatment', price:'₹1,200'},
  {cat:'hair', grp:'Treatment Add On', name:'Anti Dandruff Ampoule', price:'₹500'},
  {cat:'hair', grp:'Treatment Add On', name:'Anti Dandruff Clear Dose', price:'₹800'},
  {cat:'hair', grp:'Wellaplex / Fiberplex (Add-On)', name:'Short', price:'₹1,000'},
  {cat:'hair', grp:'Wellaplex / Fiberplex (Add-On)', name:'Medium', price:'₹1,300'},
  {cat:'hair', grp:'Wellaplex / Fiberplex (Add-On)', name:'Long', price:'₹1,600'},
  {cat:'hair', grp:'Moroccan Oil Treatment', name:'Short', price:'₹1,000'},
  {cat:'hair', grp:'Moroccan Oil Treatment', name:'Medium', price:'₹1,300'},
  {cat:'hair', grp:'Moroccan Oil Treatment', name:'Long', price:'₹1,800'},
  {cat:'hair', grp:'Hairstyles', name:'Ironing/Hot Roller (Medium)', price:'₹700'},
  {cat:'hair', grp:'Hairstyles', name:'Ironing/Hot Roller (Long)', price:'₹800'},
  {cat:'hair', grp:'Hairstyles', name:'Simple Bun (Short)', price:'₹600'},
  {cat:'hair', grp:'Hairstyles', name:'Simple Bun (Medium)', price:'₹800'},
  {cat:'hair', grp:'Hairstyles', name:'Simple Bun (Long)', price:'₹900'},
  {cat:'hair', grp:'Hairstyles', name:'Messy Bun (Short)', price:'₹700'},
  {cat:'hair', grp:'Hairstyles', name:'Messy Bun (Medium)', price:'₹900'},
  {cat:'hair', grp:'Hairstyles', name:'Messy Bun (Long)', price:'₹1,000'},
  {cat:'hair', grp:'Hairstyles', name:'Curling (Short)', price:'₹500'},
  {cat:'hair', grp:'Hairstyles', name:'Curling (Medium)', price:'₹700'},
  {cat:'hair', grp:'Hairstyles', name:'Curling (Long)', price:'₹800'},
  {cat:'hair', grp:'Hairstyles', name:'Braided Hairstyles (Short)', price:'₹700'},
  {cat:'hair', grp:'Hairstyles', name:'Braided Hairstyles (Medium)', price:'₹900'},
  {cat:'hair', grp:'Hairstyles', name:'Braided Hairstyles (Long)', price:'₹1,000'},
  {cat:'hair', grp:'Hairstyles', name:'Magic Curls (Short)', price:'₹800'},
  {cat:'hair', grp:'Hairstyles', name:'Magic Curls (Medium)', price:'₹1,000'},
  {cat:'hair', grp:'Hairstyles', name:'Magic Curls (Long)', price:'₹1,200'},
  {cat:'hair', grp:'Hairstyles', name:'Crimping/Beach Waves (Medium)', price:'₹700'},
  {cat:'hair', grp:'Hairstyles', name:'Crimping/Beach Waves (Long)', price:'₹800'},
  {cat:'hair', grp:'Hairstyles', name:'Pakistani Hair Do (Short)', price:'₹1,000'},
  {cat:'hair', grp:'Hairstyles', name:'Pakistani Hair Do (Medium)', price:'₹1,200'},
  {cat:'hair', grp:'Hairstyles', name:'Pakistani Hair Do (Long)', price:'₹1,500'},
  {cat:'hair', grp:'Hairstyles', name:'Rose Bun/Braid (Short)', price:'₹700'},
  {cat:'hair', grp:'Hairstyles', name:'Rose Bun/Braid (Medium)', price:'₹900'},
  {cat:'hair', grp:'Hairstyles', name:'Rose Bun/Braid (Long)', price:'₹1,000'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Highlights Per Streak (Medium)', price:'₹350'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Highlights Per Streak (Long)', price:'₹400'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Highlights Per Streak (Extra Long)', price:'₹500'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Fashion Highlights Per Streak (Short)', price:'₹400'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Fashion Highlights Per Streak (Medium)', price:'₹450'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Fashion Highlights Per Streak (Long)', price:'₹500'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Fashion Highlights Per Streak (Extra Long)', price:'₹700'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Chunks Per Streak (Medium)', price:'₹400'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Chunks Per Streak (Long)', price:'₹450'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Chunks Per Streak (Extra Long)', price:'₹500'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Root Touchup with Ammonia (1 inch)', price:'₹1,000'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Root Touchup with Ammonia (2 inch)', price:'₹1,500'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Root Touchup without Ammonia (1 inch)', price:'₹1,100'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Root Touchup without Ammonia (2 inch)', price:'₹1,600'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Schwarzkopf Root Touchup with Ammonia (1 inch)', price:'₹1,100'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Schwarzkopf Root Touchup with Ammonia (2 inch)', price:'₹1,600'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Schwarzkopf Root Touchup without Ammonia (1 inch)', price:'₹1,200'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Schwarzkopf Root Touchup without Ammonia (2 inch)', price:'₹1,700'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour with Ammonia (Short)', price:'₹3,500'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour with Ammonia (Medium)', price:'₹4,500'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour with Ammonia (Long)', price:'₹5,500'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour with Ammonia (Extra Long)', price:'₹7,000'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour without Ammonia (Short)', price:'₹4,000'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour without Ammonia (Medium)', price:'₹5,000'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour without Ammonia (Long)', price:'₹6,000'},
  {cat:'hair', grp:'Hair Colour — Highlights &amp; Root Touch-Up', name:'Loreal/Mor Global Colour without Ammonia (Extra Long)', price:'₹7,500'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Ombre per Nail', price:'₹80'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Glitter on Nail Paint (per Nail)', price:'₹100'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Basic Nail Art (per Nail)', price:'₹60'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Ombre Gel (per Nail)', price:'₹100'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'3D Flower (per Nail)', price:'₹150'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Nail Polish Application (Hand)', price:'₹100'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Nail Polish Application (Feet)', price:'₹100'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'French Nail Polish Application (Hand)', price:'₹150'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'French Nail Polish Application (Feet)', price:'₹150'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Nail Accessories (per Nail)', price:'₹100'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Permanent Gel Nail Polish (Hand)', price:'₹1,000'},
  {cat:'nails', grp:'Nail Paint &amp; Nail Art', name:'Permanent Gel Nail Polish (Feet)', price:'₹800'},
  {cat:'nails', grp:'Nail Extension', name:'Temporary Acrylic Natural (Hand)', price:'₹1,500'},
  {cat:'nails', grp:'Nail Extension', name:'Temporary Acrylic Natural (Feet)', price:'₹1,500'},
  {cat:'nails', grp:'Nail Extension', name:'Permanent Nail Extension (Hand)', price:'₹3,000'},
  {cat:'nails', grp:'Nail Extension', name:'Permanent Nail Extension (Feet)', price:'₹3,000'},
  {cat:'nails', grp:'Nail Extension', name:'Nail Extension Removal', price:'₹300'},
  {cat:'nails', grp:'Nail Extension', name:'Gel Polish Removal with Soak-Off Solution', price:'₹200'},
  {cat:'hair', grp:'Hair Treatment', name:'Antidandruff Treatment', price:'₹1,500'},
  {cat:'hair', grp:'Hair Treatment', name:'Anti Hairfall Treatment', price:'₹1,500'},
  {cat:'hair', grp:'Hair Treatment', name:'Hair Repair (Short)', price:'₹1,200'},
  {cat:'hair', grp:'Hair Treatment', name:'Hair Repair (Medium)', price:'₹1,400'},
  {cat:'hair', grp:'Hair Treatment', name:'Hair Repair (Long)', price:'₹1,600'},
  {cat:'hair', grp:'Hair Treatment', name:'Hair Repair (Extra Long)', price:'₹1,800'},
  {cat:'hair', grp:'Hair Treatment', name:'Moroccan Oil Lite (Short)', price:'₹2,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Moroccan Oil Lite (Medium)', price:'₹2,500'},
  {cat:'hair', grp:'Hair Treatment', name:'Moroccan Oil Lite (Long)', price:'₹3,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Moroccan Oil Lite (Extra Long)', price:'₹3,500'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin Reviver (Short)', price:'₹4,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin Reviver (Medium)', price:'₹5,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin Reviver (Long)', price:'₹7,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin Reviver (Extra Long)', price:'₹9,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin GK (Short)', price:'₹5,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin GK (Medium)', price:'₹6,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin GK (Long)', price:'₹8,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Keratin GK (Extra Long)', price:'₹10,000'},
  {cat:'hair', grp:'Hair Treatment', name:'GK Fast Blow Dry (Short)', price:'₹1,500'},
  {cat:'hair', grp:'Hair Treatment', name:'GK Fast Blow Dry (Medium)', price:'₹2,000'},
  {cat:'hair', grp:'Hair Treatment', name:'GK Fast Blow Dry (Long)', price:'₹2,500'},
  {cat:'hair', grp:'Hair Treatment', name:'GK Fast Blow Dry (Extra Long)', price:'₹3,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Wellaplex/Fiberplex Treatment (Short)', price:'₹1,500'},
  {cat:'hair', grp:'Hair Treatment', name:'Wellaplex/Fiberplex Treatment (Medium)', price:'₹2,000'},
  {cat:'hair', grp:'Hair Treatment', name:'Wellaplex/Fiberplex Treatment (Long)', price:'₹2,500'},
  {cat:'hair', grp:'Hair Treatment', name:'Wellaplex/Fiberplex Treatment (Extra Long)', price:'₹3,000'},
  {cat:'hair', grp:'Hair Spa', name:'Loreal Hair Spa (Short)', price:'₹1,000'},
  {cat:'hair', grp:'Hair Spa', name:'Loreal Hair Spa (Medium)', price:'₹1,200'},
  {cat:'hair', grp:'Hair Spa', name:'Loreal Hair Spa (Long)', price:'₹1,400'},
  {cat:'hair', grp:'Hair Spa', name:'Loreal Hair Spa (Extra Long)', price:'₹1,600'},
  {cat:'hair', grp:'Hair Spa', name:'Schwarzkopf Hair Spa (Short)', price:'₹1,100'},
  {cat:'hair', grp:'Hair Spa', name:'Schwarzkopf Hair Spa (Medium)', price:'₹1,300'},
  {cat:'hair', grp:'Hair Spa', name:'Schwarzkopf Hair Spa (Long)', price:'₹1,600'},
  {cat:'hair', grp:'Hair Spa', name:'Schwarzkopf Hair Spa (Extra Long)', price:'₹1,700'},
  {cat:'hair', grp:'Hair Spa', name:'Moroccan Hair Spa (Short)', price:'₹1,500'},
  {cat:'hair', grp:'Hair Spa', name:'Moroccan Hair Spa (Medium)', price:'₹1,800'},
  {cat:'hair', grp:'Hair Spa', name:'Moroccan Hair Spa (Long)', price:'₹2,200'},
  {cat:'hair', grp:'Hair Spa', name:'Moroccan Hair Spa (Extra Long)', price:'₹2,500'},
  {cat:'hair', grp:'Hair Spa', name:'Keratin Hair Spa (Short)', price:'₹1,200'},
  {cat:'hair', grp:'Hair Spa', name:'Keratin Hair Spa (Medium)', price:'₹1,500'},
  {cat:'hair', grp:'Hair Spa', name:'Keratin Hair Spa (Long)', price:'₹1,800'},
  {cat:'hair', grp:'Hair Spa', name:'Keratin Hair Spa (Extra Long)', price:'₹2,000'},
  {cat:'hair', grp:'Spa Add On', name:'Anti Dandruff Spa Add-On', price:'₹500'},
  {cat:'hair', grp:'Spa Add On', name:'Anti Hairfall Spa Add-On', price:'₹500'},
  {cat:'makeup', grp:'Party Makeup', name:'PAC HD', price:'₹3,500'},
  {cat:'makeup', grp:'Party Makeup', name:'MAC HD', price:'₹5,000'},
  {cat:'makeup', grp:'Party Makeup', name:'Temptu Airbrush', price:'₹7,000'},
  {cat:'makeup', grp:'Party Makeup', name:'Forever 52 (Supriti Agrahari)', price:'₹8,500'},
  {cat:'makeup', grp:'Party Makeup', name:'Bobbi Brown (Supriti Agrahari)', price:'₹10,000'},
  {cat:'men', grp:'Groom Makeup', name:'MAC HD', price:'₹5,000'},
  {cat:'men', grp:'Groom Makeup', name:'Temptu Airbrush', price:'₹8,000'},
  {cat:'men', grp:'Groom Makeup', name:'Senrick Signature', price:'₹14,000'},
  {cat:'makeup', grp:'Venue Makeup', name:'Forever 52 (Senior Artist)', price:'₹35,000'},
  {cat:'makeup', grp:'Venue Makeup', name:'Senrick Signature (Supriti Mam)', price:'₹70,000'},
  {cat:'nails', grp:'Manicure', name:'Fruit', price:'₹400'},
  {cat:'nails', grp:'Manicure', name:'Chocolate', price:'₹500'},
  {cat:'nails', grp:'Manicure', name:'Aroma', price:'₹600'},
  {cat:'nails', grp:'Manicure', name:'Lotus', price:'₹700'},
  {cat:'nails', grp:'Manicure', name:'Pedipie Manicure', price:'₹800'},
  {cat:'nails', grp:'Manicure', name:'Handspa Crystal', price:'₹900'},
  {cat:'nails', grp:'Manicure', name:'O3+ Manicure', price:'₹1,000'},
  {cat:'nails', grp:'Pedicure', name:'Fruit', price:'₹500'},
  {cat:'nails', grp:'Pedicure', name:'Chocolate', price:'₹600'},
  {cat:'nails', grp:'Pedicure', name:'Aroma', price:'₹800'},
  {cat:'nails', grp:'Pedicure', name:'Lotus', price:'₹900'},
  {cat:'nails', grp:'Pedicure', name:'Pedipie Pedicure', price:'₹1,100'},
  {cat:'nails', grp:'Pedicure', name:'Handspa Crystal', price:'₹1,200'},
  {cat:'nails', grp:'Pedicure', name:'O3+ Pedicure', price:'₹1,500'},
  {cat:'skin', grp:'Face Mask, Bleach &amp; D-Tan', name:'Sara Mask', price:'₹350'},
  {cat:'skin', grp:'Face Mask, Bleach &amp; D-Tan', name:'O3+ Mask', price:'₹550'},
  {cat:'skin', grp:'Face Mask, Bleach &amp; D-Tan', name:'Casmara Mask', price:'₹1,200'},
  {cat:'skin', grp:'Face Mask, Bleach &amp; D-Tan', name:'Oxy Bleach', price:'₹300'},
  {cat:'skin', grp:'Face Mask, Bleach &amp; D-Tan', name:'O3+ Bleach', price:'₹500'},
  {cat:'skin', grp:'Face Mask, Bleach &amp; D-Tan', name:'Raga D-Tan', price:'₹350'},
  {cat:'skin', grp:'Face Mask, Bleach &amp; D-Tan', name:'O3+ D-Tan', price:'₹550'},
  {cat:'skin', grp:'Facial Treatment', name:'Blackheads Removal', price:'₹800'},
  {cat:'skin', grp:'Facial Treatment', name:'Seaweed Treatment', price:'₹3,000'},
  {cat:'skin', grp:'Facial Treatment', name:'Antitan Treatment', price:'₹1,500'},
  {cat:'skin', grp:'Facial Treatment', name:'Anti Wrinkle Treatment', price:'₹1,500'},
  {cat:'skin', grp:'Facial Treatment', name:'Anti Acne Treatment', price:'₹1,500'},
  {cat:'skin', grp:'Facial Treatment', name:'Anti Pigmentation Treatment', price:'₹1,500'},
  {cat:'skin', grp:'Facial Treatment', name:'Anticlock Circle Treatment', price:'₹1,500'},
  {cat:'makeup', grp:'Bridal Makeup', name:'MAC HD (Senior Artist)', price:'₹12,000'},
  {cat:'makeup', grp:'Bridal Makeup', name:'MAC UHD (Senior Artist)', price:'₹14,000'},
  {cat:'makeup', grp:'Bridal Makeup', name:'Temptu Airbrush (Senior Artist)', price:'₹15,000'},
  {cat:'makeup', grp:'Bridal Makeup', name:'Temptu Airbrush (Supriti Agrahari)', price:'₹17,000'},
  {cat:'makeup', grp:'Bridal Makeup', name:'Forever 52 (Supriti Agrahari)', price:'₹20,000'},
  {cat:'makeup', grp:'Bridal Makeup', name:'Bobbi Brown Manual (Supriti Agrahari)', price:'₹21,000'},
  {cat:'makeup', grp:'Bridal Makeup', name:'Bobbi Brown Airbrush (Supriti Agrahari)', price:'₹24,000'},
  {cat:'makeup', grp:'Bridal Makeup', name:'Senrick Signature (Supriti Agrahari)', price:'₹36,000'},
  {cat:'makeup', grp:'Engagement Makeup', name:'MAC HD (Senior Artist)', price:'₹9,000'},
  {cat:'makeup', grp:'Engagement Makeup', name:'MAC UHD (Senior Artist)', price:'₹10,000'},
  {cat:'makeup', grp:'Engagement Makeup', name:'Temptu Airbrush (Senior Artist)', price:'₹12,000'},
  {cat:'makeup', grp:'Engagement Makeup', name:'Forever 52 (Supriti Agrahari)', price:'₹15,000'},
  {cat:'makeup', grp:'Engagement Makeup', name:'Bobbi Brown Manual (Supriti Agrahari)', price:'₹16,000'},
  {cat:'makeup', grp:'Engagement Makeup', name:'Bobbi Brown Airbrush (Supriti Agrahari)', price:'₹17,000'},
  {cat:'makeup', grp:'Engagement Makeup', name:'Senrick Signature (Supriti Agrahari)', price:'₹22,000'},
  {cat:'makeup', grp:'Reception Makeup', name:'MAC HD (Senior Artist)', price:'₹9,000'},
  {cat:'makeup', grp:'Reception Makeup', name:'MAC UHD (Senior Artist)', price:'₹10,000'},
  {cat:'makeup', grp:'Reception Makeup', name:'Temptu Airbrush (Senior Artist)', price:'₹12,000'},
  {cat:'makeup', grp:'Reception Makeup', name:'Forever 52 (Supriti Agrahari)', price:'₹15,000'},
  {cat:'makeup', grp:'Reception Makeup', name:'Bobbi Brown Airbrush (Supriti Agrahari)', price:'₹17,000'},
  {cat:'makeup', grp:'Reception Makeup', name:'Senrick Signature (Supriti Agrahari)', price:'₹22,000'},
];

const PRODUCTS = [
  // ---- Hair Products (studio stock) ----
  {cat:'hair', name:'Xtenso Care Pro-Keratin Shampoo – Blue, 250ml', img:'/assets/img/img065.jpg', brand:"L'Oréal Professionnel", price:610, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Xtenso Care Pro-Keratin Masque – Blue, 196g', img:'/assets/img/img066.jpg', brand:"L'Oréal Professionnel", price:850, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Xtenso Care Pro-Keratin Shampoo – Gold, 250ml', img:'/assets/img/img067.jpg', brand:"L'Oréal Professionnel", price:1045, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Xtenso Care Pro-Keratin Masque – Gold, 196g', img:'/assets/img/img068.jpg', brand:"L'Oréal Professionnel", price:1290, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Scalp Advanced Anti-Dandruff Shampoo, 300ml', img:'/assets/img/img069.jpg', brand:"L'Oréal Professionnel", price:950, tag:'Hair', concern:['Dandruff & Scalp Care']},
  {cat:'hair', name:'Absolut Repair Shampoo, 300ml', img:'/assets/img/img070.jpg', brand:"L'Oréal Professionnel", price:795, tag:'Hair', concern:['Hair Damage Repair']},
  {cat:'hair', name:'Absolut Repair Mask, 250g', img:'/assets/img/img071.jpg', brand:"L'Oréal Professionnel", price:999, tag:'Hair', concern:['Hair Damage Repair']},
  {cat:'hair', name:'Liss Unlimited Shampoo, 300ml', img:'/assets/img/img072.jpg', brand:"L'Oréal Professionnel", price:790, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Liss Unlimited Mask, 250g', img:'/assets/img/img073.jpg', brand:"L'Oréal Professionnel", price:990, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Vitamino Color Shampoo, 300ml', img:'/assets/img/img074.jpg', brand:"L'Oréal Professionnel", price:845, tag:'Hair', concern:['Colour Protection']},
  {cat:'hair', name:'Vitamino Color Mask, 250g', img:'/assets/img/img075.jpg', brand:"L'Oréal Professionnel", price:990, tag:'Hair', concern:['Colour Protection']},
  {cat:'hair', name:'BC Bonacure Color Freeze Shampoo pH 4.5, 250ml', img:'/assets/img/img076.jpg', brand:'Schwarzkopf Professional', price:1150, tag:'Hair', concern:['Colour Protection']},
  {cat:'hair', name:'BC Bonacure Color Freeze Conditioner pH 4.5, 200ml', img:'/assets/img/img077.jpg', brand:'Schwarzkopf Professional', price:1150, tag:'Hair', concern:['Colour Protection']},
  {cat:'hair', name:'BC Bonacure Repair Rescue Shampoo with Arginine, 250ml', img:'/assets/img/img078.jpg', brand:'Schwarzkopf Professional', price:1000, tag:'Hair', concern:['Hair Damage Repair']},
  {cat:'hair', name:'BC Bonacure Repair Rescue Conditioner with Arginine, 200ml', img:'/assets/img/img079.jpg', brand:'Schwarzkopf Professional', price:1100, tag:'Hair', concern:['Hair Damage Repair']},
  {cat:'hair', name:'BC Bonacure Root Activating Shampoo with Guarana & Biotin, 250ml', img:'/assets/img/img080.jpg', brand:'Schwarzkopf Professional', price:1100, tag:'Hair', concern:['Hair Fall & Thinning']},
  {cat:'hair', name:'Moisturizing Shampoo with Juvexin, 300ml', img:'/assets/img/img081.jpg', brand:'GK Hair', price:2700, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Moisturizing Conditioner with Juvexin, 300ml', img:'/assets/img/img082.jpg', brand:'GK Hair', price:2700, tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'Reviver Hair Repair Shampoo, 250ml', img:'/assets/img/img083.jpg', brand:'De Fabulous', price:1575, tag:'Hair', concern:['Hair Damage Repair']},
  {cat:'hair', name:'Reviver Hair Repair Conditioner, 250ml', img:'/assets/img/img084.jpg', brand:'De Fabulous', price:1440, tag:'Hair', concern:['Hair Damage Repair']},
  {cat:'hair', name:'W One Shampoo with Active Amazon & Coconut Oil, 300ml', img:'/assets/img/img085.jpg', price:1613, brand:'Floractive', tag:'Hair', concern:['Frizz Control & Smoothing']},
  {cat:'hair', name:'W One 3-in-1 Conditioner, Mask & Leave-In, 300ml', img:'/assets/img/img086.jpg', price:1700, brand:'Floractive', tag:'Hair', concern:['Frizz Control & Smoothing']},

  // ---- Skin Products (studio stock) ----
  {cat:'skin', name:'Milk Scrub – Dry Skin, 50g', img:'/assets/img/img087.jpg', brand:'O3+ Professional', price:385, tag:'Skin', concern:['Dry Skin']},
  {cat:'skin', name:'Night Repair Cream, 50g', img:'/assets/img/img088.jpg', brand:'O3+ Professional', price:955, tag:'Skin', concern:['Anti-Ageing']},
  {cat:'skin', name:'PHYTORx Whitening & Brightening Day Crème SPF 25 PA+++, 50g', img:'/assets/img/img089.jpg', brand:'Lotus Professional', price:785, tag:'Skin', concern:['Pigmentation & Brightening']},
  {cat:'skin', name:'PHYTORx Whitening Brightening Night Crème, 50g', img:'/assets/img/img090.jpg', brand:'Lotus Professional', price:725, tag:'Skin', concern:['Pigmentation & Brightening']},
  {cat:'skin', name:'Retemin Plant Retinol + Vitamin-C Brightening Facial Oil, 28ml', img:'/assets/img/img091.jpg', brand:'Lotus Professional', price:825, tag:'Skin', concern:['Pigmentation & Brightening','Anti-Ageing']},
];

function closeAllDrops(){
  ['servicesDrop','locatorDrop'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.classList.remove('open');
  });
}

/* ---------- Real URL routing (path-based, not hash) ---------- */
/* Each real path maps to a page id, an optional services category tab, and an optional in-page anchor to scroll to. */
const ROUTES = {
  '/': {page:'home'},
  '/about': {page:'about'},
  '/services': {page:'services'},
  '/hair-services': {page:'services', cat:'hair'},
  '/skin-services': {page:'services', cat:'skin'},
  '/nails': {page:'services', cat:'nails'},
  '/pedicure': {page:'services', cat:'waxing'},
  '/men-services': {page:'services', cat:'men'},
  '/tattoo': {page:'services', cat:'tattoo'},
  '/makeup': {page:'makeup'},
  '/studios': {page:'studios'},
  '/golghar': {page:'studios', anchor:'studio-one'},
  '/betiahata': {page:'studios', anchor:'studio-two'},
  '/gorakhnath-branch': {page:'studios', anchor:'studio-three'},
  '/gallery': {page:'gallery'},
  '/shop': {page:'shop'},
  '/membership': {page:'membership'},
  '/offers': {page:'offers'},
  '/book-online': {page:'book'},
  '/contact': {page:'contact'},
  '/senrickacademy': {page:'academy'},
  '/blog': {page:'blogs'},
  '/blog/bridal-beauty-guide': {page:'blog-bridal-beauty-guide'},
  '/blog/healthy-hair-guide': {page:'blog-healthy-hair-guide'},
  '/blog/skincare-guide': {page:'blog-skincare-guide'},
  '/blog/airbrush-vs-hd-makeup': {page:'blog-airbrush-vs-hd-makeup'},
  '/privacy-policy': {page:'privacy-policy'},
  '/cancellation-refund-policy': {page:'cancellation-refund-policy'},
  '/terms-of-services': {page:'terms-of-service'},
  '/shipping-policy': {page:'shipping-policy'},
};
/* SEO: per-page title + meta description, written from each page's own on-page copy. */
const PAGE_META = {
  'home': {title:"Senrick — Makeup Studio & Unisex Salon in Gorakhpur", desc:"Bridal, editorial and everyday makeup artistry across three studios in Gorakhpur — Golghar, Betiahata and Gorakhnath — led by Supriti Agrahari."},
  'about': {title:"About Supriti Agrahari — Senrick, since 2015 | Senrick Salon", desc:"Senrick began as a single bridal studio in Gorakhpur and has grown into three full-service branches. Founder and lead artist Supriti Agrahari has led over 1,500 brides."},
  'services': {title:"Our Services — Hair, Skin, Nails, Waxing, Men's & Tattoo | Senrick", desc:"Every treatment we offer at Senrick: makeup, hair, skin, nails, waxing, men's grooming and tattoo, across our Gorakhpur studios."},
  'makeup': {title:"Makeup Studio — Bridal, Engagement & Party Makeup | Senrick", desc:"Bridal, engagement, party and editorial makeup led by Supriti Agrahari and her team. Every look starts with a consultation."},
  'studios': {title:"Our Studios — Golghar, Betiahata & Gorakhnath | Senrick Salon", desc:"Three Senrick studios in Gorakhpur — one standard of bridal, hair, skin, nails and grooming service at every branch."},
  'golghar': {title:"Senrick Golghar Studio — Makeup & Salon | Gorakhpur", desc:"Senrick's Golghar studio in the heart of Gorakhpur — bridal, engagement and party makeup, plus the complete salon menu."},
  'betiahata': {title:"Senrick Betiahata Studio — Makeup & Salon | Gorakhpur", desc:"Senrick's ground-floor studio on Hanuman Mandir Road, Betiahata — makeup, hair, skin, nails and men's grooming under one roof."},
  'gorakhnath-branch': {title:"Senrick Gorakhnath Studio — Makeup & Salon | Gorakhpur", desc:"Senrick's Gorakhnath studio, opposite Geeta Wholesale Mart — bridal and party makeup plus the full salon menu."},
  'gallery': {title:"Gallery — Our Work | Senrick Salon", desc:"A closer look at Senrick's bridal transformations, editorial looks and everyday artistry from across our Gorakhpur studios."},
  'shop': {title:"Buy Products — Hair & Skin Care | Senrick Salon", desc:"Retail-size versions of the professional hair and skin products our artists use on you — L'Oréal Professionnel, Schwarzkopf, GK Hair and more."},
  'membership': {title:"Men's Grooming Membership | Senrick Salon", desc:"Prepay and save on men's grooming at Senrick — haircuts and beard styling across 12 months."},
  'offers': {title:"Current Offers | Senrick Salon", desc:"Current makeup, hair and beauty offers at Senrick Salon, Gorakhpur."},
  'book': {title:"Book an Appointment | Senrick Salon", desc:"Reserve your slot at Senrick — makeup, hair, skin, nails, waxing, men's grooming and tattoo, across three Gorakhpur studios."},
  'contact': {title:"Contact Us | Senrick Salon, Gorakhpur", desc:"Reach Senrick Salon for bookings, makeup consultations or product questions. Golghar, Betiahata and Gorakhnath studios, Gorakhpur."},
  'academy': {title:"Senrick Academy — Learn Makeup & Beauty from the Studio Itself", desc:"Professional makeup and beauty training, taught by the Senrick team. Hands-on courses across makeup, hair and cosmetology."},
  'blogs': {title:"Beauty Tips & Stories | Senrick Salon Blog", desc:"Bridal beauty, hair care, skincare and makeup guides from the Senrick team, Gorakhpur."},
  'blog-bridal-beauty-guide': {title:"The Complete Indian Bridal Beauty Guide | Senrick Salon", desc:"Preparing your skin, hair and makeup for the big day — a full timeline from six months out to the wedding morning."},
  'blog-healthy-hair-guide': {title:"A Complete Guide to Healthy Hair | Senrick Salon", desc:"Everyday habits that make a real difference to hair health — nutrition, care routine and more, from the Senrick team."},
  'blog-skincare-guide': {title:"A Simple Guide to Healthy, Glowing Skin | Senrick Salon", desc:"Cleansing, actives and a routine for a strong skin barrier — a simple guide to healthy, glowing skin from Senrick Salon."},
  'blog-airbrush-vs-hd-makeup': {title:"Airbrush vs. HD Makeup — Which Is Right for You? | Senrick", desc:"How airbrush and HD makeup differ under real lighting and photography conditions, and how to choose for your big day."},
  'privacy-policy': {title:"Privacy Policy | Senrick Salon", desc:"Senrick Salon's privacy policy — how we handle your information."},
  'cancellation-refund-policy': {title:"Cancellation / Refund Policy | Senrick Salon", desc:"Senrick Salon's cancellation and refund policy for bookings and services."},
  'terms-of-service': {title:"Terms of Service | Senrick Salon", desc:"Senrick Salon's terms of service."},
  'shipping-policy': {title:"Shipping Policy | Senrick Salon", desc:"Senrick Salon's shipping and delivery policy for retail products."},
};
function routeMetaKey(path, anchor){
  // golghar/betiahata/gorakhnath-branch each get their own title via PAGE_META keyed by slug, not page id
  if(anchor==='studio-one') return 'golghar';
  if(anchor==='studio-two') return 'betiahata';
  if(anchor==='studio-three') return 'gorakhnath-branch';
  return null;
}
function navigate(pushHistory){
  let path = location.pathname.replace(/\/+$/,'') || '/';
  let route = ROUTES[path];
  if(!route){ path = '/'; route = ROUTES['/']; }
  const target = route.page;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pageEl = document.getElementById('page-'+target) || document.getElementById('page-home');
  pageEl.classList.add('active');
  document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active', a.dataset.route===target));
  document.getElementById('primaryNav').classList.remove('open');
  document.body.style.overflow = '';
  closeAllDrops();
  if(route.cat && target==='services'){
    const tab = document.querySelector('#svcTabs .tab[data-cat="'+route.cat+'"]');
    if(tab){ tab.click(); }
  }
  // SEO: title + meta description per real URL
  const metaKey = routeMetaKey(path, route.anchor) || target;
  const meta = PAGE_META[metaKey] || PAGE_META['home'];
  document.title = meta.title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if(!metaDesc){ metaDesc = document.createElement('meta'); metaDesc.name = 'description'; document.head.appendChild(metaDesc); }
  metaDesc.setAttribute('content', meta.desc);
  let canon = document.querySelector('link[rel="canonical"]');
  if(!canon){ canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
  canon.setAttribute('href', 'https://www.senricksalon.com'+(path==='/' ? '' : path));
  // SEO: breadcrumb + one page-specific schema block per route, replacing the previous one
  let routeSchema = document.getElementById('route-schema');
  if(!routeSchema){ routeSchema = document.createElement('script'); routeSchema.type = 'application/ld+json'; routeSchema.id = 'route-schema'; document.head.appendChild(routeSchema); }
  const crumbName = (meta.title.split(' | ')[0] || meta.title).split(' — ')[0];
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": path === '/' ? [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.senricksalon.com/"}
    ] : [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.senricksalon.com/"},
      {"@type":"ListItem","position":2,"name":crumbName,"item":"https://www.senricksalon.com"+path}
    ]
  };
  let extra = null;
  if(target === 'academy'){
    extra = {
      "@context": "https://schema.org", "@type": "EducationalOrganization",
      "name": "Senrick Academy", "url": "https://www.senricksalon.com/senrickacademy",
      "description": "Professional makeup and beauty training, taught by the Senrick team.",
      "telephone": "+91 79050 29282", "email": "senrickbeauty@gmail.com",
      "parentOrganization": {"@id": "https://www.senricksalon.com/#organization"}
    };
  }
  routeSchema.textContent = JSON.stringify(extra ? [breadcrumb, extra] : breadcrumb);
  if(route.anchor){
    const el = document.getElementById(route.anchor);
    if(el){ setTimeout(()=>el.scrollIntoView({behavior:'smooth', block:'start'}), 60); return; }
  }
  window.scrollTo({top:0, behavior:'instant'});
}
function goTo(path){
  if(location.pathname.replace(/\/+$/,'') !== path){
    history.pushState({}, '', path);
  }
  navigate();
}
/* Intercept clicks on every internal link so the URL bar updates via pushState instead of a full reload */
document.addEventListener('click', e=>{
  const a = e.target.closest('a[href]');
  if(!a) return;
  const href = a.getAttribute('href');
  if(!href || href.charAt(0)!=='/' || a.target==='_blank' || a.hasAttribute('download')) return;
  if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
  e.preventDefault();
  goTo(href.split('#')[0].split('?')[0] || '/');
});
window.addEventListener('popstate', ()=>navigate());
function toggleNav(){
  const nav = document.getElementById('primaryNav');
  const isOpen = nav.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

/* Branches dropdown (main row) */
const locatorDrop = document.getElementById('locatorDrop');
const locatorDropTrigger = document.getElementById('locatorDropTrigger');
locatorDropTrigger.addEventListener('click', e=>{
  if(window.matchMedia('(max-width:1300px)').matches){
    e.preventDefault();
    locatorDrop.classList.toggle('open');
  }
});
document.addEventListener('click', e=>{
  if(!locatorDrop.contains(e.target)) locatorDrop.classList.remove('open');
});

/* Services dropdown */
const servicesDrop = document.getElementById('servicesDrop');
const servicesDropTrigger = document.getElementById('servicesDropTrigger');
servicesDropTrigger.addEventListener('click', e=>{
  if(window.matchMedia('(max-width:1300px)').matches){
    e.preventDefault();
    servicesDrop.classList.toggle('open');
  }
});
/* Chatbot */
(function(){
  const widget = document.getElementById('chatWidget');
  const toggle = document.getElementById('chatToggle');
  const panel = document.getElementById('chatPanel');
  const iconOpen = document.getElementById('chatIconOpen');
  const iconClose = document.getElementById('chatIconClose');
  const closeBtn = document.getElementById('chatClose');
  const messages = document.getElementById('chatMessages');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const WA_NUMBER = '917007636989';

  const BASE_INFO = `BRANCHES: Golghar Studio — phone 79921 84502; Betiahata Studio — phone 85740 03784; Gorakhnath Studio — phone 9278 018885. Main line 79050 29282. Email senrickbeauty@gmail.com. WhatsApp 70076 36989.`;

  let history = [];
  let sample = null;
  let sending = false;
  let indexCache = null;

  async function initSample(){
    try{
      if(window.claude && window.claude.use){ sample = await window.claude.use('sample'); }
    }catch(e){ sample = null; }
    if(!sample){ widget.style.display = 'none'; }
  }
  initSample();

  /* ---------- whole-site knowledge index ---------- */
  const STOP = new Set('the and for are you your with what how can does do is a an of to in on at me my we our us i it this that there any have has about please tell want need get much many will would could should from or be as by if not'.split(' '));
  function tokens(t){
    return (t.toLowerCase().match(/[a-z0-9₹]+/g)||[]).filter(w=>w.length>1 && !STOP.has(w)).map(w=>w.length>3 ? w.replace(/(es|s)$/,'') : w);
  }
  function clean(t){ return t.replace(/\s+/g,' ').trim(); }
  function splitLong(text, label, out){
    const MAX = 650;
    if(text.length <= MAX){ out.push({label, text}); return; }
    const parts = text.split(/(?<=[.!?])\s+/); let cur = '';
    for(const p of parts){
      if((cur + ' ' + p).length > MAX && cur){ out.push({label, text:cur.trim()}); cur = p; }
      else cur += ' ' + p;
    }
    if(cur.trim()) out.push({label, text:cur.trim()});
  }
  function buildIndex(){
    const chunks = [];
    document.querySelectorAll('main.page').forEach(m=>{
      const name = m.id.replace('page-','').replace(/-/g,' ');
      m.querySelectorAll('section, .faq-item, .blog-card, .offer-card').forEach(sec=>{
        if(sec.parentElement && sec.parentElement.closest('section') && sec.tagName!=='SECTION' && false) return;
        if(sec.tagName !== 'SECTION' && sec.closest('section') && sec.tagName!=='SECTION'){ /* nested item: covered by its section */ return; }
        const t = clean(sec.textContent || '');
        if(t.length > 30) splitLong(t, name, chunks);
      });
    });
    try{
      const byGrp = {};
      (typeof SERVICES !== 'undefined' ? SERVICES : []).forEach(x=>{ (byGrp[x.cat+' — '+x.grp] = byGrp[x.cat+' — '+x.grp] || []).push(x.name+' '+x.price); });
      Object.keys(byGrp).forEach(g=> splitLong('Service price list ('+g+'): '+byGrp[g].join('; '), 'services price list', chunks));
    }catch(e){}
    try{
      const pl = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).map(x=>x.name+' ₹'+x.price+' ('+x.tag+')').join('; ');
      if(pl) splitLong('Shop products: '+pl, 'shop products', chunks);
    }catch(e){}
    const df = {};
    chunks.forEach(c=>{ c.tok = new Set(tokens(c.label+' '+c.text)); c.tok.forEach(w=>{ df[w]=(df[w]||0)+1; }); });
    return {chunks, df, n:chunks.length};
  }
  function retrieve(q){
    if(!indexCache) indexCache = buildIndex();
    const {chunks, df, n} = indexCache;
    const qt = [...new Set(tokens(q))];
    const scored = chunks.map(c=>{
      let sc = 0;
      qt.forEach(w=>{ if(c.tok.has(w)) sc += Math.log(1 + n/(df[w]||1)); });
      return {c, sc};
    }).filter(x=>x.sc>0).sort((a,b)=>b.sc-a.sc);
    let out = [], total = 0;
    for(const x of scored){
      if(out.length>=8 || total + x.c.text.length > 6500) break;
      out.push('['+x.c.label+'] '+x.c.text); total += x.c.text.length;
    }
    return out.join('\n\n');
  }

  function addMsg(text, cls){
    const div = document.createElement('div');
    div.className = 'chat-msg ' + cls;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  function setOpen(open){
    widget.classList.toggle('open', open);
    iconOpen.style.display = open ? 'none' : 'block';
    iconClose.style.display = open ? 'block' : 'none';
    const label = document.getElementById('chatToggleLabel');
    if(label) label.style.display = open ? 'none' : 'inline';
    /* no auto-focus: the keyboard opens only when the visitor taps the box */
    if(open) messages.scrollTop = messages.scrollHeight;
  }
  toggle.addEventListener('click', ()=> setOpen(!widget.classList.contains('open')));
  closeBtn.addEventListener('click', ()=> setOpen(false));

  function errorCopy(code){
    if(code==='not_granted') return "Chat needs your permission to continue — please try again and allow it.";
    if(code==='rate_limited') return "I'm a little busy right now — please try again in a moment.";
    if(code==='sampling_disabled' || code==='not_declared' || code==='capability_disabled' || code==='capability_removed') return "Chat isn't available right now — please call or WhatsApp us instead.";
    return "Something went wrong — please try again, or call/WhatsApp us.";
  }

  function offerSubmit(question){
    addMsg("I couldn't find this on our website. Please share your mobile number and we will reach back to you in a while.", 'chat-msg-bot');
    const row = document.createElement('div'); row.className = 'chat-phone-row';
    const ph = document.createElement('input');
    ph.type = 'tel'; ph.inputMode = 'numeric'; ph.autocomplete = 'tel'; ph.maxLength = 16; ph.placeholder = 'Your mobile number';
    ph.setAttribute('aria-label','Your mobile number');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'chat-submit-btn'; btn.textContent = 'Submit';
    const note = document.createElement('div'); note.className = 'chat-phone-note';
    row.appendChild(ph); row.appendChild(btn); messages.appendChild(row); messages.appendChild(note);
    messages.scrollTop = messages.scrollHeight;
    function normalise(v){
      let d = v.replace(/[^\d]/g,'');
      if(d.length===12 && d.indexOf('91')===0) d = d.slice(2);
      if(d.length===11 && d.charAt(0)==='0') d = d.slice(1);
      return /^[6-9]\d{9}$/.test(d) ? d : null;
    }
    function submit(){
      const num = normalise(ph.value);
      if(!num){ note.textContent = 'Please enter a valid 10-digit mobile number.'; return; }
      const msg = 'Hi Senrick, I have a question (via website chat):\n' + question + '\n\nPlease call/WhatsApp me on ' + num + '.';
      const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
      row.remove(); note.remove();
      addMsg('My number: ' + num, 'chat-msg-user');
      addMsg('Almost done — press Send in WhatsApp to submit your question. Once it is sent, we will reach back to you in a while.', 'chat-msg-bot');
      try{ window.open(url, '_blank', 'noopener'); }catch(e){}
      const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener';
      a.className = 'chat-submit-btn'; a.textContent = 'Open WhatsApp to send';
      a.style.display = 'inline-block'; a.style.textDecoration = 'none';
      messages.appendChild(a);
      messages.scrollTop = messages.scrollHeight;
    }
    btn.addEventListener('click', submit);
    ph.addEventListener('keydown', e=>{ if(e.key==='Enter') submit(); });
  }

  async function send(){
    const text = input.value.trim();
    if(!text || sending) return;
    if(!sample){
      addMsg("Chat isn't available in this view — please call 79050 29282 or use WhatsApp.", 'chat-msg-error');
      return;
    }
    sending = true; sendBtn.disabled = true; input.value = '';
    addMsg(text, 'chat-msg-user');
    const context = retrieve(text);
    const prompt = "You are the website assistant for Senrick Makeup Studio & Salon (Gorakhpur, India). Answer the visitor's question using ONLY the SITE CONTENT below. Keep it brief (2-4 sentences), plain text, no markdown. Never invent prices, timings, policies or offers. If the site content does not contain the answer, reply with exactly NO_ANSWER and nothing else. For simple greetings or thanks, reply with one friendly sentence.\n\nSITE CONTENT:\n" + BASE_INFO + "\n\n" + (context || '(nothing relevant found)') + "\n\nVISITOR QUESTION: " + text;
    const turns = history.slice(-6).concat([{role:'user', content: prompt}]);
    const thinking = addMsg('Thinking…', 'chat-msg-thinking');
    try{
      const {text: reply} = await sample(turns, {
        modelTier:'quick', cache:false,
        onText:({text:t})=>{ const x = t.trim(); if(x && !'NO_ANSWER'.startsWith(x)){ thinking.textContent = t; thinking.className='chat-msg chat-msg-bot'; } }
      });
      const r = (reply||'').trim();
      if(!r || r.indexOf('NO_ANSWER') === 0){
        thinking.remove();
        offerSubmit(text);
      }else{
        thinking.textContent = r; thinking.className = 'chat-msg chat-msg-bot';
        history.push({role:'user', content:text}, {role:'assistant', content:r});
      }
    }catch(e){
      thinking.remove();
      addMsg(errorCopy(e.code), 'chat-msg-error');
    }finally{
      sending = false; sendBtn.disabled = false;
      messages.scrollTop = messages.scrollHeight;
    }
  }

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') send(); });
})();

/* Academy: gated syllabus lead capture */
function toggleSyllabusGate(id){
  const form = document.getElementById('gate-form-' + id);
  form.classList.toggle('open');
}
function submitSyllabusLead(id, courseName){
  const nameEl = document.getElementById('lead-name-' + id);
  const phoneEl = document.getElementById('lead-phone-' + id);
  const name = nameEl.value.trim();
  const phone = phoneEl.value.trim();
  if(!name || !phone){ showToast('Please add your name and phone'); return; }

  // reveal the hidden syllabus items for both columns of this course
  const extra1 = document.getElementById('extra-' + id + '-1');
  const extra2 = document.getElementById('extra-' + id + '-2');
  if(extra1) extra1.style.display = 'block';
  if(extra2) extra2.style.display = 'block';

  const moreBtn = document.getElementById('more-btn-' + id);
  if(moreBtn) moreBtn.style.display = 'none';
  document.getElementById('gate-form-' + id).classList.remove('open');
  showToast('Full syllabus unlocked!');

  // send the lead via email using the dedicated lead-capture template
  if(EMAILJS_PUBLIC_KEY && EMAILJS_LEAD_TEMPLATE_ID && window.emailjs){
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_LEAD_TEMPLATE_ID, {
      service: courseName,
      client_name: name,
      client_phone: phone
    }).catch((err)=>{ console.error('Syllabus lead email failed:', err); });
  }
}

/* Membership image lightbox */
function openMembershipImage(){
  document.getElementById('membershipLightbox').classList.add('open');
}
function closeMembershipImage(){
  document.getElementById('membershipLightbox').classList.remove('open');
}

let calViewYear, calViewMonth;
function openDatePicker(){
  const panel = document.getElementById('calPanel');
  const isOpen = panel.style.display === 'block';
  if(isOpen){ panel.style.display = 'none'; return; }
  const today = new Date();
  const current = document.getElementById('bookDate').value;
  if(current){
    const parts = current.split('-');
    calViewYear = parseInt(parts[0]); calViewMonth = parseInt(parts[1]) - 1;
  } else {
    calViewYear = today.getFullYear(); calViewMonth = today.getMonth();
  }
  renderCalendar();
  panel.style.display = 'block';
}
function calNav(dir){
  calViewMonth += dir;
  if(calViewMonth < 0){ calViewMonth = 11; calViewYear--; }
  if(calViewMonth > 11){ calViewMonth = 0; calViewYear++; }
  renderCalendar();
}
function renderCalendar(){
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('calMonthLabel').textContent = monthNames[calViewMonth] + ' ' + calViewYear;
  const grid = document.getElementById('calGrid');
  const firstDay = new Date(calViewYear, calViewMonth, 1).getDay();
  const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);
  let html = '';
  for(let i=0; i<firstDay; i++){ html += '<span></span>'; }
  for(let d=1; d<=daysInMonth; d++){
    const thisDate = new Date(calViewYear, calViewMonth, d);
    const isPast = thisDate < today;
    if(isPast){
      html += `<span style="text-align:center; padding:8px 0; font-size:0.85rem; color:var(--muted-2); opacity:0.3;">${d}</span>`;
    } else {
      html += `<button type="button" onclick="selectCalDate(${calViewYear},${calViewMonth},${d})" style="text-align:center; padding:8px 0; font-size:0.85rem; background:none; border:none; color:var(--ink); cursor:pointer; border-radius:4px;" onmouseover="this.style.background='rgba(203,161,53,0.15)'" onmouseout="this.style.background='none'">${d}</button>`;
    }
  }
  grid.innerHTML = html;
}
function selectCalDate(y, m, d){
  const mm = String(m+1).padStart(2,'0');
  const dd = String(d).padStart(2,'0');
  document.getElementById('bookDate').value = `${y}-${mm}-${dd}`;
  const dateObj = new Date(y, m, d);
  document.getElementById('bookDateDisplay').value = dateObj.toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric'});
  document.getElementById('calPanel').style.display = 'none';
}
document.addEventListener('click', function(e){
  const wrap = document.getElementById('dateFieldWrap');
  if(wrap && !wrap.contains(e.target)){
    const panel = document.getElementById('calPanel');
    if(panel) panel.style.display = 'none';
  }
});

function sendContactWhatsApp(){
  const name = document.getElementById('contactName').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  if(!message){ showToast('Please write a message first'); return; }
  const text = `Hi Senrick,\nName: ${name || '(not provided)'}\nMessage: ${message}`;
  const waUrl = `https://wa.me/917007636989?text=${encodeURIComponent(text)}`;
  const waLink = document.createElement('a');
  waLink.href = waUrl; waLink.target = '_blank'; waLink.rel = 'noopener';
  document.body.appendChild(waLink); waLink.click(); waLink.remove();
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window._toastT);
  window._toastT = setTimeout(()=>t.classList.remove('show'), 2400);
}

function renderServices(cat, targetId){
  const list = document.getElementById(targetId || 'svcList');
  const items = cat==='all' ? SERVICES : SERVICES.filter(s=>s.cat===cat);
  let html = '';
  let lastGrp = null;
  items.forEach(s=>{
    if(s.grp !== lastGrp){
      html += `<div class="svc-group-head"><h3>${s.grp}</h3></div>`;
      lastGrp = s.grp;
    }
    html += `<div class="svc-row"><div><h4>${s.name}</h4></div><div class="p">${s.price}</div></div>`;
  });
  list.innerHTML = html;
}
function filterSvcSearch(query){
  const list = document.getElementById('svcList');
  const q = query.trim().toLowerCase();
  if(!q){
    const activeTab = document.querySelector('#svcTabs .tab.active');
    renderServices(activeTab ? activeTab.dataset.cat : 'makeup');
    return;
  }
  const matches = SERVICES.filter(s => s.name.toLowerCase().includes(q) || s.grp.toLowerCase().includes(q) || (s.cat.toLowerCase().includes(q) && s.grp !== 'Mehendi'));
  if(matches.length === 0){ list.innerHTML = '<div style="padding:24px; color:var(--muted);">No services found.</div>'; return; }
  let html = '';
  let lastGrp = null;
  matches.forEach(s=>{
    if(s.grp !== lastGrp){
      html += `<div class="svc-group-head"><h3>${s.grp}</h3></div>`;
      lastGrp = s.grp;
    }
    html += `<div class="svc-row"><div><h4>${s.name}</h4></div><div class="p">${s.price}</div></div>`;
  });
  list.innerHTML = html;
}
renderServices('makeup', 'svcListMakeup');
document.getElementById('svcTabs').addEventListener('click', e=>{
  const btn = e.target.closest('.tab'); if(!btn) return;
  document.querySelectorAll('#svcTabs .tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active'); renderServices(btn.dataset.cat);
  const searchInput = document.getElementById('svcSearchInput');
  if(searchInput) searchInput.value = '';
});
renderServices('makeup');

document.getElementById('faqList')?.addEventListener('click', e=>{
  const item = e.target.closest('.faq-item'); if(!item) return;
  item.classList.toggle('open');
});

let cart = [];
try{ cart = JSON.parse(localStorage.getItem('senrick_cart')||'[]'); }catch(e){ cart = []; }
function saveCart(){ try{ localStorage.setItem('senrick_cart', JSON.stringify(cart)); }catch(e){} renderCart(); }
function addToCart(name, price, btnEl){
  let img = '';
  if(btnEl){
    const card = btnEl.closest('.product-card');
    const ph = card && card.querySelector('.ph');
    if(ph){
      const bg = getComputedStyle(ph).backgroundImage;
      const m = bg && bg.match(/url\((['"]?)(.*?)\1\)/);
      if(m) img = m[2];
    }
  }
  const existing = cart.find(i=>i.name===name);
  if(existing){ existing.qty++; if(img) existing.img = img; } else { cart.push({name, price, qty:1, img}); }
  saveCart(); showToast(name+' added to cart'); openCart();
}
function changeQty(name, delta){
  const item = cart.find(i=>i.name===name); if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(i=>i.name!==name);
  saveCart();
}
function renderCart(){
  const box = document.getElementById('cartItems');
  const count = cart.reduce((n,i)=>n+i.qty,0);
  const countEl = document.getElementById('cartCount');
  if(countEl){
    countEl.style.display = count>0 ? 'flex':'none';
    countEl.textContent = count;
  }
  if(cart.length===0){ box.innerHTML = '<div class="empty-note">Your cart is empty.</div>'; }
  else{
    box.innerHTML = cart.map(i=>`
      <div class="cart-item">
        <div class="ph"${i.img ? ` style="background-image:url('${i.img}'); background-size:contain; background-repeat:no-repeat; background-position:center; background-color:#fff;"` : ''}></div>
        <div class="meta">
          <h5>${i.name}</h5>
          <div class="qty">
            <button onclick="changeQty('${i.name.replace(/'/g,"\\'")}',-1)">−</button>
            <span>${i.qty}</span>
            <button onclick="changeQty('${i.name.replace(/'/g,"\\'")}',1)">+</button>
          </div>
        </div>
        <div style="font-weight:700;">₹${i.price*i.qty}</div>
      </div>`).join('');
  }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cartTotal').textContent = '₹'+total;
}
function openCart(){ document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); }
function checkout(){
  if(cart.length===0){ showToast('Your cart is empty'); return; }
  const nameEl = document.getElementById('cartName');
  const phoneEl = document.getElementById('cartPhone');
  const note = document.getElementById('cartOrderNote');
  const name = (nameEl.value||'').trim();
  const rawPhone = (phoneEl.value||'').trim();
  const digits = rawPhone.replace(/[^\d]/g,'').replace(/^91/,'').replace(/^0/,'');
  if(!name){ note.textContent = 'Please enter your name.'; nameEl.focus(); return; }
  if(!/^[6-9]\d{9}$/.test(digits)){ note.textContent = 'Please enter a valid 10-digit mobile number.'; phoneEl.focus(); return; }
  note.textContent = '';
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const lines = cart.map((i,idx)=> (idx+1)+'. '+i.name+' x'+i.qty+' — ₹'+(i.price*i.qty)).join('\n');
  const msg = 'Hi Senrick, I would like to place an order:\n\n'+lines+'\n\nTotal: ₹'+total+'\n\nName: '+name+'\nMobile: '+digits+
    '\n\nPlease confirm availability — I understand you will contact me to confirm delivery and share UPI payment details.';
  const url = 'https://wa.me/917007636989?text='+encodeURIComponent(msg);
  let opened = null;
  try{ opened = window.open(url, '_blank', 'noopener'); }catch(e){}
  cart = []; saveCart();
  nameEl.value = ''; phoneEl.value = '';
  if(!opened){
    showToast('Tap the WhatsApp button to send your order.');
    const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'btn btn-solid'; a.style.cssText = 'width:100%; margin-top:12px; display:block; text-align:center; text-decoration:none;';
    a.textContent = 'Open WhatsApp to send order';
    document.getElementById('cartOrderForm').appendChild(a);
  }else{
    showToast('Order sent — we will contact you shortly to confirm.');
    closeCart();
  }
}

let shopCat = 'all', shopBrand = 'all', shopConcern = 'all';

function buildShopFilters(){
  const brands = [...new Set(PRODUCTS.filter(p=>p.brand).map(p=>p.brand))].sort();
  const concerns = [...new Set(PRODUCTS.filter(p=>p.concern).flatMap(p=>p.concern))].sort();
  document.getElementById('shopBrandList').innerHTML = brands.map(b=>`<button type="button" class="chip" data-brand="${b}">${b}</button>`).join('');
  document.getElementById('shopBrandFilter').innerHTML = '<option value="all">All brands</option>' + brands.map(b=>`<option value="${b}">${b}</option>`).join('');
  document.getElementById('shopConcernFilter').innerHTML = '<option value="all">All concerns</option>' + concerns.map(c=>`<option value="${c}">${c}</option>`).join('');
}

function renderProducts(){
  const grid = document.getElementById('productGrid');
  let items = shopCat==='all' ? PRODUCTS.slice() : PRODUCTS.filter(p=>p.cat===shopCat);
  if(shopBrand!=='all') items = items.filter(p=>p.brand===shopBrand);
  if(shopConcern!=='all') items = items.filter(p=>p.concern && p.concern.includes(shopConcern));
  document.querySelectorAll('#shopBrandList .chip').forEach(c=>c.classList.toggle('sel', c.dataset.brand===shopBrand));
  if(!items.length){
    grid.innerHTML = '<p style="grid-column:1/-1; padding:32px 4px; color:var(--muted);">No products match this filter yet — message us and we will check what is in stock.</p>';
    return;
  }
  grid.innerHTML = items.map(p=>`
    <div class="product-card">
      <div class="ph"${p.img ? ` style="background-image:url('${p.img}'); background-size:contain; background-repeat:no-repeat; background-position:center; background-color:#fff;"` : ''}>${p.img ? '' : `<span class="ph-tag">Replace: ${p.name}</span>`}</div>
      <div class="product-body">
        <span class="cat">${p.tag}</span>
        ${p.brand ? `<span class="brand">${p.brand}</span>` : ''}
        <h4>${p.name}</h4>
        <div class="row">
          ${p.price ? `<span class="price">₹${p.price}</span><button class="btn btn-sm" onclick="addToCart('${p.name.replace(/'/g,"\\'")}', ${p.price}, this)">Add</button>` : `<span class="ask">Ask in-studio for price</span>`}
        </div>
      </div>
    </div>`).join('');
}
buildShopFilters();
document.getElementById('shopTabs').addEventListener('click', e=>{
  const btn = e.target.closest('.tab'); if(!btn) return;
  document.querySelectorAll('#shopTabs .tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active'); shopCat = btn.dataset.cat; renderProducts();
});
document.getElementById('shopBrandList').addEventListener('click', e=>{
  const btn = e.target.closest('.chip'); if(!btn) return;
  shopBrand = (shopBrand===btn.dataset.brand) ? 'all' : btn.dataset.brand;
  document.getElementById('shopBrandFilter').value = shopBrand;
  renderProducts();
});
document.getElementById('shopBrandFilter').addEventListener('change', e=>{ shopBrand = e.target.value; renderProducts(); });
document.getElementById('shopConcernFilter').addEventListener('change', e=>{
  shopConcern = e.target.value;
  if(shopConcern!=='all'){
    shopCat = 'all';
    document.querySelectorAll('#shopTabs .tab').forEach(t=>t.classList.toggle('active', t.dataset.cat==='all'));
  }
  renderProducts();
});
renderProducts();

/* Book Appointment: multi-select service picker */
let selectedServices = [];
let svcPickerCat = 'makeup';
function toggleSvcPicker(){
  const field = document.getElementById('svcPickerTrigger').closest('.svc-picker-field');
  const opening = !field.classList.contains('open');
  field.classList.toggle('open');
  if(opening) renderSvcPickerList();
}
document.addEventListener('click', e=>{
  const field = document.getElementById('svcPickerTrigger') ? document.getElementById('svcPickerTrigger').closest('.svc-picker-field') : null;
  if(field && field.classList.contains('open') && !field.contains(e.target)) field.classList.remove('open');
});
document.getElementById('svcPickerTabs').addEventListener('click', e=>{
  const btn = e.target.closest('.spt');
  if(!btn) return;
  document.querySelectorAll('.svc-picker-tabs .spt').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  svcPickerCat = btn.dataset.cat;
  const pickerSearchInput = document.getElementById('svcPickerSearchInput');
  if(pickerSearchInput) pickerSearchInput.value = '';
  renderSvcPickerList();
});
function renderSvcPickerList(){
  const list = document.getElementById('svcPickerList');
  const items = SERVICES.filter(s=>s.cat===svcPickerCat);
  let html = '';
  let lastGrp = null;
  items.forEach(s=>{
    if(s.grp !== lastGrp){
      html += `<div class="svc-picker-group">${s.grp}</div>`;
      lastGrp = s.grp;
    }
    const checked = selectedServices.includes(s.name) ? 'checked' : '';
    html += `<label class="svc-picker-item"><span class="nm">${s.name}</span><span class="p">${s.price}</span><input type="checkbox" value="${s.name.replace(/"/g,'&quot;')}" ${checked} onchange="toggleSvcSelection(this)"></label>`;
  });
  list.innerHTML = html;
}
function filterSvcPickerSearch(query){
  const list = document.getElementById('svcPickerList');
  const q = query.trim().toLowerCase();
  if(!q){ renderSvcPickerList(); return; }
  const matches = SERVICES.filter(s => s.name.toLowerCase().includes(q) || s.grp.toLowerCase().includes(q) || (s.cat.toLowerCase().includes(q) && s.grp !== 'Mehendi'));
  if(matches.length === 0){ list.innerHTML = '<div style="padding:24px; color:var(--muted);">No services found.</div>'; return; }
  let html = '';
  let lastGrp = null;
  matches.forEach(s=>{
    if(s.grp !== lastGrp){
      html += `<div class="svc-picker-group">${s.grp}</div>`;
      lastGrp = s.grp;
    }
    const checked = selectedServices.includes(s.name) ? 'checked' : '';
    html += `<label class="svc-picker-item"><span class="nm">${s.name}</span><span class="p">${s.price}</span><input type="checkbox" value="${s.name.replace(/"/g,'&quot;')}" ${checked} onchange="toggleSvcSelection(this)"></label>`;
  });
  list.innerHTML = html;
}
function toggleSvcSelection(cb){
  if(cb.checked){ if(!selectedServices.includes(cb.value)) selectedServices.push(cb.value); }
  else { selectedServices = selectedServices.filter(n=>n!==cb.value); }
  updateSvcPickerTrigger();
}
function updateSvcPickerTrigger(){
  const trigger = document.getElementById('svcPickerTrigger');
  const count = document.getElementById('svcPickerCount');
  count.textContent = selectedServices.length + (selectedServices.length===1 ? ' selected' : ' selected');
  trigger.textContent = selectedServices.length===0 ? 'Select services'
    : selectedServices.length<=2 ? selectedServices.join(', ')
    : selectedServices.length + ' services selected';
}

function submitBooking(){
  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const date = document.getElementById('bookDate').value;
  const service = selectedServices.join(', ');
  const branch = document.getElementById('branchSelect').value;
  const slot = document.getElementById('slotSelect').value;
  if(!service){ showToast('Please choose at least one service'); return; }
  if(!branch){ showToast('Please choose a studio'); return; }
  if(!date){ showToast('Please choose a date'); return; }
  if(!slot){ showToast('Please choose a time slot'); return; }
  if(!name || !phone){ showToast('Please add your name and phone'); return; }

  const booking = {service, branch, slot, date, name, phone, id: Date.now()};
  let bookings = [];
  try{ bookings = JSON.parse(localStorage.getItem('senrick_bookings')||'[]'); }catch(e){}
  bookings.push(booking);
  try{ localStorage.setItem('senrick_bookings', JSON.stringify(bookings)); }catch(e){}

  notifyNewBooking(booking);

  document.getElementById('bookForm').style.display='none';
  document.getElementById('bookConfirm').classList.add('show');
  document.getElementById('confirmDetail').textContent =
    `${booking.service} · ${booking.branch} · ${booking.date} at ${booking.slot}`;
  renderMyBookings();
}
function notifyNewBooking(b){
  const msg = `New booking request — Senrick\n`+
    `Service(s): ${b.service}\n`+
    `Studio: ${b.branch}\n`+
    `Date: ${b.date}\n`+
    `Time: ${b.slot}\n`+
    `Name: ${b.name}\n`+
    `Phone: ${b.phone}`;

  // 1) WhatsApp — direct navigation (more reliable than window.open on mobile browsers)
  const waUrl = `https://wa.me/${SALON_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  const waLink = document.createElement('a');
  waLink.href = waUrl; waLink.target = '_blank'; waLink.rel = 'noopener';
  document.body.appendChild(waLink); waLink.click(); waLink.remove();

  // 2) Email — sent via EmailJS if credentials are configured above
  if(EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && window.emailjs){
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      service: b.service, branch: b.branch, date: b.date, slot: b.slot,
      client_name: b.name, client_phone: b.phone, message: msg
    }).then(()=>{
      console.log('Booking email sent successfully');
      showToast('✓ Email notification sent');
    }).catch((err)=>{
      console.error('Booking email failed:', err);
      showToast('Email failed: ' + (err && (err.text || err.message) || 'unknown error'));
    });
  } else {
    console.warn('EmailJS not configured or not loaded — email skipped.');
  }
}
function resetBooking(){
  document.getElementById('bookForm').style.display='block';
  document.getElementById('bookConfirm').classList.remove('show');
  selectedServices = [];
  updateSvcPickerTrigger();
  document.getElementById('branchSelect').value='';
  document.getElementById('slotSelect').value='';
  document.getElementById('bookName').value='';
  document.getElementById('bookPhone').value='';
  document.getElementById('bookDate').value='';
  document.getElementById('bookDateDisplay').value='';
}
function renderMyBookings(){
  let bookings = [];
  try{ bookings = JSON.parse(localStorage.getItem('senrick_bookings')||'[]'); }catch(e){}
  const box = document.getElementById('myBookings');
  if(bookings.length===0){ box.innerHTML=''; return; }
  box.innerHTML = '<label style="font-size:0.7rem; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:var(--muted-2); display:block; margin-bottom:10px;">Your bookings on this device</label>' +
    bookings.slice(-5).reverse().map(b=>`<div class="booking-chip"><span>${b.service} — ${b.branch}</span><span>${b.date}, ${b.slot}</span></div>`).join('');
}
renderMyBookings();

renderCart();
navigate();

function positionChatBelowWhatsApp(){
  const wa = document.querySelector('.wa-float');
  const chat = document.getElementById('chatWidget');
  if(!wa || !chat) return;
  if(getComputedStyle(wa).position !== 'fixed') return; // desktop layout differs, skip
  if(getComputedStyle(wa).display === 'none'){ chat.style.top=''; chat.style.bottom=''; return; } // mobile: WhatsApp is in the bottom bar
  const waRect = wa.getBoundingClientRect();
  // sit just above the WhatsApp button
  chat.style.top = 'auto';
  chat.style.bottom = Math.round(window.innerHeight - waRect.top + 12) + 'px';
}
window.addEventListener('load', positionChatBelowWhatsApp);
window.addEventListener('resize', positionChatBelowWhatsApp);
setTimeout(positionChatBelowWhatsApp, 100);
setTimeout(positionChatBelowWhatsApp, 500);
setTimeout(positionChatBelowWhatsApp, 1200);
if(document.fonts && document.fonts.ready){
  document.fonts.ready.then(positionChatBelowWhatsApp);
}
