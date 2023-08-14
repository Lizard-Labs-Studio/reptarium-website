import Image from "next/image";
import styles from "./Lizards.module.scss";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Lizards = ({ lizardsTitle, lizards }) => {
  const [activeCard, setActiveCard] = useState(0);

  const toggleCard = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="container">
      <div className={styles.lizards}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{lizardsTitle}</h1>
          <Image
            alt="Title Element"
            width={47}
            height={8}
            src="/Assets/titleElement.svg"
          />
        </div>
        <div className={styles.elementIconsListWrapper}>
          <div className={styles.elementLine} />
          <ul className={styles.elementIconsList}>
            {lizards.map((element, index) => (
              <li
                onClick={() => toggleCard(index)}
                className={styles.elementWrapper}
                key={element.fields.slug}>
                <div
                  style={{
                    border:
                      activeCard === index
                        ? "1px solid rgba(255, 255, 255, 0.4)"
                        : "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                  className={styles.frontElement}>
                  <Image
                    src={`https:${element.fields.elementIcon.fields.file.url}`}
                    alt={element.fields.elementIcon.fields.title}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div
                  style={{
                    opacity: activeCard === index ? 1 : 0.5,
                  }}
                  className={styles.bgElement}>
                  <Image
                    src={`https:${element.fields.elementIcon.fields.file.url}`}
                    alt={element.fields.elementIcon.fields.title}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.elementLine} />
        </div>

        {lizards.map((card, index) => (
          <div
            style={{
              display: activeCard === index ? "inherit" : "none",
            }}
            key={card.fields.slug}
            className={styles.elementCard}>
            <div className={styles.elementImage}>
              <div className={styles.elementImageFront}>
                <Image
                  src={`https:${card.fields.image.fields.file.url}`}
                  alt={card.fields.image.fields.title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.elementImageBg}>
                <Image
                  src={`https:${card.fields.image.fields.file.url}`}
                  alt={card.fields.image.fields.title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.elementCardBody}>
              <div className={styles.elementCardTitles}>
                <h3 className={styles.cardTitle}>{card.fields.title}</h3>
                <ul className={styles.cardSkills}>
                  {card.fields.skills.map((skill, index) => (
                    <li key={index} className={styles.cardSkill}>
                      <div className={styles.skillIcon}>
                        <Image
                          src={`https:${skill.fields.file.url}`}
                          alt={skill.fields.title}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                      <div className={styles.skillTitle}>
                        {skill.fields.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardDescription}>
                {documentToReactComponents(card.fields.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lizards;
