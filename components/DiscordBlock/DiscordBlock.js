import Link from "next/link";
import styles from "./DiscordBlock.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const DiscordBlock = ({ discordTitle, discordSubtitle, discordLink }) => {
  return (
    <div className="container-global">
      <div className={styles.discordBlock}>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <div className={styles.titles}>
              <h3 className={styles.title}>{discordTitle}</h3>
              <div className={styles.subtitle}>
                {documentToReactComponents(discordSubtitle)}
              </div>
            </div>

            <Link href={discordLink}>
              <a rel="noopener noreferrer" target="_blank">
                Discord
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordBlock;
