import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { SEO } from '@/utils/seo';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <SEO />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
