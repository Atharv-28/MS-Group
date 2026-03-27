import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'Leadership Team | MOXVER',
  description: 'Meet the technologist visionaries behind MOXVER.',
};

export default function LeadershipPage() {
  return (
    <>
      <InternalHero
        badge="Leadership"
        badgeColor="red"
        title="Visionaries of<br/><em>Digital Evolution.</em>"
        subtitle="Empowering the technical minds driving MS Group's technology division."
        bgImage=""
        ctaText="Work With Us"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Executive"
        title="Mr. M. Puri"
        subtitle="Founder"
        description={[
          "Engineer from PICT Pune, Master's in Management from JBIMS, Mumbai, and Master's from Rochester Institute of Technology (RIT), USA.",
          "Driving the core technological vision and unified strategy of MOXVER's robust enterprise deployments."
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
          "Ensuring our complex technological implementations map perfectly to business operations, maximizing efficiency and ROI."
        ]}
        imageSrc=""
        imageAlt="Ms. S. Puri"
      />
    </>
  );
}
