import React, { Suspense, lazy } from 'react';
import { useApp, AppProvider } from './context/AppContext';
import { OnboardingView } from './components/onboarding/OnboardingView';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProfileDrawer } from './components/ProfileDrawer';
import { Loader2 } from 'lucide-react';

// Lazy-load tab components for performance (Requirement 17)
const HomeTab = lazy(() =>
  import('./components/tabs/HomeTab').then((m) => ({ default: m.HomeTab }))
);
const AIGuideTab = lazy(() =>
  import('./components/tabs/AIGuideTab').then((m) => ({ default: m.AIGuideTab }))
);
const NextStepsTab = lazy(() =>
  import('./components/tabs/NextStepsTab').then((m) => ({ default: m.NextStepsTab }))
);
const AssistFillTab = lazy(() =>
  import('./components/tabs/AssistFillTab').then((m) => ({ default: m.AssistFillTab }))
);
const DocumentVaultTab = lazy(() =>
  import('./components/tabs/DocumentVaultTab').then((m) => ({ default: m.DocumentVaultTab }))
);
const ConsentCentreTab = lazy(() =>
  import('./components/tabs/ConsentCentreTab').then((m) => ({ default: m.ConsentCentreTab }))
);
const ServiceDirectoryTab = lazy(() =>
  import('./components/tabs/ServiceDirectoryTab').then((m) => ({ default: m.ServiceDirectoryTab }))
);
const HumanSupportTab = lazy(() =>
  import('./components/tabs/HumanSupportTab').then((m) => ({ default: m.HumanSupportTab }))
);

const AppContent: React.FC = () => {
  const { onboardingComplete, activeTab } = useApp();

  // If citizen has not completed 3-step onboarding, show onboarding flow
  if (!onboardingComplete) {
    return <OnboardingView />;
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'ai-guide':
        return <AIGuideTab />;
      case 'next-steps':
        return <NextStepsTab />;
      case 'assist-fill':
        return <AssistFillTab />;
      case 'vault':
        return <DocumentVaultTab />;
      case 'consent':
        return <ConsentCentreTab />;
      case 'services':
        return <ServiceDirectoryTab />;
      case 'human-support':
        return <HumanSupportTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f9fc] via-[#eef6fb] to-[#e9f5f3] text-[#091526] flex flex-col font-sans selection:bg-sky-600 selection:text-white">
      {/* Main Navbar */}
      <Navbar />

      {/* Main Application Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-semibold">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Loading NIRVAHA AI...</span>
              </div>
            </div>
          }
        >
          {renderActiveTab()}
        </Suspense>
      </main>

      {/* Citizen Profile Slide-Over Drawer */}
      <ProfileDrawer />

      {/* Statutory Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
