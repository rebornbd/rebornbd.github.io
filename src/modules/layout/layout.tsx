import React from 'react'
import { Footer } from '../share/footer';
import { Header } from '../share/header';


const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
