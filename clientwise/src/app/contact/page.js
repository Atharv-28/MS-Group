import InternalHero from '@/components/InternalHero/InternalHero';

export const metadata = {
  title: 'Contact Us | ClientWise',
  description: 'Get in touch with ClientWise consulting professionals.',
};

export default function ContactPage() {
  return (
    <>
      <InternalHero
        badge="Contact"
        badgeColor="blue"
        title="Let's Strategize<br/><em>Your Next Move.</em>"
        subtitle="Our global team is ready to discuss how ClientWise can architect solutions for your most pressing business challenges."
        bgImage=""
        ctaText="View Services"
        ctaLink="/services"
      />
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Reach Out</h2>
        <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> info@clientwise.msgroup.cc</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> +91 800 123 4567</p>
        <p style={{ marginBottom: '2rem' }}><strong>Headquarters:</strong><br/>MS Group Tower, 45th Avenue<br/>HSR Layout, Sector 2<br/>Bangalore, Karnataka 560102<br/>India</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
          <textarea rows="5" placeholder="Your Message" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
          <button type="button" style={{ padding: '0.75rem', backgroundColor: '#0056b3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
        </form>
      </div>
    </>
  );
}
