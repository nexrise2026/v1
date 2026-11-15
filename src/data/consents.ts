import { ConsentItem } from '../types';
import { createLoc } from './languages';

export const CONSENT_ITEMS: ConsentItem[] = [
  // Student
  {
    id: 'consent-student-ssp',
    role: 'student',
    states: ['Karnataka'],
    department: createLoc('Social Welfare Dept (SSP Portal)', 'ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ (ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್)', 'समाज कल्याण विभाग (एसएसपी पोर्टल)'),
    dataRequested: createLoc('College Enrollment ID, Marks Card, Caste & Income RD Details', 'ಕಾಲೇಜು ದಾಖಲಾತಿ ಐಡಿ, ಅಂಕಪಟ್ಟಿ, ಜಾತಿ ಮತ್ತು ಆದಾಯ ಆರ್‌ಡಿ ವಿವರ', 'कॉलेज नामांकन, अंकतालिका, जाति एवं आय विवरण'),
    purpose: createLoc('Verification of academic enrollment and electronic sanction of tuition fee concession', 'ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಶುಲ್ಕ ರಿಯಾಯಿತಿ ಮಂಜೂರಾತಿ ಪರಿಶೀಲನೆ', 'छात्रवृत्ति व शुल्क रियायत स्वीकृति सत्यापन'),
    retentionPeriod: createLoc('Academic Year + 1 year audit cycle', 'ಶೈಕ್ಷಣಿಕ ವರ್ಷ + ೧ ವರ್ಷದ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಅವಧಿ', 'शैक्षणिक सत्र + 1 वर्ष ऑडिट अवधि'),
    nature: 'required',
  },
  {
    id: 'consent-student-transport',
    role: 'student',
    states: ['Karnataka'],
    department: createLoc('Karnataka Transport Undertakings (KSRTC/BMTC)', 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ನಿಗಮಗಳು', 'कर्नाटक राज्य सड़क परिवहन निगम'),
    dataRequested: createLoc('Student Name, Institute Address, Route Details', 'ವಿದ್ಯಾರ್ಥಿ ಹೆಸರು, ಕಾಲೇಜು ವಿಳಾಸ, ಪ್ರಯಾಣ ಮಾರ್ಗ', 'छात्र नाम, संस्थान का पता, यात्रा मार्ग'),
    purpose: createLoc('Issuance and biometric validation of concessional bus pass smart cards', 'ರಿಯಾಯಿತಿ ಬಸ್ ಪಾಸ್ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ವಿತರಣೆ ಮತ್ತು ಪರಿಶೀಲನೆ', 'रियायती बस पास स्मार्ट कार्ड जारी करने हेतु'),
    retentionPeriod: createLoc('Valid till academic year end', 'ಶೈಕ್ಷಣಿಕ ವರ್ಷದ ಅಂತ್ಯದವರೆಗೆ', 'सत्र के अंत तक वैध'),
    nature: 'optional',
  },

  // Farmer
  {
    id: 'consent-farmer-fruits',
    role: 'farmer',
    states: ['Karnataka'],
    department: createLoc('Karnataka FRUITS & Bhoomi Database', 'ಕರ್ನಾಟಕ ಫ್ರೂಟ್ಸ್ ಮತ್ತು ಭೂಮಿ ದತ್ತಾಂಶ', 'कर्नाटक फ्रूट्स एवं भूमि डेटाबेस'),
    dataRequested: createLoc('Survey Numbers, Land Extent, Soil Type, Aadhaar Token', 'ಸರ್ವೇ ನಂಬರ್, ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ, ಮಣ್ಣಿನ ಮಾದರಿ, ಆಧಾರ್ ಟೋಕನ್', 'खसरा संख्या, रकबा, मिट्टी का प्रकार, आधार टोकन'),
    purpose: createLoc('Automated eligibility mapping for input subsidies, minimum support price procurement & drought relief', 'ಸಬ್ಸಿಡಿ, ಬೆಂಬಲ ಬೆಲೆ ಖರೀದಿ ಮತ್ತು ಬರ ಪರಿಹಾರ ಅರ್ಹತೆ ಪರಿಶೀಲನೆ', 'सब्सिडी, एमएसपी खरीद और आपदा राहत पात्रता मैपिंग'),
    retentionPeriod: createLoc('Permanent land ownership registry', 'ಶಾಶ್ವತ ಭೂ ದಾಖಲೆ ನೋಂದಣಿ', 'स्थायी भू-अभिलेख रजिस्ट्री'),
    nature: 'required',
  },
  {
    id: 'consent-farmer-insurance',
    role: 'farmer',
    states: 'ALL',
    department: createLoc('PMFBY Crop Insurance Companies', 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಬೆಳೆ ವಿಮಾ ಕಂಪನಿಗಳು', 'पीएमएफबीवाय फसल बीमा कंपनियां'),
    dataRequested: createLoc('Crop Sowing Survey Entry, Village Weather Data, Bank Account IFSC', 'ಬೆಳೆ ಸಮೀಕ್ಷೆ ವಿವರ, ಹವಾಮಾನ ಮಾಹಿತಿ, ಬ್ಯಾಂಕ್ ಖಾತೆ IFSC', 'फसल बुवाई सर्वेक्षण, मौसम डेटा, बैंक खाता IFSC'),
    purpose: createLoc('Calculation and settlement of insurance claim amount in event of crop loss', 'ಬೆಳೆ ಹಾನಿಯಾದಾಗ ವಿಮಾ ಪರಿಹಾರ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ಪಾವತಿಗೆ', 'फसल क्षति की स्थिति में बीमा दावे की गणना और भुगतान'),
    retentionPeriod: createLoc('Crop Season Duration (Kharif/Rabi)', 'ಬೆಳೆ ಋತುವಿನ ಅವಧಿ (ಖಾರಿಫ್/ರಬಿ)', 'फसल मौसम अवधि (खरीफ/रबी)'),
    nature: 'revocable',
  },

  // Worker
  {
    id: 'consent-worker-bocw',
    role: 'worker',
    states: ['Karnataka'],
    department: createLoc('Karnataka Labour Welfare Board', 'ಕರ್ನಾಟಕ ಕಾರ್ಮಿಕ ಕಲ್ಯಾಣ ಮಂಡಳಿ', 'कर्नाटक कर्मकार कल्याण बोर्ड'),
    dataRequested: createLoc('Trade Certificate, 90-days work slip, nominee details', 'ವೃತ್ತಿ ಪ್ರಮಾಣಪತ್ರ, ೯೦ ದಿನಗಳ ಕೆಲಸದ ವಿವರ, ವಾರಸುದಾರರ ವಿವರ', 'व्यवसाय प्रमाणपत्र, 90 दिन कार्य पर्ची, नॉमिनी विवरण'),
    purpose: createLoc('Direct benefit release for worker marriage, maternity, tool-kit and accident cover', 'ಕಾರ್ಮಿಕರ ಮದುವೆ, ಹೆರಿಗೆ, ಉಪಕರಣ ಕಿಟ್ ಮತ್ತು ಅಪಘಾತ ಪರಿಹಾರ ಪಾವತಿ', 'श्रमिक विवाह, प्रसूति, टूलकिट और दुर्घटना सहायता वितरण'),
    retentionPeriod: createLoc('Active registration term (3 years)', 'ಸಕ್ರಿಯ ನೋಂದಣಿ ಅವಧಿ (೩ ವರ್ಷ)', 'सक्रिय पंजीकरण अवधि (3 वर्ष)'),
    nature: 'required',
  },

  // Senior
  {
    id: 'consent-senior-pension',
    role: 'senior',
    states: ['Karnataka'],
    department: createLoc('Directorate of Social Security and Pensions', 'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ', 'सामाजिक सुरक्षा एवं पेंशन निदेशालय'),
    dataRequested: createLoc('Age Certificate, Annual Family Income Declaration, Bank Account', 'ವಯಸ್ಸಿನ ದಾಖಲೆ, ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ವಿವರ, ಬ್ಯಾಂಕ್ ಖಾತೆ', 'आयु प्रमाणपत्र, वार्षिक पारिवारिक आय विवरण, बैंक खाता'),
    purpose: createLoc('Monthly statutory electronic transfer of Old Age / Sandhya Suraksha pension', 'ಮಾಸಿಕ ವೃದ್ಧಾಪ್ಯ / ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಪಿಂಚಣಿ ನಗದು ವರ್ಗಾವಣೆ', 'मासिक वृद्धावस्था पेंशन का सीधे बैंक में अंतरण'),
    retentionPeriod: createLoc('Lifelong active pension cycle', 'ಜೀವಿತಾವಧಿಯ ಪಿಂಚಣಿ ಅವಧಿ', 'आजीवन पेंशन चक्र'),
    nature: 'required',
  },

  // Disability
  {
    id: 'consent-disability-udid',
    role: 'disability',
    states: 'ALL',
    department: createLoc('Department of Empowerment of Persons with Disabilities', 'ಅಂಗವಿಕಲರ ಸಬಲೀಕರಣ ಇಲಾಖೆ', 'दिव्यांगजन सशक्तिकरण विभाग'),
    dataRequested: createLoc('Medical Assessment Record, Disability Percentage, Specialist Evaluation', 'ವೈದ್ಯಕೀಯ ಮೌಲ್ಯಮಾಪನ ದಾಖಲೆ, ಅಂಗವೈಕಲ್ಯ ಶೇಕಡಾವಾರು, ತಜ್ಞರ ವರದಿ', 'मेडिकल जांच रिकॉर्ड, दिव्यांगता प्रतिशत, विशेषज्ञ रिपोर्ट'),
    purpose: createLoc('Issuance of national UDID card and lifetime pension verification', 'ರಾಷ್ಟ್ರೀಯ ಯುಡಿಐಡಿ ಕಾರ್ಡ್ ವಿತರಣೆ ಮತ್ತು ಆಜೀವ ಪಿಂಚಣಿ ಪರಿಶೀಲನೆ', 'राष्ट्रीय यूडीआईडी कार्ड जारी करने व आजीवन पेंशन सत्यापन हेतु'),
    retentionPeriod: createLoc('Permanent healthcare record', 'ಶಾಶ್ವತ ಆರೋಗ್ಯ ದಾಖಲೆ', 'स्थायी स्वास्थ्य रिकॉर्ड'),
    nature: 'required',
  },
];
