import InternalHero from '@/components/InternalHero/InternalHero';
import styles from './leadership.module.css';

export const metadata = {
  title: 'Leadership | MS Group',
  description: 'Meet the leadership team steering MS Group’s vision and operations.',
};

const leaders = [
  {
    name: 'Mr. M. Puri',
    role: 'Founder',
    bio: 'Engineer from PICT Pune, Master’s in Management from JBIMS, Mumbai, and Master’s from Rochester Institute of Technology (RIT), USA.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Ms. S. Puri',
    role: 'Co-Founder / Architect of Operational Excellence',
    bio: 'MBA from Christ University, Bangalore; architect of operational excellence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
];

export default function LeadershipPage() {
  return (
    <>
      <InternalHero
        badge="Leadership"
        badgeColor="gold"
        title="Leadership Team"
        subtitle="Decades of combined expertise guiding our verticals toward uninterrupted excellence."
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
      />

      <section className={styles.leadership} id="leadership">
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>The Minds Behind MS Group</span>
            <h2 className={styles.title}>Leadership Team</h2>
            <div className={styles.divider}></div>
            <p className={styles.subtitle}>
              Decades of combined expertise guiding our verticals toward uninterrupted excellence.
            </p>
          </div>

          <div className={styles.grid}>
            {leaders.map((leader, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.info}>
                  <h3 className={styles.name}>{leader.name}</h3>
                  <span className={styles.role}>{leader.role}</span>
                  <p className={styles.bio}>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
