import React from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

//* Images
import dermetologist from '../../public/PorthPosters/4play.png';
import mylee from '../../public/PorthPosters/mylee.png';
import dicipl from '../../public/PorthPosters/dicipl.png';
import workvio from '../../public/PorthPosters/workvio.png';

// import PothWrap from '../components/PothWrap/PothWrap';
import PothWrap from '../PothWrap/PothWrap';

import styles from './projects.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const router = useRouter();

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.fullSilde}>
        <PothWrap
          alt="Workvio | Madhuri Patel"
          path="4vH24vgTZra0f5sFohdpox"
          width="100%"
          img={workvio}
          title="WORKVIO"
          text="Freelancer Work Management"
        />
      </div>
      <div className={styles.fullSilde}>
        <div className={styles.halfSlide}>
          <PothWrap
            alt="MyLee | Madhuri Patel"
            path="6XHPgqFqACsa3aVw1kfhYf"
            width="425px"
            img={mylee}
            title="MyLee APP"
            text="My Lactation companion"
          />
        </div>
        <div className={styles.halfSlide}>
          <PothWrap
            img={dermetologist}
            alt="4PLAY | Madhuri Patel"
            path={'3rQ1u4kIrrC2EFDM8eipO0'}
            width="425px"
            title="4PLAY"
            text="Taking Music Experience to Next Level"
          />
        </div>
      </div>
      <div className={styles.seeMore} onClick={() => router.push('/projects')}>
        <p>SEE MORE</p>
      </div>
    </div>
  );
};

export default Projects;
