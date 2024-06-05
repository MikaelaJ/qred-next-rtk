import type { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 w-full">
      <div className="flex ">
        <h1 className="text-6xl font-bold mb-20">Välkommen till Qred</h1>
      </div>
      <div className="container flex-col space-y-5 justify-center w-1/5">
        <button className="flex bg-primary-qred w-full py-2 rounded-full justify-center text-white">
          <Link href="/profile">Go to Profile</Link>
        </button>
        <button className="flex bg-primary-qred w-full py-2 rounded-full justify-center text-white">
          <Link href="/admin">Login</Link>
        </button>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Qred - Finansiering för företagare",
  description: "Qred - Finance for the future",
};
