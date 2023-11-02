import Image from "next/image";
import { Link as LinkSmooth } from "react-scroll";
import { useRouter } from "next/router";
import styles from "./TabBar.module.scss";
import Link from "next/link";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconHome.svg",
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
        title: "Lizards",
        path: "lizards",
        type: "default",
        iconPath: "/icons/IconCV.svg",
      },
      {
        id: 3,
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
  {
    id: 3,
    title: "Economic system",
    path: "/economicSystem",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconWorks.svg",
    svg: ``,
    submenu: [],
    isSubmenu: false
  },
];

const TabBar = () => {
  const router = useRouter();
  return (
    <div className={styles.tabBarWrapper}>
      {
        navigation.map((link) => (
          link.isSubmenu && router.pathname === link.path ? (
            <nav key={link.id} className={styles.submenu}>
              <ul className={styles.submenuLinkList}>
                {
                  link.submenu?.map((submenuItem) => (
                    <li key={submenuItem.id}>
                      {
                        <LinkSmooth
                          to={submenuItem.path}
                          activeClass={styles.activeSubmenuLink}
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
            </nav>
          ) : ("")
        ))
      }

      <nav className={styles.tabBar}>
        <ul className={styles.linkList}>
          {navigation.map((link) => (
            <li
              className={link.type === "default" ? "" : styles.hideLink}
              key={link.id}>

              <Link href={link.path}>
                <a>


                  {link.iconPath ? (
                    <span>
                      <Image
                        src={link.iconPath}
                        alt="Image description"
                        width="24"
                        height="24"
                      />
                    </span>
                  ) : (
                    ""
                  )}
                  <p>{link.title ? link.title : ""}</p>
                </a>
              </Link>

            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TabBar;
