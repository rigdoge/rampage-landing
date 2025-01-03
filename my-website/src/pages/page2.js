import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './index.module.css';

// SVG Components for the slides
const Slide1SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.slideSvg}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Slide2SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.slideSvg}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Slide3SVG = () => (
  <svg viewBox="0 0 24 24" fill="none" className={styles.slideSvg}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 10h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

function Carousel3D() {
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [translateZ, setTranslateZ] = useState(300); // Default value

  useEffect(() => {
    const updateTranslateZ = () => {
      const vw = Math.min(window.innerWidth * 0.8, 500);
      setTranslateZ(Math.max(vw * 0.9, 300));
    };

    updateTranslateZ();
    window.addEventListener('resize', updateTranslateZ);
    return () => window.removeEventListener('resize', updateTranslateZ);
  }, []);

  const slides = [
    {
      icon: Slide1SVG,
      title: "Next Gen Design",
      description: "Revolutionary tattoo machine with cutting-edge technology",
      color: "#9333ea"
    },
    {
      icon: Slide2SVG,
      title: "Perfect Balance",
      description: "Ergonomic design meets powerful performance",
      color: "#4f46e5"
    },
    {
      icon: Slide3SVG,
      title: "Smart Control",
      description: "Intuitive interface for precise adjustments",
      color: "#6366f1"
    }
  ];

  useEffect(() => {
    let interval;
    if (autoRotate && !isDragging) {
      interval = setInterval(() => {
        setRotation(prev => (prev + 0.2) % 360); // 减慢旋转速度
      }, 50);
    }
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setStartX(e.pageX);
    setCurrentRotation(rotation);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.pageX - startX;
    const newRotation = currentRotation + deltaX * 0.2; // 降低灵敏度
    setRotation(newRotation);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoRotate(true);
  };

  // 添加触摸事件支持
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setStartX(e.touches[0].pageX);
    setCurrentRotation(rotation);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].pageX - startX;
    const newRotation = currentRotation + deltaX * 0.2;
    setRotation(newRotation);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setAutoRotate(true);
  };

  return (
    <div className={styles.carousel3DContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.carousel3D}
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{
              '--item-color': slide.color,
              transform: `rotateY(${index * 120}deg) translateZ(${translateZ}px)`
            }}
          >
            <div className={styles.carouselItemInner}>
              <div className={styles.carouselIconContainer}>
                <slide.icon />
                <div className={styles.itemGlow} />
              </div>
              <div className={styles.itemContent}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.carouselControls}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={styles.carouselDot}
            onClick={() => setRotation(index * 120)}
            style={{
              '--dot-color': slides[index].color,
              opacity: Math.abs(((rotation % 360) - index * 120) % 360) < 60 ? 1 : 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
}

// 添加时间线数据
const timelineData = [
  {
    date: '2023 Q4',
    title: 'Project Launch',
    description: 'Initial release of Rampage Tattoo Machine with revolutionary features',
    color: '#9333ea'
  },
  {
    date: '2024 Q1',
    title: 'Wireless Update',
    description: 'Introduction of wireless capabilities and smart controls',
    color: '#4f46e5'
  },
  {
    date: '2024 Q2',
    title: 'App Integration',
    description: 'Launch of companion app with advanced customization options',
    color: '#6366f1'
  },
  {
    date: '2024 Q3',
    title: 'Global Expansion',
    description: 'Expanding to international markets with localized support',
    color: '#8b5cf6'
  }
];

function ModernTimeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const elements = document.querySelectorAll('[data-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.modernTimelineSection}>
      <h2 className={styles.modernTimelineTitle}>
        Development Roadmap
        <span className={styles.titleGlow} />
      </h2>
      <div className={styles.modernTimeline}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineEntry} ${
              visibleItems.has(String(index)) ? styles.visible : ''
            } ${index % 2 === 0 ? styles.left : styles.right}`}
            data-id={index}
          >
            <div className={styles.timelineEntryContent}>
              <div className={styles.dateContainer}>
                <span className={styles.date} style={{ background: item.color }}>
                  {item.date}
                </span>
              </div>
              <div 
                className={styles.card}
                style={{
                  '--card-color': item.color,
                }}
              >
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className={styles.cardGlow} />
              </div>
            </div>
          </div>
        ))}
        <div className={styles.timelineCenterLine}>
          {timelineData.map((_, index) => (
            <div 
              key={index}
              className={`${styles.timelineDot} ${
                visibleItems.has(String(index)) ? styles.active : ''
              }`}
              style={{ 
                top: `${(100 / (timelineData.length - 1)) * index}%`,
                '--dot-color': timelineData[index].color
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page2() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <BrowserOnly>
          {() => (
            <>
              <Carousel3D />
              <ModernTimeline />
            </>
          )}
        </BrowserOnly>
      </main>
    </Layout>
  );
} 