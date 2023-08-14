import Image from "next/image";
import Slider from "../Slider/Slider";
import styles from "./SliderBlock.module.scss";

const SliderBlock = ({ imageSliderTitle, imageSlider }) => {
  return (
    <div className="container">
      <div className={styles.sliderBlock}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{imageSliderTitle}</h1>
          <Image
            alt="Title Element"
            width={47}
            height={8}
            src="/Assets/titleElement.svg"
          />
        </div>
        <Slider imageSlider={imageSlider} />
      </div>
    </div>
  );
};

export default SliderBlock;
