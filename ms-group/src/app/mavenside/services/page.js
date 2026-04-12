import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'Logistics Services | Mavenside',
  description: 'Our core services: Advanced Logistics, Secure Warehousing, and Reliable Transportation.',
};

export default function ServicesPage() {
  return (
    <>
      <InternalHero
        badge="Services"
        badgeColor="gold"
        title="Redefining Global<br/><em>Supply Chains.</em>"
        subtitle="End-to-end supply chain optimization, secure warehousing, and reliable transportation solutions."
        bgImage=""
        ctaText="Contact Us"
        ctaLink="/mavenside/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Logistics"
        title="Advanced Logistics & Supply Chain Management"
        description={[
          "End-to-End Optimization and intelligent routing systems designed to shave hours off delivery windows through predictive analytics."
        ]}
        imageSrc=""
        imageAlt="Logistics"
      />

      <InfoSection
        theme="dark"
        badge="Warehousing"
        title="Secure & Scalable Warehousing"
        description={[
          "Strategic locations and rapid fulfillment centers across major global hubs, ensuring your inventory is always within reach."
        ]}
        imageSrc=""
        imageAlt="Warehousing"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Transportation"
        title="Reliable Transportation Services"
        description={[
          "Multimodal freight and last-mile delivery solutions that prioritize velocity without compromising the safety of your assets."
        ]}
        imageSrc=""
        imageAlt="Transportation"
      />
    </>
  );
}
