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
  { name: "Alluri Sitarama Raju Academy of Medical Sciences", region: "Andhra Pradesh", location: "Eluru", image: "https://api.edufiz.com/images/colleges/YuITY54kqvE5DVBA.jpeg" },
  { name: "Anil Neerukonda Institute of Medical Sciences", region: "Andhra Pradesh", location: "Visakhapatnam", image: "/colleges/mbbs/anil-neerukonda-institute-of-medical-sciences-visakhapatnam.jpg" },
  { name: "Dr. Pinnamaneni Siddhartha Institute of Medical Sciences & Research Foundation", region: "Andhra Pradesh", location: "Vijayawada", image: "https://www.collegebatch.com/static/clg-gallery/dr-pinnamaneni-siddhartha-institute-of-medical-sciences-amp-research-foundation-drpsims-amp-rf-vijayawada-178064.webp" },
  { name: "Fathima Institute of Medical Sciences", region: "Andhra Pradesh", location: "Kadapa", image: "/colleges/mbbs/fathima-institute-of-medical-sciences-kadapa.webp" },
  { name: "G.S.L. Medical College", region: "Andhra Pradesh", location: "Rajahmundry", image: "/colleges/mbbs/g-s-l-medical-college-rajahmundry.webp" },
  { name: "Gayatri Vidya Parishad Institute of Health Care & Medical Technology", region: "Andhra Pradesh", location: "Visakhapatnam", image: "/colleges/mbbs/gayatri-vidya-parishad-institute-of-health-care-medical-technology-visakhapatnam.jpg" },
  { name: "Great Eastern Medical School and Hospital", region: "Andhra Pradesh", location: "Srikakulam", image: "https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2020/10/21/586a0c4401884af399e9f5b098880162.jpg" },
  { name: "Konaseema Institute of Medical Sciences & Research Foundation", region: "Andhra Pradesh", location: "Amalapuram", image: "/colleges/mbbs/konaseema-institute-of-medical-sciences-research-foundation-amalapuram.jpg" },
  { name: "Katuri Medical College & Hospital", region: "Andhra Pradesh", location: "Guntur", image: "https://www.edufever.com/wp-content/uploads/2020/09/Katuri-Medical-College-Guntur-.webp" },
  { name: "Maharaja Institute of Medical Sciences", region: "Andhra Pradesh", location: "Vizianagaram", image: "/colleges/mbbs/maharaja-institute-of-medical-sciences-vizianagaram.webp" },
  { name: "Narayana Medical College", region: "Andhra Pradesh", location: "Nellore", image: "/colleges/mbbs/narayana-medical-college-nellore.jpg" },
  { name: "NRI Academy of Medical Sciences", region: "Andhra Pradesh", location: "Guntur", image: "/colleges/mbbs/nri-academy-of-medical-sciences-guntur.webp" },
  { name: "NRI Institute of Medical Sciences", region: "Andhra Pradesh", location: "Visakhapatnam", image: "/colleges/mbbs/nri-institute-of-medical-sciences-visakhapatnam.jpg" },
  { name: "P.E.S. Institute of Medical Sciences & Research", region: "Andhra Pradesh", location: "Kuppam", image: "/colleges/mbbs/p-e-s-institute-of-medical-sciences-research-kuppam.png" },
  { name: "Santhiram Medical College & General Hospital", region: "Andhra Pradesh", location: "Nandyal", image: "/colleges/mbbs/santhiram-medical-college-general-hospital-nandyal.png" },
  { name: "Shri Sathya Sai Medical College and Research Institute", region: "Andhra Pradesh", location: "Tirupati", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHm4DnGLzdw58oev2b89KzIIFHgC_dUakNA&s" },
  { name: "Viswabharathi Medical College", region: "Andhra Pradesh", location: "Kurnool", image: "/colleges/mbbs/viswabharathi-medical-college-kurnool.jpg" },

  // Assam
  { name: "Pratiksha Institute of Medical Sciences", region: "Assam", location: "Guwahati", image: "/colleges/mbbs/pratiksha-institute-of-medical-sciences-guwahati.png" },
  { name: "Valley View Medical College and Hospital", region: "Assam", location: "Nalbari", image: "https://media.licdn.com/dms/image/v2/D561BAQFoeY-ny2GQ0w/company-background_10000/company-background_10000/0/1654109092627/valley_view_hospital_cover?e=2147483647&v=beta&t=XJd5R4k7Bs_VhoiztUDhf6PuIROz1RH-B8-cYNhrHhU" },

  // Bihar
  { name: "Katihar Medical College", region: "Bihar", location: "Katihar", image: "/colleges/mbbs/katihar-medical-college-katihar.jpg" },
  { name: "Lord Buddha Koshi Medical College and Hospital", region: "Bihar", location: "Saharsa", image: "https://lbkpc.com/images/campus/lord-buddha-koshi-medical-college-and-hospital.jpg" },
  { name: "Madhubani Medical College", region: "Bihar", location: "Madhubani", image: "https://mdmsenquiry.com/wp-content/uploads/2025/08/Madhubani-Medical-College.webp" },
  { name: "Mata Gujri Memorial Medical College and L.S.K. Hospital", region: "Bihar", location: "Kishanganj", image: "/colleges/mbbs/mata-gujri-memorial-medical-college-and-l-s-k-hospital-kishanganj.jpg" },
  { name: "Narayan Medical College & Hospital", region: "Bihar", location: "Sasaram", image: "/colleges/mbbs/narayan-medical-college-hospital-sasaram.webp" },
  { name: "Shree Narayan Medical Institute & Hospital", region: "Bihar", location: "Saharsa", image: "https://content.jdmagicbox.com/comp/saharsa/y2/9999p6478.6478.171109150240.x9y2/catalogue/shree-narayan-medical-institute-and-hospital-saharsa-ho-saharsa-hospitals-xw5vlgpa91.jpg" },

  // Chhattisgarh
  { name: "Chandulal Chandrakar Memorial Hospital & Medical College", region: "Chhattisgarh", location: "Durg", image: "/colleges/mbbs/chandulal-chandrakar-memorial-hospital-medical-college-durg.png" },
  { name: "Raipur Institute of Medical Sciences", region: "Chhattisgarh", location: "Raipur", image: "/colleges/mbbs/raipur-institute-of-medical-sciences-raipur.webp" },
  { name: "Shri Shankaracharya Institute of Medical Sciences", region: "Chhattisgarh", location: "Bhilai", image: "https://assets.findmycollege.com/FMC_IMAGES/625/assets/Shri-Shankaracharya-Institute-of-Medical-Science-Bhilai-jpg.webp" },

  // Delhi
  { name: "Hamdard Institute of Medical Sciences & Research", region: "Delhi", location: "New Delhi", image: "/colleges/mbbs/hamdard-institute-of-medical-sciences-research-new-delhi.webp" },
  { name: "Army College of Medical Sciences", region: "Delhi", location: "New Delhi", image: "https://caderaedu.del1.vultrobjects.com/colleges/2f75e3e7-6016-4309-8f57-81078841b777.jpg" },

  // Gujarat
  { name: "Ananya College of Medicine & Research", region: "Gujarat", location: "Kalol", image: "https://manage.collnod.com/Upload/Content/web_img_0_8_4_2025_12_21_4.jpg" },
  { name: "Banas Medical College & Research Institute", region: "Gujarat", location: "Palanpur", image: "/colleges/mbbs/banas-medical-college-research-institute-palanpur.webp" },
  { name: "C.U. Shah Medical College", region: "Gujarat", location: "Surendranagar", image: "/colleges/mbbs/c-u-shah-medical-college-surendranagar.jpg" },
  { name: "GCS Medical College", region: "Gujarat", location: "Ahmedabad", image: "/colleges/mbbs/gcs-medical-college-ahmedabad.jpg" },
  { name: "Gujarat Adani Institute of Medical Sciences", region: "Gujarat", location: "Bhuj", image: "https://www.edufever.com/wp-content/uploads/2021/11/Gujarat-Adani-Institute-of-Medical-Sciences-5.webp" },
  { name: "N.D. Desai Faculty of Medical Science and Research", region: "Gujarat", location: "Nadiad", image: "/colleges/mbbs/n-d-desai-faculty-of-medical-science-and-research-nadiad.webp" },
  { name: "Pramukhswami Medical College", region: "Gujarat", location: "Karamsad", image: "/colleges/mbbs/pramukhswami-medical-college-karamsad.jpg" },
  { name: "Smt. B.K. Shah Medical Institute & Research Centre", region: "Gujarat", location: "Vadodara", image: "/colleges/mbbs/smt-b-k-shah-medical-institute-research-centre-vadodara.jpg" },
    { name: "Shantabaa Medical College & General Hospital", region: "Gujarat", location: "Amreli", image: "https://www.zmchdahod.org/site_img/index/02.jpg" },

  // Haryana
  { name: "Adesh Medical College & Hospital", region: "Haryana", location: "Kurukshetra", image: "/colleges/mbbs/adesh-medical-college-hospital-kurukshetra.webp" },
  { name: "Al-Falah School of Medical Sciences & Research Centre", region: "Haryana", location: "Faridabad", image: "/colleges/mbbs/al-falah-school-of-medical-sciences-research-centre-faridabad.jpg" },
  { name: "Maharaja Agrasen Medical College", region: "Haryana", location: "Agroha", image: "/colleges/mbbs/maharaja-agrasen-medical-college-agroha.jpg" },
  { name: "M.M. Institute of Medical Sciences & Research", region: "Haryana", location: "Mullana", image: "/colleges/mbbs/m-m-institute-of-medical-sciences-research-mullana.jpg" },
  { name: "N.C. Medical College & Hospital", region: "Haryana", location: "Panipat", image: "https://rmgoe.org/universities/India/images/1751112457_685fdb0900139.png" },
  { name: "SGT Medical College, Hospital & Research Institute", region: "Haryana", location: "Gurugram", image: "/colleges/mbbs/sgt-medical-college-hospital-research-institute-gurugram.webp" },
  { name: "World College of Medical Sciences & Research", region: "Haryana", location: "Jhajjar", image: "/colleges/mbbs/world-college-of-medical-sciences-research-jhajjar.png" },

  // Jammu and Kashmir
  { name: "Acharya Shri Chander College of Medical Sciences", region: "Jammu and Kashmir", location: "Jammu", image: "/colleges/mbbs/acharya-shri-chander-college-of-medical-sciences-jammu.png" },

  // Jharkhand
  { name: "Manipal Tata Medical College", region: "Jharkhand", location: "Jamshedpur", image: "/colleges/mbbs/manipal-tata-medical-college-jamshedpur.jpg" },
  { name: "Mahavir Institute of Medical Sciences", region: "Jharkhand", location: "Ranchi", image: "/colleges/mbbs/mahavir-institute-of-medical-sciences-ranchi.jpg" },

  // Karnataka
  { name: "AJ Institute of Medical Sciences & Research Centre", region: "Karnataka", location: "Mangaluru", image: "/colleges/mbbs/aj-institute-of-medical-sciences-research-centre-mangaluru.png" },
  { name: "Akash Institute of Medical Sciences & Research Centre", region: "Karnataka", location: "Bengaluru", image: "https://mbbscouncil.com/wp-content/uploads/2018/10/Akash-Institute-of-Medical-Science-and-Research-Centre-1280x720.png" },
  { name: "Al-Ameen Medical College Hospital", region: "Karnataka", location: "Vijayapura", image: "/colleges/mbbs/al-ameen-medical-college-hospital-vijayapura.webp" },
  { name: "Basaveshwara Medical College and Hospital", region: "Karnataka", location: "Chitradurga", image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1762869437Screenshot20251111192336.png" },
  { name: "BLDE (Deemed to be University) Shri B.M. Patil Medical College", region: "Karnataka", location: "Vijayapura", image: "/colleges/mbbs/blde-deemed-to-be-university-shri-b-m-patil-medical-college-vijayapura.jpg" },
    { name: "Brindavan College of Medical Sciences", region: "Karnataka", location: "Bengaluru", image: "https://content.jdmagicbox.com/v2/comp/bangalore/n8/080pxx80.xx80.241111190058.k1n8/catalogue/brindavan-college-bagalur-cross-bangalore-colleges-uo78ryp38h.jpg" },
    { name: "Father Muller Medical College", region: "Karnataka", location: "Mangaluru", image: "https://www.fathermuller.edu.in/medical-college/img/overview.jpg" },
  { name: "J.J.M. Medical College", region: "Karnataka", location: "Davangere", image: "/colleges/mbbs/j-j-m-medical-college-davangere.jpg" },
  { name: "Jawaharlal Nehru Medical College", region: "Karnataka", location: "Belagavi", image: "/colleges/mbbs/jawaharlal-nehru-medical-college-belagavi.jpg" },
  { name: "Kanachur Institute of Medical Sciences", region: "Karnataka", location: "Mangaluru", image: "/colleges/mbbs/kanachur-institute-of-medical-sciences-mangaluru.jpg" },
  { name: "Khaja Bandanawaz Institute of Medical Sciences", region: "Karnataka", location: "Kalaburagi", image: "https://www.mymathews.com/media/gallery/Khaja_Bandanawaz_University_1.JPG" },
  { name: "KLE Academy of Higher Education and Research Institute of Medical Sciences", region: "Karnataka", location: "Belagavi", image: "/colleges/mbbs/kle-academy-of-higher-education-and-research-institute-of-medical-sciences-belagavi.png" },
  { name: "Mahadevappa Rampure Medical College", region: "Karnataka", location: "Kalaburagi", image: "https://www.mymathews.com/media/gallery/MRM_College_2.JPG" },
  { name: "Navodaya Medical College", region: "Karnataka", location: "Raichur", image: "/colleges/mbbs/navodaya-medical-college-raichur.jpg" },
  { name: "Rajarajeswari Medical College & Hospital", region: "Karnataka", location: "Bengaluru", image: "https://media.licdn.com/dms/image/v2/C4E1BAQF6SHS5eYrxTw/company-background_10000/company-background_10000/0/1584210059664?e=2147483647&v=beta&t=INicriGPE6deJQ9M7Xb9Ac9aGf3gotgqsF2yIf0j44Y" },
  { name: "SDM College of Medical Sciences & Hospital", region: "Karnataka", location: "Dharwad", image: "https://sdmucmsh.edu.in/wp-content/uploads/2023/11/home1.jpg" },
  { name: "St. John's Medical College", region: "Karnataka", location: "Bengaluru", image: "https://content.jdmagicbox.com/v2/comp/bangalore/70/080p4800070/catalogue/st-johns-medical-college-hospital-koramangala-bangalore-multispeciality-hospitals-hxlkj0aznc.jpg" },
  { name: "Vydehi Institute of Medical Sciences & Research Centre", region: "Karnataka", location: "Bengaluru", image: "/colleges/mbbs/vydehi-institute-of-medical-sciences-research-centre-bengaluru.webp" },

  // Kerala
  { name: "Amala Institute of Medical Sciences", region: "Kerala", location: "Thrissur", image: "/colleges/mbbs/amala-institute-of-medical-sciences-thrissur.webp" },
  { name: "Amrita School of Medicine", region: "Kerala", location: "Kochi", image: "/colleges/mbbs/amrita-school-of-medicine-kochi.jpg" },
  { name: "Dr. Somervell Memorial CSI Medical College", region: "Kerala", location: "Thiruvananthapuram", image: "https://blog.rmgoe.org/wp-content/uploads/2022/09/Dr-Somervell-Medical-College.webp" },
  { name: "Jubilee Mission Medical College & Research Institute", region: "Kerala", location: "Thrissur", image: "https://mbbscouncilcdn.s3.amazonaws.com/wp-content/uploads/2019/12/Jubilee-Mission-Medical-College-and-Research-Institute-Thrissur-Overview.jpg" },
  { name: "KMCT Medical College", region: "Kerala", location: "Kozhikode", image: "/colleges/mbbs/kmct-medical-college-kozhikode.jpg" },
  { name: "Malankara Orthodox Syrian Church Medical College", region: "Kerala", location: "Kolenchery", image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Cover-Image_YBkJeSfrf.webp?tr=w-3840" },
  { name: "Pushpagiri Institute of Medical Sciences and Research Centre", region: "Kerala", location: "Thiruvalla", image: "https://www.pimsrc.edu.in/storage/2121/about_history.webp" },
  { name: "Travancore Medical College", region: "Kerala", location: "Kollam", image: "https://mbbscouncil.com/wp-content/uploads/2018/10/2017-12-28.jpg" },
  { name: "Dr. Moopen's Medical College", region: "Kerala", location: "Wayanad", image: "/colleges/mbbs/dr-moopen-s-medical-college-wayanad.jpg" },
  { name: "Sree Gokulam Medical College & Research Foundation", region: "Kerala", location: "Thiruvananthapuram", image: "/colleges/mbbs/sree-gokulam-medical-college-research-foundation-thiruvananthapuram.jpg" },

  // Madhya Pradesh
  { name: "Amaltas Institute of Medical Sciences", region: "Madhya Pradesh", location: "Dewas", image: "/colleges/mbbs/amaltas-institute-of-medical-sciences-dewas.webp" },
  { name: "Index Medical College Hospital & Research Centre", region: "Madhya Pradesh", location: "Indore", image: "/colleges/mbbs/index-medical-college-hospital-research-centre-indore.webp" },
  { name: "LN Medical College and Research Centre", region: "Madhya Pradesh", location: "Bhopal", image: "/colleges/mbbs/ln-medical-college-and-research-centre-bhopal.jpg" },
  { name: "People's College of Medical Sciences & Research Centre", region: "Madhya Pradesh", location: "Bhopal", image: "/colleges/mbbs/people-s-college-of-medical-sciences-research-centre-bhopal.webp" },
  { name: "R.K.D.F. Medical College Hospital & Research Centre", region: "Madhya Pradesh", location: "Bhopal", image: "/colleges/mbbs/r-k-d-f-medical-college-hospital-research-centre-bhopal.jpg" },
  { name: "Shri Aurobindo Institute of Medical Sciences", region: "Madhya Pradesh", location: "Indore", image: "https://image-static.collegedunia.com/public/college_data/images/appImage/1490076439C1.jpg" },
  { name: "Sri Satya Sai Medical College and Research Institute", region: "Madhya Pradesh", location: "Sehore", image: "https://mystudyadviser.com/backend/uploads/1692683825.jpg" },

  // Maharashtra
  { name: "ACPM Medical College", region: "Maharashtra", location: "Dhule", image: "https://www.moksh16.com/uploads/images/acpm.webp" },
  { name: "Ashwini Rural Medical College", region: "Maharashtra", location: "Solapur", image: "https://content3.jdmagicbox.com/v2/comp/solapur/b7/9999px217.x217.111121155940.u3b7/catalogue/ashwini-rural-medical-college-hospital-and-research-centre-kumbhari-solapur-charitable-hospitals-g4i3pdx26i.jpg" },
  { name: "Bharati Vidyapeeth Deemed University Medical College", region: "Maharashtra", location: "Pune", image: "/colleges/mbbs/bharati-vidyapeeth-deemed-university-medical-college-pune.jpg" },
  { name: "Datta Meghe Medical College", region: "Maharashtra", location: "Nagpur", image: "https://mbbscouncil.com/wp-content/uploads/2022/04/Datta-Meghe-Medical-College-Nagpur.jpg" },
  { name: "Dr. D.Y. Patil Medical College, Hospital & Research Centre", region: "Maharashtra", location: "Pune", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S7yXJ4VOjL7jkzrKpLHbxziXfevtCTVTOA&s" },
  { name: "Dr. D.Y. Patil Medical College", region: "Maharashtra", location: "Navi Mumbai", image: "https://mbbscouncilcdn.s3.amazonaws.com/wp-content/uploads/2022/04/Dr-DY-Patil-Medical-College-Pune.jpg" },
  { name: "Dr. Vithalrao Vikhe Patil Foundation's Medical College", region: "Maharashtra", location: "Ahmednagar", image: "https://mbbscouncil.com/wp-content/uploads/2021/02/Dr.Vithalrao-Vikhe-Patil-Medical-College-AhmedNagar-Campus-1280x720.jpg" },
  { name: "Jawaharlal Nehru Medical College, Sawangi (Meghe)", region: "Maharashtra", location: "Wardha", image: "https://managementquotafees.com/wp-content/uploads/2026/04/jawaharlal-nehru-medical-college-wardha-management-quota-fees.webp" },
  { name: "Krishna Institute of Medical Sciences", region: "Maharashtra", location: "Karad", image: "https://5.imimg.com/data5/SC/IY/PS/SELLER-96311417/krishna-institute-of-medical-science-karad-mbbs-pg-fees-direct-admission-in-kimskarad-500x500.jpg" },
  { name: "Mahatma Gandhi Institute of Medical Sciences", region: "Maharashtra", location: "Sevagram", image: "https://studypalacehub.com/wp-content/uploads/2022/10/i13.png" },
  { name: "Maharashtra Institute of Medical Education & Research", region: "Maharashtra", location: "Talegaon", image: "https://mimer.edu.in/wp-content/uploads/2021/07/campus-1.jpg" },
  { name: "NKP Salve Institute of Medical Sciences & Research Centre", region: "Maharashtra", location: "Nagpur", image: "https://www.eklavyaoverseas.com/assets/images/nkp-salve-institute-of-medical-sc-and-research-centre.jpg" },
  { name: "Pravara Institute of Medical Sciences", region: "Maharashtra", location: "Loni", image: "https://www.pravara.com/data1/images/014.jpg" },
  { name: "Rural Medical College", region: "Maharashtra", location: "Loni", image: "https://www.edufever.com/wp-content/uploads/2021/12/Rural-Medical-College-Loni-1.webp" },
  { name: "Terna Medical College", region: "Maharashtra", location: "Navi Mumbai", image: "https://admissionmitra.in/admin/images/college/gallery/CLG_659b7fb4e7481.jpeg" },
  { name: "Vikhe Patil Medical College", region: "Maharashtra", location: "Ahmednagar", image: "https://mbbscouncil.com/wp-content/uploads/2021/02/Dr.Vithalrao-Vikhe-Patil-Medical-College-AhmedNagar-Campus-1280x720.jpg" },

  // Manipur
  { name: "Shija Academy of Health Sciences", region: "Manipur", location: "Langol", image: "https://thecareerassistance.com/wp-content/uploads/2026/04/Gemini_Generated_Image_ef2gtkef2gtkef2g-1024x532.png" },

  // Odisha
  { name: "Hi-Tech Medical College & Hospital", region: "Odisha", location: "Bhubaneswar", image: "https://mymedschool.org/wp-content/uploads/2020/11/Hi-Tech-Medical-College-and-Hospital-Bhubaneswar-10.jpg" },
  { name: "Hi-Tech Medical College & Hospital", region: "Odisha", location: "Rourkela", image: "https://www.collegebatch.com/static/clg-gallery/hi-tech-medical-college-hospital-rourkela-333337.webp" },
  { name: "Institute of Medical Sciences & SUM Hospital", region: "Odisha", location: "Bhubaneswar", image: "https://rmgoe.org/universities/India/images/1751697657_6868c8f9311a1.png" },
  { name: "Institute of Medical Sciences & SUM Hospital", region: "Odisha", location: "Phulnakhara", image: "https://images.squarespace-cdn.com/content/v1/5c8a25cd7eb88c40a615e042/cb416574-7dff-44d3-ba83-80e06f4e0670/_DSC0149.jpg" },
  { name: "Kalinga Institute of Medical Sciences", region: "Odisha", location: "Bhubaneswar", image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Kalinga-Institute-of-Medical-Sciences---_KIMS_-_Bhubaneswar-_Odisha_yDXluaVE6.webp?tr=w-3840" },

  // Puducherry
  { name: "Aarupadai Veedu Medical College & Hospital", region: "Puducherry", location: "Puducherry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6lTLOHzwAiciD7CQFu0xAmEnARYYvdMQ5Q&s" },
  { name: "Mahatma Gandhi Medical College & Research Institute", region: "Puducherry", location: "Puducherry", image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus-image_Z6cqBAjByC.webp?tr=w-3840" },
  { name: "Manakula Vinayagar Institute of Medical Sciences", region: "Puducherry", location: "Puducherry", image: "https://mynursingadmission.com/uploads/college/01-2024/870a9e2e235ae58b6a49d83104869894.jpg" },
  { name: "Shri Sathya Sai Medical College & Research Institute", region: "Puducherry", location: "Puducherry", image: "http://marquecareer.com/wp-content/uploads/2023/08/2022-11-19-1024x768.jpg" },
  { name: "Sri Venkateshwaraa Medical College Hospital & Research Centre", region: "Puducherry", location: "Puducherry", image: "https://www.justmbbs.com/img/college/pondicherry/sri-venkateshwaraa-medical-college-hospital-%26-research-centre-pondicherry-banner.jpg" },

  // Punjab
  { name: "Adesh Institute of Medical Sciences & Research", region: "Punjab", location: "Bathinda", image: "https://neet.futeducation.com/assets/img/Adesh-Institute-of-Medical-Sciences-&-Research-campus-aerial-view.png" },
  { name: "Christian Medical College", region: "Punjab", location: "Ludhiana", image: "https://www.matasahibkaurcollegeofnursing.org/wp-content/uploads/2019/12/Christian-Medical-College-CMC-Ludhiana.jpg" },
  { name: "Dayanand Medical College & Hospital", region: "Punjab", location: "Ludhiana", image: "https://www.dmchinternationalpatients.com/uploads/gallery/5Dayanand_Medical_College.jpg" },
  { name: "Punjab Institute of Medical Sciences", region: "Punjab", location: "Jalandhar", image: "https://www.collegedhundo.com/images/college/Punjab-Institute-of-Medical-Sciences-Jalandhar-Entrance.jpg" },
  { name: "RIMT University School of Medical and Research Centre", region: "Punjab", location: "Gobindgarh", image: "https://rimt.ac.in/wp-content/uploads/2019/02/870x449-rimt-building.jpg" },
  { name: "SGRD Institute of Medical Sciences & Research", region: "Punjab", location: "Amritsar", image: "http://www.sgrdimsr.in/temp/newmedical/images/slider14.jpg" },

  // Rajasthan
  { name: "American International Institute of Medical Sciences", region: "Rajasthan", location: "Udaipur", image: "https://admissionuniverse.in/img/aiims.jpg" },
  { name: "Ananta Institute of Medical Sciences & Research Centre", region: "Rajasthan", location: "Rajsamand", image: "https://content3.jdmagicbox.com/comp/rajsamand/r1/9999p2952.2952.160713131022.x7r1/catalogue/ananta-institute-of-medical-sciences-and-research-center-delwara-rajsamand-hospitals-4s311f90qr.jpg" },
  { name: "Geetanjali Medical College & Hospital", region: "Rajasthan", location: "Udaipur", image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_c9nh31hYN.webp?tr=w-3840" },
  { name: "Jaipur National University Institute for Medical Sciences & Research Centre", region: "Rajasthan", location: "Jaipur", image: "https://rmgoe.org/universities/India/images/1751871654_686b70a693ed6.png" },
  { name: "Mahatma Gandhi Medical College & Hospital", region: "Rajasthan", location: "Jaipur", image: "https://ucsworld.com/wp-content/uploads/2018/04/mahatma_gandhi_medical_college_hospital_jaipur.jpg" },
  { name: "National Institute of Medical Sciences & Research", region: "Rajasthan", location: "Jaipur", image: "https://rmgoe.org/universities/India/image/1735284484_national-institute-of-medical-science-research-jaipur.webp" },
  { name: "Pacific Institute of Medical Sciences", region: "Rajasthan", location: "Udaipur", image: "https://bookuradmission.com/college_banner/Pacific%20Institute%20Of%20Medical%20Sciences%20(PIMS)_banner211228080506.png" },
  { name: "Pacific Medical College & Hospital", region: "Rajasthan", location: "Udaipur", image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/1377/2021/1/19/Campus%20View%20of%20Pacific%20Medical%20University%20Udaipur_Campus-View.png" },

  // Sikkim
  { name: "Sikkim Manipal Institute of Medical Sciences", region: "Sikkim", location: "Gangtok", image: "https://www.collegebatch.com/static/clg-gallery/sikkim-manipal-institute-of-medical-sciences-gangtok-243876.webp" },

  // Tamil Nadu
  { name: "ACS Medical College and Hospital", region: "Tamil Nadu", location: "Chennai", image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Cover_lZS24yDmSx.webp?tr=w-3840" },
  { name: "Chettinad Hospital & Research Institute", region: "Tamil Nadu", location: "Kelambakkam", image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/20218/2019/4/13/Campus%20View%20of%20Chettinad%20Hospital%20and%20Research%20Institute%20Kelambakkam_Campus-View.jpg" },
  { name: "Christian Medical College", region: "Tamil Nadu", location: "Vellore", image: "https://www.ranipetnews.in/wp-content/uploads/2022/10/cmc-ranipet-1024x768.jpg" },
  { name: "Dhanalakshmi Srinivasan Medical College and Hospital", region: "Tamil Nadu", location: "Perambalur", image: "https://mdmsenquiry.com/wp-content/uploads/2022/08/Dhanalakshmi-Srinivasan-Medical-College-and-Hospital-Perambalur-768x374.jpg" },
  { name: "KMCH Institute of Health Sciences", region: "Tamil Nadu", location: "Coimbatore", image: "https://www.collegebatch.com/static/clg-gallery/kmch-institute-of-allied-health-sciences-coimbatore-357948.webp" },
  { name: "Karpaga Vinayaga Institute of Medical Sciences", region: "Tamil Nadu", location: "Chengalpattu", image: "https://www.edufever.com/wp-content/uploads/2021/12/Karpaga-Vinayaga-Medical-College-jpg.webp" },
  { name: "Meenakshi Medical College & Research Institute", region: "Tamil Nadu", location: "Kanchipuram", image: "https://pub-3bd144a409f940998afd367af1dcde44.r2.dev/migrated/colleges/1765993597828-ae5a19a8-vzm6iendyieylcqjedi6.jpg" },
  { name: "Saveetha Medical College & Hospital", region: "Tamil Nadu", location: "Chennai", image: "https://www.indiaccess.com/photos/colleges/tamilnadu/saveetha-medical-college-and-hospital-6531252b83e16.webp" },
  { name: "SRM Medical College Hospital & Research Centre", region: "Tamil Nadu", location: "Kattankulathur", image: "https://www.srmhospital.co.in/wp-content/themes/eightmedi-lite/images/srm/Home-Page-Banner1.png" },
  { name: "Shri Sathya Sai Medical College & Research Institute", region: "Tamil Nadu", location: "Chengalpattu", image: "https://campusways.com/wp-content/uploads/2022/03/ss11-1024x716.jpg" },
  { name: "Tagore Medical College & Hospital", region: "Tamil Nadu", location: "Chennai", image: "https://tagoremch.edu.in/images/WhatsApp%20Image%202024-11-07%20at%203.15.34%20PM.jpeg" },
  { name: "Velammal Medical College Hospital & Research Institute", region: "Tamil Nadu", location: "Madurai", image: "https://media.collegedekho.com/media/img/institute/crawled_images/velammal_medical_college_hospital__research_institute1.jpg" },
  { name: "Vinayaka Missions Kirupananda Variyar Medical College & Hospitals", region: "Tamil Nadu", location: "Salem", image: "https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2023/05/college.png" },

  // Telangana
  { name: "Deccan College of Medical Sciences", region: "Telangana", location: "Hyderabad", image: "https://olympiaeducation.in/wp-content/uploads/2023/08/Deccan-College-of-Medical-Sciences-1024x576.jpg" },
  { name: "Kamineni Academy of Medical Sciences & Research Centre", region: "Telangana", location: "Hyderabad", image: "https://thecareerassistance.com/wp-content/uploads/2025/06/Picture1-30.jpg" },
  { name: "Kamineni Institute of Medical Sciences", region: "Telangana", location: "Narketpally", image: "https://admissionadvice.in/wp-content/uploads/2025/12/Kamineni-Institute-of-Medical-Sciences-Narketpally.webp" },
  { name: "Mamata Academy of Medical Sciences", region: "Telangana", location: "Bachupally", image: "http://mamatamedicalcollege.com/wp-content/uploads/2020/05/2019.jpg" },
  { name: "Mamata Medical College", region: "Telangana", location: "Khammam", image: "http://mamatamedicalcollege.com/wp-content/uploads/2022/04/Mamata1-scaled.jpg" },
  { name: "Mediciti Institute of Medical Sciences", region: "Telangana", location: "Ghanpur", image: "https://www.vinkle.com/media/com_mtree/images/listings/m/556.jpg" },
  { name: "Prathima Institute of Medical Sciences", region: "Telangana", location: "Karimnagar", image: "https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2023/05/S1A4082.jpg" },
  { name: "Shadan Institute of Medical Sciences", region: "Telangana", location: "Hyderabad", image: "https://www.mymathews.com/media/institute_banner/Shadan_Institute_of_med_clg_BANNER.JPG" },
  { name: "Surabhi Institute of Medical Sciences", region: "Telangana", location: "Siddipet", image: "https://dl.dropboxusercontent.com/s/2eutyk72jdjkjef/Surabhi%20Institute%20of%20Medical%20Sciences%2C%20Siddipet%2Cimg%2Cmm.png" },

  // Tripura
  { name: "Tripura Medical College & Dr. B.R. Ambedkar Memorial Teaching Hospital", region: "Tripura", location: "Hapania", image: "https://alchetron.com/cdn/tripura-medical-college-and-dr-br-ambedkar-memorial-teaching-hospital-8a5b552e-38a6-41e4-a139-995aa6dbbcb-resize-750.jpg" },

  // Uttar Pradesh
  { name: "Era's Lucknow Medical College & Hospital", region: "Uttar Pradesh", location: "Lucknow", image: "https://elmcindia.org/assets/images/slider_image/9.jpg" },
  { name: "F.H. Medical College & Hospital", region: "Uttar Pradesh", location: "Agra", image: "https://fhmc.co.in/images/1558683056IMG_0033.jpg" },
  { name: "Hind Institute of Medical Sciences", region: "Uttar Pradesh", location: "Barabanki", image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Cover_m-XICLwOS.webp?tr=w-3840" },
  { name: "Integral Institute of Medical Sciences & Research", region: "Uttar Pradesh", location: "Lucknow", image: "https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2023/10/Campus-View-of-Integral-Institute-of-Medical-Sciences-and-Research-Lucknow_Campus-View-720x462.webp" },
  { name: "Jawaharlal Nehru Medical College", region: "Uttar Pradesh", location: "Aligarh", image: "/colleges/mbbs/jawaharlal-nehru-medical-college-belagavi.jpg" },
  { name: "KD Medical College Hospital & Research Centre", region: "Uttar Pradesh", location: "Mathura", image: "https://www.edufever.com/wp-content/uploads/2021/08/KD-Medical-College-Mathura-3.webp" },
  { name: "Krishna Mohan Medical College & Hospital", region: "Uttar Pradesh", location: "Mathura", image: "https://www.edufever.com/wp-content/uploads/2021/08/Krishna-Medical-College-Mathura.webp" },
  { name: "Muzaffarnagar Medical College", region: "Uttar Pradesh", location: "Muzaffarnagar", image: "https://mbbscouncilcdn.s3.amazonaws.com/wp-content/uploads/2017/04/Muzaffarnagar-Medical-College-hospital-building.jpg" },
  { name: "Rama Medical College Hospital & Research Centre", region: "Uttar Pradesh", location: "Hapur", image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1476708309slide3.jpg" },
  { name: "Rama Medical College Hospital & Research Centre", region: "Uttar Pradesh", location: "Kanpur", image: "https://blog.rmgoe.org/wp-content/uploads/2022/07/Rama-Medical-College-Hospital-and-Research-Centre.webp" },
  { name: "Rohilkhand Medical College & Hospital", region: "Uttar Pradesh", location: "Bareilly", image: "https://www.edufever.com/wp-content/uploads/2021/12/Rohilkhand-Medical-College-Bareilly-1.webp" },
  { name: "Shri Ram Murti Smarak Institute of Medical Sciences", region: "Uttar Pradesh", location: "Bareilly", image: "https://mbbscouncil.com/wp-content/uploads/2017/04/Shri-Ram-Murti-Smarak-Institute-Of-Medical-Sciences-bareilly.jpg" },
  { name: "Subharti Medical College", region: "Uttar Pradesh", location: "Meerut", image: "https://admissionuniverse.in/img/subharti-medical.jpeg" },
  { name: "Teerthanker Mahaveer Medical College & Research Centre", region: "Uttar Pradesh", location: "Moradabad", image: "https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1770886769366.jpg" },
  { name: "United Institute of Medical Sciences", region: "Uttar Pradesh", location: "Prayagraj", image: "https://www.collegebatch.com/static/clg-gallery/united-institute-of-medical-sciences-prayagraj-362869.webp" },
  { name: "Varun Arjun Medical College & Rohilkhand Hospital", region: "Uttar Pradesh", location: "Shahjahanpur", image: "https://static.wixstatic.com/media/8a7301_88d30697e1074018accf28b335e73eb7f000.jpg/v1/fill/w_1042,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8a7301_88d30697e1074018accf28b335e73eb7f000.jpg" },
  { name: "Venus Institute of Medical Sciences", region: "Uttar Pradesh", location: "Bijnor", image: "https://i.ytimg.com/vi/HJG8wbPxa0M/maxresdefault.jpg" },

  // Uttarakhand
  { name: "Doon Institute of Medical Sciences", region: "Uttarakhand", location: "Dehradun", image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus-image_i68UmKAjT.webp?tr=w-3840" },
  { name: "Himalayan Institute of Medical Sciences", region: "Uttarakhand", location: "Jolly Grant", image: "https://collegestoria.co.in/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-21-at-12.59.48-PM.jpeg" },
  { name: "Shri Guru Ram Rai Institute of Medical & Health Sciences", region: "Uttarakhand", location: "Dehradun", image: "https://mbbscouncilcdn.s3.amazonaws.com/wp-content/uploads/2022/06/Shri-Guru-Ram-Rai-Institute-of-Medical-Health-Sciences-Dehradun-Admin-block.jpg" },
  { name: "Swami Rama Himalayan University", region: "Uttarakhand", location: "Dehradun", image: "https://www.searchurcollege.com/blog/wp-content/uploads/2023/11/Swami-Rama-Himalayan-University-Dehradun-1024x407.png" },

  // West Bengal
  { name: "IQ City Medical College", region: "West Bengal", location: "Durgapur", image: "https://media.getmyuni.com/azure/college-images-test/iq-city-medical-college/exterior-images-18f05c56fea502c05a1eff12f7d9efc3.jpg" },
  { name: "Jagannath Gupta Institute of Medical Sciences & Hospital", region: "West Bengal", location: "Kolkata", image: "https://www.justmbbs.com/img/college/west-bengal/jagannath-gupta-institute-of-medical-sciences-%26-hospital-kolkata-banner.jpg" },
  { name: "KPC Medical College & Hospital", region: "West Bengal", location: "Jadavpur", image: "https://admissionhere.in/wp-content/uploads/2026/01/%F0%9F%A9%BA-KPC-Medical-College-Hospital-Jadavpur-%E2%80%93-Kolkata-West-Bengal4.jpg" },
  { name: "Shri Ramakrishna Institute of Medical Sciences & Sanaka Hospitals", region: "West Bengal", location: "Durgapur", image: "https://neetcounselling.org.in/wp-content/uploads/2025/01/Shri-Ramkrishna-Institute-of-Medical-Sciences-and-Sanaka-Hospitals-Durgapur.webp" },

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
