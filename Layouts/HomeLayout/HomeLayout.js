import { forwardRef } from 'react';

import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

import { Scroller } from '../../tools';
import styles from './HomeLayout.module.scss';

gsap.registerPlugin(CustomEase);
//

const HomeLayout = (props, ref) => {
  const { children, ScrollTrigger } = props;

  return (
    <div className={styles.HomeLayout}>
      <Scroller ScrollTrigger={ScrollTrigger} ref={ref}>
        {children}
      </Scroller>
    </div>
  );
};

export default forwardRef(HomeLayout);
