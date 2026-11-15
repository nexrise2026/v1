import React, { useState } from 'react';
import {
  Laptop,
  Shield,
  GraduationCap,
  Tractor,
  HardHat,
  HeartHandshake,
  Accessibility,
  CheckCircle2,
  Lock,
  Mail,
  KeyRound,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LanguageSelector } from '../LanguageSelector';
import { INDIAN_STATES_AND_DISTRICTS, ALL_INDIAN_STATES } from '../../data/locations';
import { RoleKey } from '../../types';

export const OnboardingView: React.FC = () => {
  const {
    t,
    onboardingStep,
    setOnboardingStep,
    userProfile,
    updateUserProfile,
    setRole,
    completeOnboarding,
  } = useApp();

  // Step 1 Form state
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isOtherDevice, setIsOtherDevice] = useState(false);
  const [otp, setOtp] = useState('');
  const [step1Error, setStep1Error] = useState('');

  // Step 3 Local state
  const [formName, setFormName] = useState(userProfile.fullName || '');
  const [formState, setFormState] = useState(userProfile.state || '');
  const [formDistrict, setFormDistrict] = useState(userProfile.district || '');
  const [formCategory, setFormCategory] = useState(userProfile.category || '');
  const [formIncome, setFormIncome] = useState(userProfile.annualIncome || '');
  const [formRation, setFormRation] = useState(userProfile.rationCard || '');
  const [formGender, setFormGender] = useState(userProfile.gender || '');
  const [formProofNo, setFormProofNo] = useState(userProfile.ageOrProofNumber || '');
  const [step3Error, setStep3Error] = useState('');

  // Validation for Step 1
  const handleStep1Continue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep1Error('');

    const trimmed = identifier.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!trimmed) {
      setStep1Error('Please enter your email or 10-digit mobile number.');
      return;
    }

    const isEmail = emailRegex.test(trimmed);
    const isPhone = phoneRegex.test(trimmed.replace(/\D/g, '')) && trimmed.length === 10;

    if (!isEmail && !isPhone) {
      setStep1Error('Please enter a valid email address or 10-digit Indian phone number.');
      return;
    }

    if (!password || password.length < 4) {
      setStep1Error('Password must be at least 4 characters.');
      return;
    }

    if (isOtherDevice && (!otp || otp.length !== 6)) {
      setStep1Error('Please enter the 6-digit OTP received on your device.');
      return;
    }

    // Passwords or OTPs are strictly never stored!
    setOnboardingStep(2);
  };

  // Step 2 Selection
  const handleRoleSelect = (roleKey: RoleKey) => {
    setRole(roleKey);
    setOnboardingStep(3);
  };

  // Step 3 Submission
  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep3Error('');

    if (!formName.trim()) {
      setStep3Error('Please enter your legal Full Name.');
      return;
    }

    if (!formState) {
      setStep3Error('Please select your State.');
      return;
    }

    if (!formCategory) {
      setStep3Error('Please select your Category.');
      return;
    }

    if (!formGender) {
      setStep3Error('Please select your Gender.');
      return;
    }

    updateUserProfile({
      fullName: formName.trim(),
      state: formState,
      district: formDistrict,
      category: formCategory,
      annualIncome: formIncome,
      rationCard: formRation,
      gender: formGender,
      ageOrProofNumber: formProofNo.trim(),
    });

    completeOnboarding();
  };

  // Dynamic districts based on selected state
  const availableDistricts = formState && INDIAN_STATES_AND_DISTRICTS[formState]
    ? INDIAN_STATES_AND_DISTRICTS[formState]
    : [];

  const roleCardData = [
    {
      key: 'student' as RoleKey,
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
      title: t.roleStudent,
      desc: t.roleStudentDesc,
      tag: 'SSP / NSP / Bus Pass',
    },
    {
      key: 'farmer' as RoleKey,
      icon: <Tractor className="w-6 h-6 text-emerald-600" />,
      title: t.roleFarmer,
      desc: t.roleFarmerDesc,
      tag: 'PM-KISAN / PMFBY / FRUITS',
    },
    {
      key: 'worker' as RoleKey,
      icon: <HardHat className="w-6 h-6 text-amber-600" />,
      title: t.roleWorker,
      desc: t.roleWorkerDesc,
      tag: 'e-Shram / BOCW / PM-SYM',
    },
    {
      key: 'senior' as RoleKey,
      icon: <HeartHandshake className="w-6 h-6 text-cyan-600" />,
      title: t.roleSenior,
      desc: t.roleSeniorDesc,
      tag: 'Sandhya Suraksha / Jeevan Pramaan',
    },
    {
      key: 'disability' as RoleKey,
      icon: <Accessibility className="w-6 h-6 text-teal-600" />,
      title: t.roleDisability,
      desc: t.roleDisabilityDesc,
      tag: 'UDID / ADIP / Mythri',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050814] bg-gradient-to-b from-[#060d1c] via-[#091c34] to-[#050814] flex flex-col justify-between py-6 px-4 sm:px-6 relative selection:bg-cyan-600 selection:text-white">
      {/* Background glow effects aligned to logo blue/cyan/emerald aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[560px] h-[360px] bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-emerald-500/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Top Bar with Logo & Language Selector */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <img
            src="/assets/aistudio/logo_5419b498.jpeg"
            alt="NIRVAHA AI Logo"
            className="w-10 h-10 rounded-xl object-cover bg-[#050814] border border-cyan-400/25 shadow-lg shadow-cyan-950/60 flex-shrink-0"
          />
          <div>
            <span className="font-extrabold text-base tracking-tight text-white block">
              {t.appName}
            </span>
            <span className="text-[10px] text-cyan-200/80 block">
              {t.appSubtitle}
            </span>
          </div>
        </div>

        <LanguageSelector variant="dark" />
      </header>

      {/* Central Interactive Content Area */}
      <main className="max-w-xl w-full mx-auto my-6 relative z-10">
        {/* ================= STEP 1: LOGIN SCREEN ================= */}
        {onboardingStep === 1 && (
          <div className="bg-white border border-slate-200 shadow-2xl shadow-cyan-950/40 rounded-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Top pill badge */}
            <div className="text-center mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-semibold text-xs mb-3">
                <Shield className="w-3.5 h-3.5 text-sky-600" />
                <span>{t.loginBadge}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-2">
                {t.loginHeading}
              </h1>
              <p className="text-sm text-slate-600 font-normal text-center mb-6 leading-relaxed">
                {t.loginSubheading}
              </p>
            </div>

            {step1Error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                {step1Error}
              </div>
            )}

            <form onSubmit={handleStep1Continue} className="space-y-4">
              {/* Email or Phone Input */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                  {t.loginInputLabel}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={t.loginInputPlaceholder}
                    className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 font-medium text-sm rounded-xl pl-11 pr-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                  {t.passwordLabel}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 font-medium text-sm rounded-xl pl-11 pr-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                    required
                  />
                </div>
              </div>

              {/* Other device checkbox */}
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isOtherDevice}
                    onChange={(e) => setIsOtherDevice(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 accent-sky-600 cursor-pointer"
                  />
                  <span className="text-xs font-medium text-slate-700">{t.otherDeviceCheckbox}</span>
                </label>
              </div>

              {/* Conditional 6-digit OTP */}
              {isOtherDevice && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-300 animate-in fade-in duration-150">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    {t.otpLabel}
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder={t.otpPlaceholder}
                      className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 font-mono tracking-widest placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-400 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Device Status Bar */}
              <div className="bg-slate-100 border border-slate-200 rounded-lg p-2.5 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.detectedPc}</span>
                </div>
                <div className="bg-white border border-slate-300 text-slate-800 font-mono px-2 py-0.5 rounded text-[11px]">
                  {t.deviceId}
                </div>
              </div>

              {/* Primary Continue Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-[#0369a1] via-[#0891b2] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] active:scale-[0.99] text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-md shadow-cyan-900/20 transition-all w-full flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{t.btnContinue}</span>
              </button>
            </form>
          </div>
        )}

        {/* ================= STEP 2: ROLE SELECTION SCREEN ================= */}
        {onboardingStep === 2 && (
          <div className="bg-white border border-slate-200 shadow-2xl shadow-cyan-950/40 rounded-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Top pill badge */}
            <div className="text-center mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-semibold text-xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>{t.roleBadge}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-2">
                {t.roleHeading}
              </h1>
              <p className="text-sm text-slate-600 font-normal text-center mb-6 leading-relaxed">
                {t.roleSubheading}
              </p>
            </div>

            {/* Vertical Stack of 5 Role Cards */}
            <div className="space-y-3">
              {roleCardData.map((role) => (
                <button
                  key={role.key}
                  type="button"
                  onClick={() => handleRoleSelect(role.key)}
                  className="w-full text-left p-4 rounded-xl bg-white hover:bg-sky-50/50 active:scale-[0.99] border border-slate-200 hover:border-cyan-500 shadow-sm transition-all group cursor-pointer flex items-center gap-3.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                    {role.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {role.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full hidden sm:inline">
                        {role.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setOnboardingStep(1)}
              className="mt-6 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors block text-center w-full cursor-pointer"
            >
              ← Back to Sign-in
            </button>
          </div>
        )}

        {/* ================= STEP 3: PROFILE CONFIGURATION SCREEN ================= */}
        {onboardingStep === 3 && (
          <div className="bg-white border border-slate-200 shadow-2xl shadow-cyan-950/40 rounded-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Top pill badge */}
            <div className="text-center mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-semibold text-xs mb-3 uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>
                  {userProfile.role.toUpperCase()}: {t.profileBadgeSuffix}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-2">
                {t.profileHeading}
              </h1>
              <p className="text-sm text-slate-600 font-normal text-center mb-6 leading-relaxed">
                {t.profileSubheading}
              </p>
            </div>

            {step3Error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                {step3Error}
              </div>
            )}

            <form onSubmit={handleStep3Submit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                  {t.fullNameLabel}
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={t.fullNamePlaceholder}
                  className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                  required
                />
              </div>

              {/* State & District Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* State */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    {t.stateLabel}
                  </label>
                  <select
                    value={formState}
                    onChange={(e) => {
                      setFormState(e.target.value);
                      setFormDistrict('');
                    }}
                    className="bg-slate-50 border border-slate-300 text-slate-900 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                    required
                  >
                    <option value="" disabled className="bg-white text-slate-900">
                      {t.selectPlaceholder}
                    </option>
                    {ALL_INDIAN_STATES.map((state) => (
                      <option key={state} value={state} className="bg-white text-slate-900">
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    {t.districtLabel}
                  </label>
                  <select
                    value={formDistrict}
                    onChange={(e) => setFormDistrict(e.target.value)}
                    disabled={!formState}
                    className="bg-slate-50 border border-slate-300 text-slate-900 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full disabled:opacity-50"
                  >
                    <option value="" className="bg-white text-slate-900">
                      {formState ? t.selectPlaceholder : 'Select state first...'}
                    </option>
                    {availableDistricts.map((dist) => (
                      <option key={dist} value={dist} className="bg-white text-slate-900">
                        {dist}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category & Gender Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Category */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    {t.categoryLabel}
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="bg-slate-50 border border-slate-300 text-slate-900 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                    required
                  >
                    <option value="" disabled className="bg-white text-slate-900">
                      {t.selectPlaceholder}
                    </option>
                    <option value="General" className="bg-white text-slate-900">General</option>
                    <option value="OBC" className="bg-white text-slate-900">OBC (Other Backward Classes)</option>
                    <option value="SC" className="bg-white text-slate-900">SC (Scheduled Caste)</option>
                    <option value="ST" className="bg-white text-slate-900">ST (Scheduled Tribe)</option>
                    <option value="EWS" className="bg-white text-slate-900">EWS (Economically Weaker Section)</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    {t.genderLabel}
                  </label>
                  <select
                    value={formGender}
                    onChange={(e) => setFormGender(e.target.value)}
                    className="bg-slate-50 border border-slate-300 text-slate-900 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                    required
                  >
                    <option value="" disabled className="bg-white text-slate-900">
                      {t.selectPlaceholder}
                    </option>
                    <option value="Male" className="bg-white text-slate-900">Male</option>
                    <option value="Female" className="bg-white text-slate-900">Female</option>
                    <option value="Transgender" className="bg-white text-slate-900">Transgender / Other</option>
                    <option value="Prefer not to say" className="bg-white text-slate-900">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Annual Income & Ration Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Annual Income */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    {t.annualIncomeLabel}
                  </label>
                  <select
                    value={formIncome}
                    onChange={(e) => setFormIncome(e.target.value)}
                    className="bg-slate-50 border border-slate-300 text-slate-900 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                  >
                    <option value="" className="bg-white text-slate-900">{t.selectPlaceholder}</option>
                    <option value="Below ₹1,00,000" className="bg-white text-slate-900">Below ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,50,000" className="bg-white text-slate-900">₹1,00,000 - ₹2,50,000</option>
                    <option value="₹2,50,000 - ₹5,00,000" className="bg-white text-slate-900">₹2,50,000 - ₹5,00,000</option>
                    <option value="Above ₹5,00,000" className="bg-white text-slate-900">Above ₹5,00,000</option>
                  </select>
                </div>

                {/* Ration Card */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    {t.rationCardLabel}
                  </label>
                  <select
                    value={formRation}
                    onChange={(e) => setFormRation(e.target.value)}
                    className="bg-slate-50 border border-slate-300 text-slate-900 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                  >
                    <option value="" className="bg-white text-slate-900">{t.selectPlaceholder}</option>
                    <option value="BPL / Yellow" className="bg-white text-slate-900">BPL (Below Poverty Line / Yellow)</option>
                    <option value="APL / White" className="bg-white text-slate-900">APL (Above Poverty Line / White)</option>
                    <option value="AAY / Pink" className="bg-white text-slate-900">Antyodaya Anna Yojana (AAY / Pink)</option>
                    <option value="None" className="bg-white text-slate-900">None / Not Issued</option>
                  </select>
                </div>
              </div>

              {/* Age / Role Proof Number (Optional) */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                  {t.ageProofLabel}
                </label>
                <input
                  type="text"
                  value={formProofNo}
                  onChange={(e) => setFormProofNo(e.target.value)}
                  placeholder={t.ageProofPlaceholder}
                  className="bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 font-medium text-sm rounded-xl px-4 py-3 focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition-all outline-none w-full"
                />
              </div>

              {/* Security note */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-start gap-2">
                <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{t.securityNote}</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOnboardingStep(2)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-[#0369a1] via-[#0891b2] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] active:scale-[0.99] text-white font-semibold text-sm rounded-xl shadow-md shadow-cyan-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.btnCompleteProfile}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto text-center text-xs text-cyan-200/75 relative z-10">
        {t.footerText}
      </footer>
    </div>
  );
};
