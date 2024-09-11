import CasestudyTitle from "../CasestudyTitle/CasestudyTitle";
import LeftRightCommonContent from "../LeftRightCommonContent/LeftRightCommonContent";

import styles from "./CasestudyFeaturesSlide.module.scss";

const CasestudyFeaturesSlide = ({ data }) => {
  const newData = data.filter((item) => item !== null);
  if (newData.length === 0) return null;

  return (
    <div className={styles.CasestudyFeaturesSlide}>
      <CasestudyTitle title="A Deep Dive in Features" />
      <div className={styles.componentContainer}>
        {newData.map((item, index) => {
          return (
            <LeftRightCommonContent
              key={index}
              isReversed={item.isReversed}
              title={item.content.title}
              isNormalDesc={item.normalDesc}
              content={item.content.boldListItemsCollection.items}
              content2={item.content.listItems}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CasestudyFeaturesSlide;
