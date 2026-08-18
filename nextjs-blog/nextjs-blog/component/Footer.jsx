import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Company Info */}
          <div className={styles.section}>
            <Link href="/" className={styles.logoLink}>
              <img src="/images/Element Reno Logo.png" alt="Element Reno logo" className={styles.logoImage} />
            </Link>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <p className={styles.address}>
                <strong>Address:</strong>
                <span className={styles.addressLine}>783 Eagleson Cr NW</span>
                <span className={styles.addressLine}>Edmonton, AB T6M 0V2</span>
              </p>
              <p className={styles.phone}>
                <strong>Phone:</strong>
                <span className={styles.phoneNumber}>
                  <a href="tel:+17809166652">(780) 916-6652</a>
                </span>
              </p>
              <p className={styles.email}>
                <strong>Email:</strong>
                <span className={styles.emailAddress}>
                  <a href="mailto:info@elementreno.ca">info@elementreno.ca</a>
                </span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/share/1CcJXTqhRQ/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
           <a
  href="https://www.instagram.com/elementrenovation?igsh=MThxbHZ5dzA4eDB0bQ=="
  target="_blank"
  rel="noopener noreferrer"
  className={styles.socialIcon}
  aria-label="Instagram"
>
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.6zm8.65 1.5a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  </svg>
</a>
              <a
                href="https://youtu.be/NNhxmHvZ7Z0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; 2026 Element Reno. All rights reserved. Designed by Simisola Oyeniyi</p>
          {/* <div className={styles.links}>
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
