import * as React from 'react';
import styles from '../../styles/Content.module.css';

export const ExampleContainer: React.FC<{children: React.ReactNode}> = ({children})=>
  <div className={styles.example}>
    {children}
  </div>

