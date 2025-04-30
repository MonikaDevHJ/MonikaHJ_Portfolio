import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navbar is always visible */}
      <Navbar />
      {/* Content for the current page */}
      <main className="pt-24">{children}</main>
    </div>
  );
};

export default Layout;
