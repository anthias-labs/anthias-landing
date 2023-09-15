import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Inter } from "@next/font/google";
import dashboard from "../assets/dashboard.svg";
import styles from "./home.module.scss";
import ReactTypingEffect from "react-typing-effect";
import { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import anthiasLogo from "../assets/anthiasLogo.svg";
import defishyLogo from "../assets/defishyLogo.svg";
import aaveGhost from "../assets/aaveGhost.svg";
import aaveLogo from "../assets/aaveLogo.svg";
import compoundLogo from "../assets/compoundLogo.svg";
import exactlyLogo from "../assets/exactlyLogo.svg";
import eulerLogo from "../assets/eulerLogo.svg";
import venusLogo from "../assets/venusLogo.svg";
import radiantLogo from "../assets/radiantLogo.svg";
import discordLogo from "../assets/discordLogo.svg";
import backgroundDashboard from "../assets/backgroundDashboard.png";

import badge from "../assets/icons/badge.svg";
import lock from "../assets/icons/lock.svg";
import users from "../assets/icons/users.svg";

import CheckIcon from "@mui/icons-material/Check";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";

const AnimationWrapper = ({ children, animate = true }) => {
  let variants;
  if (animate == false) {
    variants = {
      visible: {
        opacity: 1,
      },
      hidden: { opacity: 1, scale: 0.9 },
    };
  } else {
    variants = {
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay: 0.2 },
      },
      hidden: { y: 50, opacity: 0, scale: 0.9 },
    };
  }
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={variants}
      initial="hidden"
      className={styles.animationWrapper}
    >
      {children}
    </motion.div>
  );
};

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1224);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
}

export default function Home() {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const isDesktop = useIsDesktop();

  return (
    <>
      <Head>
        <title>Anthias</title>
        <meta
          name="description"
          content="Democratizing blockchain data for all"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="”mask-icon”" href="favicon.svg" color="#000000" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W4WVR01YBP"
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-W4WVR01YBP");
          `}
      </Script>
      <main className={styles.main}>
        {isDesktop ? (
          <div className={styles.navbar}>
            <div className={styles.left}>
              <Link
                href="https://app.anthias.xyz/"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.logo}>
                  <svg
                    width="165"
                    height="165"
                    viewBox="0 0 165 165"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_9)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M44.2705 1.95238C42.5466 3.85524 42.5494 3.99238 44.3544 7.34191C46.45 11.2314 57.8838 23.7781 62.0064 26.7114L64.7281 28.6476L68.6658 26.0438L72.6035 23.439L69.8942 21.5171C68.4037 20.46 64.6118 17.1229 61.467 14.101L55.7491 8.60762L80.05 8.63048L104.351 8.65333L97.7487 14.86C91.5505 20.6857 84.8416 25.459 71.7829 33.3333C65.2789 37.7576 44.0704 57.9276 37.9447 66.3114L33.681 72.1467L30.4209 67.3295C25.7752 60.4667 13.6533 48.3562 8.38905 45.3191C4.74773 43.2171 3.54888 42.9305 1.95646 43.7819C0.038119 44.8086 0 45.5038 0 79.4895C0 109.729 0.190595 114.341 1.49713 115.647C2.32145 116.47 3.56032 117.143 4.25123 117.143C6.41353 117.143 16.4141 109.174 22.6665 102.47L28.657 96.0486L26.5642 92.5476C23.4203 87.2876 23.3689 87.2752 20.6767 91.1571C19.3006 93.1429 16.0148 96.8924 13.375 99.4905L8.57679 104.214V80.5991C8.57679 62.1343 8.83695 57.0695 9.76801 57.3743C12.0818 58.1314 23.9159 72.7457 28.7742 80.8438C31.4816 85.3562 35.5565 91.4895 37.8303 94.4733C43.1574 101.464 55.7539 113.843 64.5823 120.761L71.5094 126.19L68.4418 128.571C59.1436 135.788 53.016 141.621 48.6961 147.368C43.531 154.241 42.9602 156.13 45.334 158.504C46.6387 159.807 51.1339 160 80.1806 160C101.346 160 114.203 159.64 115.373 159.014C119.538 156.787 116.518 150.63 105.896 139.694C97.5162 131.068 97.0559 130.854 92.4139 133.462C90.3307 134.631 88.6297 135.831 88.6335 136.128C88.6373 136.424 90.0305 137.614 91.7307 138.772C93.4308 139.93 97.1655 143.251 100.03 146.153L105.239 151.429H81.1869H57.1347L58.6481 149.12C61.0439 145.467 72.7111 136.167 81.6548 130.782C86.1615 128.069 93.1277 123.268 97.1359 120.111C104.138 114.6 118.748 99.0352 123.555 91.9629C124.824 90.0971 126.002 88.5714 126.173 88.5714C126.344 88.5714 128.684 91.5286 131.374 95.1438C136.948 102.635 147.738 112.974 152.856 115.73C155.52 117.163 156.698 117.351 157.97 116.55C159.482 115.596 159.645 112.539 159.884 80.8486C160.143 46.4591 160.129 46.1771 158.109 44.5229C156.159 42.9238 155.917 42.9429 152.287 44.9829C147.708 47.5543 138.451 55.8029 134.385 60.9333L131.423 64.6705L133.999 68.561L136.576 72.4514L139.519 68.8448C144.606 62.6124 149.827 57.1429 150.691 57.1429C151.149 57.1429 151.505 67.7495 151.482 80.7143L151.441 104.286L145.231 97.6876C139.517 91.6162 136.533 87.4514 126.46 71.4886C121.537 63.6876 103.611 44.4048 95.8828 38.5962C92.4158 35.9905 89.5798 33.5838 89.5798 33.2467C89.5798 32.9095 91.2322 31.541 93.2526 30.2048C101.966 24.4429 117.216 7.92381 117.216 4.24857C117.216 3.5581 116.542 2.32 115.719 1.49619C114.413 0.191429 109.852 2.38419e-07 80.1301 2.38419e-07C46.9703 2.38419e-07 45.9897 0.0533334 44.2705 1.95238ZM92.0099 50.9248C100.018 54.8267 107.78 62.8438 110.485 70.0067C115.756 83.9648 108.332 100.73 93.1563 109.132C88.7983 111.546 86.8181 112.795 80.1806 112.795C73.3049 112.795 72.3119 111.585 66.8742 108.638C55.974 102.732 48.6008 91.2105 48.6028 80.0857C48.6037 68.199 56.1113 56.8733 67.931 50.9248C74.0234 47.8591 75.4672 47.5038 80.5742 47.8124C84.4432 48.0467 88.2037 49.0695 92.0099 50.9248Z"
                        fill="#1FCFCF"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="33"
                        stroke="#1FCFCF"
                        strokeWidth="4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_9">
                        <rect width="165" height="165" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>anthias</span>
                </div>
              </Link>
            </div>
            <div className={styles.right}>
              {/* <div className={styles.links}>
                <Link
                  href="https://docs.anthias.xyz/intro/welcome"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>
                    <ArticleIcon className={styles.icon} />
                  </div>
                </Link>
                <Link
                  href="https://discord.gg/RCJYpMvkBy"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>
                    <svg
                      width="71"
                      height="55"
                      viewBox="0 0 71 55"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${styles.icon} ${styles.discord}`}
                    >
                      <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                      <defs>
                        <clipPath id="clip0">
                          <rect width="71" height="55" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/anthiasxyz"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>
                    <TwitterIcon className={styles.icon} />
                  </div>
                </Link>
              </div> */}

              <Link
                href="https://anthias.xyz/liquip.pdf"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.button}>View our Methodology</div>
              </Link>
            </div>
          </div>
        ) : (
          <div
            className={
              selected
                ? `${styles.mobileNavbar} ${styles.selected}`
                : `${styles.mobileNavbar}`
            }
          >
            <div className={styles.top}>
              <div className={styles.left}>
                <a
                  href="https://app.anthias.xyz/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.anthiasLogo}>
                    <Image src={anthiasLogo} alt="" className={styles.img} />
                    <span>anthias</span>
                  </div>
                </a>
              </div>
              <div className={styles.right}>
                <MenuIcon className={styles.icon} onClick={toggleSelected} />
              </div>
            </div>
            <div className={styles.bottom}>
              <ul className={styles.links}>
                {/* <Link
                  href="https://docs.anthias.xyz/intro/welcome"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>Docs</div>
                </Link>
                <Link
                  href="https://discord.gg/RCJYpMvkBy"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>Discord</div>
                </Link>
                <Link
                  href="https://twitter.com/anthiasxyz"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>Twitter</div>
                </Link> */}
                <Link
                  href="https://anthias.xyz/liquip.pdf"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.button}>View our Methodology</div>
                </Link>
                <Link
                  href="https://app.anthias.xyz/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.button}>Enter App</div>
                </Link>
              </ul>
            </div>
          </div>
        )}
        <div className={styles.container}>
          <AnimationWrapper>
            <div className={styles.title}>
              <div className={styles.text}>
                <ReactTypingEffect
                  text={
                    isDesktop
                      ? ["On-Chain data for all .", "For free .", "anthias ."]
                      : ["anthias ."]
                  }
                  cursorRenderer={() => {
                    let retCursor = <span></span>;
                    if (isDesktop) retCursor = <span color="#1fcfcf">_</span>;
                    return retCursor;
                  }}
                  speed={100}
                  eraseSpeed={75}
                  typingDelay={1000}
                  displayTextRenderer={(text, i) => {
                    return (
                      <span>
                        {text.split(" ").map((word, i) => {
                          const key = `${i}`;
                          const isLastWord =
                            word === "all" ||
                            word === "free" ||
                            word === "anthias";
                          return (
                            <span
                              key={key}
                              style={
                                isLastWord
                                  ? { color: "#1fcfcf" }
                                  : { color: "white" }
                              }
                            >
                              {word == "." || isLastWord ? word : word + " "}
                            </span>
                          );
                        })}
                      </span>
                    );
                  }}
                />
              </div>
              <Link
                href="https://app.anthias.xyz/"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.button}>Go Fishing</div>
              </Link>
              <Image src={dashboard} alt="" className={styles.img} />
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statTitle}>6.1B+</div>
                <div className={styles.statText}>Dollars monitored</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>30K+</div>
                <div className={styles.statText}>Data points stored</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>4+</div>
                <div className={styles.statText}>Protocol integrations</div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className={styles.protocols}>
              <div className={styles.protocolsTitle}>
                Supported by top DeFi protocols like
              </div>
              <div className={styles.protocolsList}>
                <Link
                  href="https://compound.finance/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.protocol}>
                    <Image src={compoundLogo} alt="" className={styles.img} />
                  </div>
                </Link>
                <Link
                  href="https://aave.com/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.protocol}>
                    <Image src={aaveGhost} alt="" className={styles.img} />
                    <Image src={aaveLogo} alt="" className={styles.img} />
                  </div>
                </Link>
                <Link
                  href="https://www.euler.finance/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.protocol}>
                    <Image src={eulerLogo} alt="" className={styles.img} />
                  </div>
                </Link>
                <Link
                  href="https://exact.ly/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.protocol}>
                    <Image src={exactlyLogo} alt="" className={styles.img} />
                  </div>
                </Link>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className={styles.cards}>
              <div className={styles.cardsTitle}>
                What makes Anthias different?
              </div>
              <div className={styles.cardList}>
                <div className={`${styles.card} ${styles.pink}`}>
                  <div className={styles.cardTitle}>
                    User-First
                    <Image src={users} alt="" className={styles.img} />
                  </div>
                  <div className={styles.cardText}>
                    Anthias focuses on serving users, not just protocols. We
                    help protect the fish.
                  </div>
                  <div className={styles.checkBar}>
                    <CheckIcon className={styles.check} />
                    <div className={`${styles.bar} ${styles.right}`} />
                  </div>
                </div>
                <div className={`${styles.card} ${styles.blue}`}>
                  <div className={styles.cardTitle}>
                    Trusted
                    <Image src={badge} alt="" className={styles.img} />
                  </div>
                  <div className={styles.cardText}>
                    Anthias has worked with top DeFi protocols including Aave
                    and Euler.
                  </div>
                  <div className={styles.checkBar}>
                    <div className={`${styles.bar} ${styles.left}`} />
                    <CheckIcon className={styles.check} />
                    <div className={`${styles.bar} ${styles.right}`} />
                  </div>
                </div>
                <div className={`${styles.card} ${styles.pink}`}>
                  <div className={styles.cardTitle}>
                    Open & Free
                    <Image src={lock} alt="" className={styles.img} />
                  </div>
                  <div className={styles.cardText}>
                    Anthias democratizes access to blockchain data, making it
                    open, free, and accessible.
                  </div>
                  <div className={styles.checkBar}>
                    <div className={`${styles.bar} ${styles.left}`} />
                    <CheckIcon className={styles.check} />
                  </div>
                </div>
              </div>
              <div className={styles.cardBar} />
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className={styles.bottomTitle}>
              <div className={styles.bottomTitleText}>
                View on-chain data that just <span>makes sense</span>.
              </div>
              <Link
                href="https://app.anthias.xyz/"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.button}>Launch Anthias</div>
              </Link>
              {/* {isDesktop && (
                <Image
                  src={backgroundDashboard}
                  alt=""
                  className={styles.bottomTitleBackground}
                />
              )} */}
            </div>
          </AnimationWrapper>
        </div>
        <AnimationWrapper animate={false}>
          <div className={styles.footer}>
            <div className={styles.left}>
              <Link
                href="https://app.anthias.xyz/"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.logo}>
                  <svg
                    width="165"
                    height="165"
                    viewBox="0 0 165 165"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_9)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M44.2705 1.95238C42.5466 3.85524 42.5494 3.99238 44.3544 7.34191C46.45 11.2314 57.8838 23.7781 62.0064 26.7114L64.7281 28.6476L68.6658 26.0438L72.6035 23.439L69.8942 21.5171C68.4037 20.46 64.6118 17.1229 61.467 14.101L55.7491 8.60762L80.05 8.63048L104.351 8.65333L97.7487 14.86C91.5505 20.6857 84.8416 25.459 71.7829 33.3333C65.2789 37.7576 44.0704 57.9276 37.9447 66.3114L33.681 72.1467L30.4209 67.3295C25.7752 60.4667 13.6533 48.3562 8.38905 45.3191C4.74773 43.2171 3.54888 42.9305 1.95646 43.7819C0.038119 44.8086 0 45.5038 0 79.4895C0 109.729 0.190595 114.341 1.49713 115.647C2.32145 116.47 3.56032 117.143 4.25123 117.143C6.41353 117.143 16.4141 109.174 22.6665 102.47L28.657 96.0486L26.5642 92.5476C23.4203 87.2876 23.3689 87.2752 20.6767 91.1571C19.3006 93.1429 16.0148 96.8924 13.375 99.4905L8.57679 104.214V80.5991C8.57679 62.1343 8.83695 57.0695 9.76801 57.3743C12.0818 58.1314 23.9159 72.7457 28.7742 80.8438C31.4816 85.3562 35.5565 91.4895 37.8303 94.4733C43.1574 101.464 55.7539 113.843 64.5823 120.761L71.5094 126.19L68.4418 128.571C59.1436 135.788 53.016 141.621 48.6961 147.368C43.531 154.241 42.9602 156.13 45.334 158.504C46.6387 159.807 51.1339 160 80.1806 160C101.346 160 114.203 159.64 115.373 159.014C119.538 156.787 116.518 150.63 105.896 139.694C97.5162 131.068 97.0559 130.854 92.4139 133.462C90.3307 134.631 88.6297 135.831 88.6335 136.128C88.6373 136.424 90.0305 137.614 91.7307 138.772C93.4308 139.93 97.1655 143.251 100.03 146.153L105.239 151.429H81.1869H57.1347L58.6481 149.12C61.0439 145.467 72.7111 136.167 81.6548 130.782C86.1615 128.069 93.1277 123.268 97.1359 120.111C104.138 114.6 118.748 99.0352 123.555 91.9629C124.824 90.0971 126.002 88.5714 126.173 88.5714C126.344 88.5714 128.684 91.5286 131.374 95.1438C136.948 102.635 147.738 112.974 152.856 115.73C155.52 117.163 156.698 117.351 157.97 116.55C159.482 115.596 159.645 112.539 159.884 80.8486C160.143 46.4591 160.129 46.1771 158.109 44.5229C156.159 42.9238 155.917 42.9429 152.287 44.9829C147.708 47.5543 138.451 55.8029 134.385 60.9333L131.423 64.6705L133.999 68.561L136.576 72.4514L139.519 68.8448C144.606 62.6124 149.827 57.1429 150.691 57.1429C151.149 57.1429 151.505 67.7495 151.482 80.7143L151.441 104.286L145.231 97.6876C139.517 91.6162 136.533 87.4514 126.46 71.4886C121.537 63.6876 103.611 44.4048 95.8828 38.5962C92.4158 35.9905 89.5798 33.5838 89.5798 33.2467C89.5798 32.9095 91.2322 31.541 93.2526 30.2048C101.966 24.4429 117.216 7.92381 117.216 4.24857C117.216 3.5581 116.542 2.32 115.719 1.49619C114.413 0.191429 109.852 2.38419e-07 80.1301 2.38419e-07C46.9703 2.38419e-07 45.9897 0.0533334 44.2705 1.95238ZM92.0099 50.9248C100.018 54.8267 107.78 62.8438 110.485 70.0067C115.756 83.9648 108.332 100.73 93.1563 109.132C88.7983 111.546 86.8181 112.795 80.1806 112.795C73.3049 112.795 72.3119 111.585 66.8742 108.638C55.974 102.732 48.6008 91.2105 48.6028 80.0857C48.6037 68.199 56.1113 56.8733 67.931 50.9248C74.0234 47.8591 75.4672 47.5038 80.5742 47.8124C84.4432 48.0467 88.2037 49.0695 92.0099 50.9248Z"
                        fill="#1FCFCF"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="33"
                        stroke="#1FCFCF"
                        strokeWidth="4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_9">
                        <rect width="165" height="165" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>anthias</span>
                </div>
              </Link>
            </div>
            <div className={styles.right}>
              <div className={styles.links}>
                <Link
                  href="https://docs.anthias.xyz/intro/welcome"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>
                    <ArticleIcon className={styles.icon} />
                  </div>
                </Link>
                <Link
                  href="https://discord.gg/RCJYpMvkBy"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>
                    <svg
                      width="71"
                      height="55"
                      viewBox="0 0 71 55"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${styles.icon} ${styles.discord}`}
                    >
                      <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                      <defs>
                        <clipPath id="clip0">
                          <rect width="71" height="55" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/anthiasxyz"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.link}>
                    <TwitterIcon className={styles.icon} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </main>
    </>
  );
}
