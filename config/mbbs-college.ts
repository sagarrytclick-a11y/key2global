export interface College {
  name: string;
  fees: string;
  region: string;
  location: string;
  image: string;
}

export const colleges: College[] = [
  { name: "Maulana Azad Medical College", fees: "₹1.35 LPA", region: "DELHI - NCR", location: "New Delhi", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Lady Hardinge Medical College", fees: "₹1.40 LPA", region: "DELHI - NCR", location: "New Delhi", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "UCMS Delhi", fees: "₹1.20 LPA", region: "DELHI - NCR", location: "New Delhi", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Santosh Medical College", fees: "₹9.50 LPA", region: "DELHI - NCR", location: "Ghaziabad", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Subharti Medical College", fees: "₹8.75 LPA", region: "DELHI - NCR", location: "Meerut", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "School of Medical Sciences, Sharda", fees: "₹10.50 LPA", region: "DELHI - NCR", location: "Greater Noida", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Muzaffarnagar Medical College", fees: "₹9.25 LPA", region: "DELHI - NCR", location: "Muzaffarnagar", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "ABVIMS & RML Hospital", fees: "₹1.45 LPA", region: "DELHI - NCR", location: "New Delhi", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "School of Medical Sciences, Noida Intl.", fees: "₹9.90 LPA", region: "DELHI - NCR", location: "Greater Noida", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Rohilkhand Medical College", fees: "₹8.90 LPA", region: "DELHI - NCR", location: "Bareilly", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },

  { name: "Armed Forces Medical College", fees: "₹1.10 LPA", region: "PUNE", location: "Pune", image: "https://images.unsplash.com/photo-1587351177073-e75f89d29a6c?q=80&w=800&auto=format&fit=crop" },
  { name: "B.J. Government Medical College", fees: "₹1.05 LPA", region: "PUNE", location: "Pune", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Dr. D.Y. Patil Medical College", fees: "₹22 LPA", region: "PUNE", location: "Pune", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Bharati Vidyapeeth Medical College", fees: "₹19.5 LPA", region: "PUNE", location: "Pune", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop" },
  { name: "MIMER Medical College", fees: "₹16 LPA", region: "PUNE", location: "Talegaon" , image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop" },
  { name: "Symbiosis Medical College for Women", fees: "₹18 LPA", region: "PUNE", location: "Pune", image: "https://images.unsplash.com/photo-1580281657527-47e8c0d5f3f7?q=80&w=800&auto=format&fit=crop" },
  { name: "Smt. Kashibai Navale Medical College", fees: "₹17.5 LPA", region: "PUNE", location: "Pune", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },

  { name: "AIIMS Delhi", fees: "₹1.28 LPA", region: "BANGALORE - CHENNAI", location: "New Delhi", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "CMC Vellore", fees: "₹2.75 LPA", region: "BANGALORE - CHENNAI", location: "Vellore", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "St. John's Medical College", fees: "₹8.50 LPA", region: "BANGALORE - CHENNAI", location: "Bangalore", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Bangalore Medical College", fees: "₹1.15 LPA", region: "BANGALORE - CHENNAI", location: "Bangalore", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "M.S. Ramaiah Medical College", fees: "₹19 LPA", region: "BANGALORE - CHENNAI", location: "Bangalore", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Kempegowda Institute of Medical Sciences", fees: "₹16.5 LPA", region: "BANGALORE - CHENNAI", location: "Bangalore", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Madras Medical College", fees: "₹1.30 LPA", region: "BANGALORE - CHENNAI", location: "Chennai", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Sri Ramachandra Medical College", fees: "₹23 LPA", region: "BANGALORE - CHENNAI", location: "Chennai", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "SRM Medical College", fees: "₹21.5 LPA", region: "BANGALORE - CHENNAI", location: "Chennai", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "JIPMER Puducherry", fees: "₹1.05 LPA", region: "BANGALORE - CHENNAI", location: "Puducherry", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },

  { name: "PGIMER Chandigarh", fees: "₹1.20 LPA", region: "PUNJAB - RAJASTHAN", location: "Chandigarh", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop" },
  { name: "Government Medical College Patiala", fees: "₹1.18 LPA", region: "PUNJAB - RAJASTHAN", location: "Patiala", image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop" },
  { name: "Dayanand Medical College", fees: "₹14.5 LPA", region: "PUNJAB - RAJASTHAN", location: "Ludhiana", image: "https://images.unsplash.com/photo-1580281657527-47e8c0d5f3f7?q=80&w=800&auto=format&fit=crop" },
  { name: "SMS Medical College", fees: "₹1.22 LPA", region: "PUNJAB - RAJASTHAN", location: "Jaipur", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "NIMS University Medical College", fees: "₹17 LPA", region: "PUNJAB - RAJASTHAN", location: "Jaipur", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" }
];

export const REGION_ORDER = ["DELHI - NCR", "PUNE", "BANGALORE - CHENNAI", "PUNJAB - RAJASTHAN"];
export const PER_PAGE = 6;