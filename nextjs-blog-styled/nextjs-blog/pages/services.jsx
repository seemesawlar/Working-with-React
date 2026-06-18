import Head from "next/head";
import Link from "next/link";
import styles from "../styles/InnerPage.module.css";

const serviceList = [
  {
    id: "basement",
    title: "Basement Development",
    tagline: "Transform your unfinished basement into high-value living space.",
    img: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80",
    items: [
      "Full basement finishing & framing",
      "Entertainment rooms & home theatres",
      "Guest suites & legal basement suites",
      "Home gyms, offices & studios",
      "Wet bars & laundry room upgrades",
      "Waterproofing, insulation & drywall",
      "Flooring, lighting & trim",
      "Permit application & inspections",
    ],
  },
  {
    id: "decks",
    title: "Deck Building",
    tagline: "Custom outdoor living spaces designed for Edmonton's climate.",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80",
    items: [
      "Wood (cedar, pressure-treated) & composite decks",
      "Multi-level and wraparound designs",
      "Stairs, railings & built-in seating",
      "Pergolas, privacy walls & shade structures",
      "Outdoor lighting & electrical rough-in",
      "Deck refinishing, repairs & replacements",
      "Hot tub pads & outdoor kitchen platforms",
      "Permit application & structural drawings",
    ],
  },
  {
    id: "renovations",
    title: "Home Renovations",
    tagline: "Complete renovation support from planning to final walkthrough.",
    img: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80",
    items: [
      "Kitchen & bathroom renovations",
      "Flooring replacement (hardwood, LVP, tile)",
      "Exterior upgrades & siding",
      "Interior remodelling & room additions",
      "Window & door replacements",
      "Painting, trim & finish carpentry",
      "Project planning & permit support",
      "Maintenance & repair work",
    ],
  },
];

const process = [
  { step: "01", title: "Free consultation",   desc: "We visit your home, listen to your vision, and assess what's involved. No obligation, no pressure." },
  { step: "02", title: "Detailed estimate",   desc: "You receive a written, itemised quote within a few days. No hidden fees, no vague line items." },
  { step: "03", title: "Project kickoff",     desc: "We handle permits, schedule the crew, and keep you informed before we lift a tool." },
  { step: "04", title: "Build & update",      desc: "Your dedicated project manager keeps you updated at every stage. You always know what's happening." },
  { step: "05", title: "Final walkthrough",   desc: "We walk through the finished project together. Nothing is closed out until you're satisfied." },
];

export default function Services() {
  return (
    <>
      <Head><title>Our Services | Element Reno — Basement, Deck & Renovation Specialists</title></Head>

      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.breadcrumb}><Link href="/">Home</Link> / Our Services</p>
          <h1 className={styles.pageTitle}>Our Services</h1>
          <p className={styles.pageSubtitle}>Basements, decks, and full-home renovations — done right the first time.</p>
        </div>
      </div>

      {/* Services */}
      {serviceList.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={idx % 2 === 0 ? styles.section : styles.tintSection}
        >
          <div className={styles.twoCol} style={{ alignItems: "flex-start" }}>
            {idx % 2 === 0 ? (
              <>
                <div>
                  <p className={styles.eyebrow}>Service {String(idx+1).padStart(2,"0")}</p>
                  <h2 className={styles.h2}>{svc.title}</h2>
                  <p className={styles.lead}>{svc.tagline}</p>
                  <ul className={styles.checkList}>
                    {svc.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <Link href="/contact" className={styles.btnPrimary} style={{ marginTop: "1.5rem", display: "inline-flex" }}>Get a Quote</Link>
                </div>
                <img src={svc.img} alt={svc.title} className={styles.sideImg} loading="lazy" />
              </>
            ) : (
              <>
                <img src={svc.img} alt={svc.title} className={styles.sideImg} loading="lazy" />
                <div>
                  <p className={styles.eyebrow}>Service {String(idx+1).padStart(2,"0")}</p>
                  <h2 className={styles.h2}>{svc.title}</h2>
                  <p className={styles.lead}>{svc.tagline}</p>
                  <ul className={styles.checkList}>
                    {svc.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <Link href="/contact" className={styles.btnPrimary} style={{ marginTop: "1.5rem", display: "inline-flex" }}>Get a Quote</Link>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* Process */}
      <section className={styles.darkStripSection}>
        <p className={styles.eyebrowGold}>How It Works</p>
        <h2 className={styles.h2Light}>Our 5-step process</h2>
        <div className={styles.processGrid}>
          {process.map(p => (
            <div key={p.step} className={styles.processCard}>
              <span className={styles.processStep}>{p.step}</span>
              <h3 className={styles.processTitle}>{p.title}</h3>
              <p className={styles.processDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.ctaStrip}>
        <h2 className={styles.ctaH}>Not sure which service you need?</h2>
        <p className={styles.ctaP}>Call us or book a free consultation — we'll help you figure out the best plan for your home and budget.</p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.btnPrimary}>Book a Free Consultation</Link>
          <a href="tel:+17809166652" className={styles.ctaPhone}>(780) 916-6652</a>
        </div>
      </div>
    </>
  );
}
