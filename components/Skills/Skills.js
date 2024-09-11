import React from 'react';

import styles from './skills.module.scss';

import { SKILLS } from './data';

const Skills = () => (
  <div className={styles.skills}>
    <p className={styles.heading}>Technologies & Framework</p>
    <div className={styles.listContainer}>
      {SKILLS.map((skill, index) => (
        <div key={skill.text + index} className={styles.skillContainer}>
          <div className={styles.iconContainer}>
            {skill.Icon && <skill.Icon height={50} width={50} />}
          </div>
          <p className={styles.skillText}>{skill.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
