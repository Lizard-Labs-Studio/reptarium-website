import Link from "next/link";
import styles from "./DiscordBlock.module.scss";

const DiscordBlock = () => {
  return (
    <div className="container-global">
      <div className={styles.discordBlock}>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <div className={styles.titles}>
              <h3 className={styles.title}>JOIN THE COMMUNITY</h3>
              <div className={styles.subtitle}>
                Join our Discord community and choosec onsteur
              </div>
            </div>

            <Link href="#">
              <a>Discord</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordBlock;
