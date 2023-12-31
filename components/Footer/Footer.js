import Image from "next/image";
import styles from "./Footer.module.scss";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "home",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 2,
    title: "About us",
    path: "about",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 3,
    title: "Roadmap",
    path: "roadmap",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
];

const socials2 = [
  {
    id: 1,
    title: "YouTube",
    path: "https://www.youtube.com/channel/UCpAL7hR-yue3Q08uKc7f8xQ",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 2,
    title: "Discord",
    path: "https://discord.gg/RTtwwqE7Yp",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 3,
    title: "X (Twitter)",
    path: "https://twitter.com/Reptarium_io",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 4,
    title: "Reddit",
    path: "https://www.reddit.com/user/Reptarium",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 5,
    title: "Medium",
    path: "https://medium.com/@reptarium",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 6,
    title: "Telegram",
    path: "https://t.me/Reptarium_io",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 7,
    title: "TikTok",
    path: "https://www.tiktok.com/@reptarium.io",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.head}>
          <div className={styles.logoWrapper}>
            <h1 className={styles.logo}>
              <Image
                src="/ReptariumLogo.png"
                alt="Reptarium Logo"
                width={40}
                height={40}
              />
              REPTARIUM
            </h1>
            <p className={styles.logoDescription}>
              Let’s make something great together
            </p>
          </div>

          <div className={styles.linkWrapper}>
            <div className={styles.linkBlock}>
              <h3 className={styles.linkBlockTitle}>Sections</h3>
              <ul className={styles.linkList}>
                {navigation.map((link) => (
                  <li key={link.id}>
                    <Scroll
                      to={link.path}
                      spy={true}
                      offset={-60}
                      isDynamic={true}
                      smooth={true}
                      hashSpy={true}
                      duration={500}>
                      {link.title ? link.title : ""}
                      {link.iconPath ? (
                        <Image
                          src={link.iconPath}
                          alt="Image description"
                          width="16"
                          height="16"
                        />
                      ) : (
                        ""
                      )}
                    </Scroll>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkBlock}>
              <h3 className={styles.linkBlockTitle}>Socials</h3>
              <ul className={styles.linkList}>
                {socials2.map((link) => (
                  <li key={link.id}>
                    <Link href={link.path}>
                      <a rel="noopener noreferrer" target="_blank">
                        {link.title ? link.title : ""}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.line} />
      <div className="container">
        <div className={styles.body}>
          <div className={styles.copyright}>
            Copyright © 2023 Reptarium. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
