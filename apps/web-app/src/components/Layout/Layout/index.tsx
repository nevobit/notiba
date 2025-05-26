import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import { ReactNode } from 'react';
import Header from '../Header';
import styles from './Layout.module.css';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
      <div  >
          <Header />
          <div className={styles.content} >
              
          <Outlet />
              {children}
          </div>
              
          <Menu />
    </div>
  )
}

export default Layout