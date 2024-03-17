import { Link, Outlet } from 'umi';

import styles from './index.less';
import Bottom from '@/components/NavBottom';

import { Route, useLocation } from 'react-router-dom';


function NavBottom() {
  return (
    <div className={styles.bottom}>
      <Bottom />
    </div>
  );
}
export default function Layout() {
  const location = useLocation();
  const showBottom = ()=>{
    return (location.pathname=="/" || location.pathname=="/recipes" 
    || location.pathname=="/message" || location.pathname=="/me")?true:false
  }
  console.log(location.pathname)
  return (
    <div className={styles.app}>
      <div className={styles.body}>
        
        <Outlet />
      </div>

      <div style={{ marginBottom: "3rem" }}/>
      {showBottom() && <NavBottom/>}
      
    </div>


    // <div className={styles.navs}>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/docs">Docs</Link>
    //     </li>
    //     <li>
    //       <a href="https://github.com/umijs/umi">Github</a>
    //     </li>
    //   </ul>
    //   <Outlet />

    //   <Bottom />
    // </div>
  );
}
