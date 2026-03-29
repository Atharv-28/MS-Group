import Link from 'next/link';
import styles from './Footer.module.css';

const verticals = [
  { label: 'ClientWise Consulting', href: '/clientwise' },
  { label: 'Mavenside Logistics', href: '/mavenside' },
  { label: 'MOXVER Technology', href: '/moxver' },
];

const company = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Sitemap', href: '/sitemap' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        {/* Pre-footer CTA */}
        <div className={styles.cta}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Partner with MS Group to unlock your organization's full potential.</p>
          <Link href="/contact" className={styles.ctaBtn}>Contact Us</Link>
        </div>
        
        {/* Top section */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              MS Group
            </Link>
            <p className={styles.brandDesc}>
              HSR Layout, Bangalore, India<br />
              Providing global excellence since 2020.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Phone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.02-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Verticals */}
          <div className={styles.linkGroup}>
            <h3 className={styles.linkGroupTitle}>Verticals</h3>
            <ul className={styles.linkList}>
              {verticals.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.linkGroup}>
            <h3 className={styles.linkGroupTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/careers" className={styles.footerLink}>Careers</Link></li>
              <li><Link href="/leadership" className={styles.footerLink}>Leadership</Link></li>
              <li><Link href="/press" className={styles.footerLink}>Press Release</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.linkGroup}>
            <h3 className={styles.linkGroupTitle}>Legal</h3>
            <ul className={styles.linkList}>
              {company.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} MS Group. MS Group, HSR Layout, Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
