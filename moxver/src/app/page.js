import InternalHero from '@/components/InternalHero/InternalHero';
import InfoSection from '@/components/InfoSection/InfoSection';

export const metadata = {
  title: 'MOXVER | MS Group Technology',
  description: 'Pioneering technology solutions ranging from enterprise software to disruptive AI, built to future-proof your digital presence.',
};

export default function MoxverPage() {
  return (
    <>
      <InternalHero
        badge="Technology Solutions"
        badgeColor="red"
        title="MOXVER:<br/><em>Architecting Digital Futures.</em>"
        subtitle="Pioneering enterprise technology—from scalable cloud infrastructure to disruptive AI—designed to accelerate your competitive edge."
        bgImage=""
        ctaText="Discover Our Tech"
        ctaLink="/contact"
      />

      <InfoSection
        theme="light"
        imageLeft={true}
        badge="Digital Evolution"
        title="Software Designed for the Modern Enterprise."
        subtitle="We build robust digital ecosystems that scale with your ambitions."
        description={[
          "MOXVER is the technology engine behind MS Group's most transformative projects. We fuse deep engineering expertise with modern design thinking to build platforms that perform flawlessly under pressure.",
          "Whether migrating legacy systems to the cloud or deploying cutting-edge machine learning models, our solutions are engineered for resilience and security."
        ]}
        imageSrc=""
        imageAlt="Modern Technology"
        features={[
          { title: 'Enterprise Architecture', description: 'Designing modular, microservices-based systems that grow without technical debt.' },
          { title: 'Artificial Intelligence', description: 'Custom-trained predictive models and automation tools that optimize daily operations.' },
          { title: 'Cloud Infrastructure', description: 'Secure, high-availability hosting and deployment across AWS, Azure, and Google Cloud.' }
        ]}
      />

      <InfoSection
        theme="dark"
        badge="Performance"
        title="Security & Scale out of the Box"
        description={[
          "We treat security and performance as fundamental requirements, not afterthoughts.",
          "Our tech stack is meticulously curated to guarantee uptime, protect sensitive data, and provide lightning-fast user experiences for millions of concurrent users."
        ]}
        imageSrc=""
        imageAlt="Server Infrastructure"
        features={[
          { title: 'Zero-Trust Security', description: 'Military-grade encryption and rigorous compliance frameworks implemented from day one.' },
          { title: 'Continuous Integration', description: 'Automated testing and deployment pipelines for daily, risk-free feature updates.' },
          { title: '40% Cost Reduction', description: 'Optimizing resource allocation through serverless computing and intelligent scaling.' }
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
