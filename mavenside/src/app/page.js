import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'Mavenside | MS Group Logistics',
  description: 'Integrated global logistics and supply chain management solutions that optimize every touchpoint of your product journey.',
};

export default function MavensidePage() {
  return (
    <>
      <InternalHero
        badge="Global Logistics"
        badgeColor="gold"
        title="MAVENSIDE: <br/><em>Seamless Logistics. Global Reach.</em>"
        subtitle="End-to-end supply chain optimization, secure warehousing, and reliable transportation solutions designed to keep your business moving forward."
        bgImage=""
        ctaText="Optimize Your Supply Chain"
        ctaLink="/contact"
      />

      {/* Mission Statement */}
      <InfoSection
        theme="light"
        badge="Our Mission"
        title="Connecting Markets. Delivering Promises."
        description={[
          "To deliver seamless, secure, and scalable supply chain solutions that connect businesses to their markets with unparalleled efficiency and reliability."
        ]}
        imageSrc=""
        imageAlt="Mavenside Mission"
        features={[]}
      />

      {/* Core Services */}
      <InfoSection
        theme="dark"
        imageLeft={true}
        badge="Core Services"
        title="Advanced Logistics & Securing Supply Chain"
        description={[
          "Our integrated global logistics and supply chain management solutions are designed to optimize every touchpoint of your product's journey from origin to destination."
        ]}
        imageSrc=""
        imageAlt="Logistics Services"
        features={[
          { title: 'Advanced Logistics & Supply Chain Management', description: 'End-to-End Optimization, Inventory Management, and Global & Domestic Routing.' },
          { title: 'Secure & Scalable Warehousing', description: 'Strategic Locations, Fulfillment & Distribution, and Safety & Compliance.' },
          { title: 'Reliable Transportation Services', description: 'Multimodal Freight, Last-Mile Delivery, and Real-Time Tracking.' }
        ]}
      />

      <InfoSection
        theme="light"
        badge="The Edge"
        title="Why Partner With MAVENSIDE"
        description={[
          "We believe in creating seamless connection points across the global economy."
        ]}
        imageSrc=""
        imageAlt="Mavenside Analytics"
        features={[
          { title: 'Unwavering Reliability', description: 'Continuous operations to ensure zero delays and absolute dependability.' },
          { title: 'Integrated Synergy', description: 'Working in lockstep with your existing operations to amplify performance.' },
          { title: 'Commitment to Excellence', description: 'State-of-the-art systems built for global scale and security.' }
        ]}
      />
      <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f0f4f8' }}>
        <h2 style={{ color: '#0a1628' }}>Ready to Streamline Your Operations?</h2>
        <a href="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#0056b3', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Optimize Your Supply Chain</a>
      </div>
    </>
  );
}
