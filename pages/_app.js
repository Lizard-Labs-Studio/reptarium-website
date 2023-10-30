import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Globals.scss";
import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <AnimatePresence mode="wait">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </AnimatePresence>
      ) : (
        <div className="loader-wrapper">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
