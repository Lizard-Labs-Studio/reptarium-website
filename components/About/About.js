import Image from "next/image";
import styles from "./About.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const About = ({ aboutTitle, aboutText }) => {
  return (
    <div id="about" className="container">
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{aboutTitle}</h1>
            <Image
              alt="Title Element"
              width={47}
              height={8}
              src="/Assets/titleElement.svg"
            />
          </div>
          <div className={styles.text}>
            {documentToReactComponents(aboutText)}
          </div>
        </div>

        <div className={styles.crystal1}>
          <Image
            alt="Crystal"
            src="/Crystals/crystal-1.png"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className={styles.crystal2}>
          <Image
            alt="Crystal"
            src="/Crystals/crystal-2.png"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className={styles.crystal3}>
          <Image
            alt="Crystal"
            src="/Crystals/crystal-3.png"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className={styles.crystal4}>
          <Image
            alt="Crystal"
            src="/Crystals/crystal-4.png"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className={styles.crystal5}>
          <Image
            alt="Crystal"
            src="/Crystals/crystal-5.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
