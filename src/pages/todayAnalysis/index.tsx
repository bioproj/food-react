import React from 'react';
// import styles from './index.less';
import { NavBar } from 'antd-mobile'
import { Card, Toast, Button, SearchBar } from 'antd-mobile'
import styles from '@/common/index.css';
import { AntOutline, RightOutline } from 'antd-mobile-icons'
import User from '../recipes/components/list'
import { useNavigate } from 'react-router-dom'
export default function Page() {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>

      <div className={styles.top}>
        <NavBar onBack={() => navigate('/recipes')}>今日饮食分析</NavBar>
      </div>

      <div className={styles.content} style={{ padding: '0.4rem' }}>
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              早餐、午餐、晚餐热量分析
            </div>
          }
          // extra={<RightOutline />}

          style={{ borderRadius: '10px' }}
          bodyStyle={{ padding: '0' }}
        >
          <User></User>
      
        </Card>

        <div style={{ marginTop: '0.4rem' }}> </div>
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              三大营养占比分析
            </div>
          }
          // extra={<RightOutline />}

          style={{ borderRadius: '10px' }}
          bodyStyle={{ padding: '0' }}
        >
          <User></User>
          <div className={styles.footer} onClick={e => e.stopPropagation()}>

          </div>
        </Card>

        <div style={{ marginTop: '0.4rem' }}> </div>
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              膳食结构分析
            </div>
          }
          // extra={<RightOutline />}

          style={{ borderRadius: '10px' }}
          bodyStyle={{ padding: '0' }}
        >
          <User></User>
          <div className={styles.footer} onClick={e => e.stopPropagation()}>

          </div>
        </Card>

        {/* <User></User> */}
        {/* <img src={yayJpg} width="388" /> */}
      </div>
    </div>
  );
}
