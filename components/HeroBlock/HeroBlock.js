import styles from "./HeroBlock.module.scss";

const HeroBlock = () => {
  return (
    <div id="home" className={styles.heroBlockWrapper}>
      <div className="container-global">
        <div className={styles.heroBlock}>
          <video
            // src="/Assets/heroBg.mp4"
            poster="/Assets/videoPoster.webp"
            id="videoBg"
            className={styles.video}
            loop
            muted
            playsInline
            autoPlay>
            <source src="/Assets/heroBg.webm" type="video/webm" />
          </video>
          <h1>REPTARIUM</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
