import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* Footer */}</footer>
    </div>
  );
};
