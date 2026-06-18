import Layout from '../component/layout';
import Footer from '../component/Footer';
import { useRouter } from 'next/router';

// Pages that need full-bleed (no pageContainer wrapper)
const FULL_BLEED_PAGES = ['/'];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isFullBleed = FULL_BLEED_PAGES.includes(router.pathname);

  return (
    <Layout fullBleed={isFullBleed}>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
