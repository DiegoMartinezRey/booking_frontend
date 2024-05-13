"use client";
import BookingPage from "@/containers/BookingPage";
import NavBar from "@/containers/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <BookingPage />
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
