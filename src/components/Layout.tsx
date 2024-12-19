import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navbar is always visible */}
      <Navbar />
      {/* Content for the current page */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
