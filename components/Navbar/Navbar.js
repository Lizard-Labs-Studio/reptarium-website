import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "home",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconHome.svg",
    svg: ``,
  },
  {
    id: 2,
    title: "About project",
    path: "about",
    secondPath: "",
    anchor: true,
    type: "default",
    iconPath: "/icons/IconWorks.svg",
    svg: ``,
  },
  {
    id: 3,
    title: "Roadmap",
    path: "roadmap",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconCV.svg",
    svg: ``,
  },
];

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNavbar = () => {
  //   if (typeof window !== "undefined") {
  //     if (window.scrollY > lastScrollY) {
  //       setShow(false);
  //     } else {
  //       setShow(true);
  //     }

  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", controlNavbar);

  //     return () => {
  //       window.addEventListener("scroll", controlNavbar);
  //     };
  //   }
  // }, [lastScrollY]);

  return (
    <div
      style={{
        display: show ? "inherit" : "none",
      }}
      className={styles.navbarWrapper}>
      <div className="container">
        <nav className={styles.navbar}>
          <h1 className={styles.logo}>
            <Image
              src="/ReptariumLogo.png"
              alt="Reptarium Logo"
              width={40}
              height={40}
            />
            REPTARIUM
          </h1>

          <div className={styles.navbarRightPart}>
            <ul className={styles.linkList}>
              {navigation.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    spy={true}
                    offset={-60}
                    isDynamic={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}>
                    {link.title ? link.title : ""}
                    {link.iconPath ? (
                      <span
                        className={
                          link.type === "default" ? styles.iconWrapper : ""
                        }>
                        <Image
                          src={link.iconPath}
                          alt="Image description"
                          width="16"
                          height="16"
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
