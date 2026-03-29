import InternalHero from '@/components/InternalHero/InternalHero';
import Ecosystem from '@/components/Ecosystem/Ecosystem';
import Testimonials from '@/components/Testimonials/Testimonials';

export const metadata = {
  title: 'Services | MS Group',
  description: 'Explore MS Group services: strategy, logistics, and technology.',
};

export default function ServicesPage() {
  return (
    <>
      <InternalHero
        badge="Services"
        badgeColor="blue"
        title="Our Services"
        subtitle="Three specialized verticals—strategy, logistics, and technology—working together to accelerate your business."
        bgImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
      />

      <Ecosystem />

      <Testimonials />
    </>
  );
}
