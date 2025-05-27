import React from 'react';
import styles from './ScrollIndicator.module.css';

/**
 * ScrollIndicator component
 * A visual cue that suggests to the user to scroll down for more content.
 * It is clickable and will scroll to the next section after the Hero section.
 */
const ScrollIndicator = () => {
  const handleScroll = () => {
    // The HeroSection has id="hero"
    const heroSection = document.getElementById('hero');
    if (heroSection && heroSection.nextElementSibling) {
      // Scroll to the next sibling element of the hero section
      heroSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll down by one viewport height if next element isn't found
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default spacebar scroll
      handleScroll();
    }
  };

  return (
    <div
      className={styles.scrollIndicator}
      onClick={handleScroll}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0} // Makes the div focusable and interactive
      aria-label="Scroll down to see more content"
    >
      <div className={styles.arrow}></div>
      {/* You can add more .arrow divs here for a chevron effect, 
          and adjust CSS animation delays accordingly if desired. */}
    </div>
  );
};

export default ScrollIndicator;
