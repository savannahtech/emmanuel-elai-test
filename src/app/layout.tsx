import { ToastContainer } from "react-toastify";
import "./globals.css";
import "./styles.css";
import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: "Star Bucks Coffee company",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-">
      <body className="font-sans">
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
