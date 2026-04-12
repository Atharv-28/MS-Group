import { Geist, Geist_Mono } from "next/font/google";
import MavensideNavbar from '@/components/MavensideNavbar/Navbar';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MavensideLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
      <MavensideNavbar />

      <div style={{ flex: 1 }}>{children}</div>

      <footer style={{ backgroundColor: '#111827', color: '#fff', padding: '4rem 2rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', margin: 0, fontWeight: 800, letterSpacing: '-0.5px', color: '#e6a800' }}>MAVENSIDE</h2>
          <p style={{ maxWidth: '600px', margin: 0, color: '#9ca3af', lineHeight: '1.6', fontSize: '0.9375rem' }}>Integrated global logistics and supply chain management solutions that optimize every touchpoint of your product journey.</p>
          <div style={{ display: 'flex', gap: '2rem', padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', width: '100%', justifyContent: 'center' }}>
            <Link href="/mavenside" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem', transition: 'color 0.2s' }}>Home</Link>
            <Link href="/mavenside/services" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem', transition: 'color 0.2s' }}>Services</Link>
            <Link href="/mavenside/leadership" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem', transition: 'color 0.2s' }}>Leadership</Link>
            <Link href="/mavenside/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem', transition: 'color 0.2s' }}>Contact Us</Link>
          </div>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} MS Group Logistics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
