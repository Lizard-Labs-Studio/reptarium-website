import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 2,
    title: "About us",
    path: "/about",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
];

const socials2 = [
  {
    id: 1,
    title: "Instagram",
    path: "#",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 2,
    title: "Discord",
    path: "#",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 3,
    title: "Twitter",
    path: "#",
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
              Let’s make something great togather
            </p>
          </div>

          <div className={styles.linkWrapper}>
            <div className={styles.linkBlock}>
              <h3 className={styles.linkBlockTitle}>Pages</h3>
              <ul className={styles.linkList}>
                {navigation.map((link) => (
                  <li key={link.id}>
                    <Link href={link.path + link.secondPath}>
                      <a>
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
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkBlock}>
              <h3 className={styles.linkBlockTitle}>Socials</h3>
              <ul className={styles.linkList}>
                {socials2.map((link) => (
                  <li key={link.id}>
                    <Link href={link.path + link.secondPath}>
                      <a>
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
            Copyright © 2023 Lizard Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
