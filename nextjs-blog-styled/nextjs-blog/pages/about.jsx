import Head from "next/head";
import Link from "next/link";
import styles from "../styles/InnerPage.module.css";
import aStyles from "../styles/About.module.css";

const values = [
  { icon: "🤝", title: "Honest communication",  desc: "We tell you what's realistic, what it costs, and when it'll be done — before we start." },
  { icon: "🔨", title: "Craftsmanship first",   desc: "We don't cut corners. Every nail, seam, and finish is done right the first time." },
  { icon: "🏠", title: "Edmonton expertise",    desc: "We build for this climate, these code requirements, and these homeowners." },
  { icon: "♻️", title: "Clean & responsible",   desc: "We leave your property better than we found it and dispose of waste responsibly." },
];

const proofStats = [
  { value: "100+", label: "Projects delivered",        sub: "across Edmonton & the Capital Region" },
  { value: "100%", label: "Licensed & insured",        sub: "fully compliant with Alberta building codes" },
  { value: "1",    label: "Dedicated project manager", sub: "your single point of contact, start to finish" },
  { value: "Free", label: "Estimates",                 sub: "no obligation, no pressure, just clarity" },
];

const commitments = [
  {
    icon: "📄",
    title: "Written estimates, always",
    desc: "Every quote is itemised in writing before a single tool is lifted. No verbal agreements, no surprise line items at the end.",
  },
  {
    icon: "📅",
    title: "Schedules we actually keep",
    desc: "We build realistic timelines and communicate proactively if anything changes. Your time matters as much as your budget.",
  },
  {
    icon: "🔑",
    title: "Permit-ready work",
    desc: "We handle permit applications on your behalf and build to code. That protects your home's value and gives you peace of mind at resale.",
  },
  {
    icon: "🧹",
    title: "Clean sites, every day",
    desc: "We tidy up at the end of every working day. You shouldn't have to live in a construction zone for the duration of your project.",
  },
  {
    icon: "✅",
    title: "Signed off by you",
    desc: "Nothing is closed out until you've walked through the finished work and are satisfied. Your sign-off is the only sign-off that matters.",
  },
  {
    icon: "🛡️",
    title: "Workmanship warranty",
    desc: "We stand behind what we build. All projects come with a written workmanship warranty — details outlined in your contract.",
  },
];

const milestones = [
  { year: "Founded", note: "Element Reno established in Edmonton with a focus on basement development and deck building" },
  { year: "50+",     note: "Projects completed milestone reached — growing entirely through referrals and repeat clients" },
  { year: "Today",   note: "100+ completed projects, serving Edmonton and the greater Capital Region with a full renovation offering" },
];

export default function About() {
  return (
    <>
      <Head><title>About Us | Element Reno — Edmonton Renovation Specialists</title></Head>

      {/* Page hero */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.breadcrumb}><Link href="/">Home</Link> / About Us</p>
          <h1 className={styles.pageTitle}>About Element Reno</h1>
          <p className={styles.pageSubtitle}>Built on trust, driven by craftsmanship, rooted in Edmonton.</p>
        </div>
      </div>

      {/* Our story */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <p className={styles.eyebrow}>Our Story</p>
            <h2 className={styles.h2}>Homeowner-focused from day one</h2>
            <p className={styles.body}>Element Reno was founded with a simple idea: renovation shouldn't be stressful. Too many homeowners had been burned by missed deadlines, surprise invoices, and crews who disappeared mid-project. We set out to be the renovation company we wished existed.</p>
            <p className={styles.body}>We started with basement finishing and deck building — the two projects that reliably increase home value and quality of life in Edmonton. Over time we expanded to full-home renovations, always keeping the same commitment: one dedicated project manager, transparent pricing, and work we'd be proud to put our name on.</p>
            <p className={styles.body}>Today, Element Reno has completed over 100 projects across Edmonton and the Capital Region, and most of our new clients come from referrals. That's the metric we care about most.</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80"
              alt="Element Reno team planning a renovation project"
              className={styles.sideImg}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Proof stats */}
      <section className={styles.darkStripSection}>
        <p className={styles.eyebrowGold}>By the Numbers</p>
        <h2 className={styles.h2Light}>Results you can count on</h2>
        <div className={aStyles.proofGrid}>
          {proofStats.map(s => (
            <div key={s.label} className={aStyles.proofCard}>
              <span className={aStyles.proofValue}>{s.value}</span>
              <span className={aStyles.proofLabel}>{s.label}</span>
              <span className={aStyles.proofSub}>{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={styles.tintSection}>
        <p className={styles.eyebrow}>What Drives Us</p>
        <h2 className={styles.h2}>Our core values</h2>
        <div className={styles.valGrid}>
          {values.map(v => (
            <div key={v.title} className={styles.valCard}>
              <span className={styles.valIcon}>{v.icon}</span>
              <h3 className={styles.valTitle}>{v.title}</h3>
              <p className={styles.valDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our commitments (replaces team) */}
      <section className={styles.section}>
        <p className={styles.eyebrow}>Our Commitments</p>
        <h2 className={styles.h2}>What every Element Reno client can expect</h2>
        <p className={styles.lead}>These aren't aspirations — they're the standard we hold ourselves to on every single project.</p>
        <div className={aStyles.commitGrid}>
          {commitments.map(c => (
            <div key={c.title} className={aStyles.commitCard}>
              <span className={aStyles.commitIcon}>{c.icon}</span>
              <div>
                <h3 className={aStyles.commitTitle}>{c.title}</h3>
                <p className={aStyles.commitDesc}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className={styles.tintSection}>
        <p className={styles.eyebrow}>Our Journey</p>
        <h2 className={styles.h2}>How we got here</h2>
        <div className={aStyles.milestoneList}>
          {milestones.map((m, i) => (
            <div key={i} className={aStyles.milestone}>
              <div className={aStyles.milestoneMarker}>
                <span className={aStyles.milestoneDot} />
                {i < milestones.length - 1 && <span className={aStyles.milestoneLine} />}
              </div>
              <div className={aStyles.milestoneBody}>
                <span className={aStyles.milestoneYear}>{m.year}</span>
                <p className={aStyles.milestoneNote}>{m.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <div className={styles.ctaStrip}>
        <h2 className={styles.ctaH}>Ready to work with us?</h2>
        <p className={styles.ctaP}>Get a free, no-obligation estimate from Edmonton's most trusted renovation crew.</p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.btnPrimary}>Get a Free Estimate</Link>
          <a href="tel:+17809166652" className={styles.ctaPhone}>(780) 916-6652</a>
        </div>
      </div>
    </>
  );
}
