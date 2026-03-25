import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'ClientWise | MS Group Consulting',
  description: 'Precision-engineered strategic business consulting designed to navigate complex market dynamics and scale operations.',
};

export default function ClientwisePage() {
  return (
    <>
      <InternalHero
        badge="Strategic Consulting"
        badgeColor="blue"
        title="CLIENTWISE:<br/><em>Navigating Complexity. Driving Growth.</em>"
        subtitle="We provide precision-engineered strategic business consulting designed to help enterprises navigate complex market dynamics and scale operations globally."
        bgImage=""
        ctaText="Partner With Us"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Business Strategy"
        title="Transforming Vision Into Execution."
        subtitle="Bridging the gap between conceptual strategy and operational reality."
        description={[
          "CLIENTWISE operates at the intersection of industry foresight and financial pragmatism. We partner with leadership teams to identify untapped market opportunities and eliminate operational inefficiencies.",
          "Our multi-disciplinary teams bring decades of experience across finance, technology, and global markets to restructure and scale your business for the modern economy."
        ]}
        imageSrc=""
        imageAlt="Consulting Meeting"
        features={[
          { title: 'Market Entry Strategy', description: 'Comprehensive risk assessment and go-to-market planning for international expansion.' },
          { title: 'Operational Restructuring', description: 'Streamlining processes and organizational design to improve margin performance.' },
          { title: 'Mergers & Acquisitions', description: 'End-to-end guidance from target identification through post-merger integration.' }
        ]}
      />

      <InfoSection
        theme="dark"
        badge="The Edge"
        title="Strategic Depth. Tangible Results."
        description={[
          "We don't deal in theoretical frameworks. We deliver actionable blueprints.",
          "Our advisory services are trusted by Fortune 500 companies and agile startups alike, providing the strategic depth required to build resilient, future-ready global enterprises."
        ]}
        imageSrc=""
        imageAlt="Business Analytics"
        features={[
          { title: '60% Faster Expansion', description: 'Our clients enter new markets with unprecedented speed.' },
          { title: 'Data-Driven Insights', description: 'Proprietary analytical models that remove the guesswork from leadership decisions.' },
          { title: 'Change Management', description: 'Ensuring your workforce adapts alongside your evolving business model.' }
        ]}
      />
    </>
  );
}
