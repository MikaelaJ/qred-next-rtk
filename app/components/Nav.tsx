"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();

  return (
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
  );
};
