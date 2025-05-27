import React from 'react';
import './App.css'; // Main application styles

// Import section components (to be implemented in subsequent batches)
import HeroSection from './components/HeroSection/HeroSection';
import StorySection from './components/StorySection/StorySection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import WhyHueneuSection from './components/WhyHueneuSection/WhyHueneuSection';
import LetWorkTogetherSection from './components/LetWorkTogetherSection/LetWorkTogetherSection';

/**
 * The main App component that structures the single-page website.
 * It renders all the major sections of the page in sequence.
 */
function App() {
  return (
    <div className="app-container">
      {/* Hero section: Introduces the brand and tagline */}
      <HeroSection />
      
      {/* The hueneu Story section: Explains the brand's meaning and philosophy */}
      <StorySection />
      
      {/* What We Do section: Lists the core services offered */}
      <ServicesSection />
      
      {/* Why hueneu? section: Presents the emotional brand pitch */}
      <WhyHueneuSection />
      
      {/* Let's Work Together section: Contact form and links */}
      <LetWorkTogetherSection />
    </div>
  );
}

export default App;
