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
  {
    id: 'form-nsp-central-scholarship',
    role: 'student',
    states: 'ALL',
    title: createLoc(
      'National Scholarship Portal (NSP) Central Sector Scholarship Form',
      'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (NSP) ಕೇಂದ್ರ ವಲಯದ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ',
      'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) केंद्रीय क्षेत्र छात्रवृत्ति आवेदन'
    ),
    department: createLoc(
      'Ministry of Education, Government of India',
      'ಶಿಕ್ಷಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ',
      'शिक्षा मंत्रालय, भारत सरकार'
    ),
    description: createLoc(
      'All-India guided filing for Central Sector & Post-Matric scholarships with direct DBT transfer to student bank accounts.',
      'ವಿದ್ಯಾರ್ಥಿಗಳ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಡಿಬಿಟಿ ವರ್ಗಾವಣೆಗಾಗಿ ಅಖಿಲ ಭಾರತ ಕೇಂದ್ರ ವಲಯದ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿ.',
      'छात्रों के बैंक खाते में सीधे डीबीटी हस्तांतरण हेतु अखिल भारतीय केंद्रीय छात्रवृत्ति आवेदन।'
    ),
    requiredDocs: [
      createLoc('Institution Bonafide & Admission Certificate', 'ಸಂಸ್ಥೆಯ ಬೋನಾಫೈಡ್ ಮತ್ತು ಪ್ರವೇಶ ಪ್ರಮಾಣಪತ್ರ', 'संस्थान बोनाफाइड एवं प्रवेश प्रमाणपत्र'),
      createLoc('Family Income Certificate', 'ಕುಟುಂಬದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'पारिवारिक आय प्रमाणपत्र'),
      createLoc('Previous Year Marks Sheet', 'ಹಿಂದಿನ ವರ್ಷದ ಅಂಕಪಟ್ಟಿ', 'पिछले वर्ष की अंकतालिका'),
    ],
    portalUrl: 'https://scholarships.gov.in',
    formSpecificFields: [
      {
        id: 'universityRollNo',
        label: createLoc('College / AISHE Enrollment Number', 'ಕಾಲೇಜು / ಎಐಎಸ್‌ಎಚ್‌ಇ ನೋಂದಣಿ ಸಂಖ್ಯೆ', 'कॉलेज / एआईएसएचई नामांकन संख्या'),
        type: 'text',
        required: true,
        placeholder: createLoc('e.g. NSP2026CS104', 'ಉದಾ. NSP2026CS104', 'उदा. NSP2026CS104'),
        helperText: createLoc('Enter your institution roll or registration number', 'ನಿಮ್ಮ ಸಂಸ್ಥೆಯ ನೋಂದಣಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ', 'अपने संस्थान का रोल या पंजीकरण नंबर दर्ज करें'),
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
  {
    id: 'form-eshram-national',
    role: 'worker',
    states: 'ALL',
    title: createLoc(
      'e-Shram National Unorganised Worker UAN & Welfare Card Form',
      'ಇ-ಶ್ರಮ್ ರಾಷ್ಟ್ರೀಯ ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರ ಯುಎಎನ್ ಮತ್ತು ಕಲ್ಯಾಣ ಕಾರ್ಡ್ ಅರ್ಜಿ',
      'ई-श्रम राष्ट्रीय असंगठित श्रमिक यूएएन एवं कल्याण कार्ड फॉर्म'
    ),
    department: createLoc(
      'Ministry of Labour & Employment, Government of India',
      'ಕಾರ್ಮಿಕ ಮತ್ತು ಉದ್ಯೋಗ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ',
      'श्रम एवं रोजगार मंत्रालय, भारत सरकार'
    ),
    description: createLoc(
      'All-India registration for 12-digit Universal Account Number (UAN), ₹2 Lakh accidental insurance cover, and PM-SYM pension linkage.',
      '೧೨ ಅಂಕಿಯ ಯುಎಎನ್ ಕಾರ್ಡ್, ₹2 ಲಕ್ಷ ಅಪಘಾತ ವಿಮೆ ಮತ್ತು ಪಿಎಂ-ಎಸ್‌ವೈಎಂ ಪಿಂಚಣಿಗಾಗಿ ಅಖಿಲ ಭಾರತ ನೋಂದಣಿ.',
      '12 अंकों के यूएएन कार्ड, ₹2 लाख दुर्घटना बीमा और पीएम-एसवाईएम पेंशन हेतु अखिल भारतीय पंजीकरण।'
    ),
    requiredDocs: [
      createLoc('Aadhaar Card (Mobile Linked)', 'ಆಧಾರ್ ಕಾರ್ಡ್ (ಮೊಬೈಲ್ ಲಿಂಕ್)', 'आधार कार्ड (मोबाइल लिंक)'),
      createLoc('Bank Passbook / IFSC Details', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ / IFSC ವಿವರ', 'बैंक पासबुक / IFSC विवरण'),
    ],
    portalUrl: 'https://eshram.gov.in',
    formSpecificFields: [
      {
        id: 'primaryTrade',
        label: createLoc('Primary Occupation / NCO Trade', 'ಪ್ರಮುಖ ವೃತ್ತಿ / ಕೌಶಲ್ಯ', 'मुख्य व्यवसाय / कौशल'),
        type: 'select',
        required: true,
        options: [
          createLoc('Masonry / Bricklaying', 'ಮೇಸ್ತ್ರಿ / ಗಾರೆ ಕೆಲಸ', 'राजमिस्त्री / चिनाई'),
          createLoc('Carpentry / Woodwork', 'ಬಡಗಿ / ಮರಗೆಲಸ', 'बढ़ई का काम'),
          createLoc('Plumbing & Sanitation', 'ಪ್ಲಂಬಿಂಗ್', 'प्लंबर का काम'),
          createLoc('Electrical Wiring', 'ವಿದ್ಯುತ್ ತಂತಿ ಜೋಡಣೆ', 'बिजली का काम'),
          createLoc('Delivery / Gig / Transport Worker', 'ಡೆಲಿವರಿ / ಗಿಗ್ / ಸಾರಿಗೆ ಕಾರ್ಮಿಕ', 'डिलीवरी / गिग / परिवहन श्रमिक'),
          createLoc('Daily Wage / General Labour', 'ದಿನಗೂಲಿ ಕಾರ್ಮಿಕ', 'दैनिक मजदूरी / हेल्पर'),
        ],
      },
      {
        id: 'employerName',
        label: createLoc('Work Location / Contractor / Self-Employed', 'ಕೆಲಸದ ಸ್ಥಳ / ಗುತ್ತಿಗೆದಾರ / ಸ್ವಯಂ ಉದ್ಯೋಗ', 'कार्य स्थल / ठेकेदार / स्व-रोजगार'),
        type: 'text',
        required: true,
        placeholder: createLoc('e.g. Self-Employed / Local Site', 'ಉದಾ. ಸ್ವಯಂ ಉದ್ಯೋಗ / ಸ್ಥಳೀಯ ಸೈಟ್', 'उदा. स्व-रोजगार / स्थानीय साइट'),
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
  {
    id: 'form-ignoaps-national-pension',
    role: 'senior',
    states: 'ALL',
    title: createLoc(
      'Indira Gandhi National Old Age Pension (IGNOAPS) Application',
      'ಇಂದಿರಾ ಗಾಂಧಿ ರಾಷ್ಟ್ರೀಯ ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ (IGNOAPS) ಅರ್ಜಿ',
      'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन (IGNOAPS) आवेदन'
    ),
    department: createLoc(
      'National Social Assistance Programme (NSAP), GoI',
      'ರಾಷ್ಟ್ರೀಯ ಸಾಮಾಜಿಕ ನೆರವು ಕಾರ್ಯಕ್ರಮ (NSAP), ಭಾರತ ಸರ್ಕಾರ',
      'राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP), भारत सरकार'
    ),
    description: createLoc(
      'All-India monthly senior citizen pension and Digital Life Certificate (Jeevan Pramaan) enrollment for citizens aged 60+.',
      '೬೦ ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮಾಸಿಕ ಪಿಂಚಣಿ ಮತ್ತು ಜೀವನ್ ಪ್ರಮಾಣ್ ನೋಂದಣಿ.',
      '60+ वर्ष के वरिष्ठ नागरिकों के लिए मासिक पेंशन और जीवन प्रमाण नामांकन।'
    ),
    requiredDocs: [
      createLoc('Statutory Age Proof Document', 'ವಯಸ್ಸಿನ ದಾಖಲೆ', 'आयु प्रमाण पत्र'),
      createLoc('BPL / Income Declaration Certificate', 'ಬಿಪಿಎಲ್ / ಆದಾಯ ಘೋಷಣಾ ಪ್ರಮಾಣಪತ್ರ', 'बीपीएल / आय घोषणा प्रमाणपत्र'),
    ],
    portalUrl: 'https://nsap.nic.in',
    formSpecificFields: [
      {
        id: 'exactAge',
        label: createLoc('Completed Age in Years', 'ಪೂರ್ಣಗೊಂಡ ವಯಸ್ಸು (ವರ್ಷಗಳಲ್ಲಿ)', 'पूर्ण आयु (वर्षों में)'),
        type: 'number',
        required: true,
        placeholder: createLoc('e.g. 64', 'ಉದಾ. ೬೪', 'उदा. 64'),
        helperText: createLoc('Must be 60 years or above for IGNOAPS central pension', 'ಐಜಿಎನ್‌ಒಎಪಿಎಸ್ ಪಿಂಚಣಿಗೆ ೬೦ ವರ್ಷ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿರಬೇಕು', 'आईजीएनओएपीएस पेंशन हेतु 60 वर्ष या अधिक'),
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
