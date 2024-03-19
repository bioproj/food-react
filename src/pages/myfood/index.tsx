import React from 'react';
// import styles from './index.less';
import styles from '@/common/index.css';
import Bottom from '@/components/NavBottom';
import { NavBar,Grid } from 'antd-mobile'
import { Card, List, Button } from 'antd-mobile'
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import User from '../recipes/components/list'
export default function Page() {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <NavBar onBack={() => navigate('/me')}>自定义菜肴</NavBar>
      </div>

      <div className={styles.content} style={{ padding: '0.4rem' }}>
  


        <Button block color='primary' size='large'>
          新增自定义菜肴
        </Button>
        <div style={{ marginBottom: "3rem" }} />
        <User></User>
      </div>


      {/* <div style={{ marginBottom: "3rem" }}>

      </div>
      <div className={styles.bottom}>
        <Bottom />
      </div> */}
    </div>
  );
}
