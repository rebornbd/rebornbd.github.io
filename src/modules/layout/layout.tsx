import React, { FC } from "react";
import { Footer } from "../shared/footer";
import Header from "../../components/Header";


const Layout: FC = ({ children }) => {
  const MainContent = (): JSX.Element => {
    return (
      <div
        style={{
          minHeight: `${window.innerHeight - (40+30)}px`,
          marginTop: "40px",
        }}
      >
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

export default Layout;
