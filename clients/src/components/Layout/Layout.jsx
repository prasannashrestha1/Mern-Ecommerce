import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{ minHeight: "80vh" }}>
          {children}
          <Toaster></Toaster>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App- Shop Now",
  description: "Mern Stack Project",
  keywords: "Mern, react, node, mongodb, tailwind",
  author: "Prasanna",
};

export default Layout;
