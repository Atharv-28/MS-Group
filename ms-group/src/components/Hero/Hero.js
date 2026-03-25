'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Animate words in title
    const title = titleRef.current;
    if (!title) return;
    const words = title.querySelectorAll('[data-word]');
    words.forEach((word, i) => {
      word.style.animationDelay = `${i * 0.1 + 0.3}s`;
    });
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Background overlay */}
      <div className={styles.bg}></div>
      <div className={styles.bgGradient}></div>

      {/* Animated grid */}
      <div className={styles.grid} aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.gridLine}></div>
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Empowering Global Business
          </div>

          {/* Title */}
          <h1 className={styles.title} ref={titleRef}>
            <span data-word className={styles.word}>Empowering</span>{' '}
            <span data-word className={styles.word}>Global</span>{' '}
            <span data-word className={styles.word}>Business</span>{' '}
            <span data-word className={`${styles.word} ${styles.wordAccent}`}>Through</span>{' '}
            <span data-word className={styles.word}>Integrated</span>{' '}
            <span data-word className={styles.word}>Solutions.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            From strategic consulting and advanced logistics to cutting-edge technology,
            we architect the future of commerce.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Link href="/mavenside" className={`${styles.btn} ${styles.btnPrimary}`} id="hero-explore">
              Explore Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="/contact" className={`${styles.btn} ${styles.btnOutline}`} id="hero-contact">
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>140+</span>
              <span className={styles.statLabel}>Countries Served</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2020</span>
              <span className={styles.statLabel}>Established</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Business Verticals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
