import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';
import styles from './about.module.css';

export const metadata = {
  title: 'About & Leadership | MS Group',
  description: 'Learn about MS Group leadership, our history of precision and innovation, and our mission bridging local excellence with global reach.',
};

const leaders = [
  {
    name: 'Manoj Gosavi',
    role: 'Founder & Chairman',
    bio: 'With over 25 years of global business experience, Manoj drives the overarching strategic vision of MS Group across all three verticals.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Sarah Chen',
    role: 'Managing Director, ClientWise',
    bio: 'Former partner at a top-tier consulting firm, Sarah leads the strategic consulting division with unparalleled academic and real-world rigor.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'David Roberts',
    role: 'VP Global Operations, Mavenside',
    bio: 'An authority on international supply chains, David architected Mavenside’s proprietary routing algorithms that serve 140+ countries.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Elena Rostova',
    role: 'CTO, MOXVER',
    bio: 'Pioneering AI researcher turned tech executive, Elena oversees the development and deployment of enterprise-grade software solutions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
];

export default function AboutPage() {
  return (
    <>
      <InternalHero
        badge="About Us"
        badgeColor="gold"
        title="Driven by Precision.<br/><em>Defined by Excellence.</em>"
        subtitle="Since our reorganization in 2020, MS Group has operated as a unified powerhouse, engineering strategic growth, seamless logistics, and future-ready technology."
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
      />

      {/* Mission & Vision */}
      <InfoSection
        theme="light"
        badge="Our Purpose"
        title="Mission & Vision"
        subtitle="Bridging the gap between operational excellence and global strategic reach."
        description={[
          "MS Group exists to architect the future of commerce. Our mission is to provide enterprises with an integrated ecosystem of services that eliminate friction, reduce costs, and accelerate scale.",
          "Our vision is to be the undisputed global leader in multi-vertical business acceleration, where strategy, logistics, and technology converge to create exponential value."
        ]}
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80"
        imageAlt="Corporate Strategy"
        features={[]}
      />

      {/* Leadership */}
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
                <div className={styles.imageWrapper}>
                  <img src={leader.image} alt={leader.name} className={styles.image} loading="lazy" />
                  <div className={styles.imageOverlay}></div>
                </div>
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
