import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickSearchSection from './components/QuickSearchSection';
import FeaturedJobsSection from './components/FeaturedJobsSection';
import RemoteJobsSection from './components/RemoteJobsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <QuickSearchSection />
      <FeaturedJobsSection />
      <RemoteJobsSection />
      <Footer />
    </div>
  );
};

export default App;