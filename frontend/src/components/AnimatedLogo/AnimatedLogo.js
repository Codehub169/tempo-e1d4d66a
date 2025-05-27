import React from 'react';
import styles from './AnimatedLogo.module.css';
import { ReactComponent as HueneuLogo } from '../../assets/images/hueneu-logo.svg'; // Assuming hueneu-logo.svg is in assets

/**
 * AnimatedLogo component
 * Renders the hueneu logo with a reveal animation.
 */
const AnimatedLogo = () => {
  return (
    <div className={styles.animatedLogoContainer}>
      <HueneuLogo className={styles.logoSvg} title="hueneu Logo" />
    </div>
  );
};

export default AnimatedLogo;
