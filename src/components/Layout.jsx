import React from 'react';
import Header from './Header'
import Footer from './Footer'
import '@/css/style.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;