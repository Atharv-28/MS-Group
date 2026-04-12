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
            {/* social icons removed per request */}
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
