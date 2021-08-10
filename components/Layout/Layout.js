import Head from "next/head";
import Footer from "./Footer";

import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sun Tropical Phú Quốc</title>
    </Head>

    <Header />

    <main>{children}</main>

    <Footer />
  </>
);

export default Layout;
