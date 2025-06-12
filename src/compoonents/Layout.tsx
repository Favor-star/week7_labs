import React from "react";
import Navbar from "./Navbar";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`w-full    flex justify-center ${workSans.className}`}>
      <div className="w-full  max-w-screen-xl px-4 bg-white py-2 rounded-2xl flex flex-col items-center justify-center">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
