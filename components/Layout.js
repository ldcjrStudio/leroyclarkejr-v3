import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Leroy Clarke Jr. | Front-end Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#90cdf4" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />

        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      </Head>
      <Header />
      <main id="layout-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
