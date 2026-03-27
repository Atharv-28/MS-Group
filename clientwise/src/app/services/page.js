import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'Our Services | ClientWise',
  description: 'Explore our strategic consulting and comprehensive business auditing services.',
};

export default function ServicesPage() {
  return (
    <>
      <InternalHero
        badge="Services"
        badgeColor="blue"
        title="Elevating Enterprise<br/><em>Operations.</em>"
        subtitle="Discover our suite of strategic business consulting and comprehensive business auditing services."
        bgImage=""
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Strategic Consulting"
        title="Corporate Strategy & Growth Planning"
        description={[
          "We partner with leadership teams to identify untapped market opportunities and eliminate operational inefficiencies.",
          "Our multi-disciplinary teams bring decades of experience across finance, technology, and global markets to restructure and scale your business."
        ]}
        imageSrc=""
        imageAlt="Consulting Service"
        features={[
          { title: 'Operational Excellence', description: 'Streamlining processes and organizational design.' },
          { title: 'Change Management', description: 'Ensuring execution yields tangible, long-term sustainable growth.' }
        ]}
      />

      <InfoSection
        theme="dark"
        badge="Auditing"
        title="Comprehensive Business Auditing"
        description={[
          "Precision-engineered auditing covering financials, risk management, and regulatory compliance."
        ]}
        imageSrc=""
        imageAlt="Auditing Service"
        features={[
          { title: 'Financial & Process Auditing', description: 'Deep analysis of operational finances to secure continuous margin performance.' },
          { title: 'Risk Management', description: 'Mitigation strategies protecting against market volatilities.' },
          { title: 'Regulatory Compliance', description: 'Ensuring your global expansion adheres strictly to local regulatory frameworks.' }
        ]}
      />
    </>
  );
}
