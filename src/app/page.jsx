"use client";
import BookingPage from "@/containers/BookingPage";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BookingPage />
      </main>
      <footer></footer>
    </div>
  );
}
