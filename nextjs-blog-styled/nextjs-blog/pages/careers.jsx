import Head from "next/head";
import Link from "next/link";
import styles from "../styles/InnerPage.module.css";
import cStyles from "../styles/Careers.module.css";

const whyJoin = [
  { icon: "🔨", title: "Real craftsmanship",      desc: "Work on basements, decks, and full renovations where quality is non-negotiable — not cookie-cutter jobs." },
  { icon: "📋", title: "Clear project structure",  desc: "Every job has a dedicated project manager and a real plan. No chaos, no guessing what's next." },
  { icon: "🤝", title: "Respectful culture",       desc: "We treat our crews the way we treat our clients — with honesty, fair pay, and clear communication." },
  { icon: "📈", title: "Room to grow",             desc: "As Element Reno grows across the Capital Region, so do the opportunities for the people who help build it." },
];

const roleTypes = [
  { title: "Carpenters & Framers",        desc: "Skilled tradespeople for basement framing, deck construction, and finish carpentry." },
  { title: "Project Coordinators",        desc: "Organized communicators who can manage schedules, clients, and crews simultaneously." },
  { title: "General Labourers",           desc: "Reliable, hardworking team members looking to learn the trade on real job sites." },
  { title: "Electricians & Plumbers",     desc: "Licensed trades for rough-in and finish work on basement and renovation projects." },
];

export default function Careers() {
  return (
    <>
      <Head><title>Careers | Element Reno — Edmonton Renovation Specialists</title></Head>

      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.breadcrumb}><Link href="/">Home</Link> / Careers</p>
          <h1 className={styles.pageTitle}>Careers at Element Reno</h1>
          <p className={styles.pageSubtitle}>We're not hiring right now — but we're always looking to meet good people for when we are.</p>
        </div>
      </div>

      {/* Status banner */}
      <section className={styles.section}>
        <div className={cStyles.statusBanner}>
          <span className={cStyles.statusDot} aria-hidden="true" />
          <div>
            <p className={cStyles.statusTitle}>No current openings</p>
            <p className={cStyles.statusBody}>We don't have any active positions posted at the moment. When we do, they'll appear right here — along with the role, requirements, and how to apply.</p>
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section className={styles.tintSection}>
        <p className={styles.eyebrow}>Why Element Reno</p>
        <h2 className={styles.h2}>What it's like working with us</h2>
        <div className={styles.valGrid}>
          {whyJoin.map(v => (
            <div key={v.title} className={styles.valCard}>
              <span className={styles.valIcon}>{v.icon}</span>
              <h3 className={styles.valTitle}>{v.title}</h3>
              <p className={styles.valDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles we typically hire for */}
      <section className={styles.section}>
        <p className={styles.eyebrow}>Looking Ahead</p>
        <h2 className={styles.h2}>Roles we typically hire for</h2>
        <p className={styles.lead}>When positions open up, they're usually in one of these areas. If your experience matches, we'd love to hear from you in the meantime.</p>
        <div className={cStyles.roleGrid}>
          {roleTypes.map(r => (
            <div key={r.title} className={cStyles.roleCard}>
              <h3 className={cStyles.roleTitle}>{r.title}</h3>
              <p className={cStyles.roleDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stay in touch */}
      <section className={styles.tintSection}>
        <div className={cStyles.touchCard}>
          <div>
            <p className={styles.eyebrow}>Stay on Our Radar</p>
            <h2 className={styles.h2}>Want to be first in line when we're hiring?</h2>
            <p className={styles.body}>Send us your name, the type of role you're interested in, and a brief note about your experience. We keep a list of strong candidates and reach out directly when a matching position opens.</p>
          </div>
          <div className={cStyles.touchActions}>
            <a href="mailto:simisola.dev@gmail.com?subject=Careers%20Interest%20—%20Element%20Reno" className={styles.btnPrimary}>
              Email Your Interest
            </a>
            <a href="tel:+17809166652" className={cStyles.touchPhone}>(780) 916-6652</a>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <div className={styles.ctaStrip}>
        <h2 className={styles.ctaH}>Looking for renovation services instead?</h2>
        <p className={styles.ctaP}>If you're a homeowner rather than a job seeker, we'd love to help with your next project.</p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.btnPrimary}>Get a Free Estimate</Link>
          <a href="tel:+17809166652" className={styles.ctaPhone}>(780) 916-6652</a>
        </div>
      </div>
    </>
  );
}
