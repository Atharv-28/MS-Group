import styles from './InfoSection.module.css';

export default function InfoSection({
  title,
  subtitle,
  description,
  features = [],
  imageSrc,
  imageAlt,
  imageLeft = false,
  badge,
  theme = 'dark', // 'dark' | 'light'
}) {
  const isDark = theme === 'dark';
  
  return (
    <section className={`${styles.section} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <div className={`${styles.grid} ${imageLeft ? styles.imageLeft : ''}`}>
          
          {/* Image */}
          {imageSrc ? (
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imageSrc} alt={imageAlt} className={styles.image} loading="lazy" />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
          ) : null}

          {/* Content */}
          <div className={styles.contentCol}>
            {badge && <span className={styles.badge}>{badge}</span>}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
            
            {description && (
              <div className={styles.description}>
                {description.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            )}

            {features.length > 0 && (
              <ul className={styles.features}>
                {features.map((feature, i) => (
                  <li key={i} className={styles.feature}>
                    <span className={styles.featureCount}>{(i + 1).toString().padStart(2, '0')}</span>
                    <div>
                      <h4 className={styles.featureTitle}>{feature.title}</h4>
                      <p className={styles.featureDesc}>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
