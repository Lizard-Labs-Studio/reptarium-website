import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link as LinkSmooth } from "react-scroll";
import Link from "next/link";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/",
    secondPath: "",
    anchor: false,
    type: "",
    iconPath: "/icons/IconArrowDown.svg",
    svg: ``,
    submenu: [
      {
        id: 1,
        title: "About project",
        path: "about",
        type: "default",
        iconPath: "/icons/IconWorks.svg",
        svg: ``,
      },
      {
        id: 2,
        title: "Roadmap",
        path: "roadmap",
        type: "default",
        iconPath: "/icons/IconCV.svg",
      },
    ],
    isSubmenu: true
  },
  {
    id: 2,
    title: "Contact us",
    path: "/contacts",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconCV.svg",
    svg: ``,
    submenu: [],
    isSubmenu: false
  },
];

const Navbar = () => {
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
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
                  {
                    <div
                      onMouseEnter={link.isSubmenu ? handleMouseEnter : null}
                      onMouseLeave={link.isSubmenu ? handleMouseLeave : null}
                      className={styles.linkListItem}>


                      <Link href={link.path}>
                        <a >
                          {link.title ? link.title : ""}
                          {link.iconPath && router.pathname === link.path ? (
                            <span
                              className={
                                link.type === "default" ? styles.iconWrapper : ""
                              }
                              style={{
                                transform: isDropdownVisible ? 'rotate(180deg)' : ''
                              }}
                            >
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
                        </a>
                      </Link>
                      {/* isDropdownVisible && link.isSubmenu */}
                      {

                        isDropdownVisible && link.isSubmenu && router.pathname === link.path ? (
                          <div className={styles.submenuWrapper}>


                            <div className={styles.submenu}>
                              <ul>
                                {
                                  link.submenu?.map((submenuItem) => (
                                    <li key={submenuItem.id}>
                                      {
                                        <LinkSmooth
                                          to={submenuItem.path}
                                          spy={true}
                                          offset={-60}
                                          isDynamic={true}
                                          smooth={true}
                                          hashSpy={true}
                                          duration={500}>
                                          {submenuItem.title ? submenuItem.title : ""}

                                        </LinkSmooth>
                                      }
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>
                          </div>
                        ) : ("")
                      }

                    </div>
                  }

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
