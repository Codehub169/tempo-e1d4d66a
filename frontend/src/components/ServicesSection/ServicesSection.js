import React from 'react';
import styles from './ServicesSection.module.css';

// Placeholder for actual SVG icons. These paths will be used once SVGs are added.
// import BrandingIcon from '../../assets/icons/icon-branding.svg';
// import PackagingIcon from '../../assets/icons/icon-packaging.svg';
// import SocialMediaIcon from '../../assets/icons/icon-social.svg';
// import StationeryIcon from '../../assets/icons/icon-stationery.svg';
// import CoffeeTableBooksIcon from '../../assets/icons/icon-books.svg';
// import CreativeProjectsIcon from '../../assets/icons/icon-creative.svg';

const servicesData = [
  {
    // icon: BrandingIcon,
    iconPlaceholder: "Br", // Placeholder text
    title: "Branding",
    microcopy: "Identities that resonate, stories that stick."
  },
  {
    // icon: PackagingIcon,
    iconPlaceholder: "Pa",
    title: "Packaging",
    microcopy: "Packaging, but make it poetic."
  },
  {
    // icon: SocialMediaIcon,
    iconPlaceholder: "So",
    title: "Social Media",
    microcopy: "Scrolling stop-ins that spark connection."
  },
  {
    // icon: StationeryIcon,
    iconPlaceholder: "St",
    title: "Stationery",
    microcopy: "Tactile tales on paper, beautifully told."
  },
  {
    // icon: CoffeeTableBooksIcon,
    iconPlaceholder: "Bo",
    title: "Coffee Table Books",
    microcopy: "Curated narratives, bound to be treasured."
  },
  {
    // icon: CreativeProjectsIcon,
    iconPlaceholder: "Cr",
    title: "Creative Projects",
    microcopy: "Your vision, our artistry, uniquely hueneu."
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>What We Do</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.iconContainer}>
              {/* Placeholder for SVG icon */}
              {service.icon ? (
                <img src={service.icon} alt={`${service.title} icon`} className={styles.icon} />
              ) : (
                <span className={styles.iconPlaceholder}>{service.iconPlaceholder}</span>
              )}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceMicrocopy}>{service.microcopy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
