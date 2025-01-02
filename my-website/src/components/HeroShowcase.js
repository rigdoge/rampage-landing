import React from 'react';
import R2Image from './R2Image';
import { R2_CONFIG } from '../config/r2Config';
import styles from '../pages/index.module.css';

export default function HeroShowcase() {
  return (
    <div className={styles.heroShowcase}>
      <R2Image
        path={R2_CONFIG.images.hero}
        alt="Rampage Hero Shot"
        width={800}
        height={600}
        className={styles.heroImage}
      />
    </div>
  );
} 