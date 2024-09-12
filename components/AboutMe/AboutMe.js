import styles from './aboutMe.module.scss';
import image from '../../public/assets/image.jpg';
import Image from 'next/image';

const numberBoxes = [
  { title: 'Projects', number: '22+' },
  { title: 'YEARS', number: '3+' },
  { title: 'Client Satisfaction', number: '100%' },
];

const handleEmailClick = async () => {
  const res = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'work.madhuri10@gmail.com',
      subject: 'Contact Inquiry',
      message: 'Message content goes here...',
    }),
  });

  const data = await res.json();
  if (data.success) {
    alert('Email sent successfully');
  } else {
    alert('Failed to send email');
  }
};

const AboutMe = () => (
  <div className={styles.container} id="about">
    <div className={styles.leftContainer}>
      <p className={styles.description}>Hi there,</p>
      <p className={styles.description}>
        {`I'm Madhuri Patel, a full-stack developer with a passion for creating impactful
        applications.`}
      </p>
      <div className={styles.boxContainer}>
        {numberBoxes.map((box, index) => (
          <div key={index} className={styles.NumberBox}>
            <p className={styles.title}>{box.title}</p>
            <p className={styles.number}>{box.number}</p>
            <div className={styles.border} />
          </div>
        ))}
      </div>
    </div>

    <div className={styles.rightContainer}>
      <div className={styles.imageContainer}>
        <Image
          width={376}
          height={437}
          src={image}
          alt="Profile"
          style={{
            borderRadius: '28px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'lightgray',
          }}
        />
        <div className={styles.emailOverlay} onClick={handleEmailClick}>
          work.madhuri10@gmail.com
          <p className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M9.5 0.670044C9.5 0.393902 9.27614 0.170044 9 0.170044L4.5 0.170044C4.22386 0.170044 4 0.393902 4 0.670044C4 0.946186 4.22386 1.17004 4.5 1.17004L8.5 1.17004L8.5 5.17004C8.5 5.44619 8.72386 5.67004 9 5.67004C9.27614 5.67004 9.5 5.44619 9.5 5.17004L9.5 0.670044ZM1.35355 9.0236L9.35355 1.0236L8.64645 0.316491L0.646447 8.31649L1.35355 9.0236Z"
                fill="white"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
