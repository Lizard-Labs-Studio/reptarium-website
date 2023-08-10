import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

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
  },
  {
    id: 2,
    title: "About us",
    path: "/about",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconWorks.svg",
    svg: ``,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/icons/IconCV.svg",
    svg: ``,
  },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbarWrapper}>
      <div className="container">
        <nav className={styles.navbar}>
          <h1 className={styles.logo}>
            <Image
              src="/ReptariumLogo.png"
              alt="Reptarium Logo"
              width={40}
              height={40}
            />
            LIZARD LABS
          </h1>

          <div className={styles.navbarRightPart}>
            <ul className={styles.linkList}>
              {navigation.map((link) => (
                <li key={link.id}>
                  <Link href={link.path + link.secondPath}>
                    <a
                      className={
                        router.pathname === link.path ? styles.activeLink : ""
                      }>
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
                    </a>
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
