"use server";

import styles from "./page.module.scss";
import Link from "next/link";

export default async function About() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <svg
          width="61"
          height="62"
          viewBox="0 0 61 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.3599 48.0459L36.4445 52.782C36.5246 52.8566 36.5983 52.9377 36.6648 53.0245L40.2061 57.6443C41.2015 58.9429 40.2672 60.8182 38.6311 60.8057L23.7646 60.6924C22.0373 60.6792 21.1657 58.6042 22.3655 57.3615L31.3599 48.0459ZM31.3599 48.0459L22.4699 38.8832L14.6083 31.5788M31.3599 48.0459L38.6423 40.0976L47.0057 31.6886M47.0057 31.6886L56.5585 40.2061C57.8181 41.3293 59.8143 40.4473 59.8321 38.7597L59.9948 23.3468C60.0134 21.5798 57.8726 20.6876 56.6308 21.9447L47.0057 31.6886ZM47.0057 31.6886L38.5302 23.0655L30.5482 13.4863M14.6083 31.5788L4.59846 39.4498C3.30594 40.4661 1.41113 39.5408 1.41785 37.8966L1.47666 23.4971C1.48373 21.7651 3.56504 20.8881 4.80946 22.0928L14.6083 31.5788ZM14.6083 31.5788L22.1704 23.2823L30.5482 13.4863M30.5482 13.4863L39.2038 4.78629C40.4108 3.57303 39.5984 1.50377 37.8883 1.43586L23.8506 0.878373C22.1219 0.809722 21.1541 2.84655 22.2991 4.14343L30.5482 13.4863Z"
            stroke="black"
          />
        </svg>

        <h1>about anthias labs</h1>
      </div>
      <p>
        Anthias Labs is a boutique blockchain r&d firm focused on public goods
        tooling and actionable research. Anthias launched from the Dartmouth
        Blockchain club at Dartmouth College in June of 2022. Prior to forming
        Anthias, team members contributed to multiple top DeFi protocols via
        research, development, and growth. Since forming Anthias, the team has
        worked with projects including Aave, Compound, Euler, and more.
      </p>
      <p>
        To see some of our work, click <Link href={"/work"}>here</Link> or go to
        our <Link href={"https://twitter.com/anthiasxyz"}>X</Link>. To read some
        of our joint research and other content, see our{" "}
        <Link
          href="https://medium.com/@anthias.xyz"
          rel="noreferrer"
          target="_blank"
        >
          Medium
        </Link>
        . To contact the Anthias team, join our{" "}
        <Link
          href="https://discord.gg/RCJYpMvkBy"
          rel="noreferrer"
          target="_blank"
        >
          Discord
        </Link>{" "}
        and reach out.
      </p>
    </main>
  );
}
