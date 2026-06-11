import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Building a construction app with React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/posts/about">Element Reno Construction !</Link>
        </h1>

        <p className={styles.description}>
          Get started we've got{" "}
          <code className={styles.code}>
            Complete Solutions for every home.
          </code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://ca.images.search.yahoo.com/search/images?p=basement+floor+plans"
            className={styles.card}
          >
            <h3>Documentation </h3>
            <p>Different floor plans .</p>
          </a>

          <Link href="/contact" className={styles.card}>
            <h3>Contact Us </h3>
            <p>Need our services? Click here</p>
          </Link>

          <a href="#" className={styles.card}>
            <h3>Examples </h3>
            <p>Explore our projects.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Testimonial</h3>
            <p></p>
          </a>
        </div>
      </main>
    </div>
  );
}
