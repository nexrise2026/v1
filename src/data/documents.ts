import { DocumentItem } from '../types';
import { createLoc } from './languages';

export const DOCUMENTS_DATABASE: DocumentItem[] = [
  // ==================== STUDENT ====================
  {
    id: 'doc-student-bonafide',
    role: 'student',
    title: createLoc('Institution Bonafide Certificate', 'ಕಾಲೇಜು ಬೋನಫೈಡ್ ಪ್ರಮಾಣಪತ್ರ', 'संस्थान बोनाफाइड प्रमाणपत्र'),
    purpose: createLoc('Proof of active college enrollment and current academic year', 'ಪ್ರಸ್ತುತ ಶೈಕ್ಷಣಿಕ ವರ್ಷದ ದಾಖಲಾತಿ ಪುರಾವೆ', 'वर्तमान शैक्षणिक वर्ष में सक्रिय नामांकन का प्रमाण'),
    issuingAuthority: createLoc('College Principal / University Registrar', 'ಕಾಲೇಜು ಪ್ರಾಂಶುಪಾಲರು / ರಿಜಿಸ್ಟ್ರಾರ್', 'कॉलेज प्राचार्य / कुलसचिव'),
    requiredForSchemes: createLoc('SSP Scholarship, Vidyasiri, Bus Pass', 'ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ, ವಿದ್ಯಾಸಿರಿ, ಬಸ್ ಪಾಸ್', 'एसएसपी छात्रवृत्ति, विद्यासिरी, बस पास'),
  },
  {
    id: 'doc-student-caste-income',
    role: 'student',
    title: createLoc('Caste & Income Certificate (RD Barcode)', 'ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (RD ಬಾರ್‌ಕೋಡ್)', 'जाति एवं आय प्रमाण पत्र (RD संख्या)'),
    purpose: createLoc('Verification of SC/ST/OBC category and family economic eligibility', 'ಜಾತಿ ಮತ್ತು ಕುಟುಂಬದ ಆರ್ಥಿಕ ಅರ್ಹತೆಯ ಪರಿಶೀಲನೆ', 'जाति एवं पारिवारिक आय सत्यापन'),
    issuingAuthority: createLoc('Revenue Department (Tahsildar / Nadakacheri)', 'ಕಂದಾಯ ಇಲಾಖೆ (ತಹಶೀಲ್ದಾರ್ / ನಾಡಕಚೇರಿ)', 'राजस्व विभाग (तहसीलदार / नाडकचेरी)'),
    requiredForSchemes: createLoc('Post-Matric Scholarships, Fee Reimbursement', 'ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಶುಲ್ಕ ಮನ್ನಾ', 'पोस्ट-मैट्रिक छात्रवृत्ति, शुल्क प्रतिपूर्ति'),
  },
  {
    id: 'doc-student-previous-marks',
    role: 'student',
    title: createLoc('Previous Qualifying Marks Card (SSLC / PUC)', 'ಹಿಂದಿನ ಅರ್ಹತಾ ಅಂಕಪಟ್ಟಿ (SSLC / PUC)', 'पिछली परीक्षा की अंकतालिका'),
    purpose: createLoc('Merit verification and course progression check', 'ಅರ್ಹತಾ ಅಂಕಗಳು ಮತ್ತು ಕೋರ್ಸ್ ಪ್ರಗತಿಯ ಪರಿಶೀಲನೆ', 'मेरिट सत्यापन और कोर्स प्रगति जांच'),
    issuingAuthority: createLoc('State Board / University Examination Board', 'ಪರೀಕ್ಷಾ ಮಂಡಳಿ / ವಿಶ್ವವಿದ್ಯಾಲಯ', 'परीक्षा बोर्ड / विश्वविद्यालय'),
    requiredForSchemes: createLoc('NSP Central Sector, AICTE Pragati, SSP', 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಎಐಸಿಟಿಇ ಪ್ರಗತಿ, ಎಸ್‌ಎಸ್‌ಪಿ', 'एनएसपी छात्रवृत्ति, एआईसीटीई प्रगति'),
  },
  {
    id: 'doc-student-fee-receipt',
    role: 'student',
    title: createLoc('Current Year College Fee Receipt / Challan', 'ಪ್ರಸಕ್ತ ವರ್ಷದ ಕಾಲೇಜು ಶುಲ್ಕ ರಶೀದಿ / ಚಲನ್', 'वर्तमान वर्ष कॉलेज शुल्क रसीद / चालान'),
    purpose: createLoc('Calculating non-refundable tuition and examination fee reimbursement', 'ಮರುಪಾವತಿಸಬೇಕಾದ ಬೋಧನಾ ಮತ್ತು ಪರೀಕ್ಷಾ ಶುಲ್ಕದ ಲೆಕ್ಕಾಚಾರ', 'ट्यूशन व परीक्षा शुल्क प्रतिपूर्ति हेतु'),
    issuingAuthority: createLoc('College Cash / Finance Counter', 'ಕಾಲೇಜು ಹಣಕಾಸು ಕಚೇರಿ', 'कॉलेज वित्त कार्यालय'),
    requiredForSchemes: createLoc('SSP Fee Concession, Free Laptop Scheme', 'ಎಸ್‌ಎಸ್‌ಪಿ ಶುಲ್ಕ ರಿಯಾಯಿತಿ, ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ಯೋಜನೆ', 'एसएसपी शुल्क रियायत, मुफ्त लैपटॉप योजना'),
  },

  // ==================== FARMER ====================
  {
    id: 'doc-farmer-rtc-pahani',
    role: 'farmer',
    title: createLoc('Bhoomi RTC / Pahani Land Record', 'ಭೂಮಿ ಆರ್‌ಟಿಸಿ / ಪಹಣಿ ಜಮೀನು ದಾಖಲೆ', 'भूमि आरटीसी / पाहणी भू-अभिलेख'),
    purpose: createLoc('Verifying survey number, ownership title, soil type, and cultivation status', 'ಸರ್ವೇ ನಂಬರ್, ಮಾಲೀಕತ್ವ ಮತ್ತು ಸಾಗುವಳಿ ಪರಿಶೀಲನೆ', 'खसरा संख्या, स्वामित्व और खेती सत्यापन'),
    issuingAuthority: createLoc('Revenue Department / Bhoomi Kiosk', 'ಕಂದಾಯ ಇಲಾಖೆ / ಭೂಮಿ ಕೇಂದ್ರ', 'राजस्व विभाग / भूमि कियोस्क'),
    requiredForSchemes: createLoc('PM-KISAN, PMFBY Crop Insurance, FRUITS, KCC', 'ಪಿಎಂ-ಕಿಸಾನ್, ಬೆಳೆ ವಿಮೆ, ಫ್ರೂಟ್ಸ್, ಕೆಸಿಸಿ', 'पीएम-किसान, फसल बीमा, फ्रूट्स, केसीसी'),
  },
  {
    id: 'doc-farmer-fruits-fid',
    role: 'farmer',
    states: ['Karnataka'],
    title: createLoc('Karnataka FRUITS Farmer ID Card (FID)', 'ಕರ್ನಾಟಕ ಫ್ರೂಟ್ಸ್ ರೈತ ಗುರುತಿನ ಚೀಟಿ (FID)', 'कर्नाटक फ्रूट्स किसान पहचान पत्र (FID)'),
    purpose: createLoc('Unique identification for seamless subsidy, MSP and drought relief in Karnataka', 'ಕರ್ನಾಟಕದಲ್ಲಿ ಎಲ್ಲಾ ಸಬ್ಸಿಡಿ ಮತ್ತು ಬೆಳೆ ಪರಿಹಾರಕ್ಕೆ ಏಕೈಕ ಗುರುತು', 'कर्नाटक में सभी कृषि सब्सिडी और आपदा राहत हेतु'),
    issuingAuthority: createLoc('Department of Agriculture & e-Governance, Karnataka', 'ಕೃಷಿ ಮತ್ತು ಇ-ಆಡಳಿತ ಇಲಾಖೆ, ಕರ್ನಾಟಕ', 'कृषि एवं ई-गवर्नेंस विभाग, कर्नाटक'),
    requiredForSchemes: createLoc('Krishi Bhagya, Raitha Siri, Solar Pump Subsidies', 'ಕೃಷಿ ಭಾಗ್ಯ, ರೈತ ಸಿರಿ, ಸೌರ ಪಂಪ್ ಸಬ್ಸಿಡಿ', 'कृषि भाग्य, रैता सिरी, सौर पंप सब्सिडी'),
  },
  {
    id: 'doc-farmer-sowing-cert',
    role: 'farmer',
    title: createLoc('Crop Sowing Certificate / Crop Survey Entry', 'ಬೆಳೆ ಬಿತ್ತನೆ ಪ್ರಮಾಣಪತ್ರ / ಬೆಳೆ ಸಮೀಕ್ಷೆ ದಾಖಲೆ', 'फसल बुवाई प्रमाणपत्र / फसल सर्वेक्षण प्रविष्टि'),
    purpose: createLoc('Establishing exact crop grown in Kharif/Rabi for calamity claim settlement', 'ಬೆಳೆ ಹಾನಿ ಪರಿಹಾರ ಪಡೆಯಲು ಬೆಳೆದ ಬೆಳೆಯ ಅಧಿಕೃತ ಪುರಾವೆ', 'प्राकृतिक आपदा में फसल बीमा दावे के लिए'),
    issuingAuthority: createLoc('Village Agriculture Officer / Crop Survey App', 'ಗ್ರಾಮ ಕೃಷಿ ಅಧಿಕಾರಿ / ಬೆಳೆ ಸಮೀಕ್ಷೆ ತಂತ್ರಾಂಶ', 'ग्राम कृषि अधिकारी / फसल सर्वेक्षण ऐप'),
    requiredForSchemes: createLoc('PMFBY Crop Insurance claim, MSP Procurement', 'ಬೆಳೆ ವಿಮೆ ಪರಿಹಾರ, ಬೆಂಬಲ ಬೆಲೆ ಖರೀದಿ', 'पीएमएफबीवाय फसल बीमा दावा, एमएसपी खरीद'),
  },
  {
    id: 'doc-farmer-bank-passbook',
    role: 'farmer',
    title: createLoc('Aadhaar-Seeded Bank Passbook (NPCI Mapped)', 'ಆಧಾರ್ ಮತ್ತು ಎನ್‌ಪಿಸಿಐ ಮ್ಯಾಪ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'आधार व एनपीसीआई लिंक बैंक पासबुक'),
    purpose: createLoc('Receiving Direct Benefit Transfer (DBT) funds without middleman', 'ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರ ನಗದು ವರ್ಗಾವಣೆ ಪಡೆಯಲು', 'बिना बिचौलिए के सीधे खाते में सब्सिडी प्राप्त करने हेतु'),
    issuingAuthority: createLoc('Nationalized / Gramin / Cooperative Bank', 'ರಾಷ್ಟ್ರೀಕೃತ / ಗ್ರಾಮೀಣ / ಸಹಕಾರಿ ಬ್ಯಾಂಕ್', 'राष्ट्रीयकृत / ग्रामीण बैंक'),
    requiredForSchemes: createLoc('PM-KISAN, Disaster Relief, Milk Incentives', 'ಪಿಎಂ-ಕಿಸಾನ್, ಪ್ರಕೃತಿ ವಿಕೋಪ ಪರಿಹಾರ, ಹಾಲು ಪ್ರೋತ್ಸಾಹಧನ', 'पीएम-किसान, सूखा राहत, दूध प्रोत्साहन'),
  },

  // ==================== WORKER ====================
  {
    id: 'doc-worker-eshram-card',
    role: 'worker',
    title: createLoc('e-Shram Universal Account Number (UAN) Card', 'ಇ-ಶ್ರಮ್ ಕಾರ್ಮಿಕ ಗುರುತಿನ ಚೀಟಿ (UAN)', 'ई-श्रम कार्ड (यूनिवर्सल अकाउंट नंबर)'),
    purpose: createLoc('National verified identity as unorganised sector worker with PMSBY cover', 'ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರ ರಾಷ್ಟ್ರೀಯ ಮಾನ್ಯತೆಯ ಪುರಾವೆ', 'असंगठित क्षेत्र के कामगार के रूप में राष्ट्रीय पहचान'),
    issuingAuthority: createLoc('Ministry of Labour and Employment, GoI', 'ಕಾರ್ಮಿಕ ಮತ್ತು ಉದ್ಯೋಗ ಸಚಿವಾಲಯ', 'श्रम एवं रोजगार मंत्रालय'),
    requiredForSchemes: createLoc('PMSBY Insurance, PM-SYM Pension, Migrant Ration', 'ಪಿಎಂಎಸ್‌ಬಿವೈ ವಿಮೆ, ಪಿಎಂ-ಎಸ್‌ವೈಎಂ ಪಿಂಚಣಿ, ಉಚಿತ ರೇಷನ್', 'पीएम-एसवाईएम पेंशन, प्रवासी राशन, दुर्घटना बीमा'),
  },
  {
    id: 'doc-worker-bocw-card',
    role: 'worker',
    states: ['Karnataka'],
    title: createLoc('Karnataka BOCW Construction Labour Smart Card', 'ಕರ್ನಾಟಕ ಕಟ್ಟಡ ಮತ್ತು ಇತರ ನಿರ್ಮಾಣ ಕಾರ್ಮಿಕರ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್', 'कर्नाटक निर्माण श्रमिक (BOCW) स्मार्ट कार्ड'),
    purpose: createLoc('Entitlement for worker marriage aid, toolkits, maternity and educational grants', 'ಕಾರ್ಮಿಕರ ಮದುವೆ, ಉಪಕರಣ ಕಿಟ್, ಹೆರಿಗೆ ಮತ್ತು ಶಿಕ್ಷಣ ನೆರವು ಪಡೆಯಲು', 'विवाह सहायता, टूलकिट, प्रसूति सहायता और छात्रवृत्ति हेतु'),
    issuingAuthority: createLoc('Karnataka Building and Other Construction Workers Board', 'ಕರ್ನಾಟಕ ಕಟ್ಟಡ ಕಾರ್ಮಿಕರ ಕಲ್ಯಾಣ ಮಂಡಳಿ', 'कर्नाटक भवन निर्माण कर्मकार कल्याण बोर्ड'),
    requiredForSchemes: createLoc('Tool-Kit Grant, Free Bus Pass, Marriage Aid', 'ಟೂಲ್-ಕಿಟ್ ನೆರವು, ಉಚಿತ ಬಸ್ ಪಾಸ್, ಮದುವೆ ಧನಸಹಾಯ', 'टूलकिट अनुदान, मुफ्त बस पास, विवाह सहायता'),
  },
  {
    id: 'doc-worker-work-slip',
    role: 'worker',
    title: createLoc('90-Days Work Certificate / Employment Slip', '೯೦ ದಿನಗಳ ಕೆಲಸದ ದೃಢೀಕರಣ ಪತ್ರ', '90 दिन कार्य प्रमाणपत्र / रोजगार पर्ची'),
    purpose: createLoc('Proof of active manual / technical work performed under contractor or grama panchayat', 'ನಿರ್ಮಾಣ ಅಥವಾ ಕೈಯಿಂದ ಮಾಡುವ ಕೆಲಸದ ದೃಢೀಕರಣ', 'सक्रिय मजदूरी व निर्माण कार्य का प्रमाण'),
    issuingAuthority: createLoc('Registered Contractor / Grama Panchayat PDO / Employer', 'ನೋಂದಾಯಿತ ಗುತ್ತಿಗೆದಾರರು / ಪಿಡಿಒ', 'पंजीकृत ठेकेदार / ग्राम पंचायत पीडीओ'),
    requiredForSchemes: createLoc('BOCW Smart Card Registration & Annual Renewal', 'ಕಾರ್ಮಿಕ ಕಾರ್ಡ್ ನೋಂದಣಿ ಮತ್ತು ವಾರ್ಷಿಕ ನವೀಕರಣ', 'बीओसीडब्ल्यू कार्ड पंजीकरण एवं नवीकरण'),
  },

  // ==================== SENIOR CITIZEN ====================
  {
    id: 'doc-senior-age-proof',
    role: 'senior',
    title: createLoc('Statutory Age Proof (Aadhaar / Voter ID / Birth Certificate)', 'ಕಾನೂನುಬದ್ಧ ವಯಸ್ಸಿನ ಪುರಾವೆ (ಆಧಾರ್ / ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ)', 'वैधानिक आयु प्रमाण (आधार / वोटर आईडी / जन्म प्रमाणपत्र)'),
    purpose: createLoc('Proving minimum age criteria (60+ for general, 65+ for Sandhya Suraksha, 70+ for Vay Vandana)', 'ಹಿರಿಯ ನಾಗರಿಕರ ಕನಿಷ್ಠ ವಯಸ್ಸಿನ ಅರ್ಹತೆ ಸಾಬೀತುಪಡಿಸಲು', 'न्यूनतम आयु पात्रता (60+, 65+, 70+) प्रमाणित करने हेतु'),
    issuingAuthority: createLoc('UIDAI / Election Commission of India', 'ಯುಐಡಿಎಐ / ಭಾರತೀಯ ಚುನಾವಣಾ ಆಯೋಗ', 'यूआईडीएआई / भारतीय चुनाव आयोग'),
    requiredForSchemes: createLoc('Sandhya Suraksha, Ayushman Vay Vandana, Bus Concession', 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ, ಆಯುಷ್ಮಾನ್ ವಯ ವಂದನಾ, ಬಸ್ ರಿಯಾಯಿತಿ', 'संध्या सुरक्षा, आयुष्मान वय वंदना, बस छूट'),
  },
  {
    id: 'doc-senior-ppo-copy',
    role: 'senior',
    title: createLoc('Pension Payment Order (PPO) Copy', 'ಪಿಂಚಣಿ ಪಾವತಿ ಆದೇಶ (PPO) ಪ್ರತಿ', 'पेंशन भुगतान आदेश (पीपीओ) प्रति'),
    purpose: createLoc('Tracking pension account, treasury code, and annual life certificate verification', 'ಪಿಂಚಣಿ ಖಾತೆ ಮತ್ತು ವಾರ್ಷಿಕ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ ಲಿಂಕ್ ಮಾಡಲು', 'पेंशन खाता व वार्षिक जीवन प्रमाणपत्र लिंकिंग हेतु'),
    issuingAuthority: createLoc('Accountant General / Central Pension Accounting Office', 'ಅಕೌಂಟೆಂಟ್ ಜನರಲ್ / ಖಜಾನೆ ಇಲಾಖೆ', 'महालेखाकार / पेंशन लेखा कार्यालय'),
    requiredForSchemes: createLoc('Jeevan Pramaan Digital Life Certificate, Family Pension', 'ಜೀವನ್ ಪ್ರಮಾಣ್ ಡಿಜಿಟಲ್ ಪ್ರಮಾಣಪತ್ರ, ಕುಟುಂಬ ಪಿಂಚಣಿ', 'जीवन प्रमाण डिजिटल जीवन प्रमाणपत्र'),
  },
  {
    id: 'doc-senior-income-cert',
    role: 'senior',
    states: ['Karnataka'],
    title: createLoc('Revenue Dept Income Certificate (< ₹32,000/year)', 'ಕಂದಾಯ ಇಲಾಖೆಯ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (< ₹32,000/ವರ್ಷ)', 'राजस्व विभाग आय प्रमाण पत्र (< ₹32,000/वर्ष)'),
    purpose: createLoc('Proving poverty line eligibility for non-contributory welfare pension', 'ಸರ್ಕಾರಿ ಸಾಮಾಜಿಕ ಭದ್ರತಾ ಪಿಂಚಣಿ ಪಡೆಯಲು ಆರ್ಥಿಕ ಅರ್ಹತೆ ಪುರಾವೆ', 'सरकारी वृद्धावस्था पेंशन हेतु आर्थिक पात्रता'),
    issuingAuthority: createLoc('Tahsildar / Nadakacheri Center', 'ತಹಶೀಲ್ದಾರ್ / ನಾಡಕಚೇರಿ', 'तहसीलदार / नाडकचेरी'),
    requiredForSchemes: createLoc('Sandhya Suraksha Yojana, IGNOAPS', 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಯೋಜನೆ, ಇಂದಿರಾ ಗಾಂಧಿ ಪಿಂಚಣಿ', 'संध्या सुरक्षा योजना, राष्ट्रीय वृद्धावस्था पेंशन'),
  },

  // ==================== DISABILITY ====================
  {
    id: 'doc-disability-udid-cert',
    role: 'disability',
    title: createLoc('UDID Smart Card / Medical Board Disability Certificate', 'ಯುಡಿಐಡಿ ಕಾರ್ಡ್ / ವೈದ್ಯಕೀಯ ಮಂಡಳಿ ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ', 'यूडीआईडी कार्ड / मेडिकल बोर्ड दिव्यांगता प्रमाणपत्र'),
    purpose: createLoc('Official confirmation of 40%+ benchmark disability for all statutory benefits', 'ಶೇಕಡಾ ೪೦ ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಗವೈಕಲ್ಯದ ಅಧಿಕೃತ ವೈದ್ಯಕೀಯ ದೃಢೀಕರಣ', '40%+ दिव्यांगता का आधिकारिक मेडिकल प्रमाणीकरण'),
    issuingAuthority: createLoc('District Medical Board / Chief Medical Officer (CMO)', 'ಜಿಲ್ಲಾ ವೈದ್ಯಕೀಯ ಮಂಡಳಿ / ಜಿಲ್ಲಾ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು', 'जिला मेडिकल बोर्ड / मुख्य चिकित्सा अधिकारी (सीएमओ)'),
    requiredForSchemes: createLoc('Disability Monthly Pension, ADIP Devices, Rail/Bus Pass', 'ಅಂಗವಿಕಲರ ಮಾಸಿಕ ಪಿಂಚಣಿ, ಅಡಿಪ್ ಸಾಧನಗಳು, ಬಸ್/ರೈಲು ಪಾಸ್', 'दिव्यांग पेंशन, एडिप उपकरण, मुफ्त यात्रा पास'),
  },
  {
    id: 'doc-disability-audiometry-assessment',
    role: 'disability',
    title: createLoc('Clinical Specialist Assessment / Audiometry / Therapy Report', 'ಕ್ಲಿನಿಕಲ್ ತಜ್ಞರ ಮೌಲ್ಯಮಾಪನ / ಆಡಿಯೋಮೆಟ್ರಿ / ಥೆರಪಿ ವರದಿ', 'विशेषज्ञ मेडिकल जांच / ऑडियोमेट्री / थेरेपी रिपोर्ट'),
    purpose: createLoc('Specific technical measurement required for custom prosthetics, motorized trike or Niramaya policy', 'ಕೃತಕ ಅಂಗಾಂಗ, ಮೋಟಾರೀಕೃತ ತ್ರಿಚಕ್ರ ವಾಹನ ಅಥವಾ ನಿರಾಮಯ ವಿಮೆಗೆ ಅಗತ್ಯ ವರದಿ', 'कृत्रिम अंग, मोटराइज्ड ट्राइसाइकिल या थेरेपी हेतु'),
    issuingAuthority: createLoc('Government Hospital Audiologist / Orthopedic Surgeon', 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯ ತಜ್ಞ ವೈದ್ಯರು', 'सरकारी अस्पताल विशेषज्ञ चिकित्सक'),
    requiredForSchemes: createLoc('ADIP Free Devices, Niramaya Insurance', 'ಅಡಿಪ್ ಉಚಿತ ಸಾಧನಗಳು, ನಿರಾಮಯ ವಿಮೆ', 'एडिप मुफ्त उपकरण, निरामया बीमा'),
  },
];
