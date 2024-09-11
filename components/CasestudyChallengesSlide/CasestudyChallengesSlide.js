import CasestudyTitle from '../CasestudyTitle/CasestudyTitle';
import styles from './CasestudyChallengesSlide.module.scss';

const CasestudyChallengesSlide = ({ data }) => (
  <div className={styles.CasestudyChallengesSlide}>
    <CasestudyTitle title="Our Challenges" />
    <div className={styles.details}>
      {data.map((item) => (
        <div className={styles.row} key={item.title}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.desc}>{item.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default CasestudyChallengesSlide;
