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
        title="MAVENSIDE:<br/><em>Seamless Logistics. Global Reach.</em>"
        subtitle="Connecting markets and delivering promises through advanced routing, secure warehousing, and reliable multimodal transportation."
        bgImage=""
        ctaText="Optimize Your Supply Chain"
        ctaLink="#contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Redefining Movement"
        title="Connecting Markets. Delivering Promises."
        subtitle="Mavenside redefined the logistics landscape with high-energy movement and architectural precision."
        description={[
          "We don't just move cargo; we move economies with relentless momentum.",
          "Our integrated global logistics and supply chain management solutions are designed to optimize every touchpoint of your product's journey from origin to destination."
        ]}
        imageSrc=""
        imageAlt="Mavenside Warehouse"
        features={[
          { title: 'Advanced Logistics', description: 'End-to-End Optimization and intelligent routing systems designed to shave hours off delivery windows through predictive analytics.' },
          { title: 'Secure Warehousing', description: 'Strategic locations and rapid fulfillment centers across major global hubs, ensuring your inventory is always within reach.' },
          { title: 'Reliable Transportation', description: 'Multimodal freight and last-mile delivery solutions that prioritize velocity without compromising the safety of your assets.' }
        ]}
      />

      <InfoSection
        theme="dark"
        badge="Global Scale"
        title="Driving the Future of Flow"
        description={[
          "We believe in creating seamless connection points across the global economy.",
          "Our proprietary technology ecosystem allows unparalleled visibility into your supply chain, preventing bottlenecks before they occur."
        ]}
        imageSrc=""
        imageAlt="Global Shipping Containers"
        features={[
          { title: '99.9% Uptime Reliability', description: 'Continuous operations to ensure zero delays.' },
          { title: '140+ Countries Served', description: 'An integrated international network built for scale.' },
          { title: '2M+ Square Feet Managed', description: 'State-of-the-art warehousing across three continents.' },
          { title: '24/7 Real-Time Tracking', description: 'Absolute transparency at every stage of the journey.' }
        ]}
      />
    </>
  );
}
