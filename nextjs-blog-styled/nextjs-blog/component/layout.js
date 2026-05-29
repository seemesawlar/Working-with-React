import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Simisola Oyeniyi";
export const siteTitle = "Next.js Element Reno";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico " />
        <meta name="construction" content="Basement Development" />
        <meta property="og:image" content={""} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/nextphoto1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/nextphoto1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
