import Image from "next/image";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className="container">
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>ABOUT US</h1>
            <Image
              alt="Title Element"
              width={47}
              height={8}
              src="/Assets/titleElement.svg"
            />
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget purus tristique sem faucibus euismod sagittis vitae sem.
              Suspendisse ultrices ut nisi et tempor. Nulla consequat tellus
              cursus mi finibus pulvinar. Aliquam porttitor enim eget dignissim
              semper. Vestibulum eleifend tincidunt porttitor. Sed eget
              malesuada velit. Proin consectetur sapien ut justo ornare, nec
              pellentesque metus vehicula. Quisque scelerisque volutpat augue,
              eget elementum sem feugiat non. In hac habitasse platea dictumst.
              Nulla dictum dolor sit amet arcu pellentesque, eu maximus lectus
              accumsan.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget purus tristique sem faucibus euismod sagittis vitae sem.
              Suspendisse ultrices ut nisi et tempor. Nulla consequat tellus
              cursus mi finibus pulvinar. Aliquam porttitor enim eget dignissim
              semper. Vestibulum eleifend tincidunt porttitor. Sed eget
              malesuada velit. Proin consectetur sapien ut justo ornare, nec
              pellentesque metus vehicula. Quisque scelerisque volutpat augue,
              eget elementum sem feugiat non. In hac habitasse platea dictumst.
              Nulla dictum dolor sit amet arcu pellentesque, eu maximus lectus
              accumsan.
            </p>
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
