import { Menu, Calendar, Bell } from 'lucide-react';
import styles from './Header.module.css';


const Header = () => {

  return (
    <div className={styles.bottomMenuContainer}>
      <nav className={styles.header}>
        <button><Menu size={22} strokeWidth='1.5' /></button>
        <div>
        <button><Calendar  size={22} strokeWidth='1.5'  /></button>
        <button><Bell  size={22} strokeWidth='1.5'  /></button>
        </div>
      </nav>
    </div>
  );
};

export default Header;