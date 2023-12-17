"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Project({
  index,
  logo,
  title,
  description,
  proposalLink = null,
  dashboardLink = null,
  projectLink = null,
  paperLink = null,
}) {
  return (
    <motion.div
      className={styles.project}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: [0, 1],
        y: [10, 0],
      }}
      transition={{
        duration: 0.2,
        delay: 0.1 * index + 0.1,
      }}
    >
      <h2>
        {logo}
        {title}
      </h2>
      <p>{description}</p>
      <div className={styles.links}>
        {proposalLink && <Link href={proposalLink}>Proposal Link</Link>}
        {dashboardLink && <Link href={dashboardLink}>Dashboard Link</Link>}
        {projectLink && <Link href={projectLink}>Project Link</Link>}
        {paperLink && <Link href={paperLink}>Paper Link</Link>}
      </div>
    </motion.div>
  );
}
