import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};
