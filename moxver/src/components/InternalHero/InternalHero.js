 'use client';
import styles from './InternalHero.module.css';
import Link from 'next/link';

export default function InternalHero({
  title,
  subtitle,
  badge,
  badgeColor = 'gold',
  bgImage,
  ctaText,
  ctaLink,
}) {
  return (
    <section className={styles.hero}>
      <div 
        className={styles.bg} 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles.overlay}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`${styles.badge} ${styles[`badge${badgeColor.charAt(0).toUpperCase() + badgeColor.slice(1)}`]}`}>
            {badge}
          </span>
          <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          
          {ctaText && ctaLink && (
            <Link href={ctaLink} className={`${styles.btn} ${styles.btnPrimary}`}>
              {ctaText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
