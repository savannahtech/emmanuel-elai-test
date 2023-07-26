import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/navigation/NavBar";
import React from "react";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar isAuth />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Page;
