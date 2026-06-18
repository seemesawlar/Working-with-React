import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/InnerPage.module.css";

const categories = [
  {
    label: "Getting Started",
    faqs: [
      {
        q: "How do I get a quote?",
        a: "Call us at (780) 916-6652 or fill out the contact form on our website. We'll schedule a free, no-obligation on-site consultation — usually within a few days — and provide a detailed written estimate shortly after.",
      },
      {
        q: "Are your estimates really free?",
        a: "Yes, completely free and no-obligation. We visit your home, assess the scope, and provide a detailed written quote. You decide if you want to move forward — no pressure.",
      },
    {
  q: "How far in advance should I book?",
  a: "Demand for renovation services in Edmonton is high, especially spring through fall. We recommend reaching out as soon as possible to start planning your project, as availability can fill up quickly. We occasionally have earlier openings for smaller projects, depending on our schedule.",
},
      {
        q: "Do you work outside Edmonton?",
        a: "Yes. We regularly work in St. Albert, Sherwood Park, Spruce Grove, Leduc, and other communities in the greater Capital Region. Contact us with your location and project details.",
      },
    ],
  },
  {
    label: "Basement Development",
    faqs: [
      {
        q: "How long does a basement development take?",
        a: "A typical basement finishing project takes 6–12 weeks depending on size, finish level, and complexity. We'll give you a realistic timeline in your quote and keep you updated throughout.",
      },
      {
        q: "Do I need a permit for a basement renovation?",
        a: "Yes, in almost all cases. Element Reno handles the permit application process on your behalf. Permitted work protects you when selling your home and ensures the work meets code.",
      },
      {
        q: "Can you add a legal basement suite?",
        a: "Yes. Legal secondary suites require specific egress windows, fire separation, separate entrances, and other code requirements. We've completed several and will guide you through the process.",
      },
      {
        q: "What's included in a 'full basement finish'?",
        a: "Typically: framing, insulation, drywall, vapour barrier, electrical rough-in and fixtures, plumbing rough-in if needed, flooring, doors, trim, and painting. We can also add a bathroom, wet bar, or custom elements.",
      },
    ],
  },
  {
    label: "Deck Building",
    faqs: [
      {
        q: "What's the difference between wood and composite decking?",
        a: "Wood (cedar or pressure-treated) is lower upfront cost and has a traditional look, but requires regular maintenance — staining every 2–3 years. Composite costs more initially but is virtually maintenance-free and resists fading and rot. We can help you weigh the tradeoffs for your situation.",
      },
      {
        q: "Do I need a permit for a deck?",
        a: "In the City of Edmonton, a building permit is required for decks over 0.6m (2 feet) above grade. We handle the permit application and structural drawings as part of the project.",
      },
      {
        q: "How long does a deck build take?",
        a: "Most decks take 1–3 weeks from start to finish. Larger multi-level projects or those with pergolas and electrical can take 3–5 weeks. We'll give you a clear timeline in your estimate.",
      },
      {
        q: "Can you build a deck in winter?",
        a: "We typically do deck construction from late spring through early fall when ground conditions and temperatures allow for safe structural work. We can plan and finalize designs over the winter for a spring build.",
      },
    ],
  },
  {
    label: "Project Management & Payments",
    faqs: [
      {
        q: "Will I have one point of contact throughout my project?",
        a: "Yes. Every project is assigned a dedicated project manager who is your single point of contact from start to finish. You'll never be passed around or left wondering who to call.",
      },
      {
        q: "What does your payment structure look like?",
        a: "We typically work with a deposit at contract signing, progress payments at defined milestones, and a final payment on completion and your sign-off. The exact structure is outlined clearly in your contract.",
      },
      {
        q: "What if I want to make changes during the project?",
        a: "Changes happen. We handle them with a written change order that outlines the scope, cost, and timeline adjustment. Nothing is added to your project without your written approval.",
      },
      {
        q: "Do you offer a warranty on your work?",
        a: "Yes. We provide a workmanship warranty on all our projects. Material warranties vary by product and manufacturer. Full details are included in your contract.",
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.faqChevron} aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <div className={styles.faqA}><p>{a}</p></div>}
    </div>
  );
}

export default function Faqs() {
  return (
    <>
      <Head><title>FAQs | Element Reno — Edmonton Renovation Specialists</title></Head>

      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.breadcrumb}><Link href="/">Home</Link> / FAQs</p>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>Answers to the questions homeowners ask us most often.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.faqIntro}>
          <p className={styles.body}>Can't find the answer you're looking for? Call us directly at <a href="tel:+17809166652" className={styles.inlineLink}>(780) 916-6652</a> or <Link href="/contact" className={styles.inlineLink}>send us a message</Link> — we're happy to answer any question about your project.</p>
        </div>

        {categories.map(cat => (
          <div key={cat.label} className={styles.faqCategory}>
            <h2 className={styles.faqCatTitle}>{cat.label}</h2>
            <div className={styles.faqList}>
              {cat.faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        ))}
      </section>

      <div className={styles.ctaStrip}>
        <h2 className={styles.ctaH}>Still have questions?</h2>
        <p className={styles.ctaP}>We're always happy to talk through your project. Book a free consultation or give us a call.</p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.btnPrimary}>Book a Free Consultation</Link>
          <a href="tel:+17809166652" className={styles.ctaPhone}>(780) 916-6652</a>
        </div>
      </div>
    </>
  );
}
