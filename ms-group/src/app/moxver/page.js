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
        title="MOXVER:<br/><em>Architecting Digital Futures.</em>"
        subtitle="Pioneering enterprise technology—from scalable cloud infrastructure to disruptive AI—designed to accelerate your competitive edge."
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
        ctaText="Discover Our Tech"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Digital Evolution"
        title="Software Designed for the Modern Enterprise."
        subtitle="We build robust digital ecosystems that scale with your ambitions."
        description={[
          "MOXVER is the technology engine behind MS Group's most transformative projects. We fuse deep engineering expertise with modern design thinking to build platforms that perform flawlessly under pressure.",
          "Whether migrating legacy systems to the cloud or deploying cutting-edge machine learning models, our solutions are engineered for resilience and security."
        ]}
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80"
        imageAlt="Modern Technology"
        features={[
          { title: 'Enterprise Architecture', description: 'Designing modular, microservices-based systems that grow without technical debt.' },
          { title: 'Artificial Intelligence', description: 'Custom-trained predictive models and automation tools that optimize daily operations.' },
          { title: 'Cloud Infrastructure', description: 'Secure, high-availability hosting and deployment across AWS, Azure, and Google Cloud.' }
        ]}
      />

      <InfoSection
        theme="dark"
        badge="Performance"
        title="Security & Scale out of the Box"
        description={[
          "We treat security and performance as fundamental requirements, not afterthoughts.",
          "Our tech stack is meticulously curated to guarantee uptime, protect sensitive data, and provide lightning-fast user experiences for millions of concurrent users."
        ]}
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80"
        imageAlt="Server Infrastructure"
        features={[
          { title: 'Zero-Trust Security', description: 'Military-grade encryption and rigorous compliance frameworks implemented from day one.' },
          { title: 'Continuous Integration', description: 'Automated testing and deployment pipelines for daily, risk-free feature updates.' },
          { title: '40% Cost Reduction', description: 'Optimizing resource allocation through serverless computing and intelligent scaling.' }
        ]}
      />
    </>
  );
}
