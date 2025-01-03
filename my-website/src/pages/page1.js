import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Starfield, Timeline, Carousel3D, FeatureSection, TestimonialSection } from '../components';

export default function Page1() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Rampage - Professional Wireless Tattoo Machine"
      description="Next-generation wireless tattoo machine featuring smart technology, ergonomic design, and professional-grade performance.">
      <header className={styles.heroBanner}>
        <Starfield />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Revolutionize Your Tattoo Art with Advanced Technology
          </h1>
          <p className={styles.heroSubtitle}>
            Experience the next generation of tattoo machines with the Rampage - featuring precision control, 
            ergonomic design, and smart technology for professional artists.
          </p>
          <div className={styles.ctaButtons}>
            <a className={styles.primaryButton} href="#demo">
              Request Demo
            </a>
            <a className={styles.secondaryButton} href="#features">
              View Features
            </a>
          </div>
        </div>
      </header>
      <main>
        <FeatureSection />
        <Carousel3D />
        <Timeline />
        <TestimonialSection />
      </main>
    </Layout>
  );
} 