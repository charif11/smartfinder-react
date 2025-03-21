import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="m-4 text-white">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
