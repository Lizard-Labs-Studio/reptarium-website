import Image from "next/image";
import styles from "./Roadmap.module.scss";
import { useState } from "react";

const Roadmap = ({ roadmapTitle, roadmap }) => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div id="roadmap" className="container">
      <div className={styles.roadmap}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{roadmapTitle}</h1>
          <Image
            alt="Title Element"
            width={47}
            height={8}
            src="/Assets/titleElement.svg"
          />
        </div>

        <div
          className={listOpen ? styles.roadmapBody : styles.roadmapBodyClose}>
          <div className={styles.line} />
          <div className={styles.bgElement1} />
          <div className={styles.bgElement2} />

          {roadmap
            .sort((a, b) => a.fields.id - b.fields.id)
            .map((card, index) => (
              <div key={index} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <div className={styles.cardPin}>
                    <div className={styles.cardPinCircle}></div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitles}>
                      <h3 className={styles.cardTitle}>{card.fields.title}</h3>
                      <div className={styles.cardSubtitle}>
                        {card.fields.subtitle}
                      </div>
                    </div>

                    <div className={styles.cardText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia, repudiandae. Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Aperiam ea iste inventore.
                      Asperiores, delectus voluptas quis alias commodi vel
                      nobis!
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div
            style={{
              opacity: listOpen ? 0 : 1,
            }}
            className={styles.cardBodyShadow}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <div className={styles.buttonLine} />
          <div
            onClick={() => setListOpen(!listOpen)}
            className={styles.buttton}>
            {listOpen ? "Close" : "Read More"}
          </div>
          <div className={styles.buttonLine} />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
