import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'Leadership Team | Mavenside',
  description: 'Meet the strategic minds behind Mavenside logistics.',
};

export default function LeadershipPage() {
  return (
    <>
      <InternalHero
        badge="Leadership"
        badgeColor="gold"
        title="Commanding Global<br/><em>Operations.</em>"
        subtitle="Empowering the strategists behind our robust supply chain ecosystems."
        bgImage=""
        ctaText="Work With Us"
        ctaLink="/mavenside/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Executive"
        title="Mr. M. Puri"
        subtitle="Founder"
        description={[
          "Engineer from PICT Pune, Master's in Management from JBIMS, Mumbai, and Master's from Rochester Institute of Technology (RIT), USA.",
          "Mr. Puri directs the overarching vision of Mavenside, ensuring our logistics networks scale effectively across 140+ countries."
        ]}
        imageSrc=""
        imageAlt="Mr. M. Puri"
      />

      <InfoSection
        theme="dark"
        badge="Executive"
        title="Ms. S. Puri"
        subtitle="Architect of Operational Excellence"
        description={[
          "MBA from Christ University, Bangalore.",
          "Ms. Puri orchestrates ground-level efficiency and continuous process improvements across our worldwide warehouse and transit hubs."
        ]}
        imageSrc=""
        imageAlt="Ms. S. Puri"
      />
    </>
  );
}
