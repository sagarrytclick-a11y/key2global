/**
 * Site Identity Configuration
 * ===========================
 * Centralized configuration for Key2Global website identity and contact information.
 * 
 * HOW TO UPDATE:
 * 1. Replace placeholder values (marked with "Your..." or "XXXXXX") with actual information
 * 2. Update phone numbers in international format (e.g., +91-9876543210)
 * 3. Add complete address details
 * 4. Update social media URLs with actual profile links
 * 5. Update subsidiary website URLs
 * 6. Add legal registration numbers if applicable
 * 
 * This configuration is used across:
 * - layout.tsx (metadata, title, description)
 * - Navbar.tsx (site name, subsidiary links)
 * - Footer.tsx (contact info, address, social media)
 * - WhatsAppButton.tsx (WhatsApp number, site name)
 */

export const siteIdentity = {
  // Basic Information
  name: "Key2Global",
  tagline: "Excellence in Global Learning",
  description: "Empowering Global Futures in Tech & Business.",
  type: "Educational Consulting Platform",
  industry: "Education Technology",
  
  // Contact Information
  contact: {
    email: "support@key2global.com",
    phone: "+91-6239311536",
    whatsapp: "+91-6239311536",
  },
  
  address: {  
    street: "3rd Floor, US Complex Jasola Opp Apollo Hospital, New Delhi",
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
      url: "https://edugaydoverseas.com",
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
