import React, { FC } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayout: FC = ({ children }) => {
  const styles = {
    minHeight: `${window.innerHeight - (40+30)}px`,
    marginTop: "40px",
    padding: "20px 50px"
  };

  const MainContent = (): JSX.Element => {
    return (
      <div style={styles}>
        {children}
      </div>
    );
  };

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default MainLayout;
