import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'MOXVER | MS Group Technology',
  description: 'Pioneering technology solutions ranging from enterprise software to disruptive AI, built to future-proof your digital presence.',
};

export default function MoxverPage() {
  return (
    <>
      <InternalHero
        badge="Technology Solutions"
        badgeColor="red"
        title="MOXVER: <br/><em>Driving Digital Transformation.</em>"
        subtitle="Empowering your business with custom web design, targeted digital marketing, and specialized software solutions designed for the modern enterprise."
        bgImage=""
        ctaText="Accelerate Your Digital Journey"
        ctaLink="/contact"
      />

      {/* Mission Statement */}
      <InfoSection
        theme="light"
        badge="Our Mission"
        title="Innovating Operations. Elevating Experiences."
        description={[
          "To accelerate digital transformation by providing innovative, custom-built technology solutions that streamline operations, elevate brand presence, and drive business efficiency."
        ]}
        imageSrc=""
        imageAlt="Moxver Mission"
        features={[]}
      />

      {/* Core Services */}
      <InfoSection
        theme="dark"
        imageLeft={true}
        badge="Core Services"
        title="Designed for the Modern Enterprise."
        description={[
          "We build robust digital ecosystems that scale with your ambitions."
        ]}
        imageSrc=""
        imageAlt="Technology Services"
        features={[
          { title: 'Digital Experience & Growth', description: 'Web Architecture & Design, Strategic Digital Marketing (SEO, performance marketing).' },
          { title: 'Specialized Enterprise Software', description: 'HR Tech Solutions, Hospitality Management Systems, Next-Gen CRM Solutions.' },
          { title: 'Resilience & Security', description: 'Cybersecurity & Threat Mitigation, Cloud Infrastructure & Migration.' },
          { title: 'The Innovation Edge', description: 'Custom AI & Automation, E-commerce Ecosystems.' }
        ]}
      />

      <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f0f4f8' }}>
        <h2>Ready to Accelerate Your Digital Transformation?</h2>
        <a href="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#0056b3', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Accelerate Your Digital Journey</a>
      </div>
    </>
  );
}
