import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { RepertoirePage } from './pages/RepertoirePage';
import { VideoPage } from './pages/VideoPage';
import { PhotoPage } from './pages/PhotoPage';
import { CasesPage } from './pages/CasesPage';
import { AgenciesPage } from './pages/AgenciesPage';
import { ContactsPage } from './pages/ContactsPage';
import { ConsentPage } from './pages/ConsentPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CookieBanner } from './components/CookieBanner';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Subtle Analog Film Grain / Noise Overlay */}
        <div className="bg-noise-overlay" aria-hidden="true" />

        <div className="flex flex-col min-h-screen bg-page-base font-mono selection:bg-[#D49D42]/30 selection:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/repertoire" element={<RepertoirePage />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/photo" element={<PhotoPage />} />
              <Route path="/cases" element={<CasesPage />} />
              <Route path="/agencies" element={<AgenciesPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/consent" element={<ConsentPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

