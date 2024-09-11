import styles from "./CasestudyTitle.module.scss";

const CasestudyTitle = ({ title }) => {
  return (
    <div className={styles.CasestudyTitle}>
      <div className={styles.circle} />
      <p className={styles.text}>{title}</p>
    </div>
  );
};

export default CasestudyTitle;
