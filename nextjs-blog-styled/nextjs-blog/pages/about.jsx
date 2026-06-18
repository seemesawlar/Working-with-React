import Head from "next/head";
import Link from "next/link";
import styles from "../styles/InnerPage.module.css";

const team = [
  {
    name: "Emerald Oyeniyi",
    role: "Founder & Lead Project Manager",
    bio:"With a well studied renovation plans in the Edmonton renovation industry, Element Reno was established on the belief that every homeowner deserves clear communication, honest pricing, and work they're proud to show off.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Elsa Oyeniyi",
    role: "Senior Carpenter & Deck Specialist",
    bio: "Marcus brings 12 years of precision carpentry to every deck and outdoor project. He treats every board like it'll be inspected for the next 30 years — because it will be.",
    img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&q=80",
  },
  {
    name: "Enoch Oyeniyi",
    role: "Basement Development Lead",
    bio: "Priya specialises in turning rough unfinished spaces into polished living areas. Her eye for layout and finish detail means clients always get more than they expected.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
];

const values = [
  { icon: "🤝", title: "Honest communication",  desc: "We tell you what's realistic, what it costs, and when it'll be done — before we start." },
  { icon: "🔨", title: "Craftsmanship first",   desc: "We don't cut corners. Every nail, seam, and finish is done right the first time." },
  { icon: "🏠", title: "Edmonton expertise",    desc: "We build for this climate, these code requirements, and these homeowners." },
  { icon: "♻️", title: "Clean & responsible",   desc: "We leave your property better than we found it and dispose of waste responsibly." },
];

export default function About() {
  return (
    <>
      <Head><title>About Us | Element Reno — Edmonton Renovation Specialists</title></Head>

      {/* Page hero banner */}
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
            <h2 className={styles.h2}>Homeowner-Focused</h2>
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

      {/* Team */}
      <section className={styles.section}>
        <p className={styles.eyebrow}>Meet the Team</p>
        <h2 className={styles.h2}>The people behind the work</h2>
        <div className={styles.teamGrid}>
          {team.map(m => (
            <div key={m.name} className={styles.teamCard}>
              <img src={m.img} alt={m.name} className={styles.teamImg} loading="lazy" />
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>{m.name}</h3>
                <p className={styles.teamRole}>{m.role}</p>
                <p className={styles.teamBio}>{m.bio}</p>
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
