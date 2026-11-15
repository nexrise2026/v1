import { LifeEventCard } from '../types';
import { createLoc } from './languages';

export const LIFE_EVENT_CARDS: LifeEventCard[] = [
  // ================= STUDENT =================
  {
    id: 'le-student-scholarship',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'Scholarship Deadline Approaching',
      'ವಿದ್ಯಾರ್ಥಿವೇತನ ಸಲ್ಲಿಕೆ ಗಡುವು ಸಮೀಪಿಸುತ್ತಿದೆ',
      'छात्रवृत्ति आवेदन की अंतिम तिथि निकट'
    ),
    description: createLoc(
      'Check SSP & NSP post-matric deadlines, verify documents and get fee reimbursement without delay.',
      'ಎಸ್‌ಎಸ್‌ಪಿ ಮತ್ತು ಎನ್‌ಎಸ್‌ಪಿ ಗಡುವು ಪರಿಶೀಲಿಸಿ, ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸಿ ಶುಲ್ಕ ಮರುಪಾವತಿ ಪಡೆಯಿರಿ.',
      'एसएसपी व एनएसपी की समय सीमा देखें, दस्तावेज सत्यापित करें और बिना देरी के शुल्क प्रतिपूर्ति पाएं।'
    ),
    badge: createLoc('Due Soon', 'ಶೀಘ್ರದಲ್ಲೇ ಮುಕ್ತಾಯ', 'जल्द देय'),
    category: createLoc('Financial Aid', 'ಆರ್ಥಿಕ ನೆರವು', 'वित्तीय सहायता'),
    iconType: 'GraduationCap',
  },
  {
    id: 'le-student-hostel',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Hostel Seat or Vidyasiri Monthly Stipend',
      'ಹಾಸ್ಟೆಲ್ ಸೀಟು ಅಥವಾ ವಿದ್ಯಾಸಿರಿ ಮಾಸಿಕ ಭತ್ಯೆ',
      'छात्रावास सीट अथवा विद्यासिरी मासिक वजीफा'
    ),
    description: createLoc(
      'Apply for government student hostels or claim ₹1,500/month if residing in private PG or rental.',
      'ಸರ್ಕಾರಿ ಹಾಸ್ಟೆಲ್ ಸೀಟು ಅಥವಾ ಖಾಸಗಿ ಕೊಠಡಿಯಲ್ಲಿದ್ದರೆ ತಿಂಗಳಿಗೆ ₹1,500 ಭತ್ಯೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
      'सरकारी छात्रावास हेतु आवेदन करें या निजी कमरे में रहने पर ₹1,500/माह वजीफा प्राप्त करें।'
    ),
    badge: createLoc('Karnataka', 'ಕರ್ನಾಟಕ', 'कर्नाटक'),
    category: createLoc('Accommodation', 'ವಸತಿ ಬೆಂಬಲ', 'आवास सहायता'),
    iconType: 'Home',
  },
  {
    id: 'le-student-bus-pass',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Subsidized Student Bus Travel Pass',
      'ರಿಯಾಯಿತಿ ದರದ ವಿದ್ಯಾರ್ಥಿ ಬಸ್ ಪಾಸ್',
      'रियायती छात्र बस यात्रा पास'
    ),
    description: createLoc(
      'Get 80% fare discount pass for daily college commute across KSRTC & BMTC networks.',
      'ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಮತ್ತು ಬಿಎಂಟಿಸಿ ಬಸ್‌ಗಳಲ್ಲಿ ಶೇಕಡಾ ೮೦ ರಿಯಾಯಿತಿ ದರದ ಪಾಸ್ ಪಡೆಯಿರಿ.',
      'कॉलेज आने-जाने हेतु 80% रियायती दर पर बस पास प्राप्त करें।'
    ),
    badge: createLoc('Active', 'ಸಕ್ರಿಯ', 'सक्रिय'),
    category: createLoc('Transport', 'ಸಾರಿಗೆ', 'परिवहन'),
    iconType: 'Bus',
  },
  {
    id: 'le-student-caste-validity',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Caste & Income RD Certificate Verification',
      'ಜಾತಿ ಮತ್ತು ಆದಾಯ RD ಪ್ರಮಾಣಪತ್ರ ಪರಿಶೀಲನೆ',
      'जाति एवं आय आरडी प्रमाणपत्र सत्यापन'
    ),
    description: createLoc(
      'Ensure your 15-digit RD barcode certificate is valid in Nadakacheri for reservation quotas.',
      'ಮೀಸಲಾತಿ ಮತ್ತು ಶುಲ್ಕ ವಿನಾಯಿತಿಗಾಗಿ ನಿಮ್ಮ ೧೫-ಅಂಕಿಯ RD ಪ್ರಮಾಣಪತ್ರ ಚಾಲ್ತಿಯಲ್ಲಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
      'आरक्षण और छात्रवृत्ति हेतु अपने 15-अंकीय आरडी प्रमाणपत्र की वैधता जांचें।'
    ),
    badge: createLoc('Essential', 'ಅತ್ಯಗತ್ಯ', 'अनिवार्य'),
    category: createLoc('Certificates', 'ಪ್ರಮಾಣಪತ್ರಗಳು', 'प्रमाणपत्र'),
    iconType: 'FileCheck',
  },

  // ================= FARMER =================
  {
    id: 'le-farmer-crop-loss',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Crop Damage / Unseasonal Weather Alert',
      'ಬೆಳೆ ಹಾನಿ / ಅಕಾಲಿಕ ಹವಾಮಾನ ಎಚ್ಚರಿಕೆ',
      'फसल क्षति / बेमौसम मौसम चेतावनी'
    ),
    description: createLoc(
      'Report localized crop loss on PMFBY within 72 hours to schedule immediate surveyor assessment.',
      'ಬೆಳೆ ಹಾನಿಯಾದ ೭೨ ಗಂಟೆಗಳ ಒಳಗೆ ಸಮೀಕ್ಷೆಗಾಗಿ ಬೆಳೆ ವಿಮಾ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ.',
      'तत्काल सर्वेक्षण के लिए फसल क्षति के 72 घंटों के भीतर पीएमएफबीवाय पर रिपोर्ट करें।'
    ),
    badge: createLoc('Urgent Action', 'ತುರ್ತು ಕ್ರಮ', 'तत्काल कार्रवाई'),
    category: createLoc('Risk Relief', 'ವಿಮಾ ಪರಿಹಾರ', 'आपदा राहत'),
    iconType: 'CloudRain',
  },
  {
    id: 'le-farmer-fruits-rtc',
    role: 'farmer',
    states: ['Karnataka'],
    title: createLoc(
      'Link RTC Pahani to Karnataka FRUITS FID',
      'ಆರ್‌ಟಿಸಿ ಪಹಣಿಯನ್ನು ಕರ್ನಾಟಕ ಫ್ರೂಟ್ಸ್ ಎಫ್‌ಐಡಿಗೆ ಜೋಡಿಸಿ',
      'आरटीसी खसरा को कर्नाटक फ्रूट्स एफआईडी से जोड़ें'
    ),
    description: createLoc(
      'Connect all Bhoomi land survey numbers to unlock direct MSP sale and input subsidies in Karnataka.',
      'ಕರ್ನಾಟಕದಲ್ಲಿ ಬೆಂಬಲ ಬೆಲೆ ಖರೀದಿ ಮತ್ತು ಸಬ್ಸಿಡಿ ಪಡೆಯಲು ನಿಮ್ಮ ಎಲ್ಲಾ ಸರ್ವೇ ನಂಬರ್‌ಗಳನ್ನು ಲಿಂಕ್ ಮಾಡಿ.',
      'कर्नाटक में एमएसपी बिक्री और खाद-बीज सब्सिडी हेतु सभी खसरा नंबर लिंक करें।'
    ),
    badge: createLoc('Karnataka', 'ಕರ್ನಾಟಕ', 'कर्नाटक'),
    category: createLoc('Land Records', 'ಭೂ ದಾಖಲೆಗಳು', 'भू-अभिलेख'),
    iconType: 'Layers',
  },
  {
    id: 'le-farmer-kcc-credit',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Kisan Credit Card at 4% Concessional Interest',
      'ಶೇಕಡಾ ೪ ರ ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದ ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್',
      '4% रियायती ब्याज दर पर किसान क्रेडिट कार्ड'
    ),
    description: createLoc(
      'Access up to ₹3,00,000 seasonal crop input loan with central interest subvention directly at your bank.',
      'ಬೀಜ-ಗೊಬ್ಬರ ಖರೀದಿಗಾಗಿ ₹3 ಲಕ್ಷದವರೆಗೆ ಕೇವಲ ಶೇ. ೪ ರ ಬಡ್ಡಿದರದಲ್ಲಿ ಬ್ಯಾಂಕ್ ಸಾಲ ಪಡೆಯಿರಿ.',
      'खेती-किसानी के लिए ₹3 लाख तक का ऋण केवल 4% ब्याज दर पर बैंक से प्राप्त करें।'
    ),
    badge: createLoc('Subsidized', 'ಸಹಾಯಧನ', 'रियायती'),
    category: createLoc('Crop Credit', 'ಕೃಷಿ ಸಾಲ', 'कृषि ऋण'),
    iconType: 'CreditCard',
  },
  {
    id: 'le-farmer-irrigation-solar',
    role: 'farmer',
    states: ['Karnataka'],
    title: createLoc(
      'Krishi Bhagya & Drip Irrigation Subsidy',
      'ಕೃಷಿ ಭಾಗ್ಯ ಮತ್ತು ಹನಿ ನೀರಾವರಿ ಸಬ್ಸಿಡಿ',
      'कृषि भाग्य एवं ड्रिप सिंचाई सब्सिडी'
    ),
    description: createLoc(
      'Avail 90% subsidy for SC/ST and 75% for General farmers for farm ponds, polythene lining and pumpsets.',
      'ಕೃಷಿ ಹೊಂಡ, ಪಾಲಿಥೀನ್ ಹೊದಿಕೆ ಮತ್ತು ಪಂಪ್‌ಸೆಟ್‌ಗಳಿಗೆ ಶೇಕಡಾ ೭೫ ರಿಂದ ೯೦ ರಷ್ಟು ಸಹಾಯಧನ ಪಡೆಯಿರಿ.',
      'कृषि तालाब और ड्रिप सिंचाई पर 75% से 90% तक सरकारी सब्सिडी प्राप्त करें।'
    ),
    badge: createLoc('High Subsidy', 'ಗರಿಷ್ಠ ಸಬ್ಸಿಡಿ', 'उच्च सब्सिडी'),
    category: createLoc('Irrigation', 'ನೀರಾವರಿ', 'सिंचाई'),
    iconType: 'Droplet',
  },

  // ================= WORKER =================
  {
    id: 'le-worker-eshram',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'e-Shram National Worker Card & Accident Cover',
      'ಇ-ಶ್ರಮ್ ಕಾರ್ಮಿಕ ಕಾರ್ಡ್ ಮತ್ತು ಅಪಘಾತ ವಿಮೆ',
      'ई-श्रम राष्ट्रीय कामगार कार्ड एवं दुर्घटना बीमा'
    ),
    description: createLoc(
      'Obtain 12-digit UAN card with ₹2 Lakh accidental insurance cover under PMSBY.',
      '₹2 ಲಕ್ಷದ ಉಚಿತ ಅಪಘಾತ ವಿಮಾ ರಕ್ಷಣೆಯೊಂದಿಗೆ ೧೨-ಅಂಕಿಯ ಯುಎಎನ್ ಕಾರ್ಡ್ ಪಡೆಯಿರಿ.',
      '₹2 लाख दुर्घटना बीमा सुरक्षा के साथ 12-अंकीय यूएएन कार्ड प्राप्त करें।'
    ),
    badge: createLoc('Verified Identity', 'ದೃಢೀಕೃತ ಗುರುತು', 'सत्यापित पहचान'),
    category: createLoc('Social Security', 'ಸಾಮಾಜಿಕ ಭದ್ರತೆ', 'सामाजिक सुरक्षा'),
    iconType: 'ShieldCheck',
  },
  {
    id: 'le-worker-bocw-renewal',
    role: 'worker',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka BOCW Labour Smart Card Renewal',
      'ಕರ್ನಾಟಕ ಕಟ್ಟಡ ಕಾರ್ಮಿಕ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ನವೀಕರಣ',
      'कर्नाटक निर्माण श्रमिक स्मार्ट कार्ड नवीनीकरण'
    ),
    description: createLoc(
      'Keep your construction worker card active to receive marriage aid, toolkits and student scholarships.',
      'ಮದುವೆ ನೆರವು, ಉಪಕರಣ ಕಿಟ್ ಮತ್ತು ಮಕ್ಕಳ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪಡೆಯಲು ಕಾರ್ಡ್ ಸಕ್ರಿಯವಾಗಿರಲಿ.',
      'विवाह सहायता, टूलकिट व बच्चों की छात्रवृत्ति हेतु कार्ड सक्रिय रखें।'
    ),
    badge: createLoc('Karnataka', 'ಕರ್ನಾಟಕ', 'कर्नाटक'),
    category: createLoc('Labour Welfare', 'ಕಾರ್ಮಿಕ ಕಲ್ಯಾಣ', 'श्रमिक कल्याण'),
    iconType: 'Wrench',
  },
  {
    id: 'le-worker-health-ayushman',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'Ayushman Bharat Free Cashless Hospital Cover',
      'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಉಚಿತ ನಗದುರಹಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ',
      'आयुष्मान भारत मुफ्त कैशलेस अस्पताल उपचार'
    ),
    description: createLoc(
      'Access ₹5,00,000 per family per year free medical coverage at 27,000+ top hospitals.',
      'ಪ್ರಮುಖ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷದವರೆಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಚಿಕಿತ್ಸೆ.',
      'प्रति परिवार प्रति वर्ष ₹5 लाख तक का मुफ्त उपचार देश भर के अस्पतालों में।'
    ),
    badge: createLoc('₹5 Lakh Cover', '₹5 ಲಕ್ಷ ರಕ್ಷಣೆ', '₹5 लाख कवर'),
    category: createLoc('Healthcare', 'ಆರೋಗ್ಯ', 'स्वास्थ्य'),
    iconType: 'HeartPulse',
  },
  {
    id: 'le-worker-pension-sym',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'Lifelong Worker Pension (PM-SYM ₹3,000/mo)',
      'ಆಜೀವ ಕಾರ್ಮಿಕ ಪಿಂಚಣಿ (ಪಿಎಂ-ಎಸ್‌ವೈಎಂ ತಿಂಗಳಿಗೆ ₹3,000)',
      'आजीवन श्रमिक पेंशन (पीएम-एसवाईएम ₹3,000/माह)'
    ),
    description: createLoc(
      'Enroll in government matched contributory pension for guaranteed ₹3,000/month after age 60.',
      '೬೦ ವರ್ಷದ ನಂತರ ಖಾತರಿಯ ತಿಂಗಳ ₹3,000 ಪಿಂಚಣಿಗಾಗಿ ಕೇಂದ್ರ ಸರ್ಕಾರದ ಸಮಾನ ವಂತಿಗೆ ಯೋಜನೆಗೆ ಸೇರಿ.',
      '60 की उम्र के बाद ₹3,000/माह गारंटीकृत पेंशन हेतु सरकार के समान अंशदान वाली योजना।'
    ),
    badge: createLoc('Old Age Security', 'ವೃದ್ಧಾಪ್ಯ ಭದ್ರತೆ', 'वृद्धावस्था सुरक्षा'),
    category: createLoc('Pensions', 'ಪಿಂಚಣಿ', 'पेंशन'),
    iconType: 'Coins',
  },

  // ================= SENIOR CITIZEN =================
  {
    id: 'le-senior-pension-apply',
    role: 'senior',
    states: ['Karnataka'],
    title: createLoc(
      'Sandhya Suraksha Monthly Old Age Pension',
      'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಮಾಸಿಕ ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ',
      'संध्या सुरक्षा मासिक वृद्धावस्था पेंशन'
    ),
    description: createLoc(
      'Claim your statutory monthly old age allowance of ₹1,200 delivered directly to your bank account.',
      'ತಿಂಗಳಿಗೆ ₹1,200 ವೃದ್ಧಾಪ್ಯ ಭತ್ಯೆಯನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಪಡೆಯಲು ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
      'प्रति माह ₹1,200 की वृद्धावस्था पेंशन सीधे अपने बैंक खाते में पाने हेतु आवेदन करें।'
    ),
    badge: createLoc('Karnataka', 'ಕರ್ನಾಟಕ', 'कर्नाटक'),
    category: createLoc('Pensions', 'ಪಿಂಚಣಿ', 'पेंशन'),
    iconType: 'Coins',
  },
  {
    id: 'le-senior-life-cert',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Digital Life Certificate (Jeevan Pramaan)',
      'ಡಿಜಿಟಲ್ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ (ಜೀವನ್ ಪ್ರಮಾಣ್)',
      'डिजिटल जीवन प्रमाणपत्र (जीवन प्रमाण)'
    ),
    description: createLoc(
      'Submit mandatory annual life certificate from home using smartphone camera face authentication.',
      'ಬ್ಯಾಂಕ್‌ಗೆ ಹೋಗದೆ ಮೊಬೈಲ್ ಕ್ಯಾಮೆರಾ ಮುಖ ಪರಿಶೀಲನೆ ಮೂಲಕ ಮನೆಯಿಂದಲೇ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ ಸಲ್ಲಿಸಿ.',
      'बिना बैंक जाए स्मार्टफोन कैमरे से घर बैठे वार्षिक जीवन प्रमाणपत्र जमा करें।'
    ),
    badge: createLoc('Annual Must', 'ವಾರ್ಷಿಕ ಕಡ್ಡಾಯ', 'वार्षिक अनिवार्य'),
    category: createLoc('Pension Survival', 'ಜೀವಿತ ದೃಢೀಕರಣ', 'पेंशन निरंतरता'),
    iconType: 'Smile',
  },
  {
    id: 'le-senior-vay-vandana',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Ayushman Vay Vandana Card (Free ₹5L for 70+)',
      'ಆಯುಷ್ಮಾನ್ ವಯ ವಂದನಾ ಕಾರ್ಡ್ (೭೦+ ಹಿರಿಯರಿಗೆ ₹5 ಲಕ್ಷ ಉಚಿತ)',
      'आयुष्मान वय वंदना कार्ड (70+ हेतु ₹5 लाख मुफ्त)'
    ),
    description: createLoc(
      'All citizens aged 70 and above receive unconditional ₹5 Lakh cashless health insurance irrespective of income.',
      'ಆದಾಯ ಮಿತಿ ಇಲ್ಲದೆ ೭೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಹಿರಿಯರಿಗೆ ₹5 ಲಕ್ಷದ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ.',
      'आय सीमा के बिना 70+ आयु के सभी वरिष्ठों को ₹5 लाख तक का कैशलेस स्वास्थ्य बीमा।'
    ),
    badge: createLoc('70+ Special', '೭೦+ ವಿಶೇಷ', '70+ विशेष'),
    category: createLoc('Geriatric Health', 'ಹಿರಿಯರ ಆರೋಗ್ಯ', 'वरिष्ठ स्वास्थ्य'),
    iconType: 'HeartHandshake',
  },
  {
    id: 'le-senior-travel-pass',
    role: 'senior',
    states: ['Karnataka'],
    title: createLoc(
      '25% Senior Bus Travel Concession',
      'ಶೇಕಡಾ ೨೫ ರ ಹಿರಿಯ ನಾಗರಿಕ ಬಸ್ ಪ್ರಯಾಣ ರಿಯಾಯಿತಿ',
      '25% वरिष्ठ नागरिक बस यात्रा रियायत'
    ),
    description: createLoc(
      'Get 25% automatic discount on all KSRTC express & ordinary bus journeys across Karnataka.',
      'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಮತ್ತು ಸಾಮಾನ್ಯ ಬಸ್‌ಗಳಲ್ಲಿ ಶೇಕಡಾ ೨೫ ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ.',
      'कर्नाटक भर में केएसआरटीसी बसों में टिकट पर 25% की छूट प्राप्त करें।'
    ),
    badge: createLoc('Karnataka', 'ಕರ್ನಾಟಕ', 'कर्नाटक'),
    category: createLoc('Transport', 'ಸಾರಿಗೆ', 'परिवहन'),
    iconType: 'Bus',
  },

  // ================= DISABILITY =================
  {
    id: 'le-disability-udid-card',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'UDID National Disability Smart Card',
      'ಯುಡಿಐಡಿ ರಾಷ್ಟ್ರೀಯ ಅಂಗವೈಕಲ್ಯ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್',
      'यूडीआईडी राष्ट्रीय दिव्यांगता स्मार्ट कार्ड'
    ),
    description: createLoc(
      'Single government smart card unlocking all pension, healthcare, rail travel & device concessions.',
      'ಪಿಂಚಣಿ, ಉಚಿತ ಆರೋಗ್ಯ, ರೈಲು ಪ್ರಯಾಣ ಮತ್ತು ಸಾಧನಗಳ ಸೌಲಭ್ಯ ಪಡೆಯಲು ಏಕೈಕ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್.',
      'पेंशन, मुफ्त यात्रा, सहायक उपकरण व सरकारी लाभों हेतु एकल राष्ट्रीय स्मार्ट कार्ड।'
    ),
    badge: createLoc('Pan-India', 'ಅಖಿಲ ಭಾರತ', 'अखिल भारतीय'),
    category: createLoc('Identity & Rights', 'ಗುರುತು ಮತ್ತು ಹಕ್ಕುಗಳು', 'पहचान व अधिकार'),
    iconType: 'Award',
  },
  {
    id: 'le-disability-pension-mythri',
    role: 'disability',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Mythri Monthly Disability Pension',
      'ಕರ್ನಾಟಕ ಮೈತ್ರಿ ಮಾಸಿಕ ಅಂಗವಿಕಲರ ಪಿಂಚಣಿ',
      'कर्नाटक मैत्री मासिक दिव्यांग पेंशन'
    ),
    description: createLoc(
      'Monthly direct deposit of ₹1,400 (40-74% disability) or ₹2,000 (75%+ disability) directly into bank.',
      'ತಿಂಗಳಿಗೆ ₹1,400 ರಿಂದ ₹2,000 ಮಾಸಿಕ ಪಿಂಚಣಿ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ ಪಡೆಯಿರಿ.',
      '₹1,400 से ₹2,000 प्रति माह सीधे बैंक खाते में मासिक भरण-पोषण सहायता।'
    ),
    badge: createLoc('Karnataka Special', 'ಕರ್ನಾಟಕ ವಿಶೇಷ', 'कर्नाटक विशेष'),
    category: createLoc('Monthly Support', 'ಮಾಸಿಕ ನೆರವು', 'मासिक सहायता'),
    iconType: 'Coins',
  },
  {
    id: 'le-disability-adip-devices',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'ADIP Free Motorized Trikes, Hearing & Mobility Aids',
      'ಅಡಿಪ್ ಉಚಿತ ಮೋಟಾರೀಕೃತ ತ್ರಿಚಕ್ರ ವಾಹನ, ಶ್ರವಣ ಮತ್ತು ಚಲನಶೀಲ ಸಾಧನಗಳು',
      'एडिप मुफ्त मोटराइज्ड ट्राइसाइकिल व सहायक उपकरण'
    ),
    description: createLoc(
      'Apply for 100% free motorized tricycles, smart canes, digital hearing aids and prosthetic limbs.',
      'ಮೋಟಾರೀಕೃತ ತ್ರಿಚಕ್ರ ವಾಹನ, ಸ್ಮಾರ್ಟ್ ಕೇನ್, ಡಿಜಿಟಲ್ ಶ್ರವಣ ಸಾಧನಗಳನ್ನು ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿ ಪಡೆಯಿರಿ.',
      'मुफ्त मोटराइज्ड ट्राइसाइकिल, हियरिंग एड व कृत्रिम अंगों हेतु आवेदन करें।'
    ),
    badge: createLoc('100% Free', 'ಶೇ. ೧೦೦ ಉಚಿತ', '100% मुफ्त'),
    category: createLoc('Assistive Tech', 'ಸಹಾಯಕ ತಂತ್ರಜ್ಞಾನ', 'सहायक तकनीक'),
    iconType: 'Activity',
  },
  {
    id: 'le-disability-free-bus-pass',
    role: 'disability',
    states: ['Karnataka'],
    title: createLoc(
      '100% Free Karnataka RTC Bus Pass',
      'ಶೇಕಡಾ ೧೦೦ ರ ಉಚಿತ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಾರಿಗೆ ಬಸ್ ಪಾಸ್',
      '100% मुफ्त कर्नाटक राज्य परिवहन बस पास'
    ),
    description: createLoc(
      'Travel completely free of cost across all ordinary and express government buses in Karnataka.',
      'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಬಸ್‌ಗಳಲ್ಲಿ ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿ ಪ್ರಯಾಣಿಸಿ.',
      'कर्नाटक की सभी सरकारी बसों में 100% मुफ्त यात्रा का लाभ उठाएं।'
    ),
    badge: createLoc('Karnataka', 'ಕರ್ನಾಟಕ', 'कर्नाटक'),
    category: createLoc('Transport', 'ಸಾರಿಗೆ', 'परिवहन'),
    iconType: 'Bus',
  },
];
