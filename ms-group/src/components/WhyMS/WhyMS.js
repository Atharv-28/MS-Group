import styles from './WhyMS.module.css';

const pillars = [
  {
    id: 'expertise',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"></circle>
        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"></path>
        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"></path>
      </svg>
    ),
    title: 'Integrated Expertise',
    description:
      'Our multi-vertical approach ensures that strategy, logistics, and tech work in perfect harmony across all business dimensions.',
  },
  {
    id: 'standards',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    title: 'Global Standards',
    description:
      'We maintain international benchmarks of quality and ethics across every continent we serve—without compromise.',
  },
  {
    id: 'tailored',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    title: 'Tailored Solutions',
    description:
      'No two businesses are alike. We build custom frameworks designed for your specific industry needs and growth trajectory.',
  },
];

export default function WhyMS() {
  return (
    <section className={styles.why} id="why-ms">
      <div className={styles.container}>
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <div key={p.id} className={styles.pillar} id={`pillar-${p.id}`}>
              <div className={styles.pillarIcon} aria-hidden="true">
                {p.icon}
              </div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
