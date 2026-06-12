import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Simisola Oyeniyi";
export const siteTitle = "Next.js Element Reno";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico " />
        <meta name="construction" content="Basement Development" />
        <meta property="og:image" content={""} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.siteHeader}>
        <div className={styles.topBar}>
          <div className={styles.topInner}>
            <div className={styles.topLeft}>
              <span>783 Eagleson Cr NW, Edmonton, AB T6M 0V2</span>
            </div>
            <div className={styles.topRight}>
              <span className={styles.topContact}>Questions? Call us:</span>
              <a href="tel:+17809166652" className={styles.topPhone}>+1 780-916-6652</a>
              <div className={styles.topSocial}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://youtu.be/NNhxmHvZ7Z0" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.navBar}>
          <div className={styles.navInner}>
            <div className={styles.brandRow}>
              <Link href="/" className={styles.brandLink}>
                <img src="/images/nextphoto1.jpg" alt="Element Reno logo" className={styles.brandLogo} width={56} height={56} />
                <div className={styles.brandTextBlock}>
                  <span className={styles.brandName}>Element Reno</span>
                  <span className={styles.brandTag}>Construction & Renovation</span>
                </div>
              </Link>
            </div>

            <nav className={styles.nav} aria-label="Primary navigation">
              <ul className={styles.navList}>
                <li><Link href="/" className={styles.navLink}>Home</Link></li>
                <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
                <li><Link href="/services" className={styles.navLink}>Our Services</Link></li>
                <li><Link href="/careers" className={styles.navLink}>Career</Link></li>
                <li><Link href="/faqs" className={styles.navLink}>FAQs</Link></li>
                <li><Link href="/contact" className={styles.navLink}>Contact Us</Link></li>
              </ul>
            </nav>

            <div className={styles.actionRow}>
              <span className={styles.actionLabel}>Ready to discuss your project?</span>
              <a href="tel:+17809166652" className={styles.actionPhone}>+1 780-916-6652</a>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.pageContainer}>{children}</main>
    </div>
  );
}
