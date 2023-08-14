import Image from "next/image";
import styles from "./Slider.module.scss";
import { useState } from "react";

const dataSlider = [
  {
    id: 1,
    title: "Lorem",
  },
  {
    id: 2,
    title: "Lorem",
  },
  {
    id: 3,
    title: "Lorem",
  },
  {
    id: 4,
    title: "Lorem",
  },
  {
    id: 5,
    title: "Lorem",
  },
];

const Slider = ({ imageSlider }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    console.log("next");
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <div
          onClick={prevSlide}
          style={{
            transform: "rotate(180deg)",
          }}
          className={styles.btn}>
          <Image
            src="/Icons/arrowCircle.svg"
            alt="Right Button Icon"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.imageWrapper}>
          {imageSlider.map((obj, index) => {
            return (
              <div
                style={{
                  opacity: slideIndex === index + 1 ? 1 : 0,
                }}
                className={styles.sliderImage}
                key={obj.fields.slug}>
                <Image
                  src={`https:${obj.fields.image.fields.file.url}`}
                  alt={obj.fields.title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
        <div onClick={nextSlide} className={styles.btn}>
          <Image
            src="/Icons/arrowCircle.svg"
            alt="Right Button Icon"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      <div className={styles.sliderDotsWrapper}>
        <div
          onClick={prevSlide}
          style={{
            transform: "rotate(180deg)",
          }}
          className={styles.btn}>
          <Image
            src="/Icons/arrowCircle.svg"
            alt="Right Button Icon"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.sliderDots}>
          {imageSlider.map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              key={index}
              className={styles.dotWrapper}>
              <div
                style={{
                  background: slideIndex === index + 1 ? "#7A8585" : "#313535",
                }}
                className={styles.dot}></div>
            </div>
          ))}
        </div>
        <div onClick={nextSlide} className={styles.btn}>
          <Image
            src="/Icons/arrowCircle.svg"
            alt="Right Button Icon"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
