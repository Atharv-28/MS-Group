'use client';

import InternalHero from '@/components/InternalHero/InternalHero';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <>
      <InternalHero
        badge="Get in Touch"
        badgeColor="gold"
        title="Reach Out.<br/><em>Let's Build the Future.</em>"
        subtitle="Our global team is ready to discuss how MS Group can architect solutions for your most pressing business challenges."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      />

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Left: Contact Info */}
            <div className={styles.infoCol}>
              <h2 className={styles.title}>Global Headquarters</h2>
              <div className={styles.hq}>
                <h3 className={styles.hqCity}>Bangalore, India</h3>
                <p className={styles.address}>
                  MS Group Tower, 45th Avenue<br />
                  HSR Layout, Sector 2<br />
                  Bangalore, Karnataka 560102<br />
                  India
                </p>
                <div className={styles.contactMethods}>
                  <a href="mailto:info@msgroup.cc" className={styles.contactLink}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    info@msgroup.cc
                  </a>
                  <a href="tel:+918001234567" className={styles.contactLink}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.02-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +91 800 123 4567
                  </a>
                </div>
              </div>

              <div className={styles.branches}>
                <h3 className={styles.branchesTitle}>Global Branches</h3>
                <div className={styles.branchList}>
                  <div className={styles.branch}>
                    <h4>Mumbai</h4>
                    <p>BKC Drive, Bandra East<br/>+91 220 987 6543</p>
                  </div>
                  <div className={styles.branch}>
                    <h4>New York</h4>
                    <p>One World Trade Center<br/>+1 212 555 0198</p>
                  </div>
                  <div className={styles.branch}>
                    <h4>London</h4>
                    <p>Canary Wharf, 1 Canada Sq<br/>+44 20 7123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={styles.formCol}>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <h3 className={styles.formTitle}>Send an Inquiry</h3>
                <p className={styles.formDesc}>
                  Select the vertical you are interested in, and our team will get back to you within 24 hours.
                </p>

                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label>First Name</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="john@company.com" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+1 234 567 8900" />
                  </div>
                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Area of Interest</label>
                    <select required defaultValue="">
                      <option value="" disabled>Select a vertical</option>
                      <option value="clientwise">ClientWise (Consulting)</option>
                      <option value="mavenside">Mavenside (Logistics)</option>
                      <option value="moxver">MOXVER (Technology)</option>
                      <option value="general">General Corporate Inquiry</option>
                    </select>
                  </div>
                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Message</label>
                    <textarea rows="4" placeholder="How can we help you?" required></textarea>
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
