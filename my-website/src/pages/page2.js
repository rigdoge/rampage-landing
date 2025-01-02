import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Page2() {
  return (
    <Layout
      title="Page 2 - Simple Design"
      description="A simple and clean design for the Rampage tattoo machine">
      <header className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Simple and Elegant
          </h1>
          <p className={styles.heroSubtitle}>
            A clean and minimalist design showcasing the Rampage tattoo machine
          </p>
          <div className={styles.ctaButtons}>
            <a className={styles.primaryButton} href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </header>
      <main>
        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2>Coming Soon</h2>
          <p>This page is under development</p>
        </div>
      </main>
    </Layout>
  );
} 