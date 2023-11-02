import Link from "next/link";
import styles from "../styles/EconomicSystem.module.scss";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../contentful";


const EconomicSystem = ({ economicSystem }) => {
    return (
        <div className="container">

            <Head>
                <title>Lizard Labs | Economic System</title>
            </Head>

            <div className={styles.economicSystem}>
                <div className={styles.sidebar}>
                    <h2 className={styles.sidebarTitle}>Economic system</h2>
                    <div className={styles.sidebarListWrapper}>
                        <ul className={styles.sidebarList} id="sidebarList">
                            <li className={styles.sidebarItemWrapper}>
                                <div className={styles.sidebarItemTitle}>
                                    Ways to make money
                                </div>
                                <div className={styles.sidebarSubtitleList}>
                                    {
                                        economicSystem.map((sidebarSubtitle) => (
                                            <div className={styles.sidebarSubtitle}>
                                                {
                                                    sidebarSubtitle.fields.title
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.contentList}>
                    <h2 className={styles.contentListTitle}>
                        Ways to make money
                    </h2>

                    <div className={styles.contentListWrapper}>
                        <section className={styles.contentItem}>

                            {
                                economicSystem.map((item) => (
                                    <div className={styles.contentItemSubtitle}>
                                        <h2 className={styles.contentItemTitle}>
                                            {item.fields.title}
                                        </h2>
                                        <div className={styles.contentItemText}>
                                            {
                                                documentToReactComponents(item.fields.text)
                                            }
                                        </div>
                                    </div>
                                ))
                            }


                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EconomicSystem;

export const getServerSideProps = async () => {
    const economicSystem = await client.getEntries({
        content_type: "economicSystem",
    });

    return {
        props: {
            economicSystem: economicSystem.items
        },
    };
};