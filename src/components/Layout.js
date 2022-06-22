import * as React from "react";
import Menu from "./Menu";
import ChatBot from "./ChatBot";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <ChatBot/>
      <Footer />
    </>
  );
};

export default Layout;
