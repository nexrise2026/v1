import { ServiceItem } from '../types';
import { createLoc } from './languages';

export const SCHEMES_DATABASE: ServiceItem[] = [
  // ==========================================
  // STUDENT SCHEMES (14 items)
  // ==========================================
  {
    id: 'ssp-post-matric',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka SSP Post-Matric Scholarship',
      'ಕರ್ನಾಟಕ ಎಸ್‌ಎಸ್‌ಪಿ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ',
      'कर्नाटक एसएसपी पोस्ट-मैट्रिक छात्रवृत्ति'
    ),
    department: createLoc(
      'Social Welfare & Backward Classes Dept, Karnataka',
      'ಸಮಾಜ ಕಲ್ಯಾಣ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ',
      'समाज कल्याण एवं पिछड़ा वर्ग कल्याण विभाग, कर्नाटक'
    ),
    benefit: createLoc(
      'Full tuition fee reimbursement + maintenance allowance up to ₹30,000/year',
      'ಪೂರ್ಣ ಬೋಧನಾ ಶುಲ್ಕ ಮರುಪಾವತಿ + ವರ್ಷಕ್ಕೆ ₹30,000 ವರೆಗೆ ನಿರ್ವಹಣಾ ಭತ್ಯೆ',
      'पूर्ण शिक्षण शुल्क प्रतिपूर्ति + ₹30,000/वर्ष तक रखरखाव भत्ता'
    ),
    eligibility: createLoc(
      'SC/ST/OBC/EWS students studying in recognized colleges/polytechnics in Karnataka. Income limit below ₹2.5 Lakh.',
      'ಕರ್ನಾಟಕದ ಮಾನ್ಯತೆ ಪಡೆದ ಕಾಲೇಜು/ಪಾಲಿಟೆಕ್ನಿಕ್‌ನಲ್ಲಿ ಓದುತ್ತಿರುವ SC/ST/OBC ವಿದ್ಯಾರ್ಥಿಗಳು. ಆದಾಯ ಮಿತಿ ₹2.5 ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ.',
      'कर्नाटक के मान्यता प्राप्त कॉलेजों में पढ़ने वाले SC/ST/OBC छात्र। वार्षिक आय सीमा ₹2.5 लाख से कम।'
    ),
    documents: [
      createLoc('College Admission Receipt', 'ಕಾಲೇಜು ಪ್ರವೇಶ ರಶೀದಿ', 'कॉलेज प्रवेश रसीद'),
      createLoc('Caste & Income Certificate (RD Number)', 'ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (RD ಸಂಖ್ಯೆ)', 'जाति एवं आय प्रमाण पत्र'),
      createLoc('Aadhaar-seeded Bank Passbook', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'आधार से जुड़ा बैंक पासबुक'),
      createLoc('SSLC / Previous Marks Card', 'ಎಸ್‌ಎಸ್‌ಎಲ್‌ಸಿ / ಹಿಂದಿನ ಅಂಕಪಟ್ಟಿ', 'अंकतालिका'),
    ],
    deadline: createLoc('31 December (Annual cycle)', '೩೧ ಡಿಸೆಂಬರ್ (ವಾರ್ಷಿಕ ಗಡುವು)', '31 दिसंबर (वार्षिक चक्र)'),
    tags: [
      createLoc('Scholarship', 'ವಿದ್ಯಾರ್ಥಿವೇತನ', 'छात्रवृत्ति'),
      createLoc('Fee Concession', 'ಶುಲ್ಕ ರಿಯಾಯಿತಿ', 'शुल्क रियायत'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://ssp.postmatric.karnataka.gov.in',
  },
  {
    id: 'vidyasiri-scholarship',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Vidyasiri (Food & Accommodation) Scheme',
      'ವಿದ್ಯಾಸಿರಿ (ಊಟ ಮತ್ತು ವಸತಿ ಸಹಾಯ) ಯೋಜನೆ',
      'विद्यासिरी (भोजन एवं आवास सहायता) योजना'
    ),
    department: createLoc(
      'Backward Classes Welfare Department, Karnataka',
      'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ',
      'पिछड़ा वर्ग कल्याण विभाग, कर्नाटक'
    ),
    benefit: createLoc(
      '₹1,500 per month stipend for students not admitted in government hostels',
      'ಸರ್ಕಾರಿ ವಸತಿ ನಿಲಯಗಳಲ್ಲಿ ಪ್ರವೇಶ ಸಿಗದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಿಂಗಳಿಗೆ ₹1,500 ಭತ್ಯೆ',
      'सरकारी छात्रावास न मिलने वाले छात्रों को प्रति माह ₹1,500 वजीफा'
    ),
    eligibility: createLoc(
      'OBC/EWS students residing at least 5km away from college and without govt hostel seat.',
      'ಕಾಲೇಜಿನಿಂದ ಕನಿಷ್ಠ 5 ಕಿ.ಮೀ ದೂರದಲ್ಲಿ ವಾಸಿಸುವ ಮತ್ತು ಸರ್ಕಾರಿ ಹಾಸ್ಟೆಲ್ ಸೀಟು ಪಡೆಯದ ಒಬಿಸಿ ವಿದ್ಯಾರ್ಥಿಗಳು.',
      'कॉलेज से 5 किमी दूर रहने वाले और सरकारी हॉस्टल में सीट न पाने वाले छात्र।'
    ),
    documents: [
      createLoc('Bonafide Student Certificate', 'ಬೋನಫೈಡ್ ಪ್ರಮಾಣಪತ್ರ', 'बोनाफाइड प्रमाणपत्र'),
      createLoc('Rental/PG Agreement or Affidavit', 'ಬಾಡಿಗೆ ಕರಾರುಪತ್ರ / ಪ್ರಮಾಣಪತ್ರ', 'किराया समझौता / शपथ पत्र'),
      createLoc('Ration Card', 'ರೇಷನ್ ಕಾರ್ಡ್', 'राशन कार्ड'),
    ],
    deadline: createLoc('15 November (Annual cycle)', '೧೫ ನವೆಂಬರ್', '15 नवंबर'),
    tags: [
      createLoc('Hostel Stipend', 'ಹಾಸ್ಟೆಲ್ ಭತ್ಯೆ', 'छात्रावास वजीफा'),
      createLoc('Karnataka Special', 'ಕರ್ನಾಟಕ ವಿಶೇಷ', 'कर्नाटक विशेष'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://bcwd.karnataka.gov.in',
  },
  {
    id: 'nsp-central-sector',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'National Scholarship Portal (Central Sector Scheme)',
      'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (ಕೇಂದ್ರ ವಲಯ ಯೋಜನೆ)',
      'राष्ट्रीय छात्रवृत्ति पोर्टल (केंद्रीय क्षेत्र योजना)'
    ),
    department: createLoc(
      'Ministry of Education, Government of India',
      'ಶಿಕ್ಷಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ',
      'शिक्षा मंत्रालय, भारत सरकार'
    ),
    benefit: createLoc(
      '₹12,000/year for undergraduate and ₹20,000/year for post-graduate studies',
      'ಪದವಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ₹12,000/ವರ್ಷ ಮತ್ತು ಸ್ನಾತಕೋತ್ತರ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ₹20,000/ವರ್ಷ',
      'स्नातक छात्रों के लिए ₹12,000/वर्ष और स्नातकोत्तर के लिए ₹20,000/वर्ष'
    ),
    eligibility: createLoc(
      'Top 80th percentile in Class 12 board exams, family annual income under ₹4.5 Lakh.',
      '೧೨ನೇ ತರಗತಿಯಲ್ಲಿ ಶೇ. ೮೦ ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಕ ಮತ್ತು ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹4.5 ಲಕ್ಷದೊಳಗೆ.',
      'कक्षा 12 में शीर्ष 80वें पर्सेंटाइल अंक और वार्षिक आय ₹4.5 लाख से कम।'
    ),
    documents: [
      createLoc('Class 12 Marksheet', '೧೨ನೇ ತರಗತಿ ಅಂಕಪಟ್ಟಿ', '12वीं की मार्कशीट'),
      createLoc('Income Certificate', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'आय प्रमाण पत्र'),
      createLoc('College Bonafide', 'ಕಾಲೇಜು ಬೋನಫೈಡ್', 'कॉलेज बोनाफाइड'),
    ],
    deadline: createLoc('31 October', '೩೧ ಅಕ್ಟೋಬರ್', '31 अक्टूबर'),
    tags: [
      createLoc('Central Scheme', 'ಕೇಂದ್ರ ಯೋಜನೆ', 'केंद्रीय योजना'),
      createLoc('Merit-cum-Means', 'ಮೆರಿಟ್ ವಿದ್ಯಾರ್ಥಿವೇತನ', 'मेधावी छात्रवृत्ति'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://scholarships.gov.in',
  },
  {
    id: 'ksrtc-student-pass',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'KSRTC / BMTC Student Concessional Bus Pass',
      'ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ / ಬಿಎಂಟಿಸಿ ವಿದ್ಯಾರ್ಥಿ ರಿಯಾಯಿತಿ ಬಸ್ ಪಾಸ್',
      'केएसआरटीसी / बीएमटीसी छात्र रियायती बस पास'
    ),
    department: createLoc(
      'Karnataka State Road Transport Corporation',
      'ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ನಿಗಮ',
      'कर्नाटक राज्य सड़क परिवहन निगम'
    ),
    benefit: createLoc(
      'Up to 80% subsidized unlimited travel between home and college/school route',
      'ಮನೆ ಮತ್ತು ಕಾಲೇಜು ನಡುವೆ ಶೇಕಡಾ 80 ರಷ್ಟು ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಪ್ರಯಾಣ ಪಾಸ್',
      'घर से शिक्षण संस्थान तक 80% रियायती दर पर बस यात्रा'
    ),
    eligibility: createLoc(
      'Regular full-time students of recognized Karnataka schools, PU colleges, universities.',
      'ಕರ್ನಾಟಕದ ಮಾನ್ಯತೆ ಪಡೆದ ಶಾಲೆ, ಪಿಯು ಮತ್ತು ಪದವಿ ಕಾಲೇಜುಗಳ ನಿಯಮಿತ ವಿದ್ಯಾರ್ಥಿಗಳು.',
      'कर्नाटक के मान्यता प्राप्त स्कूलों और कॉलेजों के नियमित छात्र।'
    ),
    documents: [
      createLoc('Institution Fee Receipt', 'ಕಾಲೇಜು ಶುಲ್ಕ ರಶೀದಿ', 'संस्थान शुल्क रसीद'),
      createLoc('Student Identity Card', 'ವಿದ್ಯಾರ್ಥಿ ಗುರುತಿನ ಚೀಟಿ', 'छात्र पहचान पत्र'),
      createLoc('Recent Passport Photo', 'ಇತ್ತೀಚಿನ ಭಾವಚಿತ್ರ', 'पासपोर्ट फोटो'),
    ],
    deadline: createLoc('Rolling round the year', 'ವರ್ಷವಿಡೀ ಲಭ್ಯ', 'साल भर उपलब्ध'),
    tags: [
      createLoc('Transport Concession', 'ಸಾರಿಗೆ ರಿಯಾಯಿತಿ', 'परिवहन रियायत'),
      createLoc('Karnataka', 'ಕರ್ನಾಟಕ', 'कर्नाटक'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://sevasindhu.karnataka.gov.in',
  },
  {
    id: 'sc-st-fee-reimbursement',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'SC/ST Post-Matric Full Fee Reimbursement & Book Bank',
      'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ಪೂರ್ಣ ಶುಲ್ಕ ಮರುಪಾವತಿ ಮತ್ತು ಪುಸ್ತಕ ನೆರವು',
      'अनुसूचित जाति/जनजाति पोस्ट-मैट्रिक पूर्ण शुल्क प्रतिपूर्ति'
    ),
    department: createLoc(
      'Ministry of Social Justice & Empowerment, GoI',
      'ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಮತ್ತು ಸಬಲೀಕರಣ ಸಚಿವಾಲಯ',
      'सामाजिक न्याय एवं अधिकारिता मंत्रालय'
    ),
    benefit: createLoc(
      '100% mandatory non-refundable college and exam fee coverage + annual book grant',
      'ಶೇಕಡಾ 100 ರಷ್ಟು ಕಾಲೇಜು ಮತ್ತು ಪರೀಕ್ಷಾ ಶುಲ್ಕ ಮನ್ನಾ + ವಾರ್ಷಿಕ ಪುಸ್ತಕ ಧನಸಹಾಯ',
      '100% गैर-वापसी योग्य शिक्षण व परीक्षा शुल्क प्रतिपूर्ति + पुस्तक अनुदान'
    ),
    eligibility: createLoc(
      'SC/ST enrolled in approved higher technical/professional courses. Income < ₹2.5L.',
      'ಮಾನ್ಯತೆ ಪಡೆದ ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳಲ್ಲಿ ದಾಖಲಾದ ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ವಿದ್ಯಾರ್ಥಿಗಳು. ಆದಾಯ < ₹2.5 ಲಕ್ಷ.',
      'मान्यता प्राप्त उच्च तकनीकी पाठ्यक्रमों में अध्ययनरत SC/ST छात्र। आय < ₹2.5 लाख।'
    ),
    documents: [
      createLoc('Caste Certificate', 'ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ', 'जाति प्रमाणपत्र'),
      createLoc('Income Certificate', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'आय प्रमाणपत्र'),
      createLoc('Fee Structure Certificate', 'ಶುಲ್ಕ ವಿವರ ಪ್ರಮಾಣಪತ್ರ', 'शुल्क संरचना प्रमाणपत्र'),
    ],
    deadline: createLoc('30 November', '೩೦ ನವೆಂಬರ್', '30 नवंबर'),
    tags: [
      createLoc('SC/ST Welfare', 'ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಕಲ್ಯಾಣ', 'एससी/एसटी कल्याण'),
      createLoc('Tuition Waiver', 'ಶುಲ್ಕ ಮನ್ನಾ', 'शुल्क माफी'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://scholarships.gov.in',
  },
  {
    id: 'minority-merit-scholarship',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'Minority Affairs Post-Matric & Merit Scholarship',
      'ಅಲ್ಪಸಂಖ್ಯಾತರ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ಮತ್ತು ಮೆರಿಟ್ ವಿದ್ಯಾರ್ಥಿವೇತನ',
      'अल्पसंख्यक पोस्ट-मैट्रिक एवं मेरिट छात्रवृत्ति'
    ),
    department: createLoc(
      'Ministry of Minority Affairs, GoI',
      'ಅಲ್ಪಸಂಖ್ಯಾತರ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ',
      'अल्पसंख्यक कार्य मंत्रालय'
    ),
    benefit: createLoc(
      'Course fee reimbursement up to ₹20,000/year plus living stipend',
      'ವರ್ಷಕ್ಕೆ ₹20,000 ವರೆಗೆ ಕೋರ್ಸ್ ಶುಲ್ಕ ಮರುಪಾವತಿ ಮತ್ತು ನಿರ್ವಹಣಾ ಭತ್ಯೆ',
      '₹20,000/वर्ष तक कोर्स फीस प्रतिपूर्ति एवं निर्वाह भत्ता'
    ),
    eligibility: createLoc(
      'Students from notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) with >50% marks.',
      'ಶೇಕಡಾ 50 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಕಗಳಿಸಿದ ಮುಸ್ಲಿಂ, ಕ್ರಿಶ್ಚಿಯನ್, ಸಿಖ್, ಬೌದ್ಧ, ಜೈನ ಸಮುದಾಯದ ವಿದ್ಯಾರ್ಥಿಗಳು.',
      'अधिसूचित अल्पसंख्यक समुदाय के छात्र, न्यूनतम 50% अंक।'
    ),
    documents: [
      createLoc('Minority Community Self-Declaration', 'ಅಲ್ಪಸಂಖ್ಯಾತ ಸಮುದಾಯ ದೃಢೀಕರಣ', 'अल्पसंख्यक समुदाय घोषणा पत्र'),
      createLoc('Previous Exam Marks Card', 'ಹಿಂದಿನ ಪರೀಕ್ಷಾ ಅಂಕಪಟ್ಟಿ', 'पिछली परीक्षा की अंकतालिका'),
      createLoc('Bank Passbook', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'बैंक पासबुक'),
    ],
    deadline: createLoc('31 October', '೩೧ ಅಕ್ಟೋಬರ್', '31 अक्टूबर'),
    tags: [
      createLoc('Minority Welfare', 'ಅಲ್ಪಸಂಖ್ಯಾತ ಕಲ್ಯಾಣ', 'अल्पसंख्यक कल्याण'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://scholarships.gov.in',
  },
  {
    id: 'vidyalakshmi-loan-subvention',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'Vidya Lakshmi Education Loan & Interest Subsidy (CSIS)',
      'ವಿದ್ಯಾಲಕ್ಷ್ಮಿ ಶೈಕ್ಷಣಿಕ ಸಾಲ ಮತ್ತು ಬಡ್ಡಿ ಸಹಾಯಧನ (CSIS)',
      'विद्या लक्ष्मी शिक्षा ऋण एवं ब्याज सब्सिडी (CSIS)'
    ),
    department: createLoc(
      'Department of Higher Education, MoE',
      'ಉನ್ನತ ಶಿಕ್ಷಣ ಇಲಾಖೆ',
      'उच्च शिक्षा विभाग'
    ),
    benefit: createLoc(
      '100% full interest subsidy during moratorium period (course + 1 year) for education loans up to ₹10 Lakh',
      'ಕೋರ್ಸ್ ಅವಧಿ ಮತ್ತು 1 ವರ್ಷದ ಮೊರಟೋರಿಯಂ ಸಮಯದಲ್ಲಿ ₹10 ಲಕ್ಷದವರೆಗಿನ ಸಾಲಕ್ಕೆ ಸಂಪೂರ್ಣ ಬಡ್ಡಿ ಮನ್ನಾ',
      'कोर्स अवधि व 1 वर्ष की मोहलत के दौरान ₹10 लाख तक के ऋण पर 100% ब्याज सब्सिडी'
    ),
    eligibility: createLoc(
      'Students admitted to professional/technical courses with annual family income up to ₹4.5 Lakh.',
      'ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ ₹4.5 ಲಕ್ಷದೊಳಗಿನ ತಾಂತ್ರಿಕ/ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳ ವಿದ್ಯಾರ್ಥಿಗಳು.',
      'तकनीकी/व्यावसायिक पाठ्यक्रमों में अध्ययनरत छात्र जिनकी वार्षिक आय ₹4.5 लाख तक हो।'
    ),
    documents: [
      createLoc('College Admission Letter', 'ಕಾಲೇಜು ಪ್ರವೇಶ ಪತ್ರ', 'कॉलेज प्रवेश पत्र'),
      createLoc('Income Certificate by Tehsildar', 'ತಹಶೀಲ್ದಾರ್ ನೀಡಿದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'तहसीलदार द्वारा आय प्रमाणपत्र'),
      createLoc('Bank Loan Sanction Letter', 'ಬ್ಯಾಂಕ್ ಸಾಲ ಮಂಜೂರಾತಿ ಪತ್ರ', 'बैंक ऋण स्वीकृति पत्र'),
    ],
    deadline: createLoc('Open throughout the academic year', 'ಶೈಕ್ಷಣಿಕ ವರ್ಷದುದ್ದಕ್ಕೂ ಮುಕ್ತ', 'पूरे शैक्षणिक सत्र में खुला'),
    tags: [
      createLoc('Education Loan', 'ಶೈಕ್ಷಣಿಕ ಸಾಲ', 'शिक्षा ऋण'),
      createLoc('Interest Subsidy', 'ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ', 'ब्याज सब्सिडी'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://www.vidyalakshmi.co.in',
  },
  {
    id: 'aiet-pragati-saksham',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'AICTE Pragati Scholarship for Girl Students',
      'ಎಐಸಿಟಿಇ ಪ್ರಗತಿ ವಿದ್ಯಾರ್ಥಿವೇತನ (ಹೆಣ್ಣುಮಕ್ಕಳಿಗೆ)',
      'एआईसीटीई प्रगति छात्रवृत्ति (छात्राओं के लिए)'
    ),
    department: createLoc(
      'All India Council for Technical Education (AICTE)',
      'ಅಖಿಲ ಭಾರತ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ ಮಂಡಳಿ',
      'अखिल भारतीय तकनीकी शिक्षा परिषद'
    ),
    benefit: createLoc(
      '₹50,000 per year towards college fees, computers, books, equipment',
      'ಕಾಲೇಜು ಶುಲ್ಕ, ಲ್ಯಾಪ್‌ಟಾಪ್ ಮತ್ತು ಪುಸ್ತಕಗಳಿಗಾಗಿ ವರ್ಷಕ್ಕೆ ₹50,000 ಧನಸಹಾಯ',
      'कॉलेज फीस, लैपटॉप व किताबों के लिए ₹50,000 प्रति वर्ष'
    ),
    eligibility: createLoc(
      'Girl student admitted to 1st year degree/diploma technical course. Family income < ₹8 Lakh.',
      'ತಾಂತ್ರಿಕ ಪದವಿ/ಡಿಪ್ಲೊಮಾ ಮೊದಲ ವರ್ಷಕ್ಕೆ ದಾಖಲಾದ ಹೆಣ್ಣು ಮಕ್ಕಳು. ಆದಾಯ < ₹8 ಲಕ್ಷ.',
      'तकनीकी डिग्री/डिप्लोमा प्रथम वर्ष में नामांकित छात्राएं। आय < ₹8 लाख।'
    ),
    documents: [
      createLoc('AICTE College Admission Proof', 'ಎಐಸಿಟಿಇ ಕಾಲೇಜು ಪ್ರವೇಶ ಪುರಾವೆ', 'एआईसीटीई प्रवेश प्रमाण'),
      createLoc('Class 10 & 12 Marksheets', '೧೦ ಮತ್ತು ೧೨ನೇ ತರಗತಿ ಅಂಕಪಟ್ಟಿಗಳು', '10वीं व 12वीं की अंकतालिका'),
      createLoc('Family Income Certificate', 'ಕುಟುಂಬದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'परिवार आय प्रमाणपत्र'),
    ],
    deadline: createLoc('31 December', '೩೧ ಡಿಸೆಂಬರ್', '31 दिसंबर'),
    tags: [
      createLoc('Women Education', 'ಮಹಿಳಾ ಶಿಕ್ಷಣ', 'महिला शिक्षा'),
      createLoc('Engineering / Diploma', 'ಇಂಜಿನಿಯರಿಂಗ್ / ಡಿಪ್ಲೊಮಾ', 'इंजीनियरिंग / डिप्लोमा'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://scholarships.gov.in',
  },
  {
    id: 'bonafide-issuance-portal',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'Digital Bonafide & Student Enrollment Verification',
      'ಡಿಜಿಟಲ್ ಬೋನಫೈಡ್ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ದಾಖಲಾತಿ ಪರಿಶೀಲನೆ',
      'डिजिटल बोनाफाइड एवं छात्र नामांकन सत्यापन'
    ),
    department: createLoc(
      'Department of Collegiate Education',
      'ಕಾಲೇಜು ಶಿಕ್ಷಣ ಇಲಾಖೆ',
      'कॉलेज शिक्षा विभाग'
    ),
    benefit: createLoc(
      'Instant verified e-Bonafide certificate for passport, visa, scholarships & bank loans',
      'ವಿದ್ಯಾರ್ಥಿವೇತನ, ಪಾಸ್‌ಪೋರ್ಟ್ ಮತ್ತು ಸಾಲಗಳಿಗೆ ತತ್‌ಕ್ಷಣ ಅಧಿಕೃತ ಇ-ಬೋನಫೈಡ್ ಪ್ರಮಾಣಪತ್ರ',
      'छात्रवृत्ति, पासपोर्ट और ऋण के लिए तत्काल डिजिटल बोनाफाइड प्रमाणपत्र'
    ),
    eligibility: createLoc(
      'All active enrolled undergraduate and postgraduate students.',
      'ಮಾನ್ಯತೆ ಪಡೆದ ಕಾಲೇಜಿನಲ್ಲಿ ಪ್ರಸ್ತುತ ಕಲಿಯುತ್ತಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳು.',
      'सभी सक्रिय नामांकित स्नातक और स्नातकोत्तर छात्र।'
    ),
    documents: [
      createLoc('University Registration Number (USN / Roll No)', 'ವಿಶ್ವವಿದ್ಯಾಲಯ ನೋಂದಣಿ ಸಂಖ್ಯೆ (USN)', 'विश्वविद्यालय रोल नंबर'),
      createLoc('College ID Card', 'ಕಾಲೇಜು ಐಡಿ ಕಾರ್ಡ್', 'कॉलेज आईडी कार्ड'),
    ],
    deadline: createLoc('Instant on request', 'ವಿನಂತಿಸಿದ ತಕ್ಷಣ', 'अनुरोध पर तुरंत'),
    tags: [
      createLoc('Certificate', 'ಪ್ರಮಾಣಪತ್ರ', 'प्रमाणपत्र'),
      createLoc('Identity', 'ಗುರುತು', 'पहचान'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://services.india.gov.in',
  },
  {
    id: 'karnataka-caste-income-rd',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Nadakacheri Caste & Income Certificate (RD)',
      'ಕರ್ನಾಟಕ ನಾಡಕಚೇರಿ ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (RD)',
      'कर्नाटक नाडकचेरी जाति एवं आय प्रमाण पत्र (RD)'
    ),
    department: createLoc(
      'Revenue Department, Government of Karnataka',
      'ಕಂದಾಯ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ',
      'राजस्व विभाग, कर्नाटक सरकार'
    ),
    benefit: createLoc(
      'Statutory 15-digit RD barcode certificate essential for all Karnataka quotas and SSP scholarships',
      'ಎಲ್ಲಾ ಕೋಟಾಗಳು ಮತ್ತು ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನಕ್ಕೆ ಕಡ್ಡಾಯವಾದ 15-ಅಂಕಿಯ RD ಪ್ರಮಾಣಪತ್ರ',
      'एसएसपी छात्रवृत्ति और आरक्षण के लिए आवश्यक 15-अंकीय आरडी प्रमाणपत्र'
    ),
    eligibility: createLoc(
      'Karnataka domiciled residents belonging to eligible categories.',
      'ಕರ್ನಾಟಕದ ಖಾಯಂ ನಿವಾಸಿಗಳು.',
      'कर्नाटक के स्थायी निवासी।'
    ),
    documents: [
      createLoc('Ration Card', 'ರೇಷನ್ ಕಾರ್ಡ್', 'राशन कार्ड'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Previous School TC showing caste', 'ಜಾತಿ ನಮೂದಿಸಿರುವ ಶಾಲಾ ವರ್ಗಾವಣೆ ಪತ್ರ (TC)', 'स्कूल टीसी'),
    ],
    deadline: createLoc('Valid for 5 years', '೫ ವರ್ಷಗಳವರೆಗೆ ಮಾನ್ಯ', '5 वर्ष के लिए वैध'),
    tags: [
      createLoc('Vital Certificate', 'ಮುಖ್ಯ ಪ್ರಮಾಣಪತ್ರ', 'महत्वपूर्ण प्रमाणपत्र'),
      createLoc('Karnataka Nadakacheri', 'ನಾಡಕಚೇರಿ', 'नाडकचेरी'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://nadakacheri.karnataka.gov.in',
  },
  {
    id: 'free-laptop-scheme-karnataka',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Free Laptop Scheme for College Freshers',
      'ಕರ್ನಾಟಕ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ಲ್ಯಾಪ್‌ಟಾಪ್ ಯೋಜನೆ',
      'कर्नाटक कॉलेज छात्रों के लिए मुफ्त लैपटॉप योजना'
    ),
    department: createLoc(
      'Department of Collegiate and Technical Education, Karnataka',
      'ಕಾಲೇಜು ಮತ್ತು ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ',
      'कॉलेज और तकनीकी शिक्षा विभाग, कर्नाटक'
    ),
    benefit: createLoc(
      'Free branded laptop for digital learning and academic projects',
      'ಡಿಜಿಟಲ್ ಕಲಿಕೆಗಾಗಿ ಉಚಿತ ಬ್ರಾಂಡೆಡ್ ಲ್ಯಾಪ್‌ಟಾಪ್',
      'डिजिटल अध्ययन के लिए मुफ्त ब्रांडेड लैपटॉप'
    ),
    eligibility: createLoc(
      'SC/ST and economically weaker students admitted into 1st year govt/aided engineering, medical, degree colleges.',
      'ಸರ್ಕಾರಿ/ಅನುದಾನಿತ ಎಂಜಿನಿಯರಿಂಗ್, ವೈದ್ಯಕೀಯ ಮತ್ತು ಪದವಿ ಕಾಲೇಜುಗಳಿಗೆ ಪ್ರವೇಶ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳು.',
      'सरकारी/सहायता प्राप्त कॉलेजों में प्रथम वर्ष में प्रवेश लेने वाले छात्र।'
    ),
    documents: [
      createLoc('College Admission Challan', 'ಪ್ರವೇಶ ಶುಲ್ಕ ಚಲನ್', 'प्रवेश शुल्क चालान'),
      createLoc('Caste/Income Certificate', 'ಜಾತಿ/ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'जाति/आय प्रमाण पत्र'),
    ],
    deadline: createLoc('30 November', '೩೦ ನವೆಂಬರ್', '30 नवंबर'),
    tags: [
      createLoc('Gadget / Laptop', 'ಲ್ಯಾಪ್‌ಟಾಪ್ ನೆರವು', 'लैपटॉप सहायता'),
      createLoc('Higher Education', 'ಉನ್ನತ ಶಿಕ್ಷಣ', 'उच्च शिक्षा'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://dce.karnataka.gov.in',
  },
  {
    id: 'national-apprenticeship-nats',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'National Apprenticeship Training Scheme (NATS)',
      'ರಾಷ್ಟ್ರೀಯ ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್ ತರಬೇತಿ ಯೋಜನೆ (NATS)',
      'राष्ट्रीय शिक्षुता प्रशिक्षण योजना (NATS)'
    ),
    department: createLoc(
      'Board of Apprenticeship Training / MoE',
      'ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್ ತರಬೇತಿ ಮಂಡಳಿ',
      'शिक्षुता प्रशिक्षण बोर्ड'
    ),
    benefit: createLoc(
      '1-year paid practical industrial internship with monthly stipend ₹9,000 - ₹15,000 direct in bank',
      'ತಿಂಗಳಿಗೆ ₹9,000 ರಿಂದ ₹15,000 ಭತ್ಯೆಯೊಂದಿಗೆ 1 ವರ್ಷದ ಕೈಗಾರಿಕಾ ತರಬೇತಿ',
      'मासिक ₹9,000 - ₹15,000 वजीफे के साथ 1 वर्षीय औद्योगिक प्रशिक्षण'
    ),
    eligibility: createLoc(
      'Graduates / Diploma holders in engineering, technology, humanities, commerce within 3 years of passing.',
      'ಪದವಿ / ಡಿಪ್ಲೊಮಾ ಪೂರ್ಣಗೊಳಿಸಿದ ೩ ವರ್ಷಗಳೊಳಗಿನ ವಿದ್ಯಾರ್ಥಿಗಳು.',
      'इंजीनियरिंग, कॉमर्स, आर्ट्स में डिग्री/डिप्लोमा उत्तीर्ण छात्र।'
    ),
    documents: [
      createLoc('Degree / Provisional Certificate', 'ಪದವಿ / ಪ್ರಾವಿಷನಲ್ ಪ್ರಮಾಣಪತ್ರ', 'डिग्री / प्रोविजनल प्रमाणपत्र'),
      createLoc('Consolidated Marks Card', 'ಸಮಗ್ರ ಅಂಕಪಟ್ಟಿ', 'समेकित अंकतालिका'),
      createLoc('Bank Passbook', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'बैंक पासबुक'),
    ],
    deadline: createLoc('Open year-round', 'ವರ್ಷವಿಡೀ ಮುಕ್ತ', 'साल भर खुला'),
    tags: [
      createLoc('Internship', 'ತರಬೇತಿ', 'इंटर्नशिप'),
      createLoc('Employment', 'ಉದ್ಯೋಗಾವಕಾಶ', 'रोजगार'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://nats.education.gov.in',
  },

  // ==========================================
  // FARMER SCHEMES (15 items)
  // ==========================================
  {
    id: 'pm-kisan-samman-nidhi',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'PM-KISAN Samman Nidhi & e-KYC Verification',
      'ಪಿಎಂ-ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ಮತ್ತು ಇ-ಕೆವೈಸಿ ಪರಿಶೀಲನೆ',
      'पीएम-किसान सम्मान निधि एवं ई-केवाईसी सत्यापन'
    ),
    department: createLoc(
      'Ministry of Agriculture & Farmers Welfare, GoI',
      'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ',
      'कृषि एवं किसान कल्याण मंत्रालय'
    ),
    benefit: createLoc(
      '₹6,000 per year income support in 3 equal instalments of ₹2,000 directly transferred to bank account',
      'ನೇರವಾಗಿ ರೈತರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 (ಪ್ರತಿ ೪ ತಿಂಗಳಿಗೆ ₹2,000 ಕಂತು)',
      '₹6,000 प्रति वर्ष 3 समान किस्तों (₹2,000 प्रत्येक) में सीधे बैंक खाते में'
    ),
    eligibility: createLoc(
      'Small and marginal landholder farmer families with cultivable land in revenue records.',
      'ಕಂದಾಯ ದಾಖಲೆಗಳಲ್ಲಿ ಸಾಗುವಳಿ ಜಮೀನು ಹೊಂದಿರುವ ಎಲ್ಲಾ ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತ ಕುಟುಂಬಗಳು.',
      'राजस्व रिकॉर्ड में खेती योग्य भूमि वाले सभी भूमिधारक किसान परिवार।'
    ),
    documents: [
      createLoc('Land Ownership Records (Pahani/RTC/Patta)', 'ಭೂ ದಾಖಲೆ (ಪಹಣಿ/ಆರ್‌ಟಿಸಿ)', 'भूमि अभिलेख (खतौनी/RTC)'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Aadhaar-linked Bank Account', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಖಾತೆ', 'आधार लिंक बैंक खाता'),
    ],
    deadline: createLoc('e-KYC mandatory before each instalment', 'ಪ್ರತಿ ಕಂತಿಗೆ ಮುಂಚಿತವಾಗಿ ಇ-ಕೆವೈಸಿ ಕಡ್ಡಾಯ', 'प्रत्येक किस्त से पहले ई-केवाईसी अनिवार्य'),
    tags: [
      createLoc('Direct Benefit Transfer', 'ನೇರ ನಗದು ವರ್ಗಾವಣೆ', 'प्रत्यक्ष लाभ अंतरण'),
      createLoc('Income Support', 'ಆದಾಯ ಬೆಂಬಲ', 'आय सहायता'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://pmkisan.gov.in',
  },
  {
    id: 'pmfby-crop-insurance',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      'ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ (ಬೆಳೆ ವಿಮೆ)',
      'प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाय)'
    ),
    department: createLoc(
      'Department of Agriculture & Farmers Welfare',
      'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಇಲಾಖೆ',
      'कृषि एवं किसान कल्याण विभाग'
    ),
    benefit: createLoc(
      'Comprehensive financial coverage for crop damage due to drought, unseasonal rains, pests and hailstorms',
      'ಬರಗಾಲ, ಅಕಾಲಿಕ ಮಳೆ, ಕೀಟಬಾಧೆ ಮತ್ತು ಪ್ರಕೃತಿ ವಿಕೋಪದಿಂದ ಬೆಳೆ ಹಾನಿಗೆ ಸಮಗ್ರ ವಿಮಾ ಪರಿಹಾರ',
      'सूखा, बेमौसम बारिश, कीट और ओलावृष्टि से फसल नुकसान पर व्यापक बीमा सुरक्षा'
    ),
    eligibility: createLoc(
      'All farmers growing notified crops in notified areas (both loanee and non-loanee farmers). Premium only 1.5% to 2%.',
      'ಅಧಿಸೂಚಿತ ಪ್ರದೇಶದಲ್ಲಿ ಅಧಿಸೂಚಿತ ಬೆಳೆ ಬೆಳೆಯುವ ಎಲ್ಲಾ ರೈತರು. ಪ್ರೀಮಿಯಂ ಕೇವಲ ಶೇ. 1.5 ರಿಂದ 2.',
      'अधिसूचित फसलों को उगाने वाले सभी किसान। प्रीमियम केवल 1.5% से 2%।'
    ),
    documents: [
      createLoc('RTC / Pahani / Land Record', 'ಆರ್‌ಟಿಸಿ / ಪಹಣಿ', 'भू-अभिलेख / खसरा खतौनी'),
      createLoc('Sowing Certificate / Self Crop Declaration', 'ಬೆಳೆ ಬಿತ್ತನೆ ದೃಢೀಕರಣ ಪತ್ರ', 'फसल बुवाई प्रमाणपत्र'),
      createLoc('Bank Passbook copy', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ಪ್ರತಿ', 'बैंक पासबुक प्रति'),
    ],
    deadline: createLoc('Kharif: 31 July | Rabi: 31 December', 'ಖಾರಿಫ್: ೩೧ ಜುಲೈ | ರಬಿ: ೩೧ ಡಿಸೆಂಬರ್', 'खरीफ: 31 जुलाई | रबी: 31 दिसंबर'),
    tags: [
      createLoc('Crop Insurance', 'ಬೆಳೆ ವಿಮೆ', 'फसल बीमा'),
      createLoc('Risk Mitigation', 'ಹಾನಿ ರಕ್ಷಣೆ', 'जोखिम सुरक्षा'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://pmfby.gov.in',
  },
  {
    id: 'fruits-karnataka-rtc-linking',
    role: 'farmer',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka FRUITS Portal & RTC / Pahani Land Linking',
      'ಕರ್ನಾಟಕ ಫ್ರೂಟ್ಸ್ (FRUITS) ಪೋರ್ಟಲ್ ಮತ್ತು ಆರ್‌ಟಿಸಿ ಜೋಡಣೆ',
      'कर्नाटक फ्रूट्स (FRUITS) पोर्टल एवं आरटीसी भूमि लिंकिंग'
    ),
    department: createLoc(
      'Department of Agriculture & e-Governance, Karnataka',
      'ಕೃಷಿ ಮತ್ತು ಇ-ಆಡಳಿತ ಇಲಾಖೆ, ಕರ್ನಾಟಕ',
      'कृषि एवं ई-गवर्नेंस विभाग, कर्नाटक'
    ),
    benefit: createLoc(
      'Unique FID number unlocking all Karnataka subsidies, MSP procurement & instant calamity relief',
      'ಎಲ್ಲಾ ಕೃಷಿ ಸಬ್ಸಿಡಿಗಳು, ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆ ಖರೀದಿ ಮತ್ತು ಪರಿಹಾರ ಪಡೆಯಲು ಏಕೈಕ ಎಫ್‌ಐಡಿ (FID)',
      'कर्नाटक की सभी कृषि सब्सिडी, एमएसपी खरीद और आपदा राहत के लिए एकल एफआईडी'
    ),
    eligibility: createLoc(
      'Every landowner / tenant farmer cultivating land in any Karnataka village.',
      'ಕರ್ನಾಟಕದ ಯಾವುದೇ ಹಳ್ಳಿಯಲ್ಲಿ ಜಮೀನು ಹೊಂದಿರುವ ಅಥವಾ ಸಾಗುವಳಿ ಮಾಡುವ ಪ್ರತಿಯೊಬ್ಬ ರೈತ.',
      'कर्नाटक में कृषि भूमि रखने वाले या खेती करने वाले सभी किसान।'
    ),
    documents: [
      createLoc('Bhoomi RTC (Pahani) with Survey Number', 'ಸರ್ವೇ ನಂಬರ್ ಹೊಂದಿರುವ ಭೂಮಿ ಆರ್‌ಟಿಸಿ (ಪಹಣಿ)', 'भूमि आरटीसी (पाहणी) खसरा संख्या'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Bank Passbook with NPCI mapping', 'ಎನ್‌ಪಿಸಿಐ ಮ್ಯಾಪ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'एनपीसीआई लिंक बैंक पासबुक'),
    ],
    deadline: createLoc('Mandatory round the year', 'ವರ್ಷವಿಡೀ ಕಡ್ಡಾಯ', 'साल भर अनिवार्य'),
    tags: [
      createLoc('Karnataka Bhoomi', 'ಭೂಮಿ ತಂತ್ರಾಂಶ', 'कर्नाटक भूमि'),
      createLoc('Single Farmer ID', 'ರೈತ ಗುರುತು ಚೀಟಿ', 'किसान आईडी'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://fruits.karnataka.gov.in',
  },
  {
    id: 'kisan-credit-card',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Kisan Credit Card (KCC) with 4% Interest Subvention',
      'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (ಕೆಸಿಸಿ) - ಶೇಕಡಾ ೪ ರ ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರ',
      'किसान क्रेडिट कार्ड (केसीसी) - 4% ब्याज दर'
    ),
    department: createLoc(
      'NABARD & Ministry of Finance, GoI',
      'ನಬಾರ್ಡ್ ಮತ್ತು ಹಣಕಾಸು ಸಚಿವಾಲಯ',
      'नाबार्ड एवं वित्त मंत्रालय'
    ),
    benefit: createLoc(
      'Revolving credit up to ₹3,00,000 for crop inputs, livestock, and post-harvest expenses at effective 4% interest',
      'ಬೆಳೆ ಬೀಜ, ಗೊಬ್ಬರ ಮತ್ತು ನಿರ್ವಹಣೆಗೆ ₹3 ಲಕ್ಷದವರೆಗೆ ಕೇವಲ ಶೇ. ೪ ರ ಬಡ್ಡಿದರದಲ್ಲಿ ಸುಲಭ ಸಾಲ',
      'बीज, खाद व खेती के लिए ₹3 लाख तक का ऋण प्रभावी 4% ब्याज दर पर'
    ),
    eligibility: createLoc(
      'Individual/joint farmers, tenant farmers, oral lessees, self-help groups, dairy/fisheries farmers.',
      'ವೈಯಕ್ತಿಕ ರೈತರು, ಗೇಣಿದಾರರು, ಹೈನುಗಾರಿಕೆ ಮತ್ತು ಮೀನುಗಾರಿಕೆ ಮಾಡುವ ರೈತರು.',
      'व्यक्तिगत/संयुक्त किसान, बटाईदार, डेयरी एवं मत्स्य पालक किसान।'
    ),
    documents: [
      createLoc('Land Holding Certificate / RTC', 'ಭೂ ಹಿಡುವಳಿ ಪ್ರಮಾಣಪತ್ರ / ಆರ್‌ಟಿಸಿ', 'भूमि जोत प्रमाणपत्र / आरटीसी'),
      createLoc('Crop Cultivation Declaration', 'ಬೆಳೆ ಬೆಳೆಯುವ ದೃಢೀಕರಣ ಪತ್ರ', 'फसल घोषणा पत्र'),
      createLoc('Identity & Address Proof', 'ಗುರುತು ಮತ್ತು ವಿಳಾಸ ಪುರಾವೆ', 'पहचान एवं निवास प्रमाण'),
    ],
    deadline: createLoc('Sanction within 14 days of application', 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ೧೪ ದಿನಗಳಲ್ಲಿ ಮಂಜೂರು', 'आवेदन के 14 दिनों के भीतर'),
    tags: [
      createLoc('Subsidized Credit', 'ರಿಯಾಯಿತಿ ಕೃಷಿ ಸಾಲ', 'रियायती ऋण'),
      createLoc('Working Capital', 'ದುಡಿಯುವ ಬಂಡವಾಳ', 'कार्यशील पूंजी'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://www.jansamarth.in',
  },
  {
    id: 'krishi-bhagya-drip-subsidy',
    role: 'farmer',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Krishi Bhagya & Drip Irrigation Subsidy',
      'ಕರ್ನಾಟಕ ಕೃಷಿ ಭಾಗ್ಯ ಮತ್ತು ಹನಿ ನೀರಾವರಿ ಸಹಾಯಧನ',
      'कर्नाटक कृषि भाग्य एवं ड्रिप सिंचाई सब्सिडी'
    ),
    department: createLoc(
      'Department of Agriculture, Karnataka',
      'ಕೃಷಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ ಸರ್ಕಾರ',
      'कृषि विभाग, कर्नाटक'
    ),
    benefit: createLoc(
      '90% subsidy for SC/ST and 75% for General farmers for farm ponds, polythene lining, diesel/solar pump sets',
      'ಕೃಷಿ ಹೊಂಡ, ಪಾಲಿಥೀನ್ ಹೊದಿಕೆ ಮತ್ತು ಹನಿ ನೀರಾವರಿ ಘಟಕಗಳಿಗೆ ಶೇ. 75 ರಿಂದ 90 ರಷ್ಟು ಸಹಾಯಧನ',
      'कृषि तालाब, पॉलीथिन लाइनिंग और ड्रिप सिंचाई पर 75% से 90% तक सब्सिडी'
    ),
    eligibility: createLoc(
      'Dryland farmers having clear land records in rain-fed taluks of Karnataka.',
      'ಕರ್ನಾಟಕದ ಮಳೆಯಾಶ್ರಿತ ತಾಲ್ಲೂಕುಗಳಲ್ಲಿ ಒಣಭೂಮಿ ಕೃಷಿ ಮಾಡುವ ರೈತರು.',
      'कर्नाटक के वर्षा आधारित क्षेत्रों में शुष्क भूमि खेती करने वाले किसान।'
    ),
    documents: [
      createLoc('RTC / Pahani', 'ಆರ್‌ಟಿಸಿ / ಪಹಣಿ', 'आरटीसी / खसरा'),
      createLoc('Soil & Water Availability Report', 'ಮಣ್ಣು ಮತ್ತು ನೀರಿನ ಲಭ್ಯತೆ ವರದಿ', 'मृदा व जल रिपोर्ट'),
      createLoc('FRUITS FID Number', 'ಫ್ರೂಟ್ಸ್ ಎಫ್‌ಐಡಿ ಸಂಖ್ಯೆ', 'फ्रूट्स एफआईडी संख्या'),
    ],
    deadline: createLoc('Apply before start of Kharif', 'ಖಾರಿಫ್ ಆರಂಭಕ್ಕೂ ಮುನ್ನ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ', 'खरीफ शुरू होने से पहले'),
    tags: [
      createLoc('Irrigation Subsidy', 'ನೀರಾವರಿ ಸಹಾಯಧನ', 'सिंचाई सब्सिडी'),
      createLoc('Water Conservation', 'ಜಲ ಸಂರಕ್ಷಣೆ', 'जल संरक्षण'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://raitamitra.karnataka.gov.in',
  },
  {
    id: 'pm-kusum-solar-pump',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'PM-KUSUM Component-B Standalone Solar Agriculture Pumps',
      'ಪಿಎಂ-ಕುಸುಮ್ ಯೋಜನೆ - ಸ್ವತಂತ್ರ ಸೌರ ಕೃಷಿ ಪಂಪ್‌ಸೆಟ್',
      'पीएम-कुसुम योजना - स्टैंडअलोन सौर कृषि पंप'
    ),
    department: createLoc(
      'Ministry of New & Renewable Energy, GoI',
      'ಹೊಸ ಮತ್ತು ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ಸಚಿವಾಲಯ',
      'नवीन एवं नवीकरणीय ऊर्जा मंत्रालय'
    ),
    benefit: createLoc(
      'Up to 60% capital subsidy (30% Central + 30% State) for 3HP to 7.5HP off-grid solar water pumps',
      '೩ ಹೆಚ್‌ಪಿಯಿಂದ ೭.೫ ಹೆಚ್‌ಪಿವರೆಗಿನ ಸೌರ ನೀರೆತ್ತುವ ಪಂಪ್‌ಗಳಿಗೆ ಶೇಕಡಾ ೬೦ ರಷ್ಟು ಸಹಾಯಧನ',
      '3HP से 7.5HP सौर पंपों के लिए 60% तक पूंजीगत सब्सिडी'
    ),
    eligibility: createLoc(
      'Individual farmers, panchayats, FPOs having cultivable land with borewell/openwell but no electric connection.',
      'ಕೊಳವೆಬಾವಿ ಹೊಂದಿದ್ದು ವಿದ್ಯುತ್ ಸಂಪರ್ಕವಿಲ್ಲದ ಜಮೀನು ಹೊಂದಿರುವ ರೈತರು.',
      'बोरवेल/कुएं वाले लेकिन बिजली कनेक्शन से रहित कृषि भूमि वाले किसान।'
    ),
    documents: [
      createLoc('Land Ownership Records', 'ಭೂ ಮಾಲೀಕತ್ವ ದಾಖಲೆಗಳು', 'भूमि स्वामित्व अभिलेख'),
      createLoc('Borewell Yield Certificate', 'ಕೊಳವೆಬಾವಿ ಪ್ರಮಾಣಪತ್ರ', 'बोरवेल प्रमाणपत्र'),
      createLoc('Electricity Company No-Connection Certificate', 'ವಿದ್ಯುತ್ ಸಂಪರ್ಕವಿಲ್ಲದಿರುವ ಬಗ್ಗೆ ದೃಢೀಕರಣ', 'विद्युत अनापत्ति प्रमाणपत्र'),
    ],
    deadline: createLoc('Scheme tranche open based on targets', 'ಗುರಿಯ ಆಧಾರದ ಮೇಲೆ ಅರ್ಜಿ ಲಭ್ಯ', 'लक्ष्य आधारित आवेदन खुला'),
    tags: [
      createLoc('Solar Energy', 'ಸೌರ ಶಕ್ತಿ', 'सौर ऊर्जा'),
      createLoc('Zero Electricity Bills', 'ಶೂನ್ಯ ವಿದ್ಯುತ್ ಬಿಲ್', 'मुफ्त सिंचाई ऊर्जा'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://pmkusum.mnre.gov.in',
  },
  {
    id: 'soil-health-card-scheme',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Soil Health Card & Nutrient Management',
      'ಮಣ್ಣು ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಮತ್ತು ಪೋಷಕಾಂಶ ನಿರ್ವಹಣೆ',
      'मृदा स्वास्थ्य कार्ड एवं पोषक तत्व प्रबंधन'
    ),
    department: createLoc(
      'Dept of Agriculture, Cooperation & Farmers Welfare',
      'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಇಲಾಖೆ',
      'कृषि विभाग'
    ),
    benefit: createLoc(
      'Free lab testing of 12 chemical parameters of soil + customized fertilizer recommendations saving up to 25% costs',
      'ಉಚಿತ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಮತ್ತು ರಸಗೊಬ್ಬರಗಳ ವೆಚ್ಚವನ್ನು ಶೇಕಡಾ ೨೫ ರಷ್ಟು ಉಳಿಸುವ ಶಿಫಾರಸು ಪಟ್ಟಿ',
      'मिट्टी के 12 मापदंडों की मुफ्त जांच + 25% तक खाद खर्च बचाने वाली सिफारिशें'
    ),
    eligibility: createLoc(
      'Every farmer having agricultural land across India.',
      'ಭಾರತದ ಎಲ್ಲಾ ಕೃಷಿ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತರು.',
      'देश के सभी कृषि भूमि धारक किसान।'
    ),
    documents: [
      createLoc('Survey Number / RTC', 'ಸರ್ವೇ ನಂಬರ್ / ಆರ್‌ಟಿಸಿ', 'खसरा संख्या / आरटीसी'),
      createLoc('Farmer Contact details', 'ರೈತರ ಮೊಬೈಲ್ ವಿವರ', 'किसान मोबाइल नंबर'),
    ],
    deadline: createLoc('Samples collected every 3 years cycle', 'ಪ್ರತಿ ೩ ವರ್ಷಕ್ಕೊಮ್ಮೆ ಉಚಿತ ಪರೀಕ್ಷೆ', 'हर 3 साल में चक्रानुसार जांच'),
    tags: [
      createLoc('Fertilizer Cost Saving', 'ಗೊಬ್ಬರ ವೆಚ್ಚ ಉಳಿತಾಯ', 'उर्वरक बचत'),
      createLoc('Soil Testing', 'ಮಣ್ಣು ಪರೀಕ್ಷೆ', 'मृदा परीक्षण'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://soilhealth.dac.gov.in',
  },
  {
    id: 'karnataka-raitha-siri',
    role: 'farmer',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Raitha Siri (Millet Promotion) Scheme',
      'ಕರ್ನಾಟಕ ರೈತ ಸಿರಿ (ಸಿರಿಧಾನ್ಯ ಪ್ರೋತ್ಸಾಹ) ಯೋಜನೆ',
      'कर्नाटक रैता सिरी (श्रीअन्न/मिलेट्स प्रोत्साहन) योजना'
    ),
    department: createLoc(
      'Department of Agriculture, Karnataka',
      'ಕೃಷಿ ಇಲಾಖೆ, ಕರ್ನಾಟಕ',
      'कृषि विभाग, कर्नाटक'
    ),
    benefit: createLoc(
      '₹10,000 per hectare incentive directly to bank for growing Siri Dhanya (millets: Ragi, Jowar, Bajra, Foxtail)',
      'ಸಿರಿಧಾನ್ಯ ಬೆಳೆಯುವ ರೈತರಿಗೆ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ ₹10,000 ನೇರ ಪ್ರೋತ್ಸಾಹ ಧನ',
      'मिलेट्स (रागी, ज्वार, बाजरा) उगाने पर ₹10,000 प्रति हेक्टेयर प्रोत्साहन'
    ),
    eligibility: createLoc(
      'Karnataka farmers growing notified millets verified through Crop Survey app.',
      'ಬೆಳೆ ಸಮೀಕ್ಷೆ ಆ್ಯಪ್ ಮೂಲಕ ಸಿರಿಧಾನ್ಯ ಬೆಳೆ ನಮೂದಿಸಿದ ಕರ್ನಾಟಕದ ರೈತರು.',
      'कर्नाटक के किसान जिन्होंने फसल सर्वेक्षण ऐप में मिलेट्स दर्ज किए हैं।'
    ),
    documents: [
      createLoc('Crop Survey Entry Proof', 'ಬೆಳೆ ಸಮೀಕ್ಷೆ ದೃಢೀಕರಣ', 'फसल सर्वेक्षण रिकॉर्ड'),
      createLoc('FRUITS FID Number', 'ಫ್ರೂಟ್ಸ್ ಎಫ್‌ಐಡಿ', 'फ्रूट्स एफआईडी'),
    ],
    deadline: createLoc('Post-harvest verification cycle', 'ಬೆಳೆ ಕೊಯ್ಲಿನ ನಂತರ ಪರಿಶೀಲನೆ', 'फसल कटाई के बाद सत्यापन'),
    tags: [
      createLoc('Millets', 'ಸಿರಿಧಾನ್ಯ', 'श्रीअन्न / मिलेट्स'),
      createLoc('Karnataka Special', 'ಕರ್ನಾಟಕ ವಿಶೇಷ', 'कर्नाटक विशेष'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://raitamitra.karnataka.gov.in',
  },
  {
    id: 'agricultural-mechanization-subsidies',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Sub-Mission on Agricultural Mechanization (SMAM)',
      'ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ ಉಪ-ಅಭಿಯಾನ (SMAM)',
      'कृषि यंत्रीकरण उप-मिशन (एसएमएएम)'
    ),
    department: createLoc(
      'Ministry of Agriculture & Farmers Welfare',
      'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ',
      'कृषि एवं किसान कल्याण मंत्रालय'
    ),
    benefit: createLoc(
      '40% to 50% subsidy on purchase of tractors, power tillers, rotavators, harvesters and custom hiring centers',
      'ಟ್ರಾಕ್ಟರ್, ಪವರ್ ಟಿಲ್ಲರ್, ರೋಟಾವೇಟರ್ ಖರೀದಿಗೆ ಶೇಕಡಾ ೪೦ ರಿಂದ ೫೦ ರಷ್ಟು ಸಹಾಯಧನ',
      'ट्रैक्टर, पावर टिलर, रोटावेटर की खरीद पर 40% से 50% तक सब्सिडी'
    ),
    eligibility: createLoc(
      'Small, marginal, SC/ST, women farmers prioritizing first-time machinery owners.',
      'ಸಣ್ಣ, ಅತಿ ಸಣ್ಣ, ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಮತ್ತು ಮಹಿಳಾ ರೈತರಿಗೆ ಆದ್ಯತೆ.',
      'लघु, सीमांत, महिला एवं अनुसूचित जाति/जनजाति के किसान।'
    ),
    documents: [
      createLoc('Land Ownership Records', 'ಜಮೀನಿನ ಪಹಣಿ', 'भूमि अभिलेख'),
      createLoc('Manufacturer Quotation', 'ಯಂತ್ರದ ಕೊಟೇಶನ್', 'मशीनरी कोटेशन'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
    ],
    deadline: createLoc('Annual portal lottery allocation', 'ವಾರ್ಷಿಕ ಪೋರ್ಟಲ್ ಹಂಚಿಕೆ', 'वार्षिक पोर्टल आवंटन'),
    tags: [
      createLoc('Tractor Subsidy', 'ಟ್ರಾಕ್ಟರ್ ಸಬ್ಸಿಡಿ', 'ट्रैक्टर सब्सिडी'),
      createLoc('Machinery', 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣ', 'कृषि मशीनरी'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://agrimachinery.nic.in',
  },
  {
    id: 'dairy-kisan-credit-animal-husbandry',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'KCC for Animal Husbandry & Dairy Farming',
      'ಪಶುಸಂಗೋಪನೆ ಮತ್ತು ಹೈನುಗಾರಿಕೆ ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್',
      'पशुपालन एवं डेयरी किसान क्रेडिट कार्ड'
    ),
    department: createLoc(
      'Department of Animal Husbandry and Dairying, GoI',
      'ಪಶುಸಂಗೋಪನೆ ಮತ್ತು ಹೈನುಗಾರಿಕೆ ಇಲಾಖೆ',
      'पशुपालन एवं डेयरी विभाग'
    ),
    benefit: createLoc(
      'Collateral-free working capital loan up to ₹2 Lakh at 4% interest for cattle feed, veterinary care and shelter',
      'ಹಸು/ಎಮ್ಮೆ ಸಾಕಣೆ ಮತ್ತು ಮೇವಿನ ವೆಚ್ಚಕ್ಕಾಗಿ ₹2 ಲಕ್ಷದವರೆಗೆ ಜಾಮೀನು ರಹಿತ ಶೇ. ೪ ರ ಬಡ್ಡಿ ಸಾಲ',
      'पशु आहार और देखभाल के लिए ₹2 लाख तक बिना गारंटी के 4% ब्याज पर ऋण'
    ),
    eligibility: createLoc(
      'Farmers, dairy cooperative milk society members owning milch cows/buffaloes.',
      'ಹಾಲು ಉತ್ಪಾದಕರ ಸಹಕಾರ ಸಂಘದ ಸದಸ್ಯರು ಮತ್ತು ಹಸು ಸಾಕುವ ರೈತರು.',
      'दुग्ध सहकारी समिति सदस्य और गाय/भैंस पालक किसान।'
    ),
    documents: [
      createLoc('Dairy Society Milk Pouring Passbook', 'ಡೈರಿ ಹಾಲು ಪೂರೈಕೆ ಪಾಸ್‌ಬುಕ್', 'डेयरी दूध आपूर्ति कार्ड'),
      createLoc('Veterinary Animal Tagging Certificate', 'ಪಶುವೈದ್ಯಕೀಯ ಟ್ಯಾಗಿಂಗ್ ಪ್ರಮಾಣಪತ್ರ', 'पशु टैगिंग प्रमाणपत्र'),
    ],
    deadline: createLoc('Year-round camp mode', 'ವರ್ಷವಿಡೀ ಲಭ್ಯ', 'साल भर उपलब्ध'),
    tags: [
      createLoc('Dairy Farming', 'ಹೈನುಗಾರಿಕೆ', 'डेयरी पालन'),
      createLoc('Cattle Loan', 'ಪಶು ಸಾಲ', 'पशु ऋण'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://www.jansamarth.in',
  },
  {
    id: 'paramparagat-krishi-vikas-pkvy',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Paramparagat Krishi Vikas Yojana (Organic Farming Cluster)',
      'ಪರಂಪರಾಗತ್ ಕೃಷಿ ವಿಕಾಸ ಯೋಜನೆ (ಸಾವಯವ ಕೃಷಿ ಯೋಜನೆ)',
      'परंपरागत कृषि विकास योजना (जैविक खेती)'
    ),
    department: createLoc(
      'Ministry of Agriculture & Farmers Welfare',
      'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ',
      'कृषि मंत्रालय'
    ),
    benefit: createLoc(
      '₹50,000 per hectare for 3 years for organic conversion, PGS certification, bio-inputs and marketing',
      'ಸಾವಯವ ಕೃಷಿ, ಪಿಜಿಎಸ್ ಪ್ರಮಾಣೀಕರಣ ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ ₹50,000 ಧನಸಹಾಯ',
      'जैविक प्रमाणीकरण, खाद व विपणन के लिए ₹50,000 प्रति हेक्टेयर 3 साल में'
    ),
    eligibility: createLoc(
      'Farmers forming clusters of minimum 20 hectares committed to chemical-free farming.',
      'ರಾಸಾಯನಿಕ ಮುಕ್ತ ಕೃಷಿಗೆ ಬದ್ಧರಾಗಿರುವ ರೈತರ ಗುಂಪುಗಳು.',
      'रसायन मुक्त प्राकृतिक खेती अपनाने वाले 20 हेक्टेयर के किसान समूह।'
    ),
    documents: [
      createLoc('Cluster Farmer Group Resolution', 'ರೈತರ ಸಂಘದ ನಿರ್ಣಯ ಪತ್ರ', 'किसान समूह संकल्प पत्र'),
      createLoc('Land Patta / RTC', 'ಭೂಮಿ ಪಹಣಿ', 'भूमि अभिलेख'),
    ],
    deadline: createLoc('Formation cycle at district office', 'ಜಿಲ್ಲಾ ಕೃಷಿ ಕಚೇರಿ ಮೂಲಕ', 'जिला कृषि कार्यालय द्वारा'),
    tags: [
      createLoc('Organic Farming', 'ಸಾವಯವ ಕೃಷಿ', 'जैविक खेती'),
      createLoc('Certification', 'ಪ್ರಮಾಣೀಕರಣ', 'प्रमाणीकरण'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://pgsindia-ncof.gov.in',
  },
  {
    id: 'pm-matsya-sampada-fisheries',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Pradhan Mantri Matsya Sampada Yojana (PMMSY)',
      'ಪ್ರಧಾನ ಮಂತ್ರಿ ಮತ್ಸ್ಯ ಸಂಪದ ಯೋಜನೆ (ಮೀನುಗಾರಿಕೆ)',
      'प्रधानमंत्री मत्स्य संपदा योजना (पीएमएमएसवाय)'
    ),
    department: createLoc(
      'Department of Fisheries, Ministry of Fisheries',
      'ಮೀನುಗಾರಿಕೆ ಇಲಾಖೆ',
      'मत्स्य विभाग'
    ),
    benefit: createLoc(
      '40% (General) to 60% (Women/SC/ST) subsidy for construction of fish ponds, biofloc units, ice boxes',
      'ಮೀನು ಕೊಳ ನಿರ್ಮಾಣ, ಬಯೋಫ್ಲೋಕ್ ಘಟಕಗಳಿಗೆ ಶೇ. ೪೦ ರಿಂದ ೬೦ ರಷ್ಟು ಸಹಾಯಧನ',
      'मछली तालाब निर्माण और बायोफ्लोक इकाइयों पर 40% से 60% तक सब्सिडी'
    ),
    eligibility: createLoc(
      'Fish farmers, fishers, fish workers, SHGs, JLGs with water bodies or suitable land.',
      'ಮೀನು ಸಾಕಣೆ ಮಾಡುವವರು ಮತ್ತು ಸೂಕ್ತ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತರು.',
      'मत्स्य पालक, मछुआरे और उपयुक्त भूमि/जलाशय धारक।'
    ),
    documents: [
      createLoc('Land / Water Lease Agreement', 'ಭೂಮಿ ಅಥವಾ ಕೆರೆ ಗುತ್ತಿಗೆ ಒಪ್ಪಂದ', 'भूमि / पट्टा समझौता'),
      createLoc('Detailed Project Report (DPR)', 'ಯೋಜನಾ ವರದಿ (DPR)', 'परियोजना रिपोर्ट (डीपीआर)'),
    ],
    deadline: createLoc('Quarterly state approvals', 'ತ್ರೈಮಾಸಿಕ ಅನುಮೋದನೆ', 'त्रैमासिक अनुमोदन'),
    tags: [
      createLoc('Fisheries', 'ಮೀನುಗಾರಿಕೆ', 'मत्स्य पालन'),
      createLoc('Aquaculture', 'ಜಲಚರ ಸಾಕಣೆ', 'जलकृषि'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://pmmsy.dof.gov.in',
  },

  // ==========================================
  // WORKER SCHEMES (13 items)
  // ==========================================
  {
    id: 'eshram-uan-registration',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'e-Shram National Database of Unorganised Workers (UAN)',
      'ಇ-ಶ್ರಮ್ ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರ ರಾಷ್ಟ್ರೀಯ ನೋಂದಣಿ (UAN)',
      'ई-श्रम असंगठित श्रमिक राष्ट्रीय डेटाबेस (UAN)'
    ),
    department: createLoc(
      'Ministry of Labour & Employment, GoI',
      'ಕಾರ್ಮಿಕ ಮತ್ತು ಉದ್ಯೋಗ ಸಚಿವಾಲಯ',
      'श्रम एवं रोजगार मंत्रालय'
    ),
    benefit: createLoc(
      '12-digit Universal Account Number (UAN) + ₹2,00,000 accidental death/permanent disability insurance (PMSBY)',
      '೧೨-ಅಂಕಿಯ ಸಾರ್ವತ್ರಿಕ ಕಾರ್ಮಿಕ ಸಂಖ್ಯೆ (UAN) + ₹2 ಲಕ್ಷದ ಅಪಘಾತ ವಿಮಾ ರಕ್ಷಣೆ',
      '12-अंकीय सार्वभौमिक खाता संख्या (UAN) + ₹2 लाख दुर्घटना बीमा सुरक्षा'
    ),
    eligibility: createLoc(
      'Unorganised workers aged 16-59 years (construction, domestic, gig workers, street vendors, agricultural laborers) not covered under EPFO/ESIC.',
      '೧೬ ರಿಂದ ೫೯ ವರ್ಷದೊಳಗಿನ ಕಟ್ಟಡ ಕಾರ್ಮಿಕರು, ಗಿಗ್ ಕೆಲಸಗಾರರು, ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ದಿನಗೂಲಿಗಳು.',
      '16-59 वर्ष के असंगठित श्रमिक (निर्माण, घरेलू, गिग वर्कर, विक्रेता) जो ईपीएफ/ईएसआईसी में नहीं हैं।'
    ),
    documents: [
      createLoc('Aadhaar Card with mobile linkage', 'ಮೊಬೈಲ್ ಲಿಂಕ್ ಆದ ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड मोबाइल लिंक'),
      createLoc('Active Bank Account Number & IFSC', 'ಸಕ್ರಿಯ ಬ್ಯಾಂಕ್ ಖಾತೆ ಮತ್ತು IFSC', 'सक्रिय बैंक खाता व IFSC'),
      createLoc('Occupation / Trade Details', 'ಉದ್ಯೋಗ / ಕೆಲಸದ ವಿವರ', 'व्यवसाय / कार्य का विवरण'),
    ],
    deadline: createLoc('Open 24x7 online', 'ವರ್ಷವಿಡೀ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯ', '24 घंटे ऑनलाइन उपलब्ध'),
    tags: [
      createLoc('Worker Identity', 'ಕಾರ್ಮಿಕ ಗುರುತು', 'श्रमिक पहचान'),
      createLoc('Social Security', 'ಸಾಮಾಜಿಕ ಭದ್ರತೆ', 'सामाजिक सुरक्षा'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://eshram.gov.in',
  },
  {
    id: 'karnataka-bocw-labour-card',
    role: 'worker',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Building & Construction Worker (BOCW) Smart Card',
      'ಕರ್ನಾಟಕ ಕಟ್ಟಡ ಮತ್ತು ನಿರ್ಮಾಣ ಕಾರ್ಮಿಕರ (BOCW) ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್',
      'कर्नाटक भवन एवं निर्माण श्रमिक (BOCW) स्मार्ट कार्ड'
    ),
    department: createLoc(
      'Karnataka Building and Other Construction Workers Welfare Board',
      'ಕರ್ನಾಟಕ ಕಟ್ಟಡ ಮತ್ತು ಇತರ ನಿರ್ಮಾಣ ಕಾರ್ಮಿಕರ ಕಲ್ಯಾಣ ಮಂಡಳಿ',
      'कर्नाटक भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड'
    ),
    benefit: createLoc(
      '₹50,000 marriage assistance, ₹30,000 maternity assistance, free bus passes, tool-kit, children scholarship up to ₹25,000/year',
      'ಮದುವೆ ಸಹಾಯಧನ ₹50,000, ಹೆರಿಗೆ ಭತ್ಯೆ ₹30,000, ಉಚಿತ ಬಸ್ ಪಾಸ್, ಮಕ್ಕಳಿಗೆ ವಾರ್ಷಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಉಪಕರಣ ಕಿಟ್',
      'विवाह सहायता ₹50,000, मातृत्व सहायता ₹30,000, मुफ्त बस पास, बच्चों की छात्रवृत्ति एवं टूलकिट'
    ),
    eligibility: createLoc(
      'Construction, carpentry, painting, plumbing, bar-bending workers in Karnataka having completed at least 90 days of work in last 12 months.',
      'ಕಳೆದ ೧೨ ತಿಂಗಳಲ್ಲಿ ಕನಿಷ್ಠ ೯೦ ದಿನಗಳ ಕಾಲ ಕಟ್ಟಡ, ಬಡಗಿ, ಪೇಂಟಿಂಗ್, ಪ್ಲಂಬಿಂಗ್ ಕೆಲಸ ಮಾಡಿದ ಕಾರ್ಮಿಕರು.',
      'पिछले 12 महीनों में कम से कम 90 दिन निर्माण कार्य करने वाले श्रमिक।'
    ),
    documents: [
      createLoc('90 Days Employment Certificate from Contractor / Grama Panchayat', 'ಗುತ್ತಿಗೆದಾರರು / ಗ್ರಾಮ ಪಂಚಾಯತಿ ನೀಡಿದ ೯೦ ದಿನಗಳ ಕೆಲಸದ ಪ್ರಮಾಣಪತ್ರ', '90 दिन कार्य प्रमाणपत्र'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Bank Passbook copy', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ಪ್ರತಿ', 'बैंक पासबुक'),
    ],
    deadline: createLoc('Renewable every 3 years', 'ಪ್ರತಿ ೩ ವರ್ಷಕ್ಕೊಮ್ಮೆ ನವೀಕರಣ', 'हर 3 साल में नवीकरणीय'),
    tags: [
      createLoc('Karnataka BOCW', 'ಕರ್ನಾಟಕ ಕಾರ್ಮಿಕ ಮಂಡಳಿ', 'कर्नाटक कर्मकार बोर्ड'),
      createLoc('Labour Welfare', 'ಕಾರ್ಮಿಕ ಕಲ್ಯಾಣ', 'श्रमिक कल्याण'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://karbocwwb.karnataka.gov.in',
  },
  {
    id: 'pm-sym-worker-pension',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'Pradhan Mantri Shram Yogi Maandhan (PM-SYM Pension)',
      'ಪ್ರಧಾನ ಮಂತ್ರಿ ಶ್ರಮ ಯೋಗಿ ಮಾನ್‌ಧನ್ (ಪಿಎಂ-ಎಸ್‌ವೈಎಂ ಪಿಂಚಣಿ)',
      'प्रधानमंत्री श्रम योगी मानधन (पीएम-एसवाईएम पेंशन)'
    ),
    department: createLoc(
      'Ministry of Labour and Employment & LIC',
      'ಕಾರ್ಮಿಕ ಸಚಿವಾಲಯ ಮತ್ತು ಎಲ್‌ಐಸಿ',
      'श्रम मंत्रालय एवं एलआईसी'
    ),
    benefit: createLoc(
      'Guaranteed lifelong monthly pension of ₹3,000 after attaining age 60 with 50% matching contribution by Central Govt',
      '೬೦ ವರ್ಷ ವಯಸ್ಸಿನ ನಂತರ ಆಜೀವ ಮಾಸಿಕ ₹3,000 ಖಾತರಿಯ ಪಿಂಚಣಿ (ಕೇಂದ್ರ ಸರ್ಕಾರದಿಂದ ಸಮಾನ ವಂತಿಗೆ)',
      '60 वर्ष की आयु के बाद ₹3,000 की मासिक गारंटीकृत पेंशन (केंद्र सरकार द्वारा 50% समान अंशदान)'
    ),
    eligibility: createLoc(
      'Unorganised workers aged 18-40 years with monthly income up to ₹15,000, not paying income tax.',
      '೧೮ ರಿಂದ ೪೦ ವರ್ಷದೊಳಗಿನ ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರು, ಮಾಸಿಕ ಆದಾಯ ₹15,000 ಅಥವಾ ಅದಕ್ಕಿಂತ ಕಡಿಮೆ.',
      '18-40 वर्ष आयु वर्ग के असंगठित श्रमिक, जिनकी मासिक आय ₹15,000 या उससे कम हो।'
    ),
    documents: [
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Savings Bank Account with Auto-Debit mandate', 'ಸ್ವಯಂ ಕಡಿತ ಸೌಲಭ್ಯವಿರುವ ಬ್ಯಾಂಕ್ ಖಾತೆ', 'ऑटो-डेबिट सुविधा युक्त बचत बैंक खाता'),
    ],
    deadline: createLoc('Instant enrollment at CSC / Seva Kendra', 'ಸಿಎಸ್‌ಸಿ / ಸೇವಾ ಕೇಂದ್ರದಲ್ಲಿ ತಕ್ಷಣ ದಾಖಲಾತಿ', 'सीएससी पर तत्काल नामांकन'),
    tags: [
      createLoc('Pension for Workers', 'ಕಾರ್ಮಿಕ ಪಿಂಚಣಿ', 'श्रमिक पेंशन'),
      createLoc('Old Age Security', 'ವೃದ್ಧಾಪ್ಯ ಭದ್ರತೆ', 'वृद्धावस्था सुरक्षा'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://maandhan.in',
  },
  {
    id: 'pmjay-ayushman-worker-health',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'Ayushman Bharat PM-JAY Free Cashless Health Coverage',
      'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಪಿಎಂ-ಜೆಎವೈ ಉಚಿತ ನಗದುರಹಿತ ಆರೋಗ್ಯ ಚಿಕಿತ್ಸೆ',
      'आयुष्मान भारत पीएम-जय मुफ्त कैशलेस स्वास्थ्य उपचार'
    ),
    department: createLoc(
      'National Health Authority, GoI',
      'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ',
      'राष्ट्रीय स्वास्थ्य प्राधिकरण'
    ),
    benefit: createLoc(
      '₹5,00,000 per family per year cashless treatment across 27,000+ empanelled government and private hospitals',
      'ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ಸರ್ಕಾರಿ ಮತ್ತು ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಸಂಪೂರ್ಣ ಉಚಿತ ಚಿಕಿತ್ಸೆ',
      'प्रति परिवार प्रति वर्ष ₹5 लाख तक का कैशलेस इलाज 27,000+ सूचीबद्ध अस्पतालों में'
    ),
    eligibility: createLoc(
      'Deprived rural and occupational urban worker categories identified in SECC / NFSA ration databases.',
      'ಬಿಪಿಎಲ್ ರೇಷನ್ ಕಾರ್ಡ್ ಹೊಂದಿರುವ ಕುಟುಂಬಗಳು ಮತ್ತು ನಗರ ಕಾರ್ಮಿಕರು.',
      'बीपीएल राशन कार्ड धारक परिवार और असंगठित श्रमिक।'
    ),
    documents: [
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Ration Card (BPL / Antyodaya)', 'ರೇಷನ್ ಕಾರ್ಡ್ (ಬಿಪಿಎಲ್ / ಅಂತ್ಯೋದಯ)', 'राशन कार्ड (बीपीएल/अंत्योदय)'),
    ],
    deadline: createLoc('Instant e-KYC Golden Card creation', 'ತಕ್ಷಣ ಇ-ಕೆವೈಸಿ ಗೋಲ್ಡನ್ ಕಾರ್ಡ್ ವಿತರಣೆ', 'तत्काल गोल्डन कार्ड निर्माण'),
    tags: [
      createLoc('Health Insurance', 'ಆರೋಗ್ಯ ವಿಮೆ', 'स्वास्थ्य बीमा'),
      createLoc('Free Hospitalization', 'ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ', 'मुफ्त अस्पताल इलाज'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://beneficiary.nha.gov.in',
  },
  {
    id: 'bocw-free-tool-kit-scheme',
    role: 'worker',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Labour Board Professional Tool-Kit & Safety Gear',
      'ಕರ್ನಾಟಕ ಕಾರ್ಮಿಕ ಮಂಡಳಿ ವೃತ್ತಿಪರ ಟೂಲ್-ಕಿಟ್ ಮತ್ತು ಸುರಕ್ಷತಾ ಸಲಕರಣೆ',
      'कर्नाटक कर्मकार बोर्ड टूलकिट एवं सुरक्षा उपकरण वितरण'
    ),
    department: createLoc(
      'Department of Labour, Karnataka',
      'ಕಾರ್ಮಿಕ ಇಲಾಖೆ, ಕರ್ನಾಟಕ',
      'श्रम विभाग, कर्नाटक'
    ),
    benefit: createLoc(
      'Free trade-specific tool kit worth up to ₹15,000 (masonry, carpentry, electrical, plumbing) plus safety helmet, shoes',
      'ಮೇಸ್ತ್ರಿ, ಬಡಗಿ, ಎಲೆಕ್ಟ್ರಿಷಿಯನ್, ಪ್ಲಂಬಿಂಗ್ ಕೆಲಸಗಾರರಿಗೆ ₹15,000 ಮೌಲ್ಯದ ಉಚಿತ ಟೂಲ್-ಕಿಟ್ ಮತ್ತು ಸುರಕ್ಷತಾ ಕಿಟ್',
      'राजमिस्त्री, बढ़ई, इलेक्ट्रीशियन हेतु ₹15,000 मूल्य की मुफ्त टूलकिट व सुरक्षा गियर'
    ),
    eligibility: createLoc(
      'Registered BOCW labour card holders who completed certified skill training.',
      'ನೋಂದಾಯಿತ ಕಟ್ಟಡ ಕಾರ್ಮಿಕ ಕಾರ್ಡ್ ಹೊಂದಿರುವವರು.',
      'पंजीकृत भवन निर्माण श्रमिक कार्ड धारक।'
    ),
    documents: [
      createLoc('BOCW Labour Card Copy', 'ಕಟ್ಟಡ ಕಾರ್ಮಿಕ ಕಾರ್ಡ್ ಪ್ರತಿ', 'श्रम कार्ड प्रति'),
      createLoc('Trade Experience Affidavit', 'ವೃತ್ತಿ ಅನುಭವ ಪ್ರಮಾಣಪತ್ರ', 'कार्य अनुभव शपथ पत्र'),
    ],
    deadline: createLoc('Bi-annual camp distributions', 'ಅರೆ-ವಾರ್ಷಿಕ ಶಿಬಿರಗಳ ಮೂಲಕ', 'अर्धवार्षिक शिविरों द्वारा'),
    tags: [
      createLoc('Tool-Kit', 'ಉಪಕರಣ ಕಿಟ್', 'टूलकिट'),
      createLoc('Self Employment', 'ಸ್ವಯಂ ಉದ್ಯೋಗ', 'स्वरोजगार'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://karbocwwb.karnataka.gov.in',
  },
  {
    id: 'pm-svanidhi-street-vendor',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'PM SVANidhi Micro-Credit Scheme for Street Vendors',
      'ಪಿಎಂ ಸ್ವನಿಧಿ ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳ ಕಿರುಸಾಲ ಯೋಜನೆ',
      'पीएम स्वनिधि रेहड़ी-पटरी विक्रेता सूक्ष्म ऋण'
    ),
    department: createLoc(
      'Ministry of Housing and Urban Affairs, GoI',
      'ವಸತಿ ಮತ್ತು ನಗರ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ',
      'आवासन एवं शहरी कार्य मंत्रालय'
    ),
    benefit: createLoc(
      'Collateral-free working capital loan of ₹10,000 (1st tranche), ₹20,000 (2nd), and ₹50,000 (3rd) with 7% interest subsidy',
      'ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಜಾಮೀನು ರಹಿತ ₹10,000, ₹20,000 ಮತ್ತು ₹50,000 ಕಿರುಬಂಡವಾಳ ಸಾಲ (ಶೇ. ೭ ರ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ)',
      'रेहड़ी-पटरी विक्रेताओं के लिए ₹10,000, ₹20,000 और ₹50,000 का संपार्श्विक-मुक्त ऋण'
    ),
    eligibility: createLoc(
      'Street vendors engaged in vending in urban areas on or before 24 March 2020 with Certificate of Vending.',
      'ನಗರ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬೀದಿಬದಿ ವ್ಯಾಪಾರ ಮಾಡುವವರು.',
      'शहरी क्षेत्रों में फेरी/ठेला लगाने वाले वेंडर्स।'
    ),
    documents: [
      createLoc('Certificate of Vending / Recommendation Letter (LoR) by ULB', 'ನಗರ ಪಾಲಿಕೆ ನೀಡಿದ ವ್ಯಾಪಾರ ದೃಢೀಕರಣ ಪತ್ರ', 'नगर निकाय द्वारा जारी वेंडिंग प्रमाणपत्र'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Bank Account details', 'ಬ್ಯಾಂಕ್ ವಿವರ', 'बैंक विवरण'),
    ],
    deadline: createLoc('Active across all municipal bodies', 'ಎಲ್ಲಾ ನಗರಸಭೆಗಳಲ್ಲಿ ಲಭ್ಯ', 'सभी नगर निकायों में सक्रिय'),
    tags: [
      createLoc('Micro Loan', 'ಕಿರು ಸಾಲ', 'सूक्ष्म ऋण'),
      createLoc('Street Vendors', 'ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳು', 'रेहड़ी विक्रेता'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in',
  },
  {
    id: 'pradhan-mantri-matru-vandana-worker',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      'ಪ್ರಧಾನ ಮಂತ್ರಿ ಮಾತೃ ವಂದನಾ ಯೋಜನೆ (ಗರ್ಭಿಣಿಯರ ಧನಸಹಾಯ)',
      'प्रधानमंत्री मातृ वंदना योजना (मातृत्व वित्तीय सहायता)'
    ),
    department: createLoc(
      'Ministry of Women and Child Development, GoI',
      'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ',
      'महिला एवं बाल विकास मंत्रालय'
    ),
    benefit: createLoc(
      '₹5,000 directly transferred in installments for wage loss compensation and nutrition during first childbirth',
      'ಮೊದಲ ಮಗುವಿನ ಜನನದ ಸಮಯದಲ್ಲಿ ಕೂಲಿ ನಷ್ಟ ಪರಿಹಾರ ಮತ್ತು ಪೌಷ್ಟಿಕಾಂಶಕ್ಕಾಗಿ ₹5,000 ನೇರ ಧನಸಹಾಯ',
      'प्रथम प्रसव पर मजदूरी हानि की भरपाई और पोषण हेतु ₹5,000 सीधे बैंक में'
    ),
    eligibility: createLoc(
      'Pregnant women and lactating mothers working in the unorganised sector.',
      'ಅಸಂಘಟಿತ ವಲಯದಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ಗರ್ಭಿಣಿ ಮತ್ತು ಹಾಲುಣಿಸುವ ತಾಯಂದಿರು.',
      'असंगठित क्षेत्र में कार्य करने वाली गर्भवती व धात्री महिलाएं।'
    ),
    documents: [
      createLoc('Mother-Child Protection (MCP) Card from Anganwadi', 'ಅಂಗನವಾಡಿಯ ತಾಯಿ-ಮಗು ಸಂರಕ್ಷಣಾ (MCP) ಕಾರ್ಡ್', 'आंगनवाड़ी एमसीपी कार्ड'),
      createLoc('Aadhaar Card of Mother and Husband', 'ತಾಯಿ ಮತ್ತು ಪತಿಯ ಆಧಾರ್ ಕಾರ್ಡ್', 'मां और पति का आधार कार्ड'),
      createLoc('Bank Passbook copy', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'बैंक पासबुक'),
    ],
    deadline: createLoc('Register within 150 days of LMP', 'ಗರ್ಭಧಾರಣೆಯ ೧೫೦ ದಿನಗಳಲ್ಲಿ ನೋಂದಾಯಿಸಿ', 'एलएमपी के 150 दिनों के भीतर पंजीकरण'),
    tags: [
      createLoc('Maternity Benefit', 'ಮಾತೃತ್ವ ಸೌಲಭ್ಯ', 'मातृत्व लाभ'),
      createLoc('Women Workers', 'ಮಹಿಳಾ ಕಾರ್ಮಿಕರು', 'महिला श्रमिक'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://pmmvy.wcd.gov.in',
  },

  // ==========================================
  // SENIOR CITIZEN SCHEMES (12 items)
  // ==========================================
  {
    id: 'karnataka-sandhya-suraksha',
    role: 'senior',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Sandhya Suraksha Yojana',
      'ಕರ್ನಾಟಕ ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಯೋಜನೆ (ಮಾಸಿಕ ಪಿಂಚಣಿ)',
      'कर्नाटक संध्या सुरक्षा योजना (मासिक पेंशन)'
    ),
    department: createLoc(
      'Directorate of Social Security and Pensions, Karnataka',
      'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ',
      'सामाजिक सुरक्षा एवं पेंशन निदेशालय, कर्नाटक'
    ),
    benefit: createLoc(
      'Monthly pension of ₹1,200 directly credited to bank/post office account for life',
      'ಜೀವಿತಾವಧಿಯವರೆಗೆ ತಿಂಗಳಿಗೆ ₹1,200 ಮಾಸಿಕ ಪಿಂಚಣಿ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್/ಅಂಚೆ ಖಾತೆಗೆ ಜಮೆ',
      'आजीवन ₹1,200 प्रति माह सीधे बैंक/डाकघर खाते में पेंशन'
    ),
    eligibility: createLoc(
      'Senior citizens of Karnataka aged 65 years and above whose annual family income is below ₹32,000.',
      '೬೫ ವರ್ಷ ಮತ್ತು ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ವಯಸ್ಸಿನ ಕರ್ನಾಟಕದ ಹಿರಿಯ ನಾಗರಿಕರು. ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹32,000 ಕ್ಕಿಂತ ಕಡಿಮೆ.',
      '65 वर्ष या अधिक आयु के कर्नाटक के वरिष्ठ नागरिक। वार्षिक पारिवारिक आय ₹32,000 से कम।'
    ),
    documents: [
      createLoc('Age Proof (Voter ID / Aadhaar / TC)', 'ವಯಸ್ಸಿನ ಪುರಾವೆ (ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ / ಆಧಾರ್)', 'आयु प्रमाण पत्र (मतदाता पहचान पत्र / आधार)'),
      createLoc('Income Certificate by Revenue Officer', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'राजस्व अधिकारी द्वारा आय प्रमाणपत्र'),
      createLoc('Karnataka Domicile Proof (Ration Card)', 'ವಾಸಸ್ಥಳ ದೃಢೀಕರಣ (ರೇಷನ್ ಕಾರ್ಡ್)', 'कर्नाटक निवास प्रमाण (राशन कार्ड)'),
      createLoc('Post Office / Bank Account Passbook', 'ಅಂಚೆ ಕಚೇರಿ / ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'डाकघर / बैंक पासबुक'),
    ],
    deadline: createLoc('Rolling round the year via Nadakacheri', 'ನಾಡಕಚೇರಿ ಮೂಲಕ ವರ್ಷವಿಡೀ ಲಭ್ಯ', 'नाडकचेरी के माध्यम से साल भर खुला'),
    tags: [
      createLoc('Old Age Pension', 'ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ', 'वृद्धावस्था पेंशन'),
      createLoc('Karnataka Social Security', 'ಕರ್ನಾಟಕ ಸಾಮಾಜಿಕ ಭದ್ರತೆ', 'कर्नाटक सामाजिक सुरक्षा'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://nadakacheri.karnataka.gov.in',
  },
  {
    id: 'national-old-age-pension-ignoaps',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Indira Gandhi National Old Age Pension Scheme (IGNOAPS)',
      'ಇಂದಿರಾ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ ಯೋಜನೆ (IGNOAPS)',
      'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना (IGNOAPS)'
    ),
    department: createLoc(
      'Ministry of Rural Development, GoI',
      'ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ',
      'ग्रामीण विकास मंत्रालय'
    ),
    benefit: createLoc(
      'Monthly social security pension (Central + State combined ₹1,000 to ₹2,500/month depending on state)',
      'ಮಾಸಿಕ ವೃದ್ಧಾಪ್ಯ ಸಾಮಾಜಿಕ ಭದ್ರತಾ ಪಿಂಚಣಿ (ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಪಾಲು)',
      'मासिक वृद्धावस्था सामाजिक सुरक्षा पेंशन सीधे बैंक खाते में'
    ),
    eligibility: createLoc(
      'Senior citizens aged 60 years or above living below poverty line (BPL). Amount increases at age 80.',
      'ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗಿರುವ (ಬಿಪಿಎಲ್) ೬೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರು.',
      'बीपीएल श्रेणी के 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिक।'
    ),
    documents: [
      createLoc('BPL Ration Card', 'ಬಿಪಿಎಲ್ ರೇಷನ್ ಕಾರ್ಡ್', 'बीपीएल राशन कार्ड'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Bank Passbook linked with Aadhaar', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'बैंक पासबुक आधार लिंक'),
    ],
    deadline: createLoc('Open year-round', 'ವರ್ಷವಿಡೀ ಮುಕ್ತ', 'साल भर खुला'),
    tags: [
      createLoc('National Pension', 'ರಾಷ್ಟ್ರೀಯ ಪಿಂಚಣಿ', 'राष्ट्रीय पेंशन'),
      createLoc('BPL Senior Citizen', 'ಬಿಪಿಎಲ್ ಹಿರಿಯ ನಾಗರಿಕರು', 'बीपीएल वरिष्ठ नागरिक'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://nsap.nic.in',
  },
  {
    id: 'jeevan-pramaan-digital-life-certificate',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Jeevan Pramaan Digital Life Certificate (DLC) Face Auth',
      'ಜೀವನ್ ಪ್ರಮಾಣ್ ಡಿಜಿಟಲ್ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ (ಮುಖ ಪರಿಶೀಲನೆ)',
      'जीवन प्रमाण डिजिटल जीवन प्रमाणपत्र (फेस ऑथेंटिकेशन)'
    ),
    department: createLoc(
      'Department of Pension & Pensioners Welfare, GoI',
      'ಪಿಂಚಣಿ ಮತ್ತು ಪಿಂಚಣಿದಾರರ ಕಲ್ಯಾಣ ಇಲಾಖೆ',
      'पेंशन एवं पेंशनभोगी कल्याण विभाग'
    ),
    benefit: createLoc(
      'Submit mandatory annual life certificate from home using smartphone face-authentication without visiting bank or treasury',
      'ಬ್ಯಾಂಕ್ ಅಥವಾ ಖಜಾನೆಗೆ ಹೋಗದೆ ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಮುಖ ದೃಢೀಕರಣದ ಮೂಲಕ ಮನೆಯಿಂದಲೇ ವಾರ್ಷಿಕ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ ಸಲ್ಲಿಕೆ',
      'बिना बैंक जाए घर बैठे स्मार्टफोन फेस ऑथेंटिकेशन से वार्षिक जीवन प्रमाणपत्र जमा'
    ),
    eligibility: createLoc(
      'All Central, State, Defense, EPF, Railway, and Telecom pensioners.',
      'ಎಲ್ಲಾ ಕೇಂದ್ರ, ರಾಜ್ಯ, ರೈಲ್ವೆ ಮತ್ತು ಇಪಿಎಫ್ ಪಿಂಚಣಿದಾರರು.',
      'केंद्र, राज्य, रेलवे व ईपीएफओ के सभी पेंशनभोगी।'
    ),
    documents: [
      createLoc('Pension Payment Order (PPO) Number', 'ಪಿಪಿಒ ಸಂಖ್ಯೆ (PPO Number)', 'पीपीओ संख्या'),
      createLoc('Pension Bank Account Details', 'ಪಿಂಚಣಿ ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ', 'पेंशन बैंक खाता विवरण'),
      createLoc('Aadhaar Card linked mobile', 'ಆಧಾರ್ ಮೊಬೈಲ್ ಒಟಿಪಿ / ಫೇಸ್ ಆಪ್', 'आधार लिंक मोबाइल'),
    ],
    deadline: createLoc('1 October to 30 November (Annual window)', '೧ ಅಕ್ಟೋಬರ್ ರಿಂದ ೩೦ ನವೆಂಬರ್ (ವಾರ್ಷಿಕ ಅವಧಿ)', '1 अक्टूबर से 30 नवंबर (वार्षिक विंडो)'),
    tags: [
      createLoc('Digital Life Certificate', 'ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ', 'जीवन प्रमाणपत्र'),
      createLoc('Face Authentication', 'ಮುಖ ಪರಿಶೀಲನೆ', 'फेस ऑथेंटिकेशन'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://jeevanpramaan.gov.in',
  },
  {
    id: 'ayushman-vay-vandana-70-plus',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Ayushman Vay Vandana Card (Free ₹5L Health for 70+)',
      'ಆಯುಷ್ಮಾನ್ ವಯ ವಂದನಾ ಕಾರ್ಡ್ (70+ ಹಿರಿಯರಿಗೆ ₹5 ಲಕ್ಷ ಉಚಿತ ಚಿಕಿತ್ಸೆ)',
      'आयुष्मान वय वंदना कार्ड (70+ वरिष्ठों हेतु ₹5 लाख मुफ्त इलाज)'
    ),
    department: createLoc(
      'National Health Authority, Ministry of Health & Family Welfare',
      'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ',
      'राष्ट्रीय स्वास्थ्य प्राधिकरण'
    ),
    benefit: createLoc(
      'Dedicated ₹5,00,000 per year free hospitalization cover for all citizens aged 70+, irrespective of income or ration card',
      'ಆದಾಯ ಮಿತಿ ಇಲ್ಲದೆ ೭೦ ವರ್ಷ ದಾಟಿದ ಎಲ್ಲಾ ಹಿರಿಯರಿಗೆ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷದವರೆಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ',
      'आय सीमा के बिना 70+ आयु के सभी वरिष्ठों को ₹5 लाख तक का मुफ्त अस्पताल उपचार'
    ),
    eligibility: createLoc(
      'All Indian senior citizens aged 70 years and above based strictly on Aadhaar birth date.',
      'ಆಧಾರ್‌ನಲ್ಲಿ ದಾಖಲಾಗಿರುವಂತೆ ೭೦ ವರ್ಷ ಪೂರ್ಣಗೊಳಿಸಿದ ಭಾರತದ ಎಲ್ಲಾ ಹಿರಿಯ ನಾಗರಿಕರು.',
      'आधार के अनुसार 70 वर्ष या उससे अधिक आयु के सभी भारतीय नागरिक।'
    ),
    documents: [
      createLoc('Aadhaar Card with mobile OTP or biometric', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
    ],
    deadline: createLoc('Instant digital card enrollment active', 'ತಕ್ಷಣ ಡಿಜಿಟಲ್ ಕಾರ್ಡ್ ವಿತರಣೆ ಸಕ್ರಿಯ', 'तत्काल डिजिटल कार्ड नामांकन सक्रिय'),
    tags: [
      createLoc('70+ Healthcare', '೭೦+ ಆರೋಗ್ಯ ರಕ್ಷಣೆ', '70+ स्वास्थ्य सुरक्षा'),
      createLoc('Cashless Treatment', 'ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆ', 'कैशलेस उपचार'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://beneficiary.nha.gov.in',
  },
  {
    id: 'senior-travel-concession-karnataka',
    role: 'senior',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka RTC Senior Citizen 25% Bus Travel Concession',
      'ಕರ್ನಾಟಕ ಸಾರಿಗೆ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಶೇಕಡಾ ೨೫ ರ ಬಸ್ ಪ್ರಯಾಣ ರಿಯಾಯಿತಿ',
      'कर्नाटक आरटीसी वरिष्ठ नागरिक 25% बस यात्रा रियायत'
    ),
    department: createLoc(
      'Karnataka State Road Transport Corporation (KSRTC/NWKRTC/KKRTC)',
      'ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ನಿಗಮ',
      'कर्नाटक राज्य सड़क परिवहन निगम'
    ),
    benefit: createLoc(
      '25% discount on all ordinary, express, and rajahamsa KSRTC bus tickets across Karnataka',
      'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಸಾಮಾನ್ಯ, ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಬಸ್‌ಗಳಲ್ಲಿ ಶೇಕಡಾ ೨೫ ರಷ್ಟು ಟಿಕೆಟ್ ರಿಯಾಯಿತಿ',
      'कर्नाटक भर में केएसआरटीसी बसों में टिकट पर 25% की छूट'
    ),
    eligibility: createLoc(
      'Men and women senior citizens residing in Karnataka aged 60 years and above.',
      'ಕರ್ನಾಟಕದ ೬೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರು.',
      'कर्नाटक निवासी 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिक।'
    ),
    documents: [
      createLoc('Aadhaar Card / Senior Citizen ID Card', 'ಆಧಾರ್ ಕಾರ್ಡ್ / ಹಿರಿಯ ನಾಗರಿಕ ಗುರುತಿನ ಚೀಟಿ', 'आधार कार्ड / वरिष्ठ नागरिक आईडी'),
    ],
    deadline: createLoc('Available instantly during ticket booking or bus boarding', 'ಟಿಕೆಟ್ ಕಾಯ್ದಿರಿಸುವಾಗ ಅಥವಾ ಬಸ್ ಹತ್ತುವಾಗ ಲಭ್ಯ', 'टिकट बुकिंग या बस में तत्काल उपलब्ध'),
    tags: [
      createLoc('Travel Concession', 'ಪ್ರಯಾಣ ರಿಯಾಯಿತಿ', 'यात्रा रियायत'),
      createLoc('Karnataka Transport', 'ಕರ್ನಾಟಕ ಸಾರಿಗೆ', 'कर्नाटक परिवहन'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://sevasindhu.karnataka.gov.in',
  },
  {
    id: 'senior-citizen-id-card-issuance',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Official Senior Citizen Identification Card & Medical Booklet',
      'ಅಧಿಕೃತ ಹಿರಿಯ ನಾಗರಿಕ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಕಿರುಪುಸ್ತಕ',
      'आधिकारिक वरिष्ठ नागरिक पहचान पत्र एवं चिकित्सा पुस्तिका'
    ),
    department: createLoc(
      'Department for Empowerment of Senior Citizens / Social Welfare',
      'ಹಿರಿಯ ನಾಗರಿಕರ ಸಬಲೀಕರಣ ಇಲಾಖೆ',
      'वरिष्ठ नागरिक सशक्तिकरण विभाग'
    ),
    benefit: createLoc(
      'Government certified ID card for priority banking counters, geriatric hospital OPD, property tax rebate',
      'ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಆದ್ಯತಾ ಚಿಕಿತ್ಸೆ, ಬ್ಯಾಂಕ್ ಕೌಂಟರ್ ಮತ್ತು ಆಸ್ತಿ ತೆರಿಗೆ ರಿಯಾಯಿತಿಗೆ ಅಧಿಕೃತ ಗುರುತಿನ ಚೀಟಿ',
      'अस्पतालों, बैंकों और संपत्ति कर छूट के लिए आधिकारिक पहचान पत्र'
    ),
    eligibility: createLoc(
      'Any citizen aged 60 years or above.',
      '೬೦ ವರ್ಷ ಪೂರ್ಣಗೊಳಿಸಿದ ಯಾವುದೇ ನಾಗರಿಕರು.',
      '60 वर्ष या उससे अधिक आयु का कोई भी नागरिक।'
    ),
    documents: [
      createLoc('Age Proof Document', 'ವಯಸ್ಸಿನ ದಾಖಲೆ', 'आयु प्रमाण पत्र'),
      createLoc('Residential Proof', 'ವಿಳಾಸ ಪುರಾವೆ', 'निवास प्रमाण'),
      createLoc('Blood Group Certificate', 'ರಕ್ತದ ಗುಂಪು ಪ್ರಮಾಣಪತ್ರ', 'रक्त समूह रिपोर्ट'),
      createLoc('2 Passport Photos', '೨ ಪಾಸ್‌ಪೋರ್ಟ್ ಅಳತೆಯ ಭಾವಚಿತ್ರಗಳು', '2 पासपोर्ट फोटो'),
    ],
    deadline: createLoc('Issued in 15 days', '೧೫ ದಿನಗಳಲ್ಲಿ ವಿತರಣೆ', '15 दिनों में जारी'),
    tags: [
      createLoc('Senior ID', 'ಹಿರಿಯ ನಾಗರಿಕ ಐಡಿ', 'वरिष्ठ पहचान'),
      createLoc('Priority Access', 'ಆದ್ಯತಾ ಸೌಲಭ್ಯ', 'प्राथमिकता सुविधा'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://services.india.gov.in',
  },

  // ==========================================
  // DISABILITY SCHEMES (DIVYANGJAN) (13 items)
  // ==========================================
  {
    id: 'udid-card-national-database',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'UDID (Unique Disability ID) Card Registration & Renewal',
      'ಯುಡಿಐಡಿ (ವಿಶಿಷ್ಟ ಅಂಗವೈಕಲ್ಯ ಗುರುತಿನ ಚೀಟಿ) ನೋಂದಣಿ ಮತ್ತು ನವೀಕರಣ',
      'यूडीआईडी (विशिष्ट दिव्यांगता पहचान पत्र) पंजीकरण'
    ),
    department: createLoc(
      'Department of Empowerment of Persons with Disabilities, MSJE',
      'ಅಂಗವಿಕಲರ ಸಬಲೀಕರಣ ಇಲಾಖೆ, ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಸಚಿವಾಲಯ',
      'दिव्यांगजन सशक्तिकरण विभाग'
    ),
    benefit: createLoc(
      'Single pan-India smart card unlocking all central & state disability pensions, railway concession, travel, and ADIP devices',
      'ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಪಿಂಚಣಿ, ಉಚಿತ ಬಸ್-ರೈಲು ಪ್ರಯಾಣ ಮತ್ತು ಸಹಾಯಕ ಸಾಧನಗಳನ್ನು ಪಡೆಯಲು ಏಕೈಕ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್',
      'पेंशन, मुफ्त यात्रा, सहायक उपकरण व सरकारी लाभों हेतु एकल अखिल भारतीय स्मार्ट कार्ड'
    ),
    eligibility: createLoc(
      'Persons with 40% or more benchmark disability assessed by an authorized Medical Board (21 recognized disabilities).',
      'ಅಧಿಕೃತ ವೈದ್ಯಕೀಯ ಮಂಡಳಿಯಿಂದ ಶೇಕಡಾ ೪೦ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ ಪಡೆದವರು (೨೧ ಬಗೆಯ ಅಂಗವೈಕಲ್ಯಗಳು).',
      'सक्षम मेडिकल बोर्ड द्वारा 40% या अधिक दिव्यांगता प्रमाणित व्यक्ति (21 दिव्यांगताएं)।'
    ),
    documents: [
      createLoc('Medical Disability Assessment Certificate', 'ವೈದ್ಯಕೀಯ ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ', 'मेडिकल दिव्यांगता प्रमाणपत्र'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Recent Full Body Photograph showing disability', 'ಅಂಗವೈಕಲ್ಯ ತೋರಿಸುವ ಭಾವಚಿತ್ರ', 'दिव्यांगता दर्शाती तस्वीर'),
    ],
    deadline: createLoc('Permanent validity (or 5-year temporary for minors)', 'ಶಾಶ್ವತ ಮಾನ್ಯತೆ (ಅಥವಾ ೫ ವರ್ಷ)', 'स्थायी मान्यता (या 5 वर्ष)'),
    tags: [
      createLoc('National UDID', 'ಯುಡಿಐಡಿ ಕಾರ್ಡ್', 'यूडीआईडी कार्ड'),
      createLoc('Statutory Identity', 'ಕಾನೂನುಬದ್ಧ ಗುರುತು', 'वैधानिक पहचान'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://www.swavlambancard.gov.in',
  },
  {
    id: 'karnataka-disability-monthly-pension',
    role: 'disability',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Mythri & Disability Monthly Maintenance Pension',
      'ಕರ್ನಾಟಕ ಮೈತ್ರಿ ಮತ್ತು ಅಂಗವಿಕಲರ ಮಾಸಿಕ ನಿರ್ವಹಣಾ ಪಿಂಚಣಿ',
      'कर्नाटक मैत्री एवं दिव्यांग मासिक भरण-पोषण पेंशन'
    ),
    department: createLoc(
      'Directorate of Social Security and Pensions, Karnataka',
      'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ',
      'सामाजिक सुरक्षा एवं पेंशन निदेशालय, कर्नाटक'
    ),
    benefit: createLoc(
      'Monthly maintenance allowance: ₹1,400/month for 40-74% disability, ₹2,000/month for 75%+ severe disability directly into bank',
      'ಶೇ. ೪೦ ರಿಂದ ೭೪ ರಷ್ಟು ಅಂಗವೈಕಲ್ಯಕ್ಕೆ ತಿಂಗಳಿಗೆ ₹1,400, ಶೇ. ೭೫ ಕ್ಕಿಂತ ಹೆಚ್ಚು ತೀವ್ರ ಅಂಗವೈಕಲ್ಯಕ್ಕೆ ತಿಂಗಳಿಗೆ ₹2,000 ಮಾಸಿಕ ಪಿಂಚಣಿ',
      '40-74% दिव्यांगता पर ₹1,400/माह, 75%+ गंभीर दिव्यांगता पर ₹2,000/माह पेंशन'
    ),
    eligibility: createLoc(
      'Residents of Karnataka holding valid UDID / Disability certificate with family income below ₹32,000 in rural or ₹50,000 in urban areas.',
      'ಕರ್ನಾಟಕದ ನಿವಾಸಿಗಳು, ಮಾನ್ಯ ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ ಹೊಂದಿರುವವರು ಮತ್ತು ನಿಗದಿತ ಆದಾಯ ಮಿತಿಯೊಳಗಿನವರು.',
      'कर्नाटक निवासी, वैध दिव्यांगता प्रमाणपत्र धारक और निर्धारित आय सीमा के भीतर।'
    ),
    documents: [
      createLoc('Disability Certificate / UDID Card', 'ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ / ಯುಡಿಐಡಿ ಕಾರ್ಡ್', 'दिव्यांगता प्रमाणपत्र / यूडीआईडी'),
      createLoc('Revenue Officer Income Certificate', 'ಕಂದಾಯ ಅಧಿಕಾರಿ ನೀಡಿದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'आय प्रमाण पत्र'),
      createLoc('Bank Passbook copy', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ಪ್ರತಿ', 'बैंक पासबुक'),
    ],
    deadline: createLoc('Rolling round the year via Nadakacheri', 'ನಾಡಕಚೇರಿ ಮೂಲಕ ವರ್ಷವಿಡೀ ಲಭ್ಯ', 'नाडकचेरी पर साल भर खुला'),
    tags: [
      createLoc('Disability Pension', 'ಅಂಗವಿಕಲರ ಪಿಂಚಣಿ', 'दिव्यांग पेंशन'),
      createLoc('Karnataka Special', 'ಕರ್ನಾಟಕ ವಿಶೇಷ', 'कर्नाटक विशेष'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://nadakacheri.karnataka.gov.in',
  },
  {
    id: 'adip-assistive-devices-scheme',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'ADIP Scheme for Free Assistive Aids & Appliances',
      'ಅಡಿಪ್ (ADIP) ಉಚಿತ ಸಹಾಯಕ ಸಾಧನಗಳು ಮತ್ತು ಸಲಕರಣೆಗಳ ಯೋಜನೆ',
      'एडिप (ADIP) मुफ्त सहायक उपकरण एवं कृत्रिम अंग योजना'
    ),
    department: createLoc(
      'ALIMCO & Ministry of Social Justice and Empowerment, GoI',
      'ಅಲಿಮ್ಕೋ (ALIMCO) ಮತ್ತು ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಸಚಿವಾಲಯ',
      'एलिम्को एवं सामाजिक न्याय मंत्रालय'
    ),
    benefit: createLoc(
      '100% free motorized tricycles, smart canes, digital hearing aids, Braille kits, wheelchairs, prosthetics, cochlear implants',
      'ಮೋಟಾರೀಕೃತ ತ್ರಿಚಕ್ರ ವಾಹನ, ಸ್ಮಾರ್ಟ್ ಕೇನ್, ಡಿಜಿಟಲ್ ಶ್ರವಣ ಸಾಧನ, ಗಾಲಿಕುರ್ಚಿ, ಕೃತಕ ಅಂಗಾಂಗಗಳು ಸಂಪೂರ್ಣ ಉಚಿತ',
      'मुफ्त मोटराइज्ड ट्राइसाइकिल, डिजिटल हियरिंग एड, व्हीलचेयर, कृत्रिम अंग व कोकलियर इम्प्लांट'
    ),
    eligibility: createLoc(
      'Persons with 40%+ disability with monthly income up to ₹20,000 (100% subsidy) or ₹20,001 - ₹30,000 (50% subsidy).',
      'ಶೇ. ೪೦ ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಗವೈಕಲ್ಯ ಹೊಂದಿದ್ದು, ಮಾಸಿಕ ಆದಾಯ ₹20,000 ಒಳಗಿರುವವರು.',
      '40%+ दिव्यांगता और ₹20,000 तक मासिक आय वाले व्यक्ति (100% सब्सिडी)।'
    ),
    documents: [
      createLoc('Disability Certificate / UDID', 'ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ / ಯುಡಿಐಡಿ', 'दिव्यांगता प्रमाणपत्र / यूडीआईडी'),
      createLoc('Income Certificate / BPL Card', 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ / ಬಿಪಿಎಲ್ ಕಾರ್ಡ್', 'आय प्रमाणपत्र / बीपीएल कार्ड'),
      createLoc('Hearing / Audiometry / Orthopedic Recommendation', 'ವೈದ್ಯರ ಶಿಫಾರಸು ಪತ್ರ', 'डॉक्टर का सिफारिश पत्र'),
    ],
    deadline: createLoc('Monthly ALIMCO assessment camps', 'ಮಾಸಿಕ ಅಲಿಮ್ಕೋ ಮೌಲ್ಯಮಾಪನ ಶಿಬಿರಗಳು', 'मासिक एलिम्को शिविरों द्वारा'),
    tags: [
      createLoc('Free Assistive Devices', 'ಉಚಿತ ಸಹಾಯಕ ಸಾಧನಗಳು', 'मुफ्त सहायक उपकरण'),
      createLoc('Mobility Aid', 'ಚಲನಶೀಲತೆ ನೆರವು', 'गतिशीलता सहायता'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://depwd.gov.in',
  },
  {
    id: 'niramaya-health-insurance-national-trust',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'Niramaya Health Insurance Scheme (National Trust)',
      'ನಿರಾಮಯ ಆರೋಗ್ಯ ವಿಮಾ ಯೋಜನೆ (ನ್ಯಾಷನಲ್ ಟ್ರಸ್ಟ್)',
      'निरामया स्वास्थ्य बीमा योजना (नेशनल ट्रस्ट)'
    ),
    department: createLoc(
      'The National Trust, Ministry of Social Justice & Empowerment',
      'ದಿ ನ್ಯಾಷನಲ್ ಟ್ರಸ್ಟ್, ಸಾಮಾಜಿಕ ನ್ಯಾಯ ಸಚಿವಾಲಯ',
      'द नेशनल ट्रस्ट'
    ),
    benefit: createLoc(
      'Health insurance cover of ₹1,00,000 per year including OPD, speech therapy, behavioral therapy, hospitalization and transport',
      'ವರ್ಷಕ್ಕೆ ₹1,00,000 ವರೆಗೆ ಚಿಕಿತ್ಸೆ, ಭಾಷಣ ಚಿಕಿತ್ಸೆ (ಸ್ಪೀಚ್ ಥೆರಪಿ) ಮತ್ತು ಆಸ್ಪತ್ರೆ ವೆಚ್ಚಗಳಿಗೆ ಸಮಗ್ರ ಆರೋಗ್ಯ ವಿಮೆ',
      'प्रति वर्ष ₹1,00,000 तक का स्वास्थ्य बीमा (ओपीडी, स्पीच थेरेपी व अस्पताल भर्ती शामिल)'
    ),
    eligibility: createLoc(
      'Persons with Autism, Cerebral Palsy, Intellectual Disability, or Multiple Disabilities.',
      'ಆಟಿಸಂ, ಸೆರೆಬ್ರಲ್ ಪಾಲ್ಸಿ, ಬೌದ್ಧಿಕ ಅಸಾಮರ್ಥ್ಯ ಹೊಂದಿರುವ ವ್ಯಕ್ತಿಗಳು.',
      'ऑटिज्म, सेरेब्रल पाल्सी, बौद्धिक दिव्यांगता या बहु-दिव्यांगता से ग्रस्त व्यक्ति।'
    ),
    documents: [
      createLoc('Disability Certificate with condition specified', 'ಅಂಗವೈಕಲ್ಯ ದೃಢೀಕರಣ ಪತ್ರ', 'विशिष्ट स्थिति दर्शाने वाला दिव्यांगता प्रमाणपत्र'),
      createLoc('BPL Card or Income Certificate (Nominal premium for APL)', 'ಬಿಪಿಎಲ್ ಕಾರ್ಡ್ ಅಥವಾ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'बीपीएल कार्ड / आय प्रमाणपत्र'),
      createLoc('Bank Account of Parent/Guardian', 'ಪೋಷಕರ ಬ್ಯಾಂಕ್ ಖಾತೆ', 'अभिभावक का बैंक खाता'),
    ],
    deadline: createLoc('Annual renewal cycle', 'ವಾರ್ಷಿಕ ನವೀಕರಣ', 'वार्षिक नवीकरण'),
    tags: [
      createLoc('Therapy Coverage', 'ಥೆರಪಿ ವೆಚ್ಚ ರಕ್ಷಣೆ', 'थेरेपी कवरेज'),
      createLoc('Mental Health & Autism', 'ಆಟಿಸಂ ಮತ್ತು ಮಾನಸಿಕ ಆರೋಗ್ಯ', 'ऑटिज्म एवं बौद्धिक स्वास्थ्य'),
    ],
    applyMode: 'OFFICIAL_PORTAL',
    verified: true,
    officialPortalUrl: 'https://thenationaltrust.gov.in',
  },
  {
    id: 'indian-railways-divyangjan-concession',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'Indian Railways Divyangjan Concession Photo Card',
      'ಭಾರತೀಯ ರೈಲ್ವೆ ದಿವ್ಯಾಂಗಜನ್ ಪ್ರಯಾಣ ರಿಯಾಯಿತಿ ಫೋಟೋ ಕಾರ್ಡ್',
      'भारतीय रेल दिव्यांगजन रियायती फोटो कार्ड'
    ),
    department: createLoc(
      'Ministry of Railways, Government of India',
      'ರೈಲ್ವೆ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ',
      'रेल मंत्रालय, भारत सरकार'
    ),
    benefit: createLoc(
      'Up to 75% concession on train tickets in Sleeper, 3AC, 2AC, Chair Car + 1 escort travel companion eligible',
      'ಸ್ಲೀಪರ್, 3AC, 2AC ರೈಲು ಟಿಕೆಟ್‌ಗಳಲ್ಲಿ ಶೇ. ೭೫ ರವರೆಗೆ ರಿಯಾಯಿತಿ + ಒಬ್ಬ ಜತೆಗಾರರಿಗೂ (ಎಸ್ಕಾರ್ಟ್) ರಿಯಾಯಿತಿ',
      'स्लीपर, 3AC, 2AC ट्रेन टिकटों पर 75% तक की छूट + एक परिचारक को भी समान छूट'
    ),
    eligibility: createLoc(
      'Orthopedically impaired, totally blind, hearing/speech impaired, and mentally challenged persons.',
      'ಅಸ್ಥಿಪಂಜರದ ನ್ಯೂನತೆ, ದೃಷ್ಟಿಹೀನತೆ ಮತ್ತು ಕಿವುಡುತನ ಹೊಂದಿರುವ ದಿವ್ಯಾಂಗರು.',
      'दृष्टिबाधित, मूक-बधिर, लोकोमोटर दिव्यांग व बौद्धिक दिव्यांग व्यक्ति।'
    ),
    documents: [
      createLoc('Government Hospital Railway Concession Certificate', 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ ನೀಡಿದ ರೈಲ್ವೆ ರಿಯಾಯಿತಿ ಪ್ರಮಾಣಪತ್ರ', 'रेलवे निर्धारित प्रारूप में मेडिकल प्रमाणपत्र'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Passport size photographs', 'ಪಾಸ್‌ಪೋರ್ಟ್ ಭಾವಚಿತ್ರಗಳು', 'पासपोर्ट फोटो'),
    ],
    deadline: createLoc('Issued by Divisional Railway Manager (DRM) office within 30 days', 'ಡಿಆರ್‌ಎಂ ಕಚೇರಿಯಿಂದ ೩೦ ದಿನಗಳಲ್ಲಿ ವಿತರಣೆ', 'डीआरएम कार्यालय द्वारा 30 दिनों में'),
    tags: [
      createLoc('Train Travel Concession', 'ರೈಲು ಪ್ರಯಾಣ ರಿಯಾಯಿತಿ', 'ट्रेन यात्रा छूट'),
      createLoc('Escort Benefit', 'ಜತೆಗಾರರ ರಿಯಾಯಿತಿ', 'परिचारक लाभ'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://divyangjanid.indianrail.gov.in',
  },
  {
    id: 'karnataka-disability-free-bus-pass',
    role: 'disability',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka RTC 100% Free Bus Pass for Divyangjan',
      'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಾರಿಗೆ ದಿವ್ಯಾಂಗರಿಗೆ ಶೇಕಡಾ ೧೦೦ ರ ಉಚಿತ ಬಸ್ ಪಾಸ್',
      'कर्नाटक राज्य परिवहन दिव्यांगों हेतु 100% मुफ्त बस पास'
    ),
    department: createLoc(
      'Karnataka State Road Transport Corporation & Welfare Dept',
      'ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ನಿಗಮ ಮತ್ತು ಕಲ್ಯಾಣ ಇಲಾಖೆ',
      'केएसआरटीसी एवं दिव्यांग कल्याण विभाग'
    ),
    benefit: createLoc(
      '100% free travel across Karnataka in all ordinary and express government buses',
      'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಎಲ್ಲಾ ಸಾಮಾನ್ಯ ಮತ್ತು ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಸರ್ಕಾರಿ ಬಸ್‌ಗಳಲ್ಲಿ ಶೇಕಡಾ ೧೦೦ ರಷ್ಟು ಉಚಿತ ಪ್ರಯಾಣ',
      'कर्नाटक भर में सभी साधारण एवं एक्सप्रेस सरकारी बसों में 100% मुफ्त यात्रा'
    ),
    eligibility: createLoc(
      'Residents of Karnataka with 40%+ disability certified by competent medical authority.',
      'ಶೇ. ೪೦ ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ ಹೊಂದಿರುವ ಕರ್ನಾಟಕದ ನಿವಾಸಿಗಳು.',
      '40% या अधिक दिव्यांगता वाले कर्नाटक के निवासी।'
    ),
    documents: [
      createLoc('UDID Card / Disability Certificate', 'ಯುಡಿಐಡಿ ಕಾರ್ಡ್ / ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ', 'यूडीआईडी / दिव्यांगता प्रमाणपत्र'),
      createLoc('Karnataka Domicile Proof', 'ಕರ್ನಾಟಕ ವಾಸಸ್ಥಳ ದೃಢೀಕರಣ', 'कर्नाटक निवास प्रमाण'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
    ],
    deadline: createLoc('Annual pass issued via Seva Sindhu', 'ಸೇವಾ ಸಿಂಧು ಮೂಲಕ ವಾರ್ಷಿಕ ಪಾಸ್ ವಿತರಣೆ', 'सेवा सिंधु के माध्यम से वार्षिक जारी'),
    tags: [
      createLoc('Free Bus Pass', 'ಉಚಿತ ಬಸ್ ಪಾಸ್', 'मुफ्त बस पास'),
      createLoc('Karnataka Special', 'ಕರ್ನಾಟಕ ವಿಶೇಷ', 'कर्नाटक विशेष'),
    ],
    applyMode: 'IN_APP_FORM',
    verified: true,
    officialPortalUrl: 'https://sevasindhu.karnataka.gov.in',
  },
];
