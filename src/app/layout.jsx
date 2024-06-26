"use client";
import NavBar from "@/containers/NavBar";
import { AuthProvider } from "@/contexts/Login";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <nav>
            <NavBar />
          </nav>
          {children}
          <footer></footer>
        </body>
      </html>
    </AuthProvider>
  );
}
