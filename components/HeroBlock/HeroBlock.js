import styles from "./HeroBlock.module.scss";

const HeroBlock = () => {
  return (
    <div className={styles.heroBlockWrapper}>
      <div className="container-global">
        <div className={styles.heroBlock}>
          <video id="videoBg" className={styles.video} loop muted autoPlay>
            <source src="/Assets/heroBg.mp4" type="video/mp4" />
          </video>
          <h1>REPTARIUM</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
