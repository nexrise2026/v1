import { SupportContact } from '../types';
import { createLoc } from './languages';

export const SUPPORT_CONTACTS: SupportContact[] = [
  // ================= STUDENT =================
  {
    id: 'supp-student-ssp-helpline',
    role: 'student',
    states: ['Karnataka'],
    officeName: createLoc(
      'Karnataka SSP Scholarship Helpdesk & E-Attestation Cell',
      'ಕರ್ನಾಟಕ ಎಸ್‌ಎಸ್‌ಪಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಸಹಾಯವಾಣಿ ಮತ್ತು ಇ-ದೃಢೀಕರಣ ಕೋಶ',
      'कर्नाटक एसएसपी छात्रवृत्ति हेल्पडेस्क'
    ),
    whoItHelps: createLoc(
      'College students facing technical errors in SSP portal, RD validation or e-attestation issues',
      'ಎಸ್‌ಎಸ್‌ಪಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ತಾಂತ್ರಿಕ ದೋಷ, ಆರ್‌ಡಿ ನಂಬರ್ ಅಥವಾ ಇ-ದೃಢೀಕರಣ ಸಮಸ್ಯೆ ಎದುರಿಸುತ್ತಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳು',
      'एसएसपी पोर्टल, आरडी सत्यापन व ई-सत्यापन समस्याओं वाले छात्र'
    ),
    whenToContact: createLoc(
      'Monday to Saturday: 10:00 AM – 5:30 PM (Except Govt Holidays)',
      'ಸೋಮವಾರದಿಂದ ಶನಿವಾರ: ಬೆಳಗ್ಗೆ ೧೦:೦೦ ರಿಂದ ಸಂಜೆ ೫:೩೦ (ಸರ್ಕಾರಿ ರಜೆಗಳನ್ನು ಹೊರತುಪಡಿಸಿ)',
      'सोमवार से शनिवार: प्रातः 10:00 से सायं 5:30 तक'
    ),
    languages: createLoc('Kannada, English', 'ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್', 'कन्नड़, अंग्रेजी'),
    locationCoverage: createLoc('Statewide Karnataka (Taluk & District Centers)', 'ಕರ್ನಾಟಕ ರಾಜ್ಯವ್ಯಾಪಿ (ತಾಲ್ಲೂಕು ಮತ್ತು ಜಿಲ್ಲಾ ಕೇಂದ್ರಗಳು)', 'कर्नाटक राज्य भर में'),
    phone: '080-35254757',
    verified: true,
  },
  {
    id: 'supp-student-nsp-directorate',
    role: 'student',
    states: 'ALL',
    officeName: createLoc(
      'National Scholarship Portal (NSP) Central Grievance Cell',
      'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (NSP) ಕೇಂದ್ರೀಯ ಕುಂದುಕೊರತೆ ಕೋಶ',
      'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) केंद्रीय शिकायत प्रकोष्ठ'
    ),
    whoItHelps: createLoc(
      'Higher education students experiencing delays in central merit scholarship disbursement or Aadhaar KYC',
      'ಕೇಂದ್ರ ವಿದ್ಯಾರ್ಥಿವೇತನ ಹಣ ಬಿಡುಗಡೆ ವಿಳಂಬ ಅಥವಾ ಆಧಾರ್ ಕೆವೈಸಿ ಸಮಸ್ಯೆ ಎದುರಿಸುತ್ತಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳು',
      'केंद्रीय छात्रवृत्ति भुगतान विलंब व आधार केवाईसी समस्याओं वाले छात्र'
    ),
    whenToContact: createLoc('24x7 Helpline Support', '೨೪x೭ ಸಹಾಯವಾಣಿ ಬೆಂಬಲ', '24 घंटे हेल्पलाइन सहायता'),
    languages: createLoc('Hindi, English, Regional Languages', 'ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್, ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು', 'हिंदी, अंग्रेजी, क्षेत्रीय भाषाएं'),
    locationCoverage: createLoc('Pan-India Central Support', 'ಅಖಿಲ ಭಾರತ ಕೇಂದ್ರೀಯ ಬೆಂಬಲ', 'अखिल भारतीय स्तर'),
    phone: '0120-6619540',
    verified: true,
  },
  {
    id: 'supp-student-district-social-welfare',
    role: 'student',
    states: ['Karnataka'],
    officeName: createLoc(
      'District Social Welfare Office & Hostel Allocation Desk',
      'ಜಿಲ್ಲಾ ಸಮಾಜ ಕಲ್ಯಾಣ ಕಚೇರಿ ಮತ್ತು ಹಾಸ್ಟೆಲ್ ಹಂಚಿಕೆ ಡೆಸ್ಕ್',
      'जिला समाज कल्याण कार्यालय एवं छात्रावास आवंटन प्रकोष्ठ'
    ),
    whoItHelps: createLoc(
      'SC/ST/OBC college learners seeking hostel accommodation, food stipends and special coaching',
      'ಹಾಸ್ಟೆಲ್ ಪ್ರವೇಶ, ಊಟ-ವಸತಿ ಭತ್ಯೆ ಮತ್ತು ತರಬೇತಿ ಬಯಸುವ ವಿದ್ಯಾರ್ಥಿಗಳು',
      'छात्रावास प्रवेश, भोजन भत्ता और विशेष कोचिंग चाहने वाले छात्र'
    ),
    whenToContact: createLoc(
      'Weekdays: 10:30 AM – 4:30 PM',
      'ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ: ಬೆಳಗ್ಗೆ ೧೦:೩೦ ರಿಂದ ಸಂಜೆ ೪:೩೦',
      'कार्य दिवस: प्रातः 10:30 से सायं 4:30'
    ),
    languages: createLoc('Kannada, English', 'ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್', 'कन्नड़, अंग्रेजी'),
    locationCoverage: createLoc('District Headquarters across Karnataka', 'ಕರ್ನಾಟಕದ ಜಿಲ್ಲಾ ಕೇಂದ್ರಗಳು', 'कर्नाटक के जिला मुख्यालय'),
    phone: '1902',
    verified: true,
  },

  // ================= FARMER =================
  {
    id: 'supp-farmer-krishi-helpline',
    role: 'farmer',
    states: 'ALL',
    officeName: createLoc(
      'Kisan Call Centre (KCC) National Toll-Free Advisory',
      'ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ ರಾಷ್ಟ್ರೀಯ ಉಚಿತ ಕೃಷಿ ಸಲಹಾ ಕೇಂದ್ರ',
      'किसान कॉल सेंटर (केसीसी) राष्ट्रीय टोल-फ्री हेल्पलाइन'
    ),
    whoItHelps: createLoc(
      'Farmers seeking expert advice on crop disease diagnosis, weather alerts, fertilizer dosing and mandi prices',
      'ಬೆಳೆ ರೋಗ ನಿಯಂತ್ರಣ, ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ, ಗೊಬ್ಬರದ ಪ್ರಮಾಣ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಬಗ್ಗೆ ರೈತರಿಗೆ ತಜ್ಞರ ಸಲಹೆ',
      'फसल रोग, मौसम पूर्वानुमान, खाद मात्रा और मंडी भाव पर कृषि विशेषज्ञों की सलाह'
    ),
    whenToContact: createLoc(
      'Everyday: 6:00 AM – 10:00 PM',
      'ಪ್ರತಿದಿನ: ಬೆಳಗ್ಗೆ ೬:೦೦ ರಿಂದ ರಾತ್ರಿ ೧೦:೦೦',
      'प्रतिदिन: प्रातः 6:00 से रात्रि 10:00'
    ),
    languages: createLoc('All 22 Scheduled Indian Languages', 'ಎಲ್ಲಾ ಪ್ರಮುಖ ಭಾರತೀಯ ಭಾಷೆಗಳು', 'सभी प्रमुख भारतीय भाषाएं'),
    locationCoverage: createLoc('Nationwide Pan-India', 'ದೇಶಾದ್ಯಂತ', 'देश भर में'),
    phone: '1800-180-1551',
    verified: true,
  },
  {
    id: 'supp-farmer-fruits-raitha-samparka',
    role: 'farmer',
    states: ['Karnataka'],
    officeName: createLoc(
      'Raitha Samparka Kendra (RSK) & Hobli Agriculture Office',
      'ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರ (ಆರ್‌ಎಸ್‌ಕೆ) ಮತ್ತು ಹೋಬಳಿ ಕೃಷಿ ಕಚೇರಿ',
      'रैता संपर्क केंद्र (आरएसके) एवं होबली कृषि कार्यालय'
    ),
    whoItHelps: createLoc(
      'Local Karnataka farmers needing FRUITS FID registration, subsidized seeds, soil cards and farm machinery',
      'ಫ್ರೂಟ್ಸ್ ಎಫ್‌ಐಡಿ ನೋಂದಣಿ, ರಿಯಾಯಿತಿ ದರದ ಬಿತ್ತನೆ ಬೀಜ, ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮತ್ತು ಕೃಷಿ ಯಂತ್ರೋಪಕರಣ ಬಯಸುವ ಸ್ಥಳೀಯ ರೈತರು',
      'फ्रूट्स एफआईडी, रियायती बीज, मृदा स्वास्थ्य कार्ड व कृषि यंत्र चाहने वाले किसान'
    ),
    whenToContact: createLoc(
      'Monday to Saturday: 9:30 AM – 5:00 PM',
      'ಸೋಮವಾರದಿಂದ ಶನಿವಾರ: ಬೆಳಗ್ಗೆ ೯:೩೦ ರಿಂದ ಸಂಜೆ ೫:೦೦',
      'सोमवार से शनिवार: प्रातः 9:30 से सायं 5:00'
    ),
    languages: createLoc('Kannada, English', 'ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್', 'कन्नड़, अंग्रेजी'),
    locationCoverage: createLoc('Hobli level in all Karnataka Taluks', 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಹೋಬಳಿ ಕೇಂದ್ರಗಳು', 'कर्नाटक के सभी ब्लॉक व होबली स्तर पर'),
    phone: '080-22212844',
    verified: true,
  },
  {
    id: 'supp-farmer-crop-insurance-desk',
    role: 'farmer',
    states: 'ALL',
    officeName: createLoc(
      'PMFBY District Crop Insurance Grievance Desk',
      'ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಜಿಲ್ಲಾ ಬೆಳೆ ವಿಮೆ ಪರಿಹಾರ ಕೋಶ',
      'पीएमएफबीवाय जिला फसल बीमा शिकायत निवारण प्रकोष्ठ'
    ),
    whoItHelps: createLoc(
      'Cultivators reporting localized crop inundation, hailstorm loss or pending claim settlement payments',
      'ಅಕಾಲಿಕ ಮಳೆ, ಆಲಿಕಲ್ಲು ಮಳೆಯಿಂದ ಬೆಳೆ ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ವಿಮಾ ಪರಿಹಾರ ವಿಳಂಬವಾದ ರೈತರು',
      'फसल क्षति, अतिवृष्टि या लंबित बीमा दावा भुगतान वाले किसान'
    ),
    whenToContact: createLoc(
      'Within 72 hours of crop damage event for mandatory loss assessment',
      'ಬೆಳೆ ಹಾನಿಯಾದ ೭೨ ಗಂಟೆಗಳ ಒಳಗಾಗಿ ಸಂಪರ್ಕಿಸುವುದು ಕಡ್ಡಾಯ',
      'फसल क्षति के 72 घंटों के भीतर अनिवार्य सर्वेक्षण हेतु'
    ),
    languages: createLoc('State Regional Languages, Hindi, English', 'ಪ್ರಾದೇಶಿಕ ಭಾಷೆ, ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್', 'स्थानीय भाषाएं, हिंदी, अंग्रेजी'),
    locationCoverage: createLoc('District Agriculture Joint Director Office', 'ಜಿಲ್ಲಾ ಕೃಷಿ ಜಂಟಿ ನಿರ್ದೇಶಕರ ಕಚೇರಿ', 'जिला कृषि संयुक्त निदेशक कार्यालय'),
    phone: '14447',
    verified: true,
  },

  // ================= WORKER =================
  {
    id: 'supp-worker-bocw-labour-office',
    role: 'worker',
    states: ['Karnataka'],
    officeName: createLoc(
      'Karnataka Labour Department & BOCW Taluk Inspectorate',
      'ಕರ್ನಾಟಕ ಕಾರ್ಮಿಕ ಇಲಾಖೆ ಮತ್ತು ಕಾರ್ಮಿಕ ನಿರೀಕ್ಷಕರ ಕಚೇರಿ',
      'कर्नाटक श्रम विभाग एवं कर्मकार निरीक्षण कार्यालय'
    ),
    whoItHelps: createLoc(
      'Building & construction workers, carpenters, plumbers resolving labour card approvals, maternity claims, marriage grants',
      'ಕಟ್ಟಡ ಕಾರ್ಮಿಕರು, ಬಡಗಿಗಳು, ಪ್ಲಂಬರ್‌ಗಳು ಕಾರ್ಡ್ ಅನುಮೋದನೆ, ಮದುವೆ ಸಹಾಯಧನ ಮತ್ತು ಹೆರಿಗೆ ಭತ್ಯೆ ಪಡೆಯಲು',
      'भवन निर्माण श्रमिक, बढ़ई, प्लंबर कार्ड अनुमोदन व सहायता राशि हेतु'
    ),
    whenToContact: createLoc(
      'Weekdays: 10:00 AM – 5:30 PM',
      'ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ: ಬೆಳಗ್ಗೆ ೧೦:೦೦ ರಿಂದ ಸಂಜೆ ೫:೩೦',
      'कार्य दिवस: प्रातः 10:00 से सायं 5:30'
    ),
    languages: createLoc('Kannada, Telugu, Tamil, Hindi', 'ಕನ್ನಡ, ತೆಲುಗು, ತಮಿಳು, ಹಿಂದಿ', 'कन्नड़, तेलुगु, तमिल, हिंदी'),
    locationCoverage: createLoc('All Taluk & District Labour Offices, Karnataka', 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ತಾಲ್ಲೂಕು ಮತ್ತು ಜಿಲ್ಲಾ ಕಾರ್ಮಿಕ ಕಚೇರಿಗಳು', 'कर्नाटक के सभी तालुका और जिला श्रम कार्यालय'),
    phone: '155214',
    verified: true,
  },
  {
    id: 'supp-worker-eshram-helpdesk',
    role: 'worker',
    states: 'ALL',
    officeName: createLoc(
      'e-Shram National Unorganised Workers Helpdesk',
      'ಇ-ಶ್ರಮ್ ರಾಷ್ಟ್ರೀಯ ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರ ಸಹಾಯವಾಣಿ',
      'ई-श्रम राष्ट्रीय असंगठित कामगार हेल्पडेस्क'
    ),
    whoItHelps: createLoc(
      'Gig workers, domestic helps, street vendors, daily wagers updating bank accounts or registering for UAN cards',
      'ಗಿಗ್ ಕಾರ್ಮಿಕರು, ಮನೆಗೆಲಸದವರು, ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಕೂಲಿ ಕಾರ್ಮಿಕರು',
      'गिग वर्कर, घरेलू सहायिकाएं, रेहड़ी विक्रेता और दिहाड़ी मजदूर'
    ),
    whenToContact: createLoc(
      'Monday to Saturday: 8:00 AM – 8:00 PM',
      'ಸೋಮವಾರದಿಂದ ಶನಿವಾರ: ಬೆಳಗ್ಗೆ ೮:೦೦ ರಿಂದ ರಾತ್ರಿ ೮:೦೦',
      'सोमवार से शनिवार: प्रातः 8:00 से रात्रि 8:00'
    ),
    languages: createLoc('11 Regional Languages', '೧೧ ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು', '11 क्षेत्रीय भाषाएं'),
    locationCoverage: createLoc('National Coverage', 'ರಾಷ್ಟ್ರವ್ಯಾಪಿ', 'राष्ट्रीय स्तर'),
    phone: '14434',
    verified: true,
  },

  // ================= SENIOR CITIZEN =================
  {
    id: 'supp-senior-elderline',
    role: 'senior',
    states: 'ALL',
    officeName: createLoc(
      'Elderline National Senior Citizen Helpline (14567)',
      'ಎಲ್ಡರ್‌ಲೈನ್ ರಾಷ್ಟ್ರೀಯ ಹಿರಿಯ ನಾಗರಿಕರ ಸಹಾಯವಾಣಿ (೧೪೫೬೭)',
      'एल्डरलाइन राष्ट्रीय वरिष्ठ नागरिक हेल्पलाइन (14567)'
    ),
    whoItHelps: createLoc(
      'Elders in need of pension guidance, emotional support, elder abuse rescue, legal aid and geriatric care counseling',
      'ಪಿಂಚಣಿ ಮಾರ್ಗದರ್ಶನ, ಕಾನೂನು ನೆರವು, ಆರೈಕೆ ಮತ್ತು ಭಾವನಾತ್ಮಕ ಬೆಂಬಲ ಅಗತ್ಯವಿರುವ ಹಿರಿಯ ನಾಗರಿಕರು',
      'पेंशन मार्गदर्शन, कानूनी सहायता, दुर्व्यवहार से बचाव और भावनात्मक सहारा चाहने वाले बुजुर्ग'
    ),
    whenToContact: createLoc(
      'Toll-Free 8:00 AM – 8:00 PM Every Day',
      'ಪ್ರತಿದಿನ ಬೆಳಗ್ಗೆ ೮:೦೦ ರಿಂದ ರಾತ್ರಿ ೮:೦೦ (ಉಚಿತ ಕರೆ)',
      'प्रतिदिन प्रातः 8:00 से रात्रि 8:00 (टोल-फ्री)'
    ),
    languages: createLoc('Hindi, English, Kannada, Tamil, Telugu, Marathi', 'ಕನ್ನಡ, ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್, ತಮಿಳು, ತೆಲುಗು, ಮರಾಠಿ', 'कन्नड़, हिंदी, अंग्रेजी, तमिल, तेलुगु'),
    locationCoverage: createLoc('All States & Union Territories', 'ಎಲ್ಲಾ ರಾಜ್ಯಗಳು ಮತ್ತು ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು', 'सभी राज्य एवं केंद्र शासित प्रदेश'),
    phone: '14567',
    verified: true,
  },
  {
    id: 'supp-senior-karnataka-social-security',
    role: 'senior',
    states: ['Karnataka'],
    officeName: createLoc(
      'Taluk Tahsildar Social Security & Pension Desk',
      'ತಾಲ್ಲೂಕು ತಹಶೀಲ್ದಾರ್ ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಪಿಂಚಣಿ ಶಾಖೆ',
      'तालुका तहसीलदार सामाजिक सुरक्षा एवं पेंशन शाखा'
    ),
    whoItHelps: createLoc(
      'Elderly citizens resolving Sandhya Suraksha sanction orders, bank change requests, or pension stoppage',
      'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಮಂಜೂರಾತಿ, ಬ್ಯಾಂಕ್ ಖಾತೆ ಬದಲಾವಣೆ ಅಥವಾ ಪಿಂಚಣಿ ಸ್ಥಗಿತ ಸರಿಪಡಿಸಲು ಬಯಸುವ ಹಿರಿಯರು',
      'संध्या सुरक्षा स्वीकृति, बैंक परिवर्तन या पेंशन बहाली चाहने वाले वरिष्ठ नागरिक'
    ),
    whenToContact: createLoc(
      'Working days: 10:30 AM – 5:00 PM',
      'ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ: ಬೆಳಗ್ಗೆ ೧೦:೩೦ ರಿಂದ ಸಂಜೆ ೫:೦೦',
      'कार्य दिवस: प्रातः 10:30 से सायं 5:00'
    ),
    languages: createLoc('Kannada, English', 'ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್', 'कन्नड़, अंग्रेजी'),
    locationCoverage: createLoc('Every Taluk Office / Mini Vidhana Soudha in Karnataka', 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ತಾಲ್ಲೂಕು ಕಚೇರಿಗಳು / ಮಿನಿ ವಿಧಾನ ಸೌಧ', 'कर्नाटक के सभी तालुका कार्यालय'),
    phone: '080-22353982',
    verified: true,
  },

  // ================= DISABILITY =================
  {
    id: 'supp-disability-ddwo-office',
    role: 'disability',
    states: ['Karnataka'],
    officeName: createLoc(
      'District Disability Welfare Office (DDWO) & Rehab Center',
      'ಜಿಲ್ಲಾ ವಿಕಲಾಂಗ ಚೇತನರ ಕಲ್ಯಾಣಾಧಿಕಾರಿ ಕಚೇರಿ (DDWO) ಮತ್ತು ಪುನರ್ವಸತಿ ಕೇಂದ್ರ',
      'जिला दिव्यांगजन कल्याण अधिकारी कार्यालय (DDWO)'
    ),
    whoItHelps: createLoc(
      'Persons with disabilities requiring UDID cards, motorized trikes, Mythri pensions, and scholarship sponsorships',
      'ಯುಡಿಐಡಿ ಕಾರ್ಡ್, ಮೋಟಾರೀಕೃತ ವಾಹನ, ಮೈತ್ರಿ ಪಿಂಚಣಿ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ ಬಯಸುವ ದಿವ್ಯಾಂಗರು',
      'यूडीआईडी कार्ड, मोटराइज्ड ट्राइसाइकिल, पेंशन व पुनर्वास सहायता चाहने वाले दिव्यांग'
    ),
    whenToContact: createLoc(
      'Weekdays: 10:00 AM – 5:30 PM',
      'ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ: ಬೆಳಗ್ಗೆ ೧೦:೦೦ ರಿಂದ ಸಂಜೆ ೫:೩೦',
      'कार्य दिवस: प्रातः 10:00 से सायं 5:30'
    ),
    languages: createLoc('Kannada, English, Indian Sign Language assistance', 'ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ಸಾಂಕೇತಿಕ ಭಾಷೆ ನೆರವು', 'कन्नड़, अंग्रेजी, सांकेतिक भाषा सहायता'),
    locationCoverage: createLoc('District Headquarters across Karnataka', 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಜಿಲ್ಲಾ ಕೇಂದ್ರಗಳು', 'कर्नाटक के सभी जिला मुख्यालय'),
    phone: '080-22864119',
    verified: true,
  },
  {
    id: 'supp-disability-udid-national-desk',
    role: 'disability',
    states: 'ALL',
    officeName: createLoc(
      'Swavlamban UDID National Helpdesk & Medical Board Cell',
      'ಸ್ವಾವಲಂಬನ್ ಯುಡಿಐಡಿ ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಮಂಡಳಿ ಕೋಶ',
      'स्वावलंबन यूडीआईडी राष्ट्रीय हेल्पडेस्क'
    ),
    whoItHelps: createLoc(
      'Divyangjan citizens tracking UDID card processing, hospital assessment slots, and card re-issue',
      'ಯುಡಿಐಡಿ ಕಾರ್ಡ್ ವಿತರಣೆ ಸ್ಥಿತಿ, ಆಸ್ಪತ್ರೆ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಮರುಪಡೆಯುವಿಕೆ ಪರಿಶೀಲಿಸಲು',
      'यूडीआईडी कार्ड स्थिति, अस्पताल जांच अपॉइंटमेंट व कार्ड पुनः जारी करने हेतु'
    ),
    whenToContact: createLoc(
      'Monday to Friday: 9:00 AM – 5:30 PM',
      'ಸೋಮವಾರದಿಂದ ಶುಕ್ರವಾರ: ಬೆಳಗ್ಗೆ ೯:೦೦ ರಿಂದ ಸಂಜೆ ೫:೩೦',
      'सोमवार से शुक्रवार: प्रातः 9:00 से सायं 5:30'
    ),
    languages: createLoc('Hindi, English, Regional', 'ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್, ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು', 'हिंदी, अंग्रेजी, क्षेत्रीय भाषाएं'),
    locationCoverage: createLoc('Pan-India Central Support', 'ಅಖಿಲ ಭಾರತ ಕೇಂದ್ರೀಯ ಬೆಂಬಲ', 'अखिल भारतीय स्तर'),
    phone: '011-24365019',
    verified: true,
  },
];
