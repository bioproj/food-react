import { Link, Outlet } from 'umi';

import styles from './index.less';
import Bottom from '@/components/NavBottom';




export default function Layout() {
  return (
    <div className={styles.app}>
      <div className={styles.body}>
        <Outlet />
      </div>

      <div style={{ marginBottom: "3rem" }}>

      </div>
      <div className={styles.bottom}>
        <Bottom />
      </div>
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
