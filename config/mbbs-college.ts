export interface College {
  name: string;
  region: string;
  location: string;
  image: string;
  fees?: string;
}

/** Private MBBS colleges sourced from All_India_Private_MBBS_College_Names_State_Wise.pdf */
export const colleges: College[] = [
  // Andhra Pradesh
  { name: "Alluri Sitarama Raju Academy of Medical Sciences", region: "Andhra Pradesh", location: "Eluru", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Anil Neerukonda Institute of Medical Sciences", region: "Andhra Pradesh", location: "Visakhapatnam", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Dr. Pinnamaneni Siddhartha Institute of Medical Sciences & Research Foundation", region: "Andhra Pradesh", location: "Vijayawada", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Fathima Institute of Medical Sciences", region: "Andhra Pradesh", location: "Kadapa", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "G.S.L. Medical College", region: "Andhra Pradesh", location: "Rajahmundry", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Gayatri Vidya Parishad Institute of Health Care & Medical Technology", region: "Andhra Pradesh", location: "Visakhapatnam", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Great Eastern Medical School and Hospital", region: "Andhra Pradesh", location: "Srikakulam", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Konaseema Institute of Medical Sciences & Research Foundation", region: "Andhra Pradesh", location: "Amalapuram", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Katuri Medical College & Hospital", region: "Andhra Pradesh", location: "Guntur", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Maharaja Institute of Medical Sciences", region: "Andhra Pradesh", location: "Vizianagaram", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Narayana Medical College", region: "Andhra Pradesh", location: "Nellore", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "NRI Academy of Medical Sciences", region: "Andhra Pradesh", location: "Guntur", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "NRI Institute of Medical Sciences", region: "Andhra Pradesh", location: "Visakhapatnam", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "P.E.S. Institute of Medical Sciences & Research", region: "Andhra Pradesh", location: "Kuppam", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Santhiram Medical College & General Hospital", region: "Andhra Pradesh", location: "Nandyal", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Sathya Sai Medical College and Research Institute", region: "Andhra Pradesh", location: "Tirupati", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Viswabharathi Medical College", region: "Andhra Pradesh", location: "Kurnool", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },

  // Assam
  { name: "Pratiksha Institute of Medical Sciences", region: "Assam", location: "Guwahati", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Valley View Medical College and Hospital", region: "Assam", location: "Nalbari", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },

  // Bihar
  { name: "Katihar Medical College", region: "Bihar", location: "Katihar", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Lord Buddha Koshi Medical College and Hospital", region: "Bihar", location: "Saharsa", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Madhubani Medical College", region: "Bihar", location: "Madhubani", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Mata Gujri Memorial Medical College and L.S.K. Hospital", region: "Bihar", location: "Kishanganj", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Narayan Medical College & Hospital", region: "Bihar", location: "Sasaram", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Shree Narayan Medical Institute & Hospital", region: "Bihar", location: "Saharsa", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },

  // Chhattisgarh
  { name: "Chandulal Chandrakar Memorial Hospital & Medical College", region: "Chhattisgarh", location: "Durg", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Raipur Institute of Medical Sciences", region: "Chhattisgarh", location: "Raipur", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Shankaracharya Institute of Medical Sciences", region: "Chhattisgarh", location: "Bhilai", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },

  // Delhi
  { name: "Hamdard Institute of Medical Sciences & Research", region: "Delhi", location: "New Delhi", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Army College of Medical Sciences", region: "Delhi", location: "New Delhi", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },

  // Gujarat
  { name: "Ananya College of Medicine & Research", region: "Gujarat", location: "Kalol", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Banas Medical College & Research Institute", region: "Gujarat", location: "Palanpur", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "C.U. Shah Medical College", region: "Gujarat", location: "Surendranagar", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "GCS Medical College", region: "Gujarat", location: "Ahmedabad", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Gujarat Adani Institute of Medical Sciences", region: "Gujarat", location: "Bhuj", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "N.D. Desai Faculty of Medical Science and Research", region: "Gujarat", location: "Nadiad", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Pramukhswami Medical College", region: "Gujarat", location: "Karamsad", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Smt. B.K. Shah Medical Institute & Research Centre", region: "Gujarat", location: "Vadodara", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Shantabaa Medical College & General Hospital", region: "Gujarat", location: "Amreli", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Zydus Medical College and Hospital", region: "Gujarat", location: "Dahod", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },

  // Haryana
  { name: "Adesh Medical College & Hospital", region: "Haryana", location: "Kurukshetra", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Al-Falah School of Medical Sciences & Research Centre", region: "Haryana", location: "Faridabad", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Maharaja Agrasen Medical College", region: "Haryana", location: "Agroha", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "M.M. Institute of Medical Sciences & Research", region: "Haryana", location: "Mullana", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "N.C. Medical College & Hospital", region: "Haryana", location: "Panipat", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "SGT Medical College, Hospital & Research Institute", region: "Haryana", location: "Gurugram", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "World College of Medical Sciences & Research", region: "Haryana", location: "Jhajjar", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },

  // Jammu and Kashmir
  { name: "Acharya Shri Chander College of Medical Sciences", region: "Jammu and Kashmir", location: "Jammu", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },

  // Jharkhand
  { name: "Manipal Tata Medical College", region: "Jharkhand", location: "Jamshedpur", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Mahavir Institute of Medical Sciences", region: "Jharkhand", location: "Ranchi", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },

  // Karnataka
  { name: "AJ Institute of Medical Sciences & Research Centre", region: "Karnataka", location: "Mangaluru", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Akash Institute of Medical Sciences & Research Centre", region: "Karnataka", location: "Bengaluru", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Al-Ameen Medical College Hospital", region: "Karnataka", location: "Vijayapura", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Basaveshwara Medical College and Hospital", region: "Karnataka", location: "Chitradurga", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "BLDE (Deemed to be University) Shri B.M. Patil Medical College", region: "Karnataka", location: "Vijayapura", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Brindavan College of Medical Sciences", region: "Karnataka", location: "Bengaluru", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Father Muller Medical College", region: "Karnataka", location: "Mangaluru", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "J.J.M. Medical College", region: "Karnataka", location: "Davangere", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Jawaharlal Nehru Medical College", region: "Karnataka", location: "Belagavi", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Kanachur Institute of Medical Sciences", region: "Karnataka", location: "Mangaluru", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Khaja Bandanawaz Institute of Medical Sciences", region: "Karnataka", location: "Kalaburagi", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "KLE Academy of Higher Education and Research Institute of Medical Sciences", region: "Karnataka", location: "Belagavi", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Mahadevappa Rampure Medical College", region: "Karnataka", location: "Kalaburagi", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Navodaya Medical College", region: "Karnataka", location: "Raichur", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Rajarajeswari Medical College & Hospital", region: "Karnataka", location: "Bengaluru", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "SDM College of Medical Sciences & Hospital", region: "Karnataka", location: "Dharwad", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "St. John's Medical College", region: "Karnataka", location: "Bengaluru", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Vydehi Institute of Medical Sciences & Research Centre", region: "Karnataka", location: "Bengaluru", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },

  // Kerala
  { name: "Amala Institute of Medical Sciences", region: "Kerala", location: "Thrissur", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Amrita School of Medicine", region: "Kerala", location: "Kochi", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Dr. Somervell Memorial CSI Medical College", region: "Kerala", location: "Thiruvananthapuram", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Jubilee Mission Medical College & Research Institute", region: "Kerala", location: "Thrissur", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "KMCT Medical College", region: "Kerala", location: "Kozhikode", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Malankara Orthodox Syrian Church Medical College", region: "Kerala", location: "Kolenchery", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Pushpagiri Institute of Medical Sciences and Research Centre", region: "Kerala", location: "Thiruvalla", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Travancore Medical College", region: "Kerala", location: "Kollam", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Dr. Moopen's Medical College", region: "Kerala", location: "Wayanad", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Sree Gokulam Medical College & Research Foundation", region: "Kerala", location: "Thiruvananthapuram", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },

  // Madhya Pradesh
  { name: "Amaltas Institute of Medical Sciences", region: "Madhya Pradesh", location: "Dewas", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Index Medical College Hospital & Research Centre", region: "Madhya Pradesh", location: "Indore", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "LN Medical College and Research Centre", region: "Madhya Pradesh", location: "Bhopal", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "People's College of Medical Sciences & Research Centre", region: "Madhya Pradesh", location: "Bhopal", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "R.K.D.F. Medical College Hospital & Research Centre", region: "Madhya Pradesh", location: "Bhopal", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Aurobindo Institute of Medical Sciences", region: "Madhya Pradesh", location: "Indore", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Sri Satya Sai Medical College and Research Institute", region: "Madhya Pradesh", location: "Sehore", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },

  // Maharashtra
  { name: "ACPM Medical College", region: "Maharashtra", location: "Dhule", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Ashwini Rural Medical College", region: "Maharashtra", location: "Solapur", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Bharati Vidyapeeth Deemed University Medical College", region: "Maharashtra", location: "Pune", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Datta Meghe Medical College", region: "Maharashtra", location: "Nagpur", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Dr. D.Y. Patil Medical College, Hospital & Research Centre", region: "Maharashtra", location: "Pune", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Dr. D.Y. Patil Medical College", region: "Maharashtra", location: "Navi Mumbai", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Dr. Vithalrao Vikhe Patil Foundation's Medical College", region: "Maharashtra", location: "Ahmednagar", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Jawaharlal Nehru Medical College, Sawangi (Meghe)", region: "Maharashtra", location: "Wardha", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Krishna Institute of Medical Sciences", region: "Maharashtra", location: "Karad", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Mahatma Gandhi Institute of Medical Sciences", region: "Maharashtra", location: "Sevagram", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Maharashtra Institute of Medical Education & Research", region: "Maharashtra", location: "Talegaon", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "NKP Salve Institute of Medical Sciences & Research Centre", region: "Maharashtra", location: "Nagpur", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Pravara Institute of Medical Sciences", region: "Maharashtra", location: "Loni", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Rural Medical College", region: "Maharashtra", location: "Loni", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Terna Medical College", region: "Maharashtra", location: "Navi Mumbai", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Vikhe Patil Medical College", region: "Maharashtra", location: "Ahmednagar", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },

  // Manipur
  { name: "Shija Academy of Health Sciences", region: "Manipur", location: "Langol", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },

  // Odisha
  { name: "Hi-Tech Medical College & Hospital", region: "Odisha", location: "Bhubaneswar", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Hi-Tech Medical College & Hospital", region: "Odisha", location: "Rourkela", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Institute of Medical Sciences & SUM Hospital", region: "Odisha", location: "Bhubaneswar", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Institute of Medical Sciences & SUM Hospital", region: "Odisha", location: "Phulnakhara", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Kalinga Institute of Medical Sciences", region: "Odisha", location: "Bhubaneswar", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },

  // Puducherry
  { name: "Aarupadai Veedu Medical College & Hospital", region: "Puducherry", location: "Puducherry", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Mahatma Gandhi Medical College & Research Institute", region: "Puducherry", location: "Puducherry", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Manakula Vinayagar Institute of Medical Sciences", region: "Puducherry", location: "Puducherry", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Sathya Sai Medical College & Research Institute", region: "Puducherry", location: "Puducherry", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Sri Venkateshwaraa Medical College Hospital & Research Centre", region: "Puducherry", location: "Puducherry", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },

  // Punjab
  { name: "Adesh Institute of Medical Sciences & Research", region: "Punjab", location: "Bathinda", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Christian Medical College", region: "Punjab", location: "Ludhiana", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Dayanand Medical College & Hospital", region: "Punjab", location: "Ludhiana", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Punjab Institute of Medical Sciences", region: "Punjab", location: "Jalandhar", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "RIMT University School of Medical and Research Centre", region: "Punjab", location: "Gobindgarh", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "SGRD Institute of Medical Sciences & Research", region: "Punjab", location: "Amritsar", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },

  // Rajasthan
  { name: "American International Institute of Medical Sciences", region: "Rajasthan", location: "Udaipur", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Ananta Institute of Medical Sciences & Research Centre", region: "Rajasthan", location: "Rajsamand", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Geetanjali Medical College & Hospital", region: "Rajasthan", location: "Udaipur", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "JNU Institute for Medical Sciences & Research Centre", region: "Rajasthan", location: "Jaipur", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Jaipur National University Institute for Medical Sciences & Research Centre", region: "Rajasthan", location: "Jaipur", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Mahatma Gandhi Medical College & Hospital", region: "Rajasthan", location: "Jaipur", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "National Institute of Medical Sciences & Research", region: "Rajasthan", location: "Jaipur", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Pacific Institute of Medical Sciences", region: "Rajasthan", location: "Udaipur", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Pacific Medical College & Hospital", region: "Rajasthan", location: "Udaipur", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },

  // Sikkim
  { name: "Sikkim Manipal Institute of Medical Sciences", region: "Sikkim", location: "Gangtok", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },

  // Tamil Nadu
  { name: "ACS Medical College and Hospital", region: "Tamil Nadu", location: "Chennai", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Chettinad Hospital & Research Institute", region: "Tamil Nadu", location: "Kelambakkam", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Christian Medical College", region: "Tamil Nadu", location: "Vellore", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Dhanalakshmi Srinivasan Medical College and Hospital", region: "Tamil Nadu", location: "Perambalur", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "KMCH Institute of Health Sciences", region: "Tamil Nadu", location: "Coimbatore", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Karpaga Vinayaga Institute of Medical Sciences", region: "Tamil Nadu", location: "Chengalpattu", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Meenakshi Medical College & Research Institute", region: "Tamil Nadu", location: "Kanchipuram", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Saveetha Medical College & Hospital", region: "Tamil Nadu", location: "Chennai", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "SRM Medical College Hospital & Research Centre", region: "Tamil Nadu", location: "Kattankulathur", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Sathya Sai Medical College & Research Institute", region: "Tamil Nadu", location: "Chengalpattu", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Tagore Medical College & Hospital", region: "Tamil Nadu", location: "Chennai", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Velammal Medical College Hospital & Research Institute", region: "Tamil Nadu", location: "Madurai", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Vinayaka Missions Kirupananda Variyar Medical College & Hospitals", region: "Tamil Nadu", location: "Salem", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },

  // Telangana
  { name: "Deccan College of Medical Sciences", region: "Telangana", location: "Hyderabad", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Kamineni Academy of Medical Sciences & Research Centre", region: "Telangana", location: "Hyderabad", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Kamineni Institute of Medical Sciences", region: "Telangana", location: "Narketpally", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Mamata Academy of Medical Sciences", region: "Telangana", location: "Bachupally", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "Mamata Medical College", region: "Telangana", location: "Khammam", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Mediciti Institute of Medical Sciences", region: "Telangana", location: "Ghanpur", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Prathima Institute of Medical Sciences", region: "Telangana", location: "Karimnagar", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Shadan Institute of Medical Sciences", region: "Telangana", location: "Hyderabad", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Surabhi Institute of Medical Sciences", region: "Telangana", location: "Siddipet", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },

  // Tripura
  { name: "Tripura Medical College & Dr. B.R. Ambedkar Memorial Teaching Hospital", region: "Tripura", location: "Hapania", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },

  // Uttar Pradesh
  { name: "Era's Lucknow Medical College & Hospital", region: "Uttar Pradesh", location: "Lucknow", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "F.H. Medical College & Hospital", region: "Uttar Pradesh", location: "Agra", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Hind Institute of Medical Sciences", region: "Uttar Pradesh", location: "Barabanki", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Hind Institute of Medical Sciences", region: "Uttar Pradesh", location: "Sitapur", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Integral Institute of Medical Sciences & Research", region: "Uttar Pradesh", location: "Lucknow", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Jawaharlal Nehru Medical College", region: "Uttar Pradesh", location: "Aligarh", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
  { name: "KD Medical College Hospital & Research Centre", region: "Uttar Pradesh", location: "Mathura", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Krishna Mohan Medical College & Hospital", region: "Uttar Pradesh", location: "Mathura", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Muzaffarnagar Medical College", region: "Uttar Pradesh", location: "Muzaffarnagar", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Rama Medical College Hospital & Research Centre", region: "Uttar Pradesh", location: "Hapur", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },
  { name: "Rama Medical College Hospital & Research Centre", region: "Uttar Pradesh", location: "Kanpur", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Rohilkhand Medical College & Hospital", region: "Uttar Pradesh", location: "Bareilly", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Ram Murti Smarak Institute of Medical Sciences", region: "Uttar Pradesh", location: "Bareilly", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Subharti Medical College", region: "Uttar Pradesh", location: "Meerut", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },
  { name: "Teerthanker Mahaveer Medical College & Research Centre", region: "Uttar Pradesh", location: "Moradabad", image: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=800&auto=format&fit=crop" },
  { name: "United Institute of Medical Sciences", region: "Uttar Pradesh", location: "Prayagraj", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop" },
  { name: "Varun Arjun Medical College & Rohilkhand Hospital", region: "Uttar Pradesh", location: "Shahjahanpur", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop" },
  { name: "Venus Institute of Medical Sciences", region: "Uttar Pradesh", location: "Bijnor", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },

  // Uttarakhand
  { name: "Doon Institute of Medical Sciences", region: "Uttarakhand", location: "Dehradun", image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=800&auto=format&fit=crop" },
  { name: "Himalayan Institute of Medical Sciences", region: "Uttarakhand", location: "Jolly Grant", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Guru Ram Rai Institute of Medical & Health Sciences", region: "Uttarakhand", location: "Dehradun", image: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&auto=format&fit=crop" },
  { name: "Swami Rama Himalayan University", region: "Uttarakhand", location: "Dehradun", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop" },

  // West Bengal
  { name: "IQ City Medical College", region: "West Bengal", location: "Durgapur", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
  { name: "Jagannath Gupta Institute of Medical Sciences & Hospital", region: "West Bengal", location: "Kolkata", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
  { name: "KPC Medical College & Hospital", region: "West Bengal", location: "Jadavpur", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop" },
  { name: "Shri Ramakrishna Institute of Medical Sciences & Sanaka Hospitals", region: "West Bengal", location: "Durgapur", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop" },

];

export const REGION_ORDER = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
] as const;

export const PER_PAGE = 9;
