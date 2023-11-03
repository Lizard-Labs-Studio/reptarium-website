import Link from "next/link";
import styles from "../styles/EconomicSystem.module.scss";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../contentful";
import Head from "next/head";


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
                                            <div key={sidebarSubtitle.fields.slug} className={styles.sidebarSubtitle}>
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


                            <div className={styles.contentItemSubtitle}>
                                <h2 className={styles.contentItemTitle}>
                                    Craft and sell
                                </h2>
                                <div className={styles.contentItemText}>
                                    Most of the items created in the game are NFT and if you are good enough you can become famous around the world Reptarium as the best crafter, take orders to create rare items and trade them for Crypto.
                                </div>
                            </div>

                            <div className={styles.contentItemSubtitle}>
                                <h2 className={styles.contentItemTitle}>
                                    Guilds
                                </h2>
                                <div className={styles.contentItemText}>
                                    In the world of Reptaruim you can become a guildmaster and trade, fight, make alliances and manage the economy of this world. As a guildmaster you will profit from the trade of other players in your territory. Rule your territory and dominate the new fantasy world.
                                </div>
                                <div className={styles.contentItemList}>
                                    <div className={styles.contentItemCard}>
                                        <div className={styles.cardImage}>
                                            <Image
                                                alt="Title Element"
                                                layout='fill'
                                                objectFit='contain'
                                                src="/Assets/adventurers.png"
                                            />
                                        </div>

                                        <div className={styles.cardBody}>
                                            <h3 className={styles.cardTitle}>Adventurers</h3>
                                            <p className={styles.cardText}>You have chosen the path of sword and battle, which is necessary for such a young world as never before, all members of the guild receive a buff to experience, increased stamina. The guild office issues permits for trade between players in its territory, your guild has the right to take orders or assign orders for the heads of criminals, monster hunting mode is available, you have the right to decide how the world will be divided and for this you have sharp blades and sharp mind, you have the right to be mercenaries in guild wars and fight for the right to dominate regions. You can also carry your own banner in wars and get a nice payoff when you win.</p>
                                        </div>
                                    </div>

                                    <div className={styles.contentItemCard}>
                                        <div className={styles.cardImage}>
                                            <Image
                                                alt="Title Element"
                                                layout='fill'
                                                objectFit='contain'
                                                src="/Assets/traders.png"
                                            />
                                        </div>

                                        <div className={styles.cardBody}>
                                            <h3 className={styles.cardTitle}>Merchants</h3>
                                            <p className={styles.cardText}>You have chosen the path of progress. Trade and cultural exchange are your specialty. All guild members receive an intelligence buff, the guild office grants permission to trade between players in its territory, as well as when trading a guild member pays reduced taxes, you have the ability to open credit support for other guilds and players. You cannot be attacked without a declaration of war, then you as representatives have time to react and solve the problem peacefully or go to war. All merchant guild representatives have a buff to crafting speed.</p>
                                        </div>
                                    </div>

                                    <div className={styles.contentItemCard}>
                                        <div className={styles.cardImage}>
                                            <Image
                                                alt="Title Element"
                                                layout='fill'
                                                objectFit='contain'
                                                src="/Assets/craftsmen.png"
                                            />
                                        </div>

                                        <div className={styles.cardBody}>
                                            <h3 className={styles.cardTitle}>Craftsmen</h3>
                                            <p className={styles.cardText}>You have chosen the path of creation and the Gods are your patron. Progress of Science and Magic is the only thing you are interested in creating a guild of craftsmen you get divine blessing, no one in this world of intelligent beings will dare to attack you as the offender will be punished by the lord. All members of the guild receive a permanent buff on success when crafting things, and once a week all members of the guild receive items for crafting and the chance of falling rare raw materials increases.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className={styles.contentItemSubtitle}>
                                <h2 className={styles.contentItemTitle}>
                                    Level up
                                </h2>
                                <div className={styles.contentItemText}>
                                    Our world is open to all, so we give everyone the opportunity to become a part of this world, so players can pump up a normal character to turn it into NFT.
                                </div>
                            </div>

                            <div className={styles.contentItemSubtitle}>
                                <h2 className={styles.contentItemTitle}>
                                    KILL2EARN
                                </h2>
                                <div className={styles.contentItemText}>
                                    In this still very young world, one rule is survival of the fittest. Depending on the strength of the characters in the game there are leagues, taking top places you can become famous as the greatest warrior and get rewarded for it.
                                </div>
                            </div>

                            <div className={styles.contentItemSubtitle}>
                                <h2 className={styles.contentItemTitle}>
                                    Breeding rare characters
                                </h2>
                                <div className={styles.contentItemText}>
                                    Although the primordial world starts small, the basic elements are just the beginning, by properly cultivating them and raising them you can get truly very rare NFT characters. In addition, you can breed pets in the game by crossbreeding and raising new unique types of creatures.
                                </div>
                            </div>




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