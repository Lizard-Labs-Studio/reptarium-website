import Image from "next/image";
import Slider from "../Slider/Slider";
import styles from "./SliderBlock.module.scss";

const SliderBlock = () => {
  return (
    <div className="container">
      <div className={styles.sliderBlock}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>IMAGES</h1>
          <Image
            alt="Title Element"
            width={47}
            height={8}
            src="/Assets/titleElement.svg"
          />
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default SliderBlock;
