import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'ClientWise | MS Group Consulting',
  description: 'Precision-engineered strategic business consulting designed to navigate complex market dynamics and scale operations.',
};

export default function ClientwisePage() {
  return (
    <>
      <InternalHero
        badge="Strategic Consulting"
        badgeColor="blue"
        title="CLIENTWISE:<br/><em>Navigating Complexity. Driving Growth.</em>"
        subtitle="We provide precision-engineered strategic business consulting designed to help enterprises navigate complex market dynamics and scale operations globally."
        bgImage=""
        ctaText="Partner With Us"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Business Strategy"
        title="Transforming Vision Into Execution."
        subtitle="Bridging the gap between conceptual strategy and operational reality."
        description={[
          "CLIENTWISE operates at the intersection of industry foresight and financial pragmatism. We partner with leadership teams to identify untapped market opportunities and eliminate operational inefficiencies.",
          "Our multi-disciplinary teams bring decades of experience across finance, technology, and global markets to restructure and scale your business for the modern economy."
        ]}
        imageSrc=""
        imageAlt="Consulting Meeting"
        features={[
          { title: 'Market Entry Strategy', description: 'Comprehensive risk assessment and go-to-market planning for international expansion.' },
          { title: 'Operational Restructuring', description: 'Streamlining processes and organizational design to improve margin performance.' },
          { title: 'Mergers & Acquisitions', description: 'End-to-end guidance from target identification through post-merger integration.' }
        ]}
      />

      <InfoSection
        theme="dark"
        badge="The Edge"
        title="Strategic Depth. Tangible Results."
        description={[
          "We don't deal in theoretical frameworks. We deliver actionable blueprints.",
          "Our advisory services are trusted by Fortune 500 companies and agile startups alike, providing the strategic depth required to build resilient, future-ready global enterprises."
        ]}
        imageSrc=""
        imageAlt="Business Analytics"
        features={[
          { title: '60% Faster Expansion', description: 'Our clients enter new markets with unprecedented speed.' },
          { title: 'Data-Driven Insights', description: 'Proprietary analytical models that remove the guesswork from leadership decisions.' },
          { title: 'Change Management', description: 'Ensuring your workforce adapts alongside your evolving business model.' }
        ]}
      />
    </>
  );
}
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.js file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
