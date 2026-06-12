import Footer from '../component/Footer';
import Layout from '../component/layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
