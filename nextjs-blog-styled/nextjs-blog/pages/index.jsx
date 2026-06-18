import Head from "next/head";
import HomePage from "../component/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Element Reno — Complete Solutions for Every Home | Edmonton</title>
        <meta name="description" content="Edmonton's basement development and deck building specialists. Licensed, insured, and trusted across the Capital Region. Get a free estimate today." />
      </Head>
      <HomePage />
    </>
  );
}
