import React, { useEffect, useRef } from 'react';
import styles from '../pages/index.module.css';

// Starfield Component
export const Starfield = () => (
  <div className={styles.starfield}>
    {[...Array(50)].map((_, i) => (
      <div key={i} className={styles.star} style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }} />
    ))}
  </div>
);

// Timeline Component
export const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(`.${styles.timelineItem}`);
    timelineItems?.forEach((item) => observer.observe(item));

    return () => {
      timelineItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className={styles.timeline} ref={timelineRef}>
      <div className={styles.timelineTrack} />
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <div className={styles.timelineDate}>2023 Q4</div>
          <h3 className={styles.timelineTitle}>Initial Concept</h3>
          <p className={styles.timelineDescription}>
            Development of the revolutionary wireless tattoo machine concept
          </p>
        </div>
      </div>
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <div className={styles.timelineDate}>2024 Q1</div>
          <h3 className={styles.timelineTitle}>Prototype Testing</h3>
          <p className={styles.timelineDescription}>
            Rigorous testing with professional artists
          </p>
        </div>
      </div>
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <div className={styles.timelineDate}>2024 Q2</div>
          <h3 className={styles.timelineTitle}>Global Launch</h3>
          <p className={styles.timelineDescription}>
            Official launch of Rampage worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

// Carousel3D Component
export const Carousel3D = () => (
  <section className={styles.carousel3D}>
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItem}>
        <img src="/img/product-1.jpg" alt="Product View 1" />
      </div>
      <div className={styles.carouselItem}>
        <img src="/img/product-2.jpg" alt="Product View 2" />
      </div>
      <div className={styles.carouselItem}>
        <img src="/img/product-3.jpg" alt="Product View 3" />
      </div>
    </div>
    <div className={styles.carouselControls}>
      <div className={`${styles.carouselControl} ${styles.active}`} />
      <div className={styles.carouselControl} />
      <div className={styles.carouselControl} />
    </div>
  </section>
);

// FeatureSection Component
export const FeatureSection = () => (
  <section className={styles.features}>
    <div className={styles.featureGrid}>
      <div className={styles.featureItem} style={{"--animation-order": 1}}>
        <div className={styles.featureIcon}>⚡</div>
        <h3 className={styles.featureTitle}>4.5MM Stroke</h3>
        <p className={styles.featureDescription}>Perfect for all tattoo styles</p>
      </div>
      <div className={styles.featureItem} style={{"--animation-order": 2}}>
        <div className={styles.featureIcon}>📱</div>
        <h3 className={styles.featureTitle}>OLED Display</h3>
        <p className={styles.featureDescription}>Real-time performance monitoring</p>
      </div>
      <div className={styles.featureItem} style={{"--animation-order": 3}}>
        <div className={styles.featureIcon}>🎯</div>
        <h3 className={styles.featureTitle}>Large Grip-39 MM</h3>
        <p className={styles.featureDescription}>Ergonomic comfort for long sessions</p>
      </div>
      <div className={styles.featureItem} style={{"--animation-order": 4}}>
        <div className={styles.featureIcon}>⚙️</div>
        <h3 className={styles.featureTitle}>Brushless Motor</h3>
        <p className={styles.featureDescription}>Powerful and reliable performance</p>
      </div>
    </div>
  </section>
);

// TestimonialSection Component
export const TestimonialSection = () => (
  <section className={styles.testimonials}>
    <div className={styles.testimonialGrid}>
      <div className={styles.testimonialItem} style={{"--animation-order": 1}}>
        <p className={styles.testimonialQuote}>
          "The best machine I've ever used. Perfect balance and control."
        </p>
        <div className={styles.testimonialAuthor}>
          <div className={styles.authorAvatar} />
          <div className={styles.authorInfo}>
            <div className={styles.authorName}>John Doe</div>
            <div className={styles.authorTitle}>Professional Artist</div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialItem} style={{"--animation-order": 2}}>
        <p className={styles.testimonialQuote}>
          "Revolutionary technology that changed my workflow completely."
        </p>
        <div className={styles.testimonialAuthor}>
          <div className={styles.authorAvatar} />
          <div className={styles.authorInfo}>
            <div className={styles.authorName}>Jane Smith</div>
            <div className={styles.authorTitle}>Studio Owner</div>
          </div>
        </div>
      </div>
    </div>
  </section>
); 