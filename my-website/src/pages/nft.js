import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// SVG Components
const TattooMachineSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.nftSvg}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WirelessSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.nftSvg}>
    <path d="M12 5C15.287 5 18.287 6.289 20.607 8.607L12 17.214L3.393 8.607C5.713 6.289 8.713 5 12 5ZM12 2C7.397 2 3.125 3.791 0 7.032L12 19.032L24 7.032C20.875 3.791 16.603 2 12 2Z" fill="currentColor"/>
  </svg>
);

const DisplaySVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.nftSvg}>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BatterySVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.nftSvg}>
    <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 10H22V14H20" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 10L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 10L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GripSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.nftSvg}>
    <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 7L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 12L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 17L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MotorSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.nftSvg}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

function NFTShowcase() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e, index) => {
    if (activeCard !== index) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
    setPosition({ x: (x - centerX) / 20, y: (y - centerY) / 20 });
    
    setMousePosition({
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`
    });
  };

  const cards = [
    { 
      icon: TattooMachineSVG,
      title: 'Rampage Pro', 
      description: 'Next Generation Tattoo Machine',
      specs: ['4.5MM Stroke', 'OLED Display', 'Brushless Motor'],
      color: '#9333ea'
    },
    { 
      icon: DisplaySVG,
      title: 'Smart Display', 
      description: 'Crystal Clear OLED Interface',
      specs: ['Real-time Stats', 'Touch Control', 'Custom Presets'],
      color: '#4f46e5'
    },
    { 
      icon: WirelessSVG,
      title: 'Wireless System', 
      description: 'Freedom to Create',
      specs: ['8-Hour Battery', 'Quick Charge', 'Stable Connection'],
      color: '#6366f1'
    },
    { 
      icon: BatterySVG,
      title: 'Power System', 
      description: 'Long-lasting Performance',
      specs: ['1600mAh Battery', '2-Hour Charge', 'Battery Health Monitor'],
      color: '#8b5cf6'
    },
    { 
      icon: GripSVG,
      title: 'Ergonomic Grip', 
      description: 'Comfort in Every Detail',
      specs: ['39mm Diameter', 'Anti-slip', 'Heat Resistant'],
      color: '#a855f7'
    },
    { 
      icon: MotorSVG,
      title: 'Brushless Motor', 
      description: 'Powerful & Precise',
      specs: ['Low Vibration', 'Quiet Operation', 'Consistent Power'],
      color: '#d946ef'
    }
  ];

  return (
    <section className={styles.nftShowcase}>
      <div className={styles.nftGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.nftCard}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => {
              setActiveCard(null);
              setRotation({ x: 0, y: 0 });
              setPosition({ x: 0, y: 0 });
              setMousePosition({ x: '50%', y: '50%' });
            }}
            style={{
              '--mouse-x': mousePosition.x,
              '--mouse-y': mousePosition.y,
              '--card-color': card.color,
              transform: `
                perspective(1000px)
                rotateX(${activeCard === index ? rotation.x : 0}deg)
                rotateY(${activeCard === index ? rotation.y : 0}deg)
                translateX(${activeCard === index ? position.x : 0}px)
                translateY(${activeCard === index ? position.y : 0}px)
              `
            }}
          >
            <div className={styles.nftCardInner}>
              <div className={styles.nftImageContainer}>
                <card.icon />
                <div className={styles.nftGlow} />
              </div>
              <div className={styles.nftContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.nftSpecs}>
                  {card.specs.map((spec, i) => (
                    <span key={i} className={styles.nftSpec}>{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NFTPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Rampage NFT Collection"
      description="Explore our exclusive NFT collection featuring the next-generation Rampage tattoo machine.">
      <header className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Rampage NFT Collection
          </h1>
          <p className={styles.heroSubtitle}>
            Discover our exclusive digital collectibles featuring the revolutionary Rampage tattoo machine.
            Each piece represents the perfect fusion of art and technology.
          </p>
        </div>
      </header>
      <main>
        <NFTShowcase />
      </main>
    </Layout>
  );
} 