import React from 'react';
// import styles from './index.less';
import styles from '@/common/index.css';
import Bottom from '@/components/NavBottom';
import { NavBar } from 'antd-mobile'

export default function Page() {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <NavBar>我的</NavBar>
      </div>

      <div className={styles.content}>
        1111111
      </div>
      <div style={{ marginBottom: "3rem" }}>

      </div>
      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
}
