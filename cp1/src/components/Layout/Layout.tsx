import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header'; // Import Header

const Layout = () => {
  return (
    <div className="layout">
      <Header /> {/* Render the Header component */}
      <Outlet /> {/* Placeholder for nested route components */}
    </div>
  );
};

export default Layout;