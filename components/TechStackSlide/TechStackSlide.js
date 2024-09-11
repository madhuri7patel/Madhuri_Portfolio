import Image from "next/image";

import TechStackBox from "../svgs/TechStackBox";
import TechStackBoxMobile from "../svgs/TechStackBoxMobile";

import CasestudyTitle from "../CasestudyTitle/CasestudyTitle";
import { TechCategory } from "../../generalHelpers";

import styles from "./TechStackSlide.module.scss";

const StackBox = () => (
  <div className={styles.stackContainer}>
    {TechCategory.map((item, index) => (
      <div key={index} className={styles[`stack${index + 1}`]}>
        <div className={styles.desktopBox}>
          <TechStackBox background={item.background} />
        </div>
        <div className={styles.mobileBox}>
          <TechStackBoxMobile background={item.background} />
        </div>

        <p className={styles.text}>{item.text}</p>
      </div>
    ))}
  </div>
);

const TechRow = ({ techs }) => {
  return (
    <div className={styles.row}>
      {techs.map((tech) => (
        <div key={tech.techName} className={styles.techBox}>
          <div className={styles.logo}>
            <Image
              src={tech.techLogo.url}
              width={tech.techLogo.width}
              height={tech.techLogo.height}
              alt={tech.techName}
              layout="responsive"
            />
          </div>
          <div className={styles.techBoxTitle}>{tech.techName}</div>
        </div>
      ))}
    </div>
  );
};

const TechStackSlide = ({ data }) => {
  return (
    <div className={styles.TechStackSlide}>
      <div className={styles.title}>
        <CasestudyTitle title="Tech Stack" />
      </div>
      <div className={styles.mainContainer}>
        <StackBox />
        <div className={styles.techContainer}>
          {data.map((techs, index) => (
            <TechRow key={index} techs={techs} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSlide;
