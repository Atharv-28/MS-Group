'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import navlogo from '@/assets/navlogo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Leadership', href: '/leadership' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="ClientWise Home" onClick={closeMenu}>
          <Image
            src={navlogo}
            alt="ClientWise"
            width={600}
            height={120}
            unoptimized
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.ctaBtn}>
            Contact Us
          </Link>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.mobileNavLink} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.mobileCtaBtn} onClick={closeMenu}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}
