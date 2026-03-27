import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'Leadership Team | ClientWise',
  description: 'Meet the visionaries behind ClientWise.',
};

export default function LeadershipPage() {
  return (
    <>
      <InternalHero
        badge="Leadership"
        badgeColor="blue"
        title="Visionary Leaders<br/><em>Driving Excellence.</em>"
        subtitle="A seasoned team of consultants and industry experts empowering enterprises worldwide."
        bgImage=""
        ctaText="Partner With Us"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Executive"
        title="Mr. M. Puri"
        subtitle="Founder & Managing Director"
        description={[
          "Engineer from PICT Pune, Master's in Management from JBIMS, Mumbai, and Master's from Rochester Institute of Technology (RIT), USA.",
          "Mr. Puri brings analytical rigor and strategic depth to ClientWise, shaping the firm's global methodology."
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
          "Ms. Puri is responsible for translating high-level strategy into tangible operational execution, ensuring our clients achieve sustainable growth."
        ]}
        imageSrc=""
        imageAlt="Ms. S. Puri"
      />
    </>
  );
}
