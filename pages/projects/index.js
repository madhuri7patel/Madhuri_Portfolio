import React, { useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { HomeLayout } from '../../Layouts';
import { PothWrap } from '../../components';
import client from '../../client';
import { getAllCasestudies } from '../../queries';

import workvio from '../../public/PorthPosters/workvio.png';
import stock from '../../public/PorthPosters/stock.png';
import dicipl from '../../public/PorthPosters/dicipl.png';
import mylee from '../../public/PorthPosters/mylee.png';
import vendco from '../../public/PorthPosters/vendco.png';
import FourPlay from '../../public/PorthPosters/4play.png';

import styles from '../../styles/our-work.module.scss';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

const OurWork = ({}) => {
  const scroller = useRef(null);

  return (
    <HomeLayout
      ScrollTrigger={ScrollTrigger}
      isDark
      hideSocialIcons={true}
      ref={scroller}
      page={2}
      socialIconsPageRef={null}
    >
      <Head>
        <title>Projects | Chirag Gupta</title>
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
      <div className={styles.OurWork}>
        {/* Workvio */}
        <div className={styles.fullSlide}>
          <PothWrap
            alt="workvio | Chirag Gupta"
            path={'4vH24vgTZra0f5sFohdpox'}
            width="425px"
            img={workvio}
            title="WORKVIO"
            text="Freelancer Work Management"
          />
        </div>

        {/*  */}
        <div className={styles.fullSlide}>
          <div className={styles.halfSlide}>
            <PothWrap
              alt="The Stock App | Chirag Gupta"
              path={'1CZqBYDCHalKAQw3Iea3tC'}
              width="100%"
              img={stock}
              title="THE STOCK APP"
              text="Stock market transparency and investment management"
            />
          </div>
          <div className={styles.halfSlide}>
            <PothWrap
              alt="MyLee | Chirag Gupta"
              path="6XHPgqFqACsa3aVw1kfhYf"
              width="425px"
              img={mylee}
              title="MyLee APP"
              text="My Lactation companion"
            />
          </div>
        </div>

        <div className={styles.fullSlide}>
          <div className={styles.halfSlide}>
            <PothWrap
              alt="4PLAY | Chirag Gupta"
              path={'3rQ1u4kIrrC2EFDM8eipO0'}
              width="425px"
              img={FourPlay}
              title="4PLAY"
              text="Taking Music Experience to Next Level"
            />
          </div>
          <div className={styles.halfSlide}>
            <PothWrap
              alt="Dicipl | Chirag Gupta"
              path={'4jEch2qMcQFplNykeyOlR6'}
              width="425px"
              img={dicipl}
              title="Dicipl"
              text="Sacred Social Connection"
            />
          </div>
        </div>

        <div className={styles.fullSlide}>
          <div className={styles.halfSlide}>
            <PothWrap
              alt="VENDCO | Chirag Gupta"
              path={'eDQ1IEGWVKlpcq08JP0Tb'}
              width="425px"
              img={vendco}
              title="VENDCO"
              text="Transforming Vending Machine Business"
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default OurWork;

export async function getStaticProps() {
  const data = await client.query(getAllCasestudies());
  const paths = data.data.singleCaseStudyCollection.items;

  return {
    props: {
      paths,
    },
  };
}
