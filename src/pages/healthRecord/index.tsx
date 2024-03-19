import React from 'react';
// import styles from './index.less';
import styles from '@/common/index.css';
import Bottom from '@/components/NavBottom';
import { NavBar, Grid } from 'antd-mobile'
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
        <NavBar onBack={() => navigate('/me')}>健康记录</NavBar>
      </div>

      <div className={styles.content} style={{ padding: '0.4rem' }}>

        <List >
          <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
            体重与腰围
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
            尿酸（UA）
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
            糖化血红蛋白（HbA1c）
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
            血压
          </List.Item>
        </List>
      </div>


      {/* <div style={{ marginBottom: "3rem" }}>

      </div>
      <div className={styles.bottom}>
        <Bottom />
      </div> */}
    </div>
  );
}
