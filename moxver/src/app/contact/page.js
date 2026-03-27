import InternalHero from '@/components/InternalHero/InternalHero';

export const metadata = {
  title: 'Contact Us | MOXVER',
  description: 'Connect with our engineering team.',
};

export default function ContactPage() {
  return (
    <>
      <InternalHero
        badge="Contact"
        badgeColor="red"
        title="Accelerate Your<br/><em>Digital Journey.</em>"
        subtitle="Our engineers are ready to architect your next digital leap."
        bgImage=""
        ctaText="View Services"
        ctaLink="/services"
      />
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Reach Out</h2>
        <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> tech@moxver.msgroup.cc</p>
        <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> +91 800 123 4569</p>
        <p style={{ marginBottom: '2rem' }}><strong>Headquarters:</strong> MS Group Tower, HSR Layout, Sector 2, Bangalore, India</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} />
          <textarea rows="5" placeholder="Project Description" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
          <button type="button" style={{ padding: '0.75rem', backgroundColor: '#d10000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Submit Request</button>
        </form>
      </div>
    </>
  );
}
