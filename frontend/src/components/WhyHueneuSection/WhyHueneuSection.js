import React from 'react';
import styles from './WhyHueneuSection.module.css';

const WhyHueneuSection = () => {
  return (
    <section className={styles.whyHueneuSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Why hueneu?</h2>
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>"We don't just design—<span className={styles.highlight}>we decode stories</span>."</p>
        </blockquote>
        <p className={styles.paragraph}>
          In a world saturated with noise, hueneu offers a quiet space for your brand's narrative to unfold. We believe in the power of calm, the allure of mystery, and the strength of balance. Our approach is deeply personal, blending poetic sensibilities with intentional design to create experiences that aren't just seen, but felt.
        </p>
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>"Designs that speak quietly but <span className={styles.highlight}>stay with you</span>."</p>
        </blockquote>
        <p className={styles.paragraph}>
          Choosing hueneu means choosing a partner dedicated to understanding the soul of your story and translating it into a visual language that is both evocative and enduring. We craft with care, ensuring every element serves a purpose, every detail whispers your truth.
        </p>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
