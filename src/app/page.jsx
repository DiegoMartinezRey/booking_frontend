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
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <BookingPage />
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
