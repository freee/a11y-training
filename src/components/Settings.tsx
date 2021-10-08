import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Settings.module.css';

export const Settings: React.FC = () => {
  const [grayScale, setGrayScale] = useState(false);
  const [hidePointer, setHidePointer] = useState(false);
  return (
    <aside className={styles.settings}>
      <Head>
        <style>{grayScale ? '*{filter:grayscale(100%) !important' : ''}</style>
        <style>
          {hidePointer
            ? '*{cursor:none !important;pointer-events:none !important}*:focus{cursor: none !important;pointer-events:none !important}'
            : ''}
        </style>
      </Head>
      <label className={styles.labelCheckbox}>
        <input
          type="checkbox"
          checked={grayScale}
          onChange={(e) => setGrayScale(e.target.checked)}
        />
        <span>グレースケール表示</span>
      </label>
      <label className={styles.labelCheckbox}>
        <input
          type="checkbox"
          checked={hidePointer}
          onChange={(e) => setHidePointer(e.target.checked)}
        />
        <span>マウスポインタ無効</span>
      </label>
    </aside>
  );
};
