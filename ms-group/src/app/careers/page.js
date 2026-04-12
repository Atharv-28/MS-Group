'use client';

import InternalHero from '@/components/InternalHero/InternalHero';
import styles from './careers.module.css';

const jobs = [
  {
    code: 'MS46',
    title: 'Internship Mentor (Full-Time)',
    program: 'International Internship Program',
    domains:
      'Business Management | Artificial Intelligence | Mechanical Engineering | Aviation & Technology | Computer Science | Electrical Engineering',
    requirements: [
      'Master’s Degree in relevant domain',
      'Willingness to work in Pacific Time (PST) shift',
      'Strong English communication (verbal, reading & listening)',
      'Passion for mentoring and working with students',
    ],
    shift: 'PST',
  },
  {
    code: 'MS99',
    title: 'Project Manager (Full-Time)',
    program: 'Logistics & Supply Chain',
    requirements: [
      '8–10 years of experience in Logistics & Supply Chain Management',
      'MBA from a reputed institution',
      'Strong English communication skills',
      'Familiarity with American & European markets',
      'Proven ability to manage cross-functional teams and deliver projects on time',
      'Strong stakeholder and client management skills',
    ],
    shift: 'IST / PST',
  },
  {
    code: 'MS009',
    title: 'Head – Warehouse Administration (Full-Time)',
    program: 'Warehouse Operations',
    requirements: [
      '10+ years of experience managing large, A-grade warehouses',
      'Strong expertise in warehouse layout planning & administration',
      'In-depth knowledge of FIFO, LIFO, and inventory control systems',
      'Experience in item categorization, space optimization, and process efficiency',
      'Familiarity with WMS (Warehouse Management Systems)',
      'Strong leadership and team management skills',
    ],
    qualification: 'MBA in Supply Chain Management',
    shift: 'Full-time',
  },
  {
    code: 'MS081',
    title: 'Tech Lead (Full-Time)',
    program: 'MOXVER Technology Solutions',
    schedule: '5 Days Working',
    requirements: [
      '5+ years of experience in the technology domain',
      'Strong expertise in Software Testing & Quality Assurance',
      'Hands-on experience with Playwright and Selenium',
      'Solid understanding of automation frameworks and testing strategies',
      'Ability to lead testing efforts and guide development teams',
      'Strong problem-solving and analytical skills',
    ],
    qualification: 'Bachelor’s Degree in Computer Science or related field',
    preferred: [
      'Experience with CI/CD pipelines',
      'Knowledge of API testing and performance testing',
      'Familiarity with Agile/Scrum methodologies',
      'Exposure to cloud-based testing environments',
    ],
    shift: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <>
      <InternalHero
        badge="Careers"
        badgeColor="red"
        title="Build the Future.<br/><em>Shape Your Legacy.</em>"
        subtitle="Join our multi-disciplinary team of visionaries, engineers, and strategists. At MS Group, diverse talents converge to solve global challenges."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
      />

      <section className={styles.careers}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Open Positions</span>
            <h2 className={styles.title}>Current Openings</h2>
            <div className={styles.divider}></div>
            <p className={styles.subtitle}>
              Explore current opportunities across MS Group verticals. Click any role to apply — please include the correct job title and position code in your application.
            </p>
          </div>

          <div className={styles.jobList}>
            {jobs.map((job) => {
              const mailto = `mailto:founder@msgroup.cc?subject=${encodeURIComponent(
                `${job.title} - Position Code ${job.code}`
              )}`;

              return (
                <div key={job.code} className={styles.jobCard}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.metaItem}>
                        <strong>Code:</strong>&nbsp;{job.code}
                      </span>
                      {job.shift && (
                        <span className={styles.metaItem}>
                          <strong>Shift:</strong>&nbsp;{job.shift}
                        </span>
                      )}
                      {job.program && (
                        <span className={styles.metaItem}>
                          <strong>Program:</strong>&nbsp;{job.program}
                        </span>
                      )}
                    </div>

                    {job.domains && <p className={styles.domainList}>{job.domains}</p>}

                    <ul className={styles.requirements}>
                      {job.requirements.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>

                    {job.qualification && (
                      <p className={styles.qualification}><strong>Qualification:</strong> {job.qualification}</p>
                    )}

                    {job.preferred && (
                      <div className={styles.preferredBlock}>
                        <strong>Preferred:</strong>
                        <ul className={styles.requirements}>
                          {job.preferred.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className={styles.jobAction}>
                    <a className={styles.applyBtn} href={mailto}>Apply Now</a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.bottomCTA}>
            <h3 className={styles.bottomTitle}>How to Apply</h3>
            <p className={styles.bottomDesc}>
              Send your job application with correct Job Title and Position code to <strong>founder@msgroup.cc</strong> with:
            </p>
            <ol className={styles.applyList}>
              <li>Updated Resume.</li>
              <li>Cover letter.</li>
            </ol>
            <a href="mailto:founder@msgroup.cc" className={styles.bottomBtn}>Apply via Email</a>
          </div>

          <div className={styles.offers}>
            <h3 className={styles.title}>What We Offer</h3>
            <div className={styles.offerList}>
              <div className={styles.offerItem}>Competitive salary (best in the industry)</div>
              <div className={styles.offerItem}>Open learning & development culture</div>
              <div className={styles.offerItem}>Strong ethical work environment</div>
              <div className={styles.offerItem}>Excellent growth and career opportunities</div>
              <div className={styles.offerItem}>Flexible work environment</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
