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
      <main>
        <h1 className={styles.title}>
          <Link href="/posts/about">Element Reno Construction !</Link>
        </h1>

        <p className={styles.description}>
          Get started we've got <code>Complete Solutions for every home.</code>
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

      <footer>
        <a href="#" className={styles.footer}>
          <p></p>
          <p>Powered by Simisola Oyeniyi</p>
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #e7e0e0;
          font: #fafafa;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
