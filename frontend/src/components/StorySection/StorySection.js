import React, { useEffect, useRef, useState } from 'react';
import styles from './StorySection.module.css';
import WhoKnewPopOut from '../../assets/images/who-knew-popout.png'; // Using the .png as requested, though it's an SVG content; path corrected

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const popOutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the entry is intersecting and the component is not already visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the element is visible for earlier animation
      }
    );

    const currentPopOutRef = popOutRef.current;
    if (currentPopOutRef) {
      observer.observe(currentPopOutRef);
    }

    return () => {
      if (currentPopOutRef) {
        observer.unobserve(currentPopOutRef); // Cleanup: unobserve the element when component unmounts
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount

  return (
    <section id="story" className={styles.storySection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>The hueneu Story</h2>
        <p className={styles.storyText}>
          At hueneu, our name is our essence. <span className={styles.highlightHue}>Hue</span> signifies the vibrant bursts of creativity, the unexpected splashes of color and imagination we bring to every project. It's the spark, the idea, the visual poetry.
        </p>
        <p className={styles.storyText}>
          <span className={styles.highlightNeu}>Neu</span> represents the grounding force of neutrality, the calm, intentional foundation upon which bold ideas can truly shine. It's the balance, the clarity, the quiet confidence that underpins evocative design.
        </p>
        <p className={styles.storyText}>
          Together, they create a harmonious dialogue between the expressive and the understated, crafting narratives that are both quietly compelling and unforgettably vivid.
        </p>
        <div ref={popOutRef} className={`${styles.whoKnewContainer} ${isVisible ? styles.visible : ''}`}>
          <img 
            src={WhoKnewPopOut} 
            alt="Who Knew? A playful pop-out visual related to the hueneu brand story." 
            className={styles.whoKnewImage} 
          />
          <p className={styles.whoKnewText}>
            It's this blend of energy and composure that often leads to delightful surprises... moments that make you go, "Who knew?" We believe the most powerful designs often whisper their stories, leaving a lasting impression that unfolds with grace and a touch of playful mystery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
