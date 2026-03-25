import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Ecosystem from '@/components/Ecosystem/Ecosystem';
import WhyMS from '@/components/WhyMS/WhyMS';
import Testimonials from '@/components/Testimonials/Testimonials';

export const metadata = {
  title: 'MS Group — Empowering Global Business Through Integrated Solutions',
  description:
    'From strategic consulting and advanced logistics to cutting-edge technology, MS Group architects the future of commerce. Headquartered in Bangalore, India.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Ecosystem />
      <WhyMS />
      <Testimonials />
    </>
  );
}
