import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./HomePage.module.css";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    eyebrow: "Edmonton's Renovation Specialists",
    headline: "Complete Solutions for Every Home",
    sub: "Basement development, custom decks, and full-home renovations — built to last in Edmonton's climate.",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    eyebrow: "Basement Development",
    headline: "Transform Your Unfinished Basement",
    sub: "Turn dark, unused space into a finished suite, home gym, or entertainment room your family will love.",
  },
  {
    image: "https://images.unsplash.com/photo-1591972863054-cb79fcf96a04?w=1600&q=80",
    eyebrow: "Custom Deck Building",
    headline: "Outdoor Living Spaces Built to Impress",
    sub: "Wood, composite, multi-level — designed for your lifestyle and engineered for Edmonton winters.",
  },
];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "100%",  label: "Customer Satisfaction Focus"   },
  { value: "100%", label: "Licensed & Insured" },
  { value: "Free", label: "Estimates"          },
];

const services = [
  {
    title: "Basement Development",
    desc:  "Full basement finishing, entertainment rooms, guest suites, home gyms, wet bars — we handle framing, insulation, flooring, and everything in between.",
    href:  "/services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    title: "Deck Building",
    desc:  "Wood and composite decks, multi-level and wraparound designs, pergolas, built-in seating, and outdoor lighting — built for Edmonton summers and winters.",
    href:  "/services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 17h18M5 21V7l7-4 7 4v14"/>
        <rect x="9" y="13" width="6" height="8"/>
      </svg>
    ),
  },
  {
    title: "Full-Home Renovations",
    desc:  "Kitchen and bathroom updates, exterior upgrades, siding, interior remodelling — complete renovation support with project planning and permit assistance.",
    href:  "/services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

const whyUs = [
  { icon: "🏅", title: "Basement & deck specialists",  desc: "Deep expertise in the two renovations that add the most value to Edmonton homes." },
  { icon: "📋", title: "Dedicated project management", desc: "One point of contact from first consultation through final walkthrough — no hand-offs." },
  { icon: "🔩", title: "Quality materials, clean sites", desc: "Precise installation, premium products, and a job site your neighbours won't complain about." },
  { icon: "💬", title: "Transparent pricing",           desc: "Detailed written estimates, no surprise invoices, and scheduling you can count on." },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=75",  alt: "Finished basement living room", span: true },
  { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&q=75", alt: "Custom outdoor deck" },
  { src: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=75",  alt: "Modern kitchen renovation" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75", alt: "Basement home gym" },
  { src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=75", alt: "Multi-level deck with pergola" },
];

const testimonials = [
  { name: "Karen T.",       location: "West Edmonton", quote: "Element Reno turned our cold, unfinished basement into a proper family room. The team was on time, communicated every step, and the result exceeded what we imagined. Would recommend without hesitation." },
  { name: "Mark & Lisa P.", location: "Windermere",   quote: "We had a two-level deck built and it completely changed how we use our backyard. Solid craftsmanship, fair price, and they cleaned up like they were never there. Already planning our next project." },
  { name: "Raj S.",         location: "Summerside",   quote: "From the first call to the final walkthrough, everything was professional and transparent. No surprises on the invoice, no delays — just a beautiful finished basement delivered on time." },
  { name: "Diane F.",       location: "Glenora",      quote: "The kitchen renovation came out beautifully. They handled permits, stayed within budget, and kept me informed daily. It's rare to find a contractor that actually does what they say." },
];

function StarRow() {
  return (
    <div className={styles.stars} aria-label="5 out of 5 stars">
      {[1,2,3,4,5].map(i => <span key={i} aria-hidden="true" className={styles.star}>★</span>)}
    </div>
  );
}

export default function HomePage() {
  const [heroIdx,    setHeroIdx]    = useState(0);
  const [prevHeroIdx,setPrevHeroIdx]= useState(null);
  const [testIdx,    setTestIdx]    = useState(0);
  const [form,       setForm]       = useState({ name: "", phone: "", message: "" });
  const [submitted,  setSubmitted]  = useState(false);
  const heroTimer = useRef(null);

  // Hero auto-rotate
  useEffect(() => {
    heroTimer.current = setInterval(() => {
      setHeroIdx(i => {
        setPrevHeroIdx(i);
        return (i + 1) % heroSlides.length;
      });
    }, 5500);
    return () => clearInterval(heroTimer.current);
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const t = setInterval(() => setTestIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  function goToSlide(i) {
    clearInterval(heroTimer.current);
    setPrevHeroIdx(heroIdx);
    setHeroIdx(i);
  }

  const visibleTests = [0,1,2].map(offset => testimonials[(testIdx + offset) % testimonials.length]);

  function handleChange(e) { setForm(p => ({ ...p, [e.target.name]: e.target.value })); }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true); }

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero} aria-label="Hero banner">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === heroIdx ? styles.slideActive : ""} ${i === prevHeroIdx ? styles.slidePrev : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={i !== heroIdx}
          />
        ))}
        <div className={styles.heroOverlay} />
        {/* heroContent uses same max-width + padding as .homeinner so text aligns with header items */}
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>{heroSlides[heroIdx].eyebrow}</p>
            <h1 className={styles.heroHeadline}>{heroSlides[heroIdx].headline}</h1>
            <p className={styles.heroSub}>{heroSlides[heroIdx].sub}</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.btnNavy}>Get a Free Estimate</Link>
              <Link href="/services" className={styles.btnOutline}>Our Services</Link>
            </div>
          </div>
        </div>
        <div className={styles.heroDots} role="tablist" aria-label="Hero slides">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === heroIdx}
              aria-label={`Slide ${i + 1}`}
              className={`${styles.dot} ${i === heroIdx ? styles.dotActive : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsBar} aria-label="Company statistics">
        {stats.map(s => (
          <div key={s.label} className={styles.statCell}>
            <span className={styles.statNum}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.lightSection} aria-labelledby="services-title">
        <div className={styles.homeinner}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 id="services-title" className={styles.sectionTitle}>Built for every part of your home</h2>
          <p className={styles.sectionSub}>From unfinished basements to outdoor living spaces, our crews deliver lasting results across every project type.</p>
          <div className={styles.serviceGrid}>
            {services.map(s => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>{s.icon}</div>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
                <Link href={s.href} className={styles.serviceLink}>Learn more <span aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={styles.tintSection} aria-labelledby="why-title">
        <div className={styles.homeinner}>
          <div className={styles.whyGrid}>
            <div>
              <p className={styles.eyebrow}>Why Element Reno</p>
              <h2 id="why-title" className={styles.sectionTitle}>The difference is in the details</h2>
              <ul className={styles.whyList}>
                {whyUs.map(w => (
                  <li key={w.title} className={styles.whyItem}>
                    <span className={styles.whyEmoji} aria-hidden="true">{w.icon}</span>
                    <div>
                      <h3 className={styles.whyItemTitle}>{w.title}</h3>
                      <p className={styles.whyItemDesc}>{w.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.whyRight}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Element Reno construction crew on an Edmonton project"
                className={styles.whyImg}
                loading="lazy"
              />
              <div className={styles.whyBadge} aria-label="10 plus years of proven results">
                <span className={styles.whyBadgeNum}>100%</span>
                <span className={styles.whyBadgeText}>Customer<br /> Satisfaction Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className={styles.lightSection} aria-labelledby="gallery-title">
        <div className={styles.homeinner}>
          <p className={styles.eyebrow}>Our Work</p>
          <h2 id="gallery-title" className={styles.sectionTitle}>Recent projects</h2>
          <div className={styles.galleryGrid}>
            {gallery.map((img, i) => (
              <div key={i} className={`${styles.galleryItem} ${img.span ? styles.gallerySpan : ""}`}>
                <img src={img.src} alt={img.alt} className={styles.galleryImg} loading="lazy" />
              </div>
            ))}
          </div>
          <div className={styles.galleryCta}>
            <Link href="/services" className={styles.btnNavy}>See all projects</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.darkSection} aria-labelledby="test-title">
        <div className={styles.homeinner}>
          <p className={styles.eyebrowLight}>Client Stories</p>
          <h2 id="test-title" className={styles.sectionTitleLight}>What Edmonton homeowners say</h2>
          <div className={styles.testGrid}>
            {visibleTests.map((t, i) => (
              <article key={i} className={styles.testCard}>
                <StarRow />
                <blockquote className={styles.testQuote}>"{t.quote}"</blockquote>
                <footer className={styles.testFooter}>
                  <span className={styles.testName}>{t.name}</span>
                  <span className={styles.testLoc}>{t.location}</span>
                </footer>
              </article>
            ))}
          </div>
          <div className={styles.testDots} role="tablist" aria-label="Testimonial pages">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === testIdx}
                aria-label={`Testimonials page ${i + 1}`}
                className={`${styles.dot} ${i === testIdx ? styles.dotActive : styles.dotDark}`}
                onClick={() => setTestIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner} aria-label="Call to action">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>Ready to start your renovation?</h2>
          <p className={styles.ctaSub}>Get a free, no-obligation estimate. Most consultations booked within 48 hours.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.btnNavy}>Book a Free Consultation</Link>
            <a href="tel:+17809166652" className={styles.ctaPhone}>(780) 916-6652</a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.lightSection} aria-labelledby="contact-title">
        <div className={styles.homeinner}>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.eyebrow}>Service Area</p>
              <h2 id="contact-title" className={styles.sectionTitle}>Serving Edmonton &amp; surrounding areas</h2>
              <p className={styles.contactDesc}>We work throughout Edmonton and the greater Capital Region — including St. Albert, Sherwood Park, Spruce Grove, Leduc, and beyond.</p>
              <div className={styles.mapWrap} aria-label="Service area map placeholder">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=70"
                  alt="Aerial view of Edmonton, Alberta"
                  className={styles.mapImg}
                  loading="lazy"
                />
                <div className={styles.mapOverlay}>Edmonton &amp; Capital Region</div>
              </div>
            </div>

            <div>
              <p className={styles.eyebrow}>Get in Touch</p>
              <h3 className={styles.formTitle}>Send us a message</h3>
              {submitted ? (
                <div className={styles.successMsg} role="status">
                  <span aria-hidden="true">✓</span> Thanks! We'll be in touch within one business day.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <label htmlFor="hp-name" className={styles.label}>Your name</label>
                  <input id="hp-name" name="name" type="text" className={styles.input}
                    placeholder="Jane Smith" value={form.name} onChange={handleChange} required />

                  <label htmlFor="hp-phone" className={styles.label}>Phone number</label>
                  <input id="hp-phone" name="phone" type="tel" className={styles.input}
                    placeholder="(780) 555-0100" value={form.phone} onChange={handleChange} required />

                  <label htmlFor="hp-message" className={styles.label}>What are you working on?</label>
                  <textarea id="hp-message" name="message" className={styles.textarea}
                    placeholder="Describe your project — basement finish, deck build, renovation, etc."
                    rows={4} value={form.message} onChange={handleChange} required />

                  <button type="submit" className={styles.btnNavyFull}>Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
