import Link from 'next/link';
import styles from './Ecosystem.module.css';

const verticals = [
  {
    id: 'clientwise',
    badge: 'Strategic',
    badgeColor: 'blue',
    title: 'CLIENTWISE',
    description:
      'Strategic Business Consulting. Navigate market complexities with confidence.',
    href: '/clientwise',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageAlt: 'Business Consulting - ClientWise',
  },
  {
    id: 'mavenside',
    badge: 'Global',
    badgeColor: 'gold',
    title: 'MAVENSIDE',
    description:
      'Global Logistics & Supply Chain. The operational backbone of your business.',
    href: '/mavenside',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    imageAlt: 'Logistics Warehouse - Mavenside',
  },
  {
    id: 'moxver',
    badge: 'Innovation',
    badgeColor: 'green',
    title: 'MOXVER',
    description:
      'Innovative Technology Solutions. Future-proof your operations.',
    href: '/moxver',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    imageAlt: 'Technology Innovation - MOXVER',
  },
];

export default function Ecosystem() {
  return (
    <section className={styles.ecosystem} id="services">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>The MS Ecosystem</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Three specialized verticals, one unified vision—driving excellence across
            strategy, logistics, and technology.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {verticals.map((v) => (
            <article key={v.id} className={styles.card} id={`vertical-${v.id}`}>
              <div className={styles.cardImage}>
                <img src={v.image} alt={v.imageAlt} className={styles.img} loading="lazy" />
                <div className={styles.cardOverlay}></div>
                <span className={`${styles.badge} ${styles[`badge${v.badgeColor.charAt(0).toUpperCase() + v.badgeColor.slice(1)}`]}`}>
                  {v.badge}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.description}</p>
                <Link href={v.href} className={styles.cardLink} aria-label={`Explore ${v.title}`}>
                  Explore Vertical
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
