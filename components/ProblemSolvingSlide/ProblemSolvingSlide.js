import { useState } from "react";
import Image from "next/image";
import cx from "classnames";

import CasestudyTitle from "../CasestudyTitle/CasestudyTitle";

import styles from "./ProblemSolvingSlide.module.scss";

const ProblemSolvingSlide = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleLayerClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.ProblemSolvingSlide}>
      <div className={styles.part1}>
        <div className={styles.title}>
          <CasestudyTitle title="Problem Solving" />
        </div>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={data.image.url}
              width={data.image.width}
              height={data.image.height}
              alt="Problem Solving"
              layout="responsive"
              priority
            />
          </div>
          <div className={styles.detailsConatainer}>
            <p className={styles.detailsTitle}>{data.title}</p>
            <p className={styles.desc}>{data.description}</p>
            <p className={styles.boldlist}>
              {data?.content.items && (
                <>
                  {data?.content.items.map((item, index) => (
                    <p key={index}>
                      <span className={styles.boldTitle}>{item.boldTitle}</span>{" "}
                      {item.content}
                    </p>
                  ))}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      {data.iFrame && (
        <div className={styles.iFrameContainer}>
          <div
            className={cx(styles.layer, {
              [styles.layerClicked]: isClicked,
            })}
            onClick={handleLayerClick}
          />
          <iframe
            src={data.iFrame}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
      {/* <div className={styles.sliderContainer}>Slider</div> */}
    </div>
    // ! Component after iFrameContainer is remaining need to discuss
    // ! because different casestudies have different designs.
  );
};
export default ProblemSolvingSlide;
