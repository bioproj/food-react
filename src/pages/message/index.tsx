import React from 'react';
// import styles from './index.less';
import styles from '@/common/index.css';

import { NavBar } from 'antd-mobile'
export default function Page() {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <NavBar>消息</NavBar>
      </div>

      <div className={styles.content}>
            1111111
      </div>
    </div>
  );
}
