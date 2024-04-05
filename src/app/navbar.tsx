"use client";

import styles from "./navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const current = pathname.split("/")[1];

  return (
    <div className={styles.navbar}>
      <Link
        href="/"
        className={current === "" ? styles.current : undefined}
        style={{
          backgroundColor: "#EFFCFC",
        }}
      >
        home
      </Link>
      <Link
        href="/work"
        className={current === "work" ? styles.current : undefined}
        style={{
          backgroundColor: "#E5F9F9",
        }}
      >
        our work
      </Link>
      <Link
        href="/about"
        className={current === "about" ? styles.current : undefined}
        style={{
          backgroundColor: "#D7F6F6",
        }}
      >
        about us
      </Link>
    </div>
  );
}
