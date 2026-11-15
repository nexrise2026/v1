import { AssistFillFormConfig } from '../types';
import { createLoc } from './languages';

export const ASSIST_FILL_FORMS: AssistFillFormConfig[] = [
  // ================= STUDENT =================
  {
    id: 'form-ssp-scholarship',
    role: 'student',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka SSP Post-Matric Scholarship Application Form',
      'ಕರ್ನಾಟಕ ಎಸ್‌ಎಸ್‌ಪಿ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ ನಮೂನೆ',
      'कर्नाटक एसएसपी पोस्ट-मैट्रिक छात्रवृत्ति आवेदन पत्र'
    ),
    department: createLoc(
      'Social Welfare & Backward Classes Dept, Karnataka',
      'ಸಮಾಜ ಕಲ್ಯಾಣ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ, ಕರ್ನಾಟಕ',
      'समाज कल्याण एवं पिछड़ा वर्ग विभाग'
    ),
    description: createLoc(
      'Guided assisted filing for state scholarship fee reimbursement, hostel grant and annual student book allowance.',
      'ಶುಲ್ಕ ಮರುಪಾವತಿ, ಹಾಸ್ಟೆಲ್ ನೆರವು ಮತ್ತು ಪುಸ್ತಕ ಭತ್ಯೆಗಾಗಿ ಆ್ಯಪ್‌ನಲ್ಲಿ ಸುಲಭ ಅರ್ಜಿ ಭರ್ತಿ ಸಹಾಯಕ.',
      'शुल्क प्रतिपूर्ति और छात्रावास भत्ते के लिए इन-ऐप आवेदन सहायक।'
    ),
    requiredDocs: [
      createLoc('College Admission Receipt', 'ಕಾಲೇಜು ಪ್ರವೇಶ ರಶೀದಿ', 'कॉलेज प्रवेश रसीद'),
      createLoc('Caste & Income Certificate (RD Number)', 'ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (RD ಸಂಖ್ಯೆ)', 'जाति एवं आय प्रमाण पत्र'),
      createLoc('SSLC / Previous Marks Card', 'ಅಂಕಪಟ್ಟಿ', 'अंकतालिका'),
    ],
    portalUrl: 'https://ssp.postmatric.karnataka.gov.in',
    formSpecificFields: [
      {
        id: 'universityRollNo',
        label: createLoc('College Registration / USN Number', 'ಕಾಲೇಜು ನೋಂದಣಿ / ಯುಎಸ್‌ಎನ್ ಸಂಖ್ಯೆ', 'कॉलेज पंजीकरण / यूएसएन नंबर'),
        type: 'text',
        required: true,
        placeholder: createLoc('e.g. 1RV22CS045', 'ಉದಾ. 1RV22CS045', 'उदा. 1RV22CS045'),
        helperText: createLoc('Mention the exact student roll number from your ID card', 'ನಿಮ್ಮ ಗುರುತಿನ ಚೀಟಿಯಲ್ಲಿರುವ ನೋಂದಣಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ', 'पहचान पत्र पर दर्ज रोल नंबर दर्ज करें'),
      },
      {
        id: 'courseYear',
        label: createLoc('Current Year of Study', 'ಪ್ರಸ್ತುತ ಅಧ್ಯಯನ ಮಾಡುತ್ತಿರುವ ವರ್ಷ', 'वर्तमान अध्ययन वर्ष'),
        type: 'select',
        required: true,
        options: [
          createLoc('1st Year', '೧ನೇ ವರ್ಷ', 'प्रथम वर्ष'),
          createLoc('2nd Year', '೨ನೇ ವರ್ಷ', 'द्वितीय वर्ष'),
          createLoc('3rd Year', '೩ನೇ ವರ್ಷ', 'तृतीय वर्ष'),
          createLoc('4th Year / Final', '೪ನೇ ವರ್ಷ / ಅಂತಿಮ ವರ್ಷ', 'चतुर्थ / अंतिम वर्ष'),
        ],
      },
      {
        id: 'hostelType',
        label: createLoc('Accommodation Type', 'ವಸತಿ ವಿವರ', 'आवास प्रकार'),
        type: 'select',
        required: true,
        options: [
          createLoc('Day Scholar (Commuting from home)', 'ಮನೆಯಿಂದ ಓಡಾಟ (ಡೇ ಸ್ಕಾಲರ್)', 'घर से आना-जाना (डे स्कॉलर)'),
          createLoc('Govt Student Hostel', 'ಸರ್ಕಾರಿ ಹಾಸ್ಟೆಲ್', 'सरकारी छात्रावास'),
          createLoc('Private PG / Rental Room', 'ಖಾಸಗಿ ಪಿಜಿ / ಬಾಡಿಗೆ ಕೊಠಡಿ', 'निजी पीजी / किराए का कमरा'),
        ],
      },
    ],
  },

  // ================= FARMER =================
  {
    id: 'form-pmkisan-ekyc',
    role: 'farmer',
    states: 'ALL',
    title: createLoc(
      'PM-KISAN Samman Nidhi Assisted Verification & Land Mapping',
      'ಪಿಎಂ-ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ಪರಿಶೀಲನೆ ಮತ್ತು ಭೂ ದಾಖಲೆ ಮ್ಯಾಪಿಂಗ್',
      'पीएम-किसान सम्मान निधि सत्यापन एवं भूमि मैपिंग'
    ),
    department: createLoc(
      'Ministry of Agriculture & Farmers Welfare, GoI',
      'ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ',
      'कृषि एवं किसान कल्याण मंत्रालय'
    ),
    description: createLoc(
      'In-app guided preparation of village land record mapping for ₹6,000/year direct cash transfer.',
      'ವಾರ್ಷಿಕ ₹6,000 ನಗದು ನೆರವು ಪಡೆಯಲು ಗ್ರಾಮದ ಸರ್ವೇ ನಂಬರ್ ಮತ್ತು ಭೂ ದಾಖಲೆಗಳ ಸುಲಭ ಸಿದ್ಧತೆ.',
      '₹6,000 वार्षिक सहायता हेतु गांव की भूमि मैपिंग और विवरण तैयार करने का सहायक।'
    ),
    requiredDocs: [
      createLoc('RTC / Pahani / Land Record', 'ಆರ್‌ಟಿಸಿ / ಪಹಣಿ ಜಮೀನು ದಾಖಲೆ', 'भू-अभिलेख खसरा खतौनी'),
      createLoc('Aadhaar Card', 'ಆಧಾರ್ ಕಾರ್ಡ್', 'आधार कार्ड'),
    ],
    portalUrl: 'https://pmkisan.gov.in',
    formSpecificFields: [
      {
        id: 'villageName',
        label: createLoc('Village / Hobli Name', 'ಗ್ರಾಮ / ಹೋಬಳಿ ಹೆಸರು', 'गांव / मौजा का नाम'),
        type: 'text',
        required: true,
        placeholder: createLoc('e.g. Kadur', 'ಉದಾ. ಕಡೂರು', 'उदा. कदूर'),
      },
      {
        id: 'surveyNumber',
        label: createLoc('Agricultural Land Survey Number & Hissa', 'ಕೃಷಿ ಭೂಮಿ ಸರ್ವೇ ನಂಬರ್ ಮತ್ತು ಹಿಸ್ಸಾ', 'कृषि भूमि खसरा/सर्वे नंबर व हिस्सा'),
        type: 'text',
        required: true,
        placeholder: createLoc('e.g. 142/2A', 'ಉದಾ. 142/2A', 'उदा. 142/2A'),
        helperText: createLoc('Find this on the top left of your Pahani / Patta document', 'ನಿಮ್ಮ ಪಹಣಿ ಪತ್ರದ ಎಡಭಾಗದಲ್ಲಿ ಇದನ್ನು ಕಾಣಬಹುದು', 'अपनी खतौनी के ऊपर बाईं ओर देखें'),
      },
      {
        id: 'cultivatedLandExtent',
        label: createLoc('Total Cultivated Land Extent', 'ಒಟ್ಟು ಸಾಗುವಳಿ ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ', 'कुल खेती योग्य भूमि का रकबा'),
        type: 'text',
        required: true,
        placeholder: createLoc('e.g. 2 Acres 10 Guntas (or Hectares)', 'ಉದಾ. ೨ ಎಕರೆ ೧೦ ಗುಂಟೆ', 'उदा. 2 एकड़ 10 गुंठा'),
      },
    ],
  },

  // ================= WORKER =================
  {
    id: 'form-bocw-labour-card',
    role: 'worker',
    states: ['Karnataka'],
    title: createLoc(
      'Karnataka Construction & Unorganised Worker Registration Form',
      'ಕರ್ನಾಟಕ ನಿರ್ಮಾಣ ಮತ್ತು ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರ ನೋಂದಣಿ ನಮೂನೆ',
      'कर्नाटक निर्माण एवं असंगठित श्रमिक पंजीकरण फॉर्म'
    ),
    department: createLoc(
      'Karnataka Building & Other Construction Workers Board',
      'ಕರ್ನಾಟಕ ಕಟ್ಟಡ ಮತ್ತು ಇತರ ನಿರ್ಮಾಣ ಕಾರ್ಮಿಕರ ಮಂಡಳಿ',
      'कर्नाटक भवन एवं अन्य सन्निर्माण कर्मकार बोर्ड'
    ),
    description: createLoc(
      'Complete guided submission for official Smart Labour Card, free tool-kit and social security safety net.',
      'ಸ್ಮಾರ್ಟ್ ಕಾರ್ಮಿಕ ಕಾರ್ಡ್ ಮತ್ತು ಸೌಲಭ್ಯಗಳನ್ನು ಪಡೆಯಲು ಆ್ಯಪ್‌ನಲ್ಲಿ ಅಧಿಕೃತ ಅರ್ಜಿ ಸಿದ್ಧಪಡಿಸಿ.',
      'स्मार्ट श्रमिक कार्ड, टूलकिट और सामाजिक सुरक्षा हेतु इन-ऐप आवेदन।'
    ),
    requiredDocs: [
      createLoc('90-Days Work Certificate', '೯೦ ದಿನಗಳ ಕೆಲಸದ ಪ್ರಮಾಣಪತ್ರ', '90 दिन कार्य प्रमाणपत्र'),
      createLoc('e-Shram UAN Card', 'ಇ-ಶ್ರಮ್ ಕಾರ್ಡ್', 'ई-श्रम कार्ड'),
    ],
    portalUrl: 'https://karbocwwb.karnataka.gov.in',
    formSpecificFields: [
      {
        id: 'primaryTrade',
        label: createLoc('Primary Trade / Skilled Work', 'ಪ್ರಮುಖ ವೃತ್ತಿ / ನೈಪುಣ್ಯತೆ', 'मुख्य व्यवसाय / हुनर'),
        type: 'select',
        required: true,
        options: [
          createLoc('Masonry / Bricklaying', 'ಮೇಸ್ತ್ರಿ / ಗಾರೆ ಕೆಲಸ', 'राजमिस्त्री / चिनाई'),
          createLoc('Carpentry / Woodwork', 'ಬಡಗಿ / ಮರಗೆಲಸ', 'बढ़ई का काम'),
          createLoc('Plumbing & Sanitation', 'ಪ್ಲಂಬಿಂಗ್', 'प्लंबर का काम'),
          createLoc('Electrical Wiring', 'ವಿದ್ಯುತ್ ತಂತಿ ಜೋಡಣೆ', 'बिजली का काम'),
          createLoc('Painting & Whitewashing', 'ಪೇಂಟಿಂಗ್', 'पेंटिंग / पुताई'),
          createLoc('Bar-Bending / Steel Fabrication', 'ಕಬ್ಬಿಣ ಬಗ್ಗಿಸುವಿಕೆ / ಸೆಂಟ್ರಿಂಗ್', 'सरिया बांधना / फैब्रिकेशन'),
          createLoc('Daily Wage / General Labour', 'ದಿನಗೂಲಿ ಕಾರ್ಮಿಕ', 'दैनिक मजदूरी / हेल्पर'),
        ],
      },
      {
        id: 'employerName',
        label: createLoc('Employer / Contractor / Site Name', 'ಮಾಲೀಕರು / ಗುತ್ತಿಗೆದಾರರು / ಸೈಟ್ ಹೆಸರು', 'ठेकेदार / नियोक्ता का नाम'),
        type: 'text',
        required: true,
        placeholder: createLoc('Name of builder, contractor or Grama Panchayat', 'ಗುತ್ತಿಗೆದಾರರು ಅಥವಾ ಗ್ರಾಮ ಪಂಚಾಯತಿ ಹೆಸರು', 'ठेकेदार या पंचायत का नाम'),
      },
    ],
  },

  // ================= SENIOR CITIZEN =================
  {
    id: 'form-sandhya-suraksha-pension',
    role: 'senior',
    states: ['Karnataka'],
    title: createLoc(
      'Sandhya Suraksha & Monthly Old Age Pension Application',
      'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಮತ್ತು ವೃದ್ಧಾಪ್ಯ ಮಾಸಿಕ ಪಿಂಚಣಿ ಅರ್ಜಿ',
      'संध्या सुरक्षा एवं वृद्धावस्था मासिक पेंशन आवेदन'
    ),
    department: createLoc(
      'Directorate of Social Security and Pensions, Karnataka',
      'ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿಗಳ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ',
      'सामाजिक सुरक्षा एवं पेंशन निदेशालय'
    ),
    description: createLoc(
      'Step-by-step assistance to claim monthly statutory old-age pension of ₹1,200 deposited straight to your bank.',
      'ಪ್ರತಿ ತಿಂಗಳು ₹1,200 ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ ಪಡೆಯಲು ಸರಳ ಹಂತಗಳಲ್ಲಿ ಅರ್ಜಿ ಸಿದ್ಧಪಡಿಸಿ.',
      'प्रति माह ₹1,200 वृद्धावस्था पेंशन सीधे बैंक में पाने हेतु चरणबद्ध आवेदन।'
    ),
    requiredDocs: [
      createLoc('Statutory Age Proof Document', 'ವಯಸ್ಸಿನ ದಾಖಲೆ', 'आयु प्रमाण पत्र'),
      createLoc('Income Certificate by Tahsildar', 'ತಹಶೀಲ್ದಾರ್ ನೀಡಿದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'तहसीलदार द्वारा जारी आय प्रमाणपत्र'),
    ],
    portalUrl: 'https://nadakacheri.karnataka.gov.in',
    formSpecificFields: [
      {
        id: 'exactAge',
        label: createLoc('Completed Age in Years', 'ಪೂರ್ಣಗೊಂಡ ವಯಸ್ಸು (ವರ್ಷಗಳಲ್ಲಿ)', 'पूर्ण आयु (वर्षों में)'),
        type: 'number',
        required: true,
        placeholder: createLoc('e.g. 66', 'ಉದಾ. ೬೬', 'उदा. 66'),
        helperText: createLoc('Must be 65 years or above for Sandhya Suraksha', 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಯೋಜನೆಗೆ ೬೫ ವರ್ಷ ಮೇಲ್ಪಟ್ಟಿರಬೇಕು', 'संध्या सुरक्षा हेतु 65 वर्ष या अधिक'),
      },
      {
        id: 'livingArrangement',
        label: createLoc('Current Living Situation', 'ಪ್ರಸ್ತುತ ವಾಸಿಸುವ ಪರಿಸ್ಥಿತಿ', 'वर्तमान निवास स्थिति'),
        type: 'select',
        required: true,
        options: [
          createLoc('Living with Family / Children', 'ಕುಟುಂಬ / ಮಕ್ಕಳೊಂದಿಗೆ ವಾಸ', 'परिवार / बच्चों के साथ'),
          createLoc('Living Alone / With Spouse', 'ಒಂಟಿಯಾಗಿ / ಸಂಗಾತಿಯೊಂದಿಗೆ ವಾಸ', 'अकेले / जीवनसाथी के साथ'),
          createLoc('Living in Senior Care / Home', 'ವೃದ್ಧಾಶ್ರಮದಲ್ಲಿ ವಾಸ', 'वृद्धाश्रम में'),
        ],
      },
    ],
  },

  // ================= DISABILITY =================
  {
    id: 'form-udid-registration',
    role: 'disability',
    states: 'ALL',
    title: createLoc(
      'UDID Smart Card Online Enrollment & Assessment Booking',
      'ಯುಡಿಐಡಿ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ನೋಂದಣಿ ಮತ್ತು ಆಸ್ಪತ್ರೆ ಮೌಲ್ಯಮಾಪನ ಬುಕಿಂಗ್',
      'यूडीआईडी स्मार्ट कार्ड ऑनलाइन नामांकन एवं मूल्यांकन'
    ),
    department: createLoc(
      'Department of Empowerment of Persons with Disabilities, GoI',
      'ಅಂಗವಿಕಲರ ಸಬಲೀಕರಣ ಇಲಾಖೆ',
      'दिव्यांगजन सशक्तिकरण विभाग'
    ),
    description: createLoc(
      'Prepare your nationwide official disability smart card application and book a slot at your District Hospital.',
      'ರಾಷ್ಟ್ರವ್ಯಾಪಿ ಅಧಿಕೃತ ಅಂಗವೈಕಲ್ಯ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಡ್ ಅರ್ಜಿ ಸಿದ್ಧಪಡಿಸಿ ಮತ್ತು ಜಿಲ್ಲಾಸ್ಪತ್ರೆಯಲ್ಲಿ ತಪಾಸಣೆ ಸಮಯ ನಿಗದಿಪಡಿಸಿ.',
      'अखिल भारतीय दिव्यांगता स्मार्ट कार्ड हेतु आवेदन और जिला अस्पताल में जांच स्लॉट बुक करें।'
    ),
    requiredDocs: [
      createLoc('Medical Disability Assessment Certificate', 'ವೈದ್ಯಕೀಯ ಅಂಗವೈಕಲ್ಯ ಪ್ರಮಾಣಪತ್ರ', 'मेडिकल बोर्ड प्रमाणपत्र'),
      createLoc('Recent Full Body Photograph showing disability', 'ಅಂಗವೈಕಲ್ಯ ತೋರಿಸುವ ಭಾವಚಿತ್ರ', 'दिव्यांगता दर्शाती तस्वीर'),
    ],
    portalUrl: 'https://www.swavlambancard.gov.in',
    formSpecificFields: [
      {
        id: 'disabilityType',
        label: createLoc('Primary Disability Category', 'ಅಂಗವೈಕಲ್ಯದ ಪ್ರಮುಖ ಪ್ರಕಾರ', 'दिव्यांगता की मुख्य श्रेणी'),
        type: 'select',
        required: true,
        options: [
          createLoc('Locomotor Disability (Mobility / Orthopedic)', 'ಚಲನಶೀಲತೆ / ಅಸ್ಥಿಪಂಜರದ ನ್ಯೂನತೆ', 'लोकोमोटर / अस्थि दिव्यांगता'),
          createLoc('Visual Impairment (Blindness / Low Vision)', 'ದೃಷ್ಟಿದೋಷ (ಅಂಧತ್ವ / ಕಡಿಮೆ ದೃಷ್ಟಿ)', 'दृष्टि दिव्यांगता (अंधापन / कम दृष्टि)'),
          createLoc('Hearing & Speech Impairment', 'ಶ್ರವಣ ಮತ್ತು ಮಾತು ನ್ಯೂನತೆ', 'श्रवण एवं वाणी दिव्यांगता'),
          createLoc('Intellectual Disability / Autism', 'ಬೌದ್ಧಿಕ ಅಸಾಮರ್ಥ್ಯ / ಆಟಿಸಂ', 'बौद्धिक दिव्यांगता / ऑटिज्म'),
          createLoc('Multiple Disabilities', 'ಬಹು ಅಂಗವೈಕಲ್ಯಗಳು', 'बहु-दिव्यांगता'),
        ],
      },
      {
        id: 'disabilityPercentage',
        label: createLoc('Disability Percentage as per Medical Record (%)', 'ವೈದ್ಯಕೀಯ ದಾಖಲೆಯ ಪ್ರಕಾರ ಅಂಗವೈಕಲ್ಯ ಶೇಕಡಾವಾರು (%)', 'मेडिकल रिकॉर्ड के अनुसार दिव्यांगता प्रतिशत (%)'),
        type: 'number',
        required: true,
        placeholder: createLoc('e.g. 50', 'ಉದಾ. ೫೦', 'उदा. 50'),
        helperText: createLoc('Must be 40% or higher for statutory welfare benefits', 'ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳಿಗೆ ಶೇಕಡಾ ೪೦ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿರಬೇಕು', 'सरकारी लाभों हेतु न्यूनतम 40% आवश्यक'),
      },
    ],
  },
];
