import type { Metadata } from "next";
import Link from "next/link";

/* import Profile from "../components/Profile"; */

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex container max-w-5xl items-center justify-between lg:flex">
        <h1>Välkommen till Qred</h1>
      </div>
      <div>
        <a href="/admin">Adminsida</a>
        <Link href="/profile">Go to Profile</Link>
        <a href="/profile">Profilsida</a>
      </div>
      {/*  <Profile /> */}
    </main>
  );
}

export const metadata: Metadata = {
  title: "Qred - Finansiering för företagare",
  description: "Qred - Finance for the future",
};
