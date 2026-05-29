import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../component/layout';

export default function About() {
  return (
    <>
    <Layout>
    <Head>
      <title>About</title>
    </Head>
      
      <Script src='https://connect.facebook.net/en_US/sdk.js'
       strategy="LazyOnLoad" />

      <h1>About</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </Layout>
    </>
  );
}
