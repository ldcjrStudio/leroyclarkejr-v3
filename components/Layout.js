import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="layout-content">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
