import { useState } from 'react';
import Link from 'next/link';
import CloseIcon from '../svgs/CloseIcon';
import styles from './Navbar.module.scss';

const socialLinks = [
  {
    text: 'Li',
    link: 'https://www.linkedin.com/in/madhuripatel10/',
    fullText: 'LinkedIn',
  },
  {
    text: 'X',
    link: 'https://x.com/MadhuriPatel682',
    fullText: 'Twitter',
  },
  {
    text: 'GH',
    link: 'https://github.com/madhuri7patel',
    fullText: 'GitHub',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.Navbar}>
        <Link href="/" passHref>
          <p className={styles.nameText}>Madhuri Patel.</p>
        </Link>
        <div className={styles.rightSection}>
          {socialLinks.map((item) => (
            <a href={item.link} key={item.text} target="_blank" rel="noreferrer">
              <div key={item.text} className={styles.icon}>
                <p className={styles.iconText}>{item.text}</p>
              </div>
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.btn}>
            <p style={{ marginRight: '4px' }}>View CV</p>
          </a>
        </div>
        <div onClick={() => setIsOpen(true)} className={styles.rightSectionMobile}>
          <div className={styles.NavMenu}>
            <div className={styles.firstName} />
            <div className={styles.secondLinne} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.closeIcon} onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </div>
          {socialLinks.map((item) => (
            <a href={item.link} key={item.text} target="_blank" rel="noreferrer">
              <div key={item.text} className={styles.link}>
                <p>{item.fullText}</p>
              </div>
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.link}>
            <p style={{ marginRight: '4px' }}>View CV</p>
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
