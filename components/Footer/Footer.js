import React from 'react';
import cx from 'classnames';

import LinkedinHome from '../svgs/LinkedinHome';
import LinkIcon from '../svgs/Link';

import styles from './Footer.module.scss';

const socialLinks = [
  {
    text: 'Twitter',
    link: 'https://x.com/MadhuriPatel682',
  },
  {
    text: 'Github',
    link: 'https://github.com/madhuri7patel',
  },
];

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.absoluteSection}>
      <p className={styles.heading}>Want to Hire Me?</p>
      <div className={styles.btns}>
        <a
          href={'https://www.linkedin.com/in/madhuripatel10/'}
          target="_blank"
          rel="noreferrer"
          className={cx(styles.btn, styles.hoverDiv)}
        >
          <p className={styles.btnText}>Connect On</p>
          <LinkedinHome />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={cx(styles.btn, styles.hoverDiv)}
          style={{
            backgroundColor: '#2B59FF',
            marginLeft: '18px',
          }}
        >
          <p>View CV</p>
          <LinkIcon fill="#fff" />
        </a>
      </div>
    </div>
    <div className={styles.footerContent}>
      <p>© Copyright 2024</p>
      <div className={styles.links}>
        {socialLinks.map((item) => (
          <a
            href={item.link}
            key={item.text}
            target="_blank"
            rel="noreferrer"
            className={styles.hoverDiv}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
