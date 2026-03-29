import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'About | MS Group',
  description: 'Learn about MS Group history, mission, and vision.',
};

export default function AboutPage() {
  return (
    <>
      <InternalHero
        badge="About Us"
        badgeColor="gold"
        title="Driven by Precision.<br/><em>Defined by Excellence.</em>"
        subtitle="Since our reorganization in 2020, MS Group has operated as a unified powerhouse, engineering strategic growth, seamless logistics, and future-ready technology."
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
      />

      {/* Mission & Vision */}
      <InfoSection
        theme="light"
        badge="Our Purpose"
        title="Mission & Vision"
        subtitle="Bridging the gap between operational excellence and global strategic reach."
        description={[
          "MS Group exists to architect the future of commerce. Our mission is to provide enterprises with an integrated ecosystem of services that eliminate friction, reduce costs, and accelerate scale.",
          "Our vision is to be the undisputed global leader in multi-vertical business acceleration, where strategy, logistics, and technology converge to create exponential value."
        ]}
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80"
        imageAlt="Corporate Strategy"
        features={[]}
      />
    </>
  );
}
