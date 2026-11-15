import { TaskItem } from '../types';
import { createLoc } from './languages';

export const TASKS_DATABASE: TaskItem[] = [
  // ================= STUDENT =================
  {
    id: 'task-student-ssp-renewal',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Submit SSP Post-Matric Scholarship Application',
      'ಎಸ್‌ಎಸ್‌ಪಿ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
      'एसएसपी पोस्ट-मैट्रिक छात्रवृत्ति आवेदन जमा करें'
    ),
    whyItMatters: createLoc(
      'Ensures 100% tuition fee reimbursement and direct monthly student stipend in bank account.',
      'ಪೂರ್ಣ ಬೋಧನಾ ಶುಲ್ಕ ಮರುಪಾವತಿ ಮತ್ತು ಮಾಸಿಕ ಭತ್ಯೆ ಖಾತೆಗೆ ಜಮೆಯಾಗಲು ಕಡ್ಡಾಯ.',
      'पूर्ण शिक्षण शुल्क प्रतिपूर्ति और सीधे बैंक में मासिक वजीफा सुनिश्चित करता है।'
    ),
    deadline: createLoc('31 December (Annual cycle)', '೩೧ ಡಿಸೆಂಬರ್ (ವಾರ್ಷಿಕ ಗಡುವು)', '31 दिसंबर (वार्षिक चक्र)'),
    urgency: 'due_soon',
    requiredDocuments: [
      createLoc('College Admission Receipt', 'ಕಾಲೇಜು ಪ್ರವೇಶ ರಶೀದಿ', 'कॉलेज प्रवेश रसीद'),
      createLoc('Caste & Income RD Certificate', 'ಜಾತಿ ಮತ್ತು ಆದಾಯ RD ಪ್ರಮಾಣಪತ್ರ', 'जाति एवं आय प्रमाण पत्र'),
      createLoc('Aadhaar-seeded Bank Passbook', 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'आधार से जुड़ा बैंक पासबुक'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-student-bus-pass',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Apply / Renew KSRTC / BMTC Student Concession Pass',
      'ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ / ಬಿಎಂಟಿಸಿ ವಿದ್ಯಾರ್ಥಿ ಬಸ್ ಪಾಸ್ ಅರ್ಜಿ / ನವೀಕರಣ',
      'केएसआरटीसी / बीएमटीसी छात्र रियायती बस पास आवेदन'
    ),
    whyItMatters: createLoc(
      'Save over 80% on daily college commute travel costs across the semester.',
      'ಪ್ರತಿದಿನ ಕಾಲೇಜಿಗೆ ಪ್ರಯಾಣಿಸುವ ವೆಚ್ಚದಲ್ಲಿ ಶೇಕಡಾ ೮೦ ಕ್ಕೂ ಹೆಚ್ಚು ಹಣ ಉಳಿತಾಯವಾಗುತ್ತದೆ.',
      'सेमेस्टर भर दैनिक कॉलेज यात्रा खर्च पर 80% से अधिक की बचत।'
    ),
    deadline: createLoc('Immediate (Valid for academic session)', 'ತಕ್ಷಣ (ಶೈಕ್ಷಣಿಕ ವರ್ಷಕ್ಕೆ ಮಾನ್ಯ)', 'तत्काल (सत्र हेतु मान्य)'),
    urgency: 'upcoming',
    requiredDocuments: [
      createLoc('Student Fee Receipt', 'ಕಾಲೇಜು ಶುಲ್ಕ ರಶೀದಿ', 'कॉलेज शुल्क रसीद'),
      createLoc('Student Identity Card', 'ವಿದ್ಯಾರ್ಥಿ ಐಡಿ ಕಾರ್ಡ್', 'छात्र पहचान पत्र'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-student-nsp-biometric',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'Complete NSP Aadhaar Biometric Authentication at College',
      'ಕಾಲೇಜಿನಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ (NSP) ಬಯೋಮೆಟ್ರಿಕ್ ದೃಢೀಕರಣ ಪೂರ್ಣಗೊಳಿಸಿ',
      'कॉलेज में राष्ट्रीय छात्रवृत्ति (NSP) बायोमेट्रिक प्रमाणीकरण पूरा करें'
    ),
    whyItMatters: createLoc(
      'Ministry regulations require physical biometric verification to disburse central scholarship amounts.',
      'ಕೇಂದ್ರ ವಿದ್ಯಾರ್ಥಿವೇತನ ಹಣ ಬಿಡುಗಡೆಯಾಗಲು ಬಯೋಮೆಟ್ರಿಕ್ ಪರಿಶೀಲನೆ ಕಡ್ಡಾಯ.',
      'केंद्रीय छात्रवृत्ति राशि वितरण के लिए बायोमेट्रिक सत्यापन आवश्यक है।'
    ),
    deadline: createLoc('15 November', '೧೫ ನವೆಂಬರ್', '15 नवंबर'),
    urgency: 'due_soon',
    requiredDocuments: [
      createLoc('NSP Application ID', 'ಎನ್‌ಎಸ್‌ಪಿ ಅರ್ಜಿ ಐಡಿ', 'एनएसपी आवेदन आईडी'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-student-caste-validity',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Verify RD 15-Digit Barcode Certificate Validity',
      'ನಾಡಕಚೇರಿ ೧೫-ಅಂಕಿಯ RD ಜಾತಿ/ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ ಮಾನ್ಯತೆ ಪರಿಶೀಲಿಸಿ',
      'नाडकचेरी 15-अंकीय आरडी प्रमाणपत्र की वैधता जांचें'
    ),
    whyItMatters: createLoc(
      'Expired income certificates lead to immediate rejection of scholarship renewal in state portal.',
      'ಅವಧಿ ಮೀರಿದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರವಿದ್ದರೆ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ ತಿರಸ್ಕೃತಗೊಳ್ಳುತ್ತದೆ.',
      'अवैध या समय सीमा समाप्त आय प्रमाण पत्र से छात्रवृत्ति खारिज हो सकती है।'
    ),
    deadline: createLoc('Check before deadline', 'ಗಡುವಿಗೆ ಮುನ್ನ ಪರಿಶೀಲಿಸಿ', 'अंतिम तिथि से पहले जांचें'),
    urgency: 'optional',
    requiredDocuments: [
      createLoc('RD Number Document Copy', 'ಆರ್‌ಡಿ ಸಂಖ್ಯೆಯ ಪ್ರತಿ', 'आरडी संख्या प्रति'),
    ],
    status: 'completed',
  },

  // ================= FARMER =================
  {
    id: 'task-farmer-pmkisan-ekyc',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Complete PM-KISAN OTP / Face e-KYC Verification',
      'ಪಿಎಂ-ಕಿಸಾನ್ ಒಟಿಪಿ / ಫೇಸ್ ಇ-ಕೆವೈಸಿ ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳಿಸಿ',
      'पीएम-किसान ओटीपी / फेस ई-केवाईसी सत्यापन पूरा करें'
    ),
    whyItMatters: createLoc(
      'Mandatory to receive the upcoming ₹2,000 direct bank instalment without holding or pause.',
      'ಮುಂದಿನ ₹2,000 ಕಂತು ಯಾವುದೇ ಅಡೆತಡೆಯಿಲ್ಲದೆ ನೇರವಾಗಿ ಖಾತೆಗೆ ಜಮೆಯಾಗಲು ಕಡ್ಡಾಯ.',
      'आगामी ₹2,000 की किस्त बिना किसी रुकावट के खाते में पाने हेतु अनिवार्य।'
    ),
    deadline: createLoc('Immediate before next DBT run', 'ಮುಂದಿನ ಕಂತಿನ ದಿನಾಂಕಕ್ಕೆ ಮುನ್ನ', 'अगली किस्त से पहले तत्काल'),
    urgency: 'overdue',
    requiredDocuments: [
      createLoc('Aadhaar Card with linked mobile', 'ಮೊಬೈಲ್ ಲಿಂಕ್ ಆದ ಆಧಾರ್ ಕಾರ್ಡ್', 'मोबाइल लिंक आधार कार्ड'),
      createLoc('PM-KISAN Registration ID', 'ಪಿಎಂ-ಕಿಸಾನ್ ನೋಂದಣಿ ಸಂಖ್ಯೆ', 'पीएम-किसान पंजीकरण संख्या'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-farmer-pmfby-enrollment',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'Insure Standing Crop under PMFBY Scheme',
      'ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆಯಡಿ ಬೆಳೆ ವಿಮೆ ಮಾಡಿಸಿ',
      'पीएमएफबीवाय योजना के तहत खड़ी फसल का बीमा कराएं'
    ),
    whyItMatters: createLoc(
      'Guarantees compensation against localized calamities, unseasonal showers, drought, or pest outbreak.',
      'ಅಕಾಲಿಕ ಮಳೆ, ಬರಗಾಲ ಅಥವಾ ಕೀಟಬಾಧೆಯಿಂದ ಬೆಳೆ ಹಾನಿಯಾದರೆ ಸೂಕ್ತ ಆರ್ಥಿಕ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ.',
      'बेमौसम बारिश, सूखा या कीट प्रकोप से फसल क्षति पर वित्तीय सुरक्षा।'
    ),
    deadline: createLoc('31 July (Kharif) / 31 Dec (Rabi)', '೩೧ ಜುಲೈ (ಖಾರಿಫ್) / ೩೧ ಡಿಸೆಂಬರ್ (ರಬಿ)', '31 जुलाई (खरीफ) / 31 दिसंबर (रबी)'),
    urgency: 'due_soon',
    requiredDocuments: [
      createLoc('Current RTC / Pahani', 'ಪ್ರಸ್ತುತ ಆರ್‌ಟಿಸಿ / ಪಹಣಿ', 'वर्तमान आरटीसी / खसरा'),
      createLoc('Sowing Certificate from Village Officer', 'ಗ್ರಾಮ ಕೃಷಿ ಅಧಿಕಾರಿ ನೀಡಿದ ಬಿತ್ತನೆ ಪತ್ರ', 'बुवाई प्रमाणपत्र'),
      createLoc('Bank Passbook', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'बैंक पासबुक'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-farmer-fruits-fid-linking',
    role: 'farmer',
    states: ['Karnataka'],
    title: createLoc(
      'Link Bhoomi Survey Numbers to Karnataka FRUITS FID',
      'ಕರ್ನಾಟಕ ಫ್ರೂಟ್ಸ್ ಎಫ್‌ಐಡಿಗೆ ಎಲ್ಲಾ ಭೂಮಿ ಸರ್ವೇ ನಂಬರ್‌ಗಳನ್ನು ಲಿಂಕ್ ಮಾಡಿ',
      'कर्नाटक फ्रूट्स एफआईडी में सभी खसरा/सर्वे संख्या लिंक करें'
    ),
    whyItMatters: createLoc(
      'Without FRUITS FID linking, farmers cannot sell at MSP centers or claim input subsidies in Karnataka.',
      'ಫ್ರೂಟ್ಸ್ ಲಿಂಕ್ ಇಲ್ಲದಿದ್ದರೆ ಕರ್ನಾಟಕದಲ್ಲಿ ಬೆಂಬಲ ಬೆಲೆ ಖರೀದಿ ಮತ್ತು ಸಬ್ಸಿಡಿ ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ.',
      'फ्रूट्स लिंकिंग के बिना कर्नाटक में एमएसपी खरीद और सब्सिडी नहीं मिल सकती।'
    ),
    deadline: createLoc('Open ongoing', 'ವರ್ಷವಿಡೀ ತೆರೆದಿದೆ', 'वर्ष भर जारी'),
    urgency: 'upcoming',
    requiredDocuments: [
      createLoc('All Bhoomi RTC copies', 'ಎಲ್ಲಾ ಭೂಮಿ ಆರ್‌ಟಿಸಿ ಪ್ರತಿಗಳು', 'सभी भू-अभिलेख प्रतियां'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
    ],
    status: 'not_started',
  },

  // ================= WORKER =================
  {
    id: 'task-worker-eshram-update',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'Update Current Address & Primary Trade on e-Shram Portal',
      'ಇ-ಶ್ರಮ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪ್ರಸ್ತುತ ವಿಳಾಸ ಮತ್ತು ವೃತ್ತಿ ವಿವರ ನವೀಕರಿಸಿ',
      'ई-श्रम पोर्टल पर वर्तमान पता एवं व्यवसाय अपडेट करें'
    ),
    whyItMatters: createLoc(
      'Ensures accurate skill categorization for localized job allocations and PMSBY claim coverage.',
      'ಸ್ಥಳೀಯ ಉದ್ಯೋಗ ಮಾಹಿತಿ ಮತ್ತು ಅಪಘಾತ ವಿಮಾ ಪರಿಹಾರ ಪಡೆಯಲು ವಿಳಾಸ ನವೀಕರಣ ಅಗತ್ಯ.',
      'स्थानीय रोजगार आवंटन और दुर्घटना बीमा लाभ हेतु विवरण अपडेट आवश्यक।'
    ),
    deadline: createLoc('Rolling update', 'ಯಾವಾಗ ಬೇಕಾದರೂ ನವೀಕರಿಸಿ', 'आवश्यकतानुसार अपडेट करें'),
    urgency: 'upcoming',
    requiredDocuments: [
      createLoc('e-Shram UAN Card', 'ಇ-ಶ್ರಮ್ ಯುಎಎನ್ ಕಾರ್ಡ್', 'ई-श्रम यूएएन कार्ड'),
      createLoc('Aadhaar OTP', 'ಆಧಾರ್ ಒಟಿಪಿ', 'आधार ओटीपी'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-worker-bocw-renewal',
    role: 'worker',
    states: ['Karnataka'],
    title: createLoc(
      'Renew Karnataka BOCW Construction Worker Smart Card',
      'ಕರ್ನಾಟಕ ಕಟ್ಟಡ ಕಾರ್ಮಿಕ (BOCW) ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ನವೀಕರಿಸಿ',
      'कर्नाटक भवन निर्माण श्रमिक (BOCW) कार्ड का नवीनीकरण करें'
    ),
    whyItMatters: createLoc(
      'Active card status is required to receive education scholarship for children and tool-kit allocation.',
      'ಮಕ್ಕಳ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಉಪಕರಣ ಕಿಟ್ ಪಡೆಯಲು ಕಾರ್ಡ್ ಸಕ್ರಿಯವಾಗಿರಬೇಕು.',
      'बच्चों की छात्रवृत्ति और टूलकिट पाने के लिए कार्ड का सक्रिय होना आवश्यक है।'
    ),
    deadline: createLoc('Before 3-year expiry date', '೩ ವರ್ಷಗಳ ಅವಧಿ ಮುಗಿಯುವ ಮುನ್ನ', '3 वर्ष की समाप्ति से पहले'),
    urgency: 'due_soon',
    requiredDocuments: [
      createLoc('Existing Labour Smart Card', 'ಹಳೆಯ ಕಾರ್ಮಿಕ ಕಾರ್ಡ್', 'विद्यमान श्रम कार्ड'),
      createLoc('90-Days Work Certificate', '೯೦ ದಿನಗಳ ಕೆಲಸದ ಪ್ರಮಾಣಪತ್ರ', '90 दिन का कार्य प्रमाणपत्र'),
    ],
    status: 'not_started',
  },

  // ================= SENIOR CITIZEN =================
  {
    id: 'task-senior-jeevan-pramaan',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Submit Annual Jeevan Pramaan Digital Life Certificate',
      'ವಾರ್ಷಿಕ ಜೀವನ್ ಪ್ರಮಾಣ್ ಡಿಜಿಟಲ್ ಜೀವಿತ ಪ್ರಮಾಣಪತ್ರ ಸಲ್ಲಿಸಿ',
      'वार्षिक जीवन प्रमाण डिजिटल जीवन प्रमाणपत्र जमा करें'
    ),
    whyItMatters: createLoc(
      'Failure to submit in October-November stops monthly pension disbursement from December onwards.',
      'ನವೆಂಬರ್ ಒಳಗೆ ಸಲ್ಲಿಸದಿದ್ದರೆ ಡಿಸೆಂಬರ್‌ನಿಂದ ಮಾಸಿಕ ಪಿಂಚಣಿ ಸ್ಥಗಿತಗೊಳ್ಳುತ್ತದೆ.',
      'नवंबर तक जमा न करने पर दिसंबर से मासिक पेंशन बंद हो सकती है।'
    ),
    deadline: createLoc('30 November (Mandatory Annual Window)', '೩೦ ನವೆಂಬರ್ (ಕಡ್ಡಾಯ ವಾರ್ಷಿಕ ಗಡುವು)', '30 नवंबर (अनिवार्य वार्षिक विंडो)'),
    urgency: 'overdue',
    requiredDocuments: [
      createLoc('Pension PPO Number', 'ಪಿಪಿಒ ಸಂಖ್ಯೆ', 'पीपीओ संख्या'),
      createLoc('Pension Bank Account Details', 'ಪಿಂಚಣಿ ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ', 'पेंशन बैंक खाता'),
      createLoc('Aadhaar Face App / Biometric', 'ಆಧಾರ್ ಫೇಸ್ ಆಪ್ / ಬಯೋಮೆಟ್ರಿಕ್', 'आधार फेस ऐप'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-senior-vay-vandana-enroll',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Generate Ayushman Vay Vandana 70+ Free Healthcare Card',
      'ಆಯುಷ್ಮಾನ್ ವಯ ವಂದನಾ 70+ ಉಚಿತ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
      'आयुष्मान वय वंदना 70+ मुफ्त स्वास्थ्य कार्ड बनाएं'
    ),
    whyItMatters: createLoc(
      'Provides immediate ₹5 Lakh annual cashless treatment cover at top hospitals for elders aged 70+.',
      '೭೦+ ಹಿರಿಯರಿಗೆ ಪ್ರಮುಖ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷದವರೆಗೆ ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆ ನೀಡುತ್ತದೆ.',
      '70+ बुजुर्गों के लिए प्रमुख अस्पतालों में ₹5 लाख तक का तत्काल कैशलेस इलाज।'
    ),
    deadline: createLoc('Instant self-registration', 'ತಕ್ಷಣ ಸ್ವಯಂ ನೋಂದಣಿ', 'तत्काल ऑनलाइन पंजीकरण'),
    urgency: 'due_soon',
    requiredDocuments: [
      createLoc('Aadhaar Card proving 70+ age', '೭೦+ ವಯಸ್ಸು ದೃಢೀಕರಿಸುವ ಆಧಾರ್ ಕಾರ್ಡ್', '70+ आयु दर्शाने वाला आधार कार्ड'),
    ],
    status: 'not_started',
  },

  // ================= DISABILITY =================
  {
    id: 'task-disability-udid-link',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'Apply for UDID Smart Card & Link with State Welfare DB',
      'ಯುಡಿಐಡಿ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್‌ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಮತ್ತು ರಾಜ್ಯ ಕಲ್ಯಾಣ ದತ್ತಾಂಶಕ್ಕೆ ಲಿಂಕ್ ಮಾಡಿ',
      'यूडीआईडी स्मार्ट कार्ड हेतु आवेदन करें और राज्य कल्याण डेटाबेस से जोड़ें'
    ),
    whyItMatters: createLoc(
      'Pan-India recognized proof for lifetime pension, assistive devices, and free bus/train passes.',
      'ಆಜೀವ ಪಿಂಚಣಿ, ಉಚಿತ ಸಾಧನಗಳು ಮತ್ತು ಉಚಿತ ಸಾರಿಗೆ ಪಾಸ್‌ಗೆ ದೇಶಾದ್ಯಂತ ಮಾನ್ಯತೆ ಹೊಂದಿರುವ ಏಕೈಕ ಗುರುತು.',
      'आजीवन पेंशन, मुफ्त उपकरण और निःशुल्क यात्रा पास के लिए एकमात्र वैध राष्ट्रीय पहचान।'
    ),
    deadline: createLoc('Open year-round', 'ವರ್ಷವಿಡೀ ಮುಕ್ತ', 'साल भर खुला'),
    urgency: 'upcoming',
    requiredDocuments: [
      createLoc('Medical Disability Assessment Certificate', 'ವೈದ್ಯಕೀಯ ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ', 'मेडिकल दिव्यांगता प्रमाणपत्र'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
      createLoc('Full Body Photograph', 'ಭಾವಚಿತ್ರ', 'फुल बॉडी फोटो'),
    ],
    status: 'not_started',
  },
  {
    id: 'task-disability-karnataka-pension',
    role: 'disability',
    states: ['Karnataka'],
    title: createLoc(
      'Submit Monthly Maintenance Pension Form at Nadakacheri',
      'ನಾಡಕಚೇರಿಯಲ್ಲಿ ಮಾಸಿಕ ಅಂಗವಿಕಲರ ನಿರ್ವಹಣಾ ಪಿಂಚಣಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
      'नाडकचेरी पर मासिक दिव्यांग भरण-पोषण पेंशन फॉर्म जमा करें'
    ),
    whyItMatters: createLoc(
      'Direct monthly deposit of ₹1,400 to ₹2,000 for living assistance and nutrition.',
      'ತಿಂಗಳಿಗೆ ₹1,400 ರಿಂದ ₹2,000 ನಿರ್ವಹಣಾ ನೆರವು ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ.',
      'जीवन यापन हेतु ₹1,400 से ₹2,000 सीधे बैंक खाते में मासिक जमा।'
    ),
    deadline: createLoc('Any working day', 'ಯಾವುದೇ ಕೆಲಸದ ದಿನ', 'किसी भी कार्य दिवस पर'),
    urgency: 'due_soon',
    requiredDocuments: [
      createLoc('UDID / Disability Certificate', 'ಯುಡಿಐಡಿ / ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ', 'यूडीआईडी / दिव्यांगता प्रमाणपत्र'),
      createLoc('Income Certificate by Tahsildar', 'ತಹಶೀಲ್ದಾರ್ ನೀಡಿದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'आय प्रमाणपत्र'),
      createLoc('Bank Passbook', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', 'बैंक पासबुक'),
    ],
    status: 'not_started',
  },
];
