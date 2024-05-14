"use client";
import NavBar from "@/containers/NavBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <NavBar />
        </nav>
        {children}
        <footer>
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}
