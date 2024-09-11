import Image from "next/image";
import cx from "classnames";

import styles from "./LeftRightCommonContent.module.scss";

const LeftRightCommonContent = ({
  isReversed,
  title,
  isNormalDesc,
  content,
  content2,
  image,
  description,
}) => {
  return (
    <div
      className={cx(styles.LeftRightCommonContent, {
        [styles.reversed]: isReversed,
      })}
    >
      <div className={styles.imageContainer}>
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt="Component image"
          layout="responsive"
          priority
        />
      </div>
      <div
        className={cx(styles.detailsContainer, {
          [styles.normalDescContainer]: isNormalDesc,
        })}
      >
        <p className={styles.title}>{title}</p>
        <div className={styles.listDescription}>
          {isNormalDesc ? (
            <p className={styles.desc}>{description}</p>
          ) : (
            <ul>
              {content?.map((item, index) => (
                <li key={index}>
                  <span className={styles.boldTitle}>{item.boldTitle}</span>{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          )}
          {content2 && (
            <ul>
              {content2?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftRightCommonContent;
