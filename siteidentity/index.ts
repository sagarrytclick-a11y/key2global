export const siteIdentity = {
  // Basic Information
  name: "Key2Global",
  tagline: "Excellence in Global Learning",
  description: "Empowering Global Futures in Tech & Business.",
  type: "Educational Consulting Platform",
  industry: "Education Technology",
  
  // Contact Information
  contact: {
    email: "Key2globaleducation@gmail.com",
    phone: "+91-6239311536",
    whatsapp: "+91-9810718430",
  },
  
  address: {  
    street: "320, 3rd Floor, U.S Complex, Mathura Road, Jasola, Delhi, 110076",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    postalCode: "110076",
    fullAddress: "3rd Floor, US Complex Jasola Opp Apollo Hospital, New Delhi, Delhi, India - 110076"
  },
  
  // Social Media Links
  socialMedia: {
    linkedin: "https://linkedin.com/company/key2global",
    twitter: "https://twitter.com/key2global",
    facebook: "https://facebook.com/key2global",
    instagram: "https://instagram.com/key2global",
    youtube: "https://youtube.com/@key2global"
  },
  
  // Subsidiary Websites
  subsidiaries: [
    {
      name: "MedicalCounselling",
      url: "https://www.medicalcounselling.co.in/",
      description: "Medical education counseling services"
    },
    {
      name: "Edugaydoverseas",
      url: "https://edugaaydsoverseas.com/",
      description: "Overseas education consultancy"
    },
    {
      name: "AlphaWorldEducation",
      url: "https://alphaworldeducation.com",
      description: "Global education solutions"
    }
  ],
  
  // Business Hours
  businessHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },
};

// Export individual sections for easier imports
export const { 
  name: siteName, 
  tagline, 
  description: siteDescription,
  contact,
  address,
  socialMedia,
  subsidiaries,
  businessHours,
} = siteIdentity;
