"use client";

import styles from "./page.module.scss";
import Link from "next/link";

export default function Project({
  logo,
  title,
  description,
  proposalLink = null,
  dashboardLink = null,
}) {
  return (
    <div className={styles.project}>
      <h2>
        {logo}
        {title}
      </h2>
      <p>{description}</p>
      <div className={styles.links}>
        {proposalLink && <Link href={proposalLink}>Proposal Link</Link>}
        {dashboardLink && <Link href={dashboardLink}>Dashboard Link</Link>}
      </div>
    </div>
  );
}
