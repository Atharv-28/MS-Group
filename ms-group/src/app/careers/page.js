'use client';

import InternalHero from '@/components/InternalHero/InternalHero';
import styles from './careers.module.css';

export default function CareersPage() {
  const jobs = [
    { title: 'Senior Strategy Consultant', vertical: 'ClientWise', location: 'London, UK', type: 'Full-time' },
    { title: 'Supply Chain Operations Manager', vertical: 'Mavenside', location: 'Dubai, UAE', type: 'Full-time' },
    { title: 'Machine Learning Engineer', vertical: 'MOXVER', location: 'Bangalore, India', type: 'Full-time' },
    { title: 'Director of Business Development', vertical: 'MS Group Core', location: 'New York, USA', type: 'Full-time' },
  ];

  return (
    <>
      <InternalHero
        badge="Careers"
        badgeColor="red"
        title="Build the Future.<br/><em>Shape Your Legacy.</em>"
        subtitle="Join our multi-disciplinary team of visionaries, engineers, and strategists. At MS Group, diverse talents converge to solve global challenges."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
      />

      <section className={styles.careers}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Open Positions</span>
            <h2 className={styles.title}>Join Our Ecosystem</h2>
            <div className={styles.divider}></div>
            <p className={styles.subtitle}>
              We are constantly seeking brilliant minds across strategy, technology, and logistics. Explore our current openings below.
            </p>
          </div>

          <div className={styles.jobList}>
            {jobs.map((job, i) => (
              <div key={i} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaIcon}>🏢</span>
                      {job.vertical}
                    </span>
                    <span className={styles.metaItem}>
                      <span className={styles.metaIcon}>📍</span>
                      {job.location}
                    </span>
                    <span className={styles.metaItem}>
                      <span className={styles.metaIcon}>🕒</span>
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className={styles.jobAction}>
                  <button className={styles.applyBtn}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.bottomCTA}>
            <h3 className={styles.bottomTitle}>Don't see a perfect fit?</h3>
            <p className={styles.bottomDesc}>Send your resume to our talent acquisition team and we'll reach out when a matching role opens.</p>
            <a href="mailto:founder@msgroup.cc" className={styles.bottomBtn}>Send Resume</a>
          </div>
        </div>
      </section>
    </>
  );
}
