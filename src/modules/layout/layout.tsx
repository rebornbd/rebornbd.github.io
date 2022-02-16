import React from 'react'
import { Footer } from '../share/footer';
import { Header } from '../share/header';


const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ height: `${window.innerHeight - (40*2)}px`, marginTop: '45px' }}>
        { children }
      </div>
      <Footer />
    </>
  )
}

export default Layout;
