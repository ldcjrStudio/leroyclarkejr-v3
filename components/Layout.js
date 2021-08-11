import Header from "./Header";
import Footer from "./Footer";

import { NextSeo } from "next-seo";

const Layout = ({ children }) => {
  return (
    <div>
      <NextSeo
        title="Leroy Clarke Jr. | Front-end Engineer"
        description="Self taught Front-end Engineer helping ambitious people and brands create aesthetically pleasing web app experiences."
        openGraph={{
          url: "https://www.leroyclarkejr.com",
          title: "Leroy Clarke Jr. | Front-end Engineer",
          description:
            "Self taught Front-end Engineer helping ambitious people and brands create aesthetically pleasing web app experiences.",
          images: [
            {
              url: "https://leroyclarkejr.com/images/leroyclarkejr.jpg",
              width: "800",
              height: "772",
              alt: "Leroy Clarke Jr. in black and white.",
            },
          ],
          site_name: "LeroyClarkeJr",
        }}
      />
      <Header />
      <main id="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
