import React, { useState, useEffect } from 'react';
import { PageRoute, PackagePlan } from './types';

// Global Shell Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { BrandbookModal } from './components/BrandbookModal';
import { RiderModal } from './components/RiderModal';

// Dedicated Page Views
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { PackagesSection } from './components/PackagesSection';
import { RepertoireSection } from './components/RepertoireSection';
import { MediaPage } from './components/MediaPage';
import { VideoGallerySection } from './components/VideoGallerySection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { CasesSection } from './components/CasesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { AgencySection } from './components/AgencySection';
import { ContactSection } from './components/ContactSection';
import { LookbookSection } from './components/LookbookSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TeamSection } from './components/TeamSection';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isBrandbookOpen, setIsBrandbookOpen] = useState(false);
  const [isRiderOpen, setIsRiderOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackagePlan | null>(null);

  // Sync scroll on route change
  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setCurrentRoute('contacts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackage = (pkg: PackagePlan) => {
    setSelectedPackage(pkg);
    setCurrentRoute('contacts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the active multi-page view
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleRouteChange}
            onOpenBooking={handleOpenBooking}
            onSelectPackage={handleSelectPackage}
          />
        );

      case 'about':
        return (
          <AboutPage
            onNavigate={handleRouteChange}
            onOpenBooking={handleOpenBooking}
          />
        );

      case 'packages':
        return (
          <div className="pt-16">
            <PackagesSection
              onSelectPackage={handleSelectPackage}
              onOpenBooking={handleOpenBooking}
            />
          </div>
        );

      case 'repertoire':
        return (
          <div className="pt-16">
            <RepertoireSection />
          </div>
        );

      case 'media':
        return <MediaPage />;

      case 'video':
        return (
          <div className="pt-16">
            <VideoGallerySection />
          </div>
        );

      case 'photo':
        return (
          <div className="pt-16">
            <PhotoGallerySection />
          </div>
        );

      case 'cases':
        return (
          <div className="pt-16 space-y-0">
            <CasesSection />
            <ReviewsSection onNavigate={handleRouteChange} />
            <WorkflowSection />
          </div>
        );

      case 'agency':
      case 'agencies':
        return (
          <div className="pt-16">
            <AgencySection
              onOpenBooking={handleOpenBooking}
              onOpenRider={() => setIsRiderOpen(true)}
            />
          </div>
        );

      case 'contacts':
        return (
          <div className="pt-16">
            <ContactSection initialPackage={selectedPackage} />
          </div>
        );

      case 'looks':
        return (
          <div className="pt-16">
            <LookbookSection />
          </div>
        );

      case 'philosophy':
        return (
          <div className="pt-16">
            <PhilosophySection />
          </div>
        );

      case 'team':
        return (
          <div className="pt-16">
            <TeamSection />
          </div>
        );

      default:
        return (
          <HomePage
            onNavigate={handleRouteChange}
            onOpenBooking={handleOpenBooking}
            onSelectPackage={handleSelectPackage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1009] text-[#F1D8C1] font-sans relative selection:bg-[#9B2F19] selection:text-white pb-16">
      
      {/* 1. Global Film Grain Texture (Overlaying the whole website) */}
      <div className="site-film-grain" aria-hidden="true" />

      {/* 2. Global Navbar Header */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenBooking={handleOpenBooking}
        onOpenBrandbook={() => setIsBrandbookOpen(true)}
        onOpenRider={() => setIsRiderOpen(true)}
      />

      {/* 3. Multi-Page Main Content View */}
      <main id="main-content-view" className="relative min-h-[75vh]">
        {renderCurrentPage()}
      </main>

      {/* 4. Global Footer */}
      <Footer
        onNavigate={handleRouteChange}
        onOpenBrandbook={() => setIsBrandbookOpen(true)}
        onOpenRider={() => setIsRiderOpen(true)}
      />

      {/* 5. Floating Interactive Live Audio Player */}
      <AudioPlayerBar />

      {/* 6. Brandbook Interactive Modal */}
      <BrandbookModal
        isOpen={isBrandbookOpen}
        onClose={() => setIsBrandbookOpen(false)}
      />

      {/* 7. Technical & Hospitality Rider Modal */}
      <RiderModal
        isOpen={isRiderOpen}
        onClose={() => setIsRiderOpen(false)}
      />

    </div>
  );
}
