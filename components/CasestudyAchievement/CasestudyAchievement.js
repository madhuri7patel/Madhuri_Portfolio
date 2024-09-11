import CasestudyTitle from "../CasestudyTitle/CasestudyTitle";
import styles from "./CasestudyAchievement.module.scss";

const CasestudyAchievement = ({ data }) => {
  return (
    <div className={styles.CasestudyAchievement}>
      <CasestudyTitle title="What we have achieved" />
      <div className={styles.details}>
        {data.map((item) => (
          <div className={styles.row} key={item.title}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.desc}>{item.description}</div>
            {item.listItems && (
              <ul>
                {item.listItems?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasestudyAchievement;
