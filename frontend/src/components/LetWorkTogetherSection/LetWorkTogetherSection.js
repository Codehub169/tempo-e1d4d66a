import React, { useState } from 'react';
import styles from './LetWorkTogetherSection.module.css';
import WhoKnewPopoutImage from '../../assets/images/who-knew-popout.png';

/**
 * LetWorkTogetherSection component
 * Renders the contact form and other contact information.
 */
const LetWorkTogetherSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setFormMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage('Please fill in all fields.');
      setSubmissionStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormMessage('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmissionStatus('error');
        setFormMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      setFormMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.letWorkTogetherSection}>
      <h2 className={styles.sectionTitle}>Let's Work Together</h2>
      
      <div className={styles.contactWrapper}>
        <div className={styles.contactFormContainer}>
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your Email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Story (or project idea!)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                aria-label="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={styles.submitButton} 
              disabled={submissionStatus === 'submitting'}
            >
              {submissionStatus === 'submitting' ? 'Sending...' : "Let's Design Your Story"}
            </button>
            {formMessage && (
              <p 
                className={`${
                  styles.formMessage
                } ${
                  submissionStatus === 'success' ? styles.successMessage : styles.errorMessage
                }`}
                role="alert"
              >
                {formMessage}
              </p>
            )}
          </form>
        </div>

        <div className={styles.contactInfo}>
          <p>Ready to bring your vision to life? Or just curious? Drop a line. We love a good story.</p>
          <div className={styles.whoKnewVisualContainer}>
            <img src={WhoKnewPopoutImage} alt="Who Knew? visual concept" className={styles.whoKnewImage} />
          </div>
          <a href="https://www.instagram.com/hueneu_/" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
            Find us on Instagram: @hueneu_
          </a>
          {/* Optional: Link to services deck */}
          <a href="/placeholder-services-deck.pdf" target="_blank" rel="noopener noreferrer" className={styles.servicesDeckLink}>
            Peek at Our Services Deck (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetWorkTogetherSection;
