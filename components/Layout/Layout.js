import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TabBar from "../TabBar/TabBar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Footer />
      <TabBar />
    </div>
  );
};

export default Layout;
