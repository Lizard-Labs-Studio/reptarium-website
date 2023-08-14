import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Globals.scss";
import { AnimatePresence } from "framer-motion";

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
        </AnimatePresence>
      ) : (
        <div className="loader-wrapper">
          <div class="lds-roller">
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
