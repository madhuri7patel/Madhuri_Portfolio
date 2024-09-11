import { forwardRef, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './PothWrap.module.scss';

// eslint-disable-next-line react/display-name
const PothWrap = forwardRef(({ img, text, title, path, alt = '' }, ref) => (
  <div className={styles.PothWrap} style={{ width: '100%' }}>
    <Link href={`/projects/${path}`} passHref>
      <div style={{ width: '100%' }} ref={ref}>
        <Image src={img} alt={alt} priority />
      </div>
    </Link>
    <h1 className={styles.title}>{title}</h1>
    <p>{text}</p>
  </div>
));

export default memo(PothWrap);
