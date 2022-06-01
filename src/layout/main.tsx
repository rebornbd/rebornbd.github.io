import { Toaster } from "react-hot-toast";
import React, { FC } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayout: FC = ({ children }) => {
  const styles: React.CSSProperties = {
    minHeight: `${window.innerHeight - (40+30)}px`,
    marginTop: "40px",
    padding: "20px 50px",

    // backgroundColor: "#121212",
    backgroundColor: "#242424",
    color: "#f1f1f1",
  };

  const MainContent = () => {
    return (
      <div style={styles}>
        {children}
      </div>
    );
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default MainLayout;
