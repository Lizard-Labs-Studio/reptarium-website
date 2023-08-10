import Image from "next/image";
import styles from "./Lizards.module.scss";
import { useState } from "react";

const elementIconsListData = [
  {
    id: 1,
    alt: "Earth Element Icon",
    src: "/Icons/earthElement.png",
  },
  {
    id: 2,
    alt: "Fire Element Icon",
    src: "/Icons/fireElement.png",
  },
  {
    id: 3,
    alt: "Water Element Icon",
    src: "/Icons/waterElement.png",
  },
  {
    id: 4,
    alt: "Wind Element Icon",
    src: "/Icons/windElement.png",
  },
];

const elementsListData = [
  {
    id: 1,
    alt: "Earth Element Icon",
    src: "/Assets/elementImage.png",
    title: "Earth Element",
    skills: [
      {
        id: 1,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-1.png",
      },
      {
        id: 2,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-2.png",
      },
      {
        id: 3,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-3.png",
      },
    ],
  },
  {
    id: 2,
    alt: "Fire Element Icon",
    src: "/Assets/elementImage.png",
    title: "Fire Element",
    skills: [
      {
        id: 1,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-1.png",
      },
      {
        id: 2,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-2.png",
      },
      {
        id: 3,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-3.png",
      },
    ],
  },
  {
    id: 3,
    alt: "Water Element Icon",
    src: "/Assets/elementImage.png",
    title: "Water Element",
    skills: [
      {
        id: 1,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-1.png",
      },
      {
        id: 2,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-2.png",
      },
      {
        id: 3,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-3.png",
      },
    ],
  },
  {
    id: 4,
    alt: "Wind Element Icon",
    src: "/Assets/elementImage.png",
    title: "Wind Element",
    skills: [
      {
        id: 1,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-1.png",
      },
      {
        id: 2,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-2.png",
      },
      {
        id: 3,
        title: "Aqua-Speed",
        src: "/Icons/waterSkill-3.png",
      },
    ],
  },
];

const Lizards = () => {
  const [activeCard, setActiveCard] = useState(1);

  const toggleCard = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="container">
      <div className={styles.lizards}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>LIZARDS</h1>
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
            {elementIconsListData.map((element, index) => (
              <li
                onClick={() => toggleCard(index)}
                className={styles.elementWrapper}
                key={element.id}>
                <div
                  style={{
                    border:
                      activeCard === index
                        ? "1px solid rgba(255, 255, 255, 0.4)"
                        : "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                  className={styles.frontElement}>
                  <Image
                    src={element.src}
                    objectFit="cover"
                    layout="fill"
                    alt={element.alt}
                  />
                </div>
                <div
                  style={{
                    opacity: activeCard === index ? 1 : 0.5,
                  }}
                  className={styles.bgElement}>
                  <Image
                    src={element.src}
                    objectFit="cover"
                    layout="fill"
                    alt={element.alt}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.elementLine} />
        </div>

        {elementsListData.map((card, index) => (
          <div
            style={{
              display: activeCard === index ? "inherit" : "none",
            }}
            key={card.id}
            className={styles.elementCard}>
            <div className={styles.elementImage}>
              <div className={styles.elementImageFront}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.elementImageBg}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.elementCardBody}>
              <div className={styles.elementCardTitles}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <ul className={styles.cardSkills}>
                  {card.skills.map((skill, index) => (
                    <li key={skill.id} className={styles.cardSkill}>
                      <div className={styles.skillIcon}>
                        <Image
                          src={skill.src}
                          alt="Skill Icon"
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                      <div className={styles.skillTitle}>{skill.title}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardDescription}>
                Aquilon is a mesmerizing Water Lizard hailing from the depths of
                the Crystal Lake, in the online NFT game. Her skin color ranges
                from soft blues to deep navy, providing camouflage in aquatic
                environments. Her eye markings shimmer, granting her superior
                underwater vision.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lizards;
