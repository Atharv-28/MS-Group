import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'Our Services | MOXVER',
  description: 'Digital Experience, Enterprise Software, and Innovation Edge.',
};

export default function ServicesPage() {
  return (
    <>
      <InternalHero
        badge="Services"
        badgeColor="red"
        title="Pioneering Enterprise<br/><em>Technology.</em>"
        subtitle="From scalable cloud infrastructure to disruptive AI, we provide the tools you need to succeed."
        bgImage=""
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        badge="Web & Marketing"
        title="Digital Experience & Growth"
        description={[
          "Web Architecture & Design, Strategic Digital Marketing (SEO, performance marketing)."
        ]}
        imageSrc=""
        imageAlt="Digital Focus"
      />

      <InfoSection
        theme="dark"
        imageLeft={true}
        badge="Software"
        title="Specialized Enterprise Software"
        description={[
          "HR Tech Solutions, Hospitality Management Systems, Next-Gen CRM Solutions."
        ]}
        imageSrc=""
        imageAlt="Software"
      />

      <InfoSection
        theme="light"
        badge="Security"
        title="Resilience & Security"
        description={[
          "Cybersecurity & Threat Mitigation, Cloud Infrastructure & Migration."
        ]}
        imageSrc=""
        imageAlt="Security"
      />
      
      <InfoSection
        theme="dark"
        imageLeft={true}
        badge="Innovation"
        title="The Innovation Edge"
        description={[
          "Custom AI & Automation, E-commerce Ecosystems."
        ]}
        imageSrc=""
        imageAlt="Innovation"
      />
    </>
  );
}
