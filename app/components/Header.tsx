"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoUrl from "/public/qred_logo_black.svg";

const navLinks = [
  {
    title: "Företagslån",
    url: "https://www.qred.se/foretagslan",
  },
  {
    title: "Om Qred",
    url: "https://www.qred.se/om-oss",
  },
  {
    title: "Profil",
    url: "/profile",
  },
  {
    title: "Logga in",
    url: "/login",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <>
    <header className="container flex flex-row justify-between py-8">
    <nav className="flex w-full justify-between">
      <div className="flex items-center shrink-0 pl-2">
        <Link href="https://www.qred.se/">
          <Image src={logoUrl} alt="Logo for Qred" width="100" height="200" />
        </Link>
      </div>
      <div className="flex">
        {navLinks.map((link) => {
          return (
            <Link className="text-black mx-2 text-primary-black" href={link.url} key={link.title}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  </header>
    
    <nav className="">
      <Link
       /*  className={`${styles.link} ${pathname === "/" ? styles.active : ""}`} */
        href="/"
      >
        Home
      </Link>
      <Link
        /* className={`${styles.link} ${
          pathname === "/admin" ? styles.active : ""
        }`} */
        href="/admin"
      >
        Admin
      </Link>
      <Link
        /* className={`${styles.link} ${
          pathname === "/profile" ? styles.active : ""
        }`} */
        href="/profile"
      >
        Profile
      </Link>
    </nav>
    </>
  );
};
