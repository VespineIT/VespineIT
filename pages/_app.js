import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Vespine IT</title>
        <meta name="description" content="IT consultation and services company providing expert technology solutions" />
        <link rel="icon" href="images/vespine.png"/>
    </Head>
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main className="flex-1">
        {/* Main content */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default MyApp;