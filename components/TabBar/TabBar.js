import Image from "next/image";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import styles from "./TabBar.module.scss";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "home",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconHome.svg",
  },
  {
    id: 2,
    title: "About project",
    path: "about",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconWorks.svg",
  },
  {
    id: 3,
    title: "Roadmap",
    path: "roadmap",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconCV.svg",
  },
];

const TabBar = () => {
  const router = useRouter();
  return (
    <nav className={styles.tabBar}>
      <ul className={styles.linkList}>
        {navigation.map((link) => (
          <li
            className={link.type === "default" ? "" : styles.hideLink}
            key={link.id}>
            <Link
              to={link.path}
              spy={true}
              offset={-60}
              isDynamic={true}
              smooth={true}
              hashSpy={true}
              duration={500}>
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabBar;
