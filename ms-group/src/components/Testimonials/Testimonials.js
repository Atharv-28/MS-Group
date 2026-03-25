'use client';

import { useRef, useEffect } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    quote:
      '"The strategic depth provided by CLIENTWISE saved us years of market testing. Their insight accelerated our regional expansion by over 60%."',
    author: 'TechVentures Ltd.',
    role: 'CEO',
  },
  {
    id: 2,
    quote:
      '"Digital transformation was effortless with the MOXVER team. They delivered a scalable platform that cut our operational costs by 40%."',
    author: 'GlobalRetail Corp.',
    role: 'CTO',
  },
  {
    id: 3,
    quote:
      '"Mavenside streamlined our entire supply chain across 12 countries. Delays are down by 78% and visibility is unparalleled."',
    author: 'Pacific Imports Inc.',
    role: 'Operations Director',
  },
  {
    id: 4,
    quote:
      '"MS Group\'s integrated approach gave us access to consulting, logistics, and tech under one roof. Truly a game changer."',
    author: 'Nexus Industries',
    role: 'Managing Director',
  },
  {
    id: 5,
    quote:
      '"CLIENTWISE helped us pivot our business model during a critical market shift. Their team\'s precision and speed was remarkable."',
    author: 'Summit Enterprises',
    role: 'CFO',
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.marqueeWrapper} aria-label="Client testimonials">
        <div className={styles.marqueeTrack} ref={trackRef}>
          {/* Duplicate for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <blockquote key={`${t.id}-${i}`} className={styles.card}>
              <div className={styles.quoteIcon} aria-hidden="true">"</div>
              <p className={styles.quote}>{t.quote}</p>
              <footer className={styles.author}>
                <span className={styles.authorName}>{t.author}</span>
                <span className={styles.authorRole}>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
