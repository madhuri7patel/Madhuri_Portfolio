import CasestudyTitle from "../CasestudyTitle/CasestudyTitle";
import styles from "./CasestudyProcessSlide.module.scss";

const CasestudyProcessSlide = ({ data }) => {
  return (
    <div className={styles.CasestudyProcessSlide}>
      <CasestudyTitle title="The Process" />
      <div className={styles.details}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subTitle}>{data.subTitle}</p>
        <p className={styles.desc}>{data.description}</p>

        <p className={styles.boldlist}>
          {data?.content.items && (
            <>
              {data?.content.items?.map((item, index) => (
                <p key={index}>
                  <span className={styles.boldTitle}>{item.boldTitle}</span>{" "}
                  {item.bigContent}
                </p>
              ))}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default CasestudyProcessSlide;
