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
      <section style={{ maxWidth: '1280px', margin: '4rem auto', padding: '0 2rem', color: '#e5e7eb' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          <div style={{ padding: '0.5rem 0' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#f8fafc' }}>Reach Out</h2>
            <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> founder@msgroup.cc</p>
            <p style={{ marginBottom: 0 }}><strong>Headquarters:</strong><br/>MS Group Tower, 45th Avenue<br/>HSR Layout, Sector 2<br/>Bangalore, Karnataka 560102<br/>India</p>
          </div>

          <div style={{ padding: '0.5rem 0' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '520px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', color: '#0a1628', backgroundColor: '#ffffff' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', color: '#0a1628', backgroundColor: '#ffffff' }} />
              <textarea rows="4" placeholder="Project Description" style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', color: '#0a1628', backgroundColor: '#ffffff' }}></textarea>
              <button type="button" style={{ padding: '0.75rem 1.25rem', width: '100%', textAlign: 'center', backgroundColor: '#d10000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
