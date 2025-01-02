import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import R2Image from '../components/R2Image';
import { R2_CONFIG } from '../config/r2Config';
import HeroShowcase from '../components/HeroShowcase';
import React, { useEffect, useState, useRef } from 'react';

function ImageGrid() {
  const images = [
    { title: 'OLED Display', path: R2_CONFIG.images.details.oled },
    { title: 'Ergonomic Grip', path: R2_CONFIG.images.details.grip },
    { title: 'Brushless Motor', path: R2_CONFIG.images.details.motor },
    { title: 'Battery System', path: R2_CONFIG.images.details.battery },
    { title: 'Needle System', path: R2_CONFIG.images.details.needle },
    { title: 'Complete Kit', path: R2_CONFIG.images.details.kit },
  ];

  return (
    <div className={styles.imageGrid}>
      {images.map((image, idx) => (
        <div key={idx} className={styles.imageGridItem}>
          <R2Image
            path={image.path}
            alt={image.title}
            width={400}
            height={400}
          />
        </div>
      ))}
    </div>
  );
}

function StaggeredSection() {
  const content = [
    {
      title: 'Professional Grade Performance',
      description: 'Experience unmatched precision with our advanced brushless motor technology, delivering consistent power output and reduced vibration for superior results.',
      imagePath: R2_CONFIG.images.features.motor
    },
    {
      title: 'Ergonomic Design',
      description: 'The 39mm grip diameter and perfectly balanced weight distribution ensure comfortable operation during long sessions, reducing artist fatigue.',
      imagePath: R2_CONFIG.images.features.design
    },
    {
      title: 'Smart Technology',
      description: 'Monitor all vital statistics through the crystal-clear OLED display, featuring intuitive controls for voltage adjustment and battery management.',
      imagePath: R2_CONFIG.images.features.display
    }
  ];

  return (
    <section className={styles.staggeredSection}>
      {content.map((item, idx) => (
        <div key={idx} className={styles.staggeredItem}>
          <div className={styles.staggeredImage}>
            <R2Image
              path={item.imagePath}
              alt={item.title}
              width={600}
              height={450}
            />
          </div>
          <div className={styles.staggeredContent}>
            <h2 className={styles.staggeredTitle}>{item.title}</h2>
            <p className={styles.staggeredDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function RotateShowcase() {
  return (
    <div className={styles.rotateShowcase}>
      <R2Image
        path={R2_CONFIG.images.kit}
        alt="Rampage 360° View"
        width={600}
        height={600}
      />
    </div>
  );
}

function SlideShow() {
  const slides = [
    {
      title: 'Precision Control',
      description: 'Fine-tuned voltage control for perfect depth',
      imagePath: R2_CONFIG.images.features.control,
      backContent: 'Advanced digital control system with real-time feedback'
    },
    {
      title: 'Ergonomic Design',
      description: '39mm grip for optimal comfort',
      imagePath: R2_CONFIG.images.features.design,
      backContent: 'Perfectly balanced weight distribution reduces hand fatigue'
    },
    {
      title: 'OLED Display',
      description: 'Crystal clear information display',
      imagePath: R2_CONFIG.images.features.display,
      backContent: 'High contrast OLED screen visible in any lighting condition'
    },
    {
      title: 'Brushless Motor',
      description: 'Quiet and efficient operation',
      imagePath: R2_CONFIG.images.features.motor,
      backContent: 'Next-generation brushless motor technology for consistent power'
    },
    {
      title: 'Battery Life',
      description: '5-7 hours continuous use',
      imagePath: R2_CONFIG.images.features.battery,
      backContent: '1600mAh high-capacity battery with quick charging'
    },
    {
      title: 'Premium Materials',
      description: 'Aircraft grade aluminum body',
      imagePath: R2_CONFIG.images.features.material,
      backContent: 'Durable construction meets professional standards'
    }
  ];

  // 复制slides以实现无缝循环
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideTrack}>
        {duplicatedSlides.map((slide, idx) => (
          <div key={idx} className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.slideFront}>
                <R2Image
                  path={slide.imagePath}
                  alt={slide.title}
                  width={200}
                  height={200}
                />
                <h3 className={styles.slideTitle}>{slide.title}</h3>
                <p className={styles.slideDescription}>{slide.description}</p>
              </div>
              <div className={styles.slideBack}>
                <p className={styles.slideDescription}>{slide.backContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Brushless Motor',
      description: 'Advanced brushless motor technology delivers consistent power and reduced vibration for precise, smooth operation.',
    },
    {
      icon: '📱',
      title: 'Smart Display',
      description: 'Crystal clear OLED display provides real-time feedback on voltage, battery life, and operating parameters.',
    },
    {
      icon: '🎯',
      title: '4.5MM Stroke',
      description: 'Optimal stroke length ensures perfect ink deposit and line quality for various tattoo styles.',
    },
    {
      icon: '🔋',
      title: 'Long Battery Life',
      description: '1600mAh battery provides 5-7 hours of continuous operation for uninterrupted sessions.',
    },
    {
      icon: '🎮',
      title: 'Ergonomic Design',
      description: '39mm grip diameter and balanced weight distribution reduce hand fatigue during long sessions.',
    },
    {
      icon: '🛡️',
      title: 'Premium Build',
      description: 'Aircraft-grade aluminum construction ensures durability and reliable performance.',
    },
  ];

  return (
    <section className={styles.features} id="features">
      <div className={styles.featureGrid}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles.featureItem}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: "The Rampage has completely transformed my workflow. The precision and consistency are unmatched.",
      author: "Alex Chen",
      title: "Professional Tattoo Artist, Black Lotus Studio"
    },
    {
      quote: "Best investment I've made for my studio. The battery life and ergonomic design make long sessions a breeze.",
      author: "Sarah Martinez",
      title: "Owner, Electric Dreams Tattoo"
    },
    {
      quote: "The smart display and intuitive controls have made it my go-to machine for all styles of work.",
      author: "Mike Johnson",
      title: "Lead Artist, Ink Revolution"
    },
    {
      quote: "Incredible build quality and performance. It's raised the bar for wireless machines.",
      author: "Lisa Wong",
      title: "Founder, Modern Ink Gallery"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className={styles.testimonialItem}>
            <p className={styles.testimonialQuote}>{testimonial.quote}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar} />
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{testimonial.author}</div>
                <div className={styles.authorTitle}>{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Starfield() {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const createStar = () => {
      const star = {
        id: Math.random(),
        size: Math.random() * 2 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 2 + 2
      };
      
      setStars(prev => [...prev, star]);
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== star.id));
      }, star.duration * 1000);
    };

    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.starfield}>
      {stars.map(star => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
}

function Timeline() {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      date: '2023 Q4',
      title: 'Product Launch',
      description: 'Introducing the Rampage - revolutionizing the tattoo industry with advanced technology.'
    },
    {
      date: '2024 Q1',
      title: 'Global Expansion',
      description: 'Expanding our reach to professional artists worldwide, bringing innovation to every studio.'
    },
    {
      date: '2024 Q2',
      title: 'Pro Artist Program',
      description: 'Launching our exclusive program for professional artists, featuring advanced training and support.'
    },
    {
      date: '2024 Q3',
      title: 'Next Generation',
      description: 'Developing the next generation of features based on artist feedback and technological advances.'
    }
  ];

  return (
    <section className={styles.timeline} ref={timelineRef}>
      <div className={styles.timelineTrack} />
      {milestones.map((milestone, index) => (
        <div
          key={index}
          data-index={index}
          className={clsx(styles.timelineItem, {
            [styles.visible]: visibleItems.includes(index.toString())
          })}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineDate}>{milestone.date}</div>
            <h3 className={styles.timelineTitle}>{milestone.title}</h3>
            <p className={styles.timelineDescription}>{milestone.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <Starfield />
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          Revolutionize Your Tattoo Art with Advanced Technology
        </Heading>
        <p className={styles.heroSubtitle}>
          Experience the next generation of tattoo machines with the Rampage - featuring precision control, 
          ergonomic design, and smart technology for professional artists.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} to="#demo">
            Request Demo
          </Link>
          <Link className={styles.secondaryButton} to="#features">
            View Features
          </Link>
        </div>
      </div>
    </header>
  );
}

function Carousel3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: R2_CONFIG.images.features.motor,
      alt: 'Brushless Motor Technology'
    },
    {
      src: R2_CONFIG.images.features.display,
      alt: 'OLED Display Interface'
    },
    {
      src: R2_CONFIG.images.features.design,
      alt: 'Ergonomic Design'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.carousel3D}>
      <div className={styles.carouselContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{
              transform: `rotateY(${index * 120}deg) translateZ(600px)`
            }}
          >
            <R2Image
              path={image.src}
              alt={image.alt}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
      <div className={styles.carouselControls}>
        {images.map((_, index) => (
          <div
            key={index}
            className={clsx(styles.carouselControl, {
              [styles.active]: index === activeIndex
            })}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Rampage - Professional Wireless Tattoo Machine"
      description="Next-generation wireless tattoo machine featuring smart technology, ergonomic design, and professional-grade performance.">
      <HomepageHeader />
      <main>
        <FeatureSection />
        <Carousel3D />
        <Timeline />
        <TestimonialSection />
      </main>
    </Layout>
  );
}
