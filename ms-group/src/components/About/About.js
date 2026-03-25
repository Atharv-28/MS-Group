import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80"
                alt="MS Group Office - Modern Workspace"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageBadge}>
                <span className={styles.imageBadgeYear}>2020</span>
                <span className={styles.imageBadgeText}>Reorganization</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.content}>
            <span className={styles.label}>Driving Growth. Delivering Excellence.</span>
            <h2 className={styles.title}>
              A Legacy of Strategic Transformation
            </h2>
            <div className={styles.divider}></div>
            <p className={styles.text}>
              Founded on principles of precision and innovation, MS Group underwent
              a pivotal reorganization in 2020 at our headquarters in HSR Layout, Bangalore.
            </p>
            <p className={styles.text}>
              Today, we operate as a unified powerhouse, bridging the gap between
              local operational excellence and global strategic reach for enterprises
              worldwide.
            </p>

            {/* Feature list */}
            <ul className={styles.features}>
              {[
                'Precision-engineered strategic frameworks',
                'Global logistics & supply chain mastery',
                'Pioneering AI-powered technology solutions',
              ].map((item) => (
                <li key={item} className={styles.feature}>
                  <span className={styles.featureIcon} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
