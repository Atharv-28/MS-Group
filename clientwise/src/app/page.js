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
        title="CLIENTWISE: <br/><em>Strategic Consulting & Precision Auditing.</em>"
        subtitle="Empowering your organization with actionable insights, optimized processes, and robust compliance frameworks to drive sustainable market leadership."
        bgImage=""
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {/* Mission Statement */}
      <InfoSection
        theme="light"
        badge="Our Mission"
        title="Navigating Complexity. Architecting Growth."
        description={[
          "To empower organizations with strategic insights and actionable solutions that drive sustainable growth, operational excellence, and a competitive edge in the global market."
        ]}
        imageSrc=""
        imageAlt="Consulting Mission"
        features={[]}
      />

      {/* Core Services */}
      <InfoSection
        theme="dark"
        imageLeft={true}
        badge="Core Services"
        title="Strategic Consulting & Business Auditing."
        description={[
          "Our multi-disciplinary teams bring decades of experience to restructure and scale your business for the modern economy."
        ]}
        imageSrc=""
        imageAlt="Consulting Services"
        features={[
          { title: 'Strategic Business Consulting', description: 'Corporate Strategy & Growth Planning, Operational Excellence, and Change Management & Transformation.' },
          { title: 'Comprehensive Business Auditing', description: 'Financial & Process Auditing, Risk Management & Mitigation, and Regulatory Compliance.' }
        ]}
      />

      <InfoSection
        theme="light"
        badge="The Edge"
        title="Why Partner With CLIENTWISE"
        description={[
          "We don't deal in theoretical frameworks. We deliver actionable blueprints."
        ]}
        imageSrc=""
        imageAlt="Business Analytics"
        features={[
          { title: 'Data-Driven Insights', description: 'Proprietary analytical models that remove the guesswork from leadership decisions.' },
          { title: 'Holistic Perspective', description: 'Comprehensive risk assessment and strategy across the entire enterprise.' },
          { title: 'Measurable Outcomes', description: 'Ensuring execution yields tangible, long-term sustainable growth.' }
        ]}
      />
      <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f0f4f8' }}>
        <h2 style={{ color: '#0a1628' }}>Ready to Elevate Your Business Strategy?</h2>
        <a href="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#0056b3', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Schedule a Consultation</a>
      </div>
    </>
  );
}
