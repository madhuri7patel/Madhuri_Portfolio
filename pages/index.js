import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { AboutMe, Projects, Skills, WorkExprience } from '../components';
import { HomeLayout } from '../Layouts';

import styles from '../styles/Home.module.scss';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scroller = useRef(null);

  return (
    <HomeLayout ScrollTrigger={ScrollTrigger} ref={scroller}>
      <Head>
        <title>Portfolio | Madhuri Patel</title>
        <meta
          name="description"
          content="A full-stack developer with a passion for creating impactful applications"
        />
        <meta property="og:title" content="Portfolio | Chirag Gupta" />
        <meta
          property="og:description"
          content="A full-stack developer with a passion for creating impactful applications"
        />
      </Head>
      <div className={styles.Home}>
        <AboutMe />
        <Projects />
        <Skills />
        <WorkExprience />
      </div>
    </HomeLayout>
  );
}
