import React from 'react';
import styles from './HeroSection.module.css';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <AnimatedLogo />
        </div>
        <h1 className={styles.tagline}>Where stories find their aesthetic.</h1>
        <p className={styles.subtext}>Designs that whisper loud stories.</p>
      </div>
      <div className={styles.scrollIndicatorContainer}>
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
