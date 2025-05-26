import { useState } from 'react';
import { Home, Wallet, User, MessageCircle, SquaresUnite } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  to: string;
}

const MenuItem = ({ icon, label, isActive, onClick, to }: MenuItemProps) => {
  return (
    <Link 
      to={to} 
      className={`${styles.menuItem} ${isActive ? styles.active : ''}`} 
      onClick={onClick}
    >
      <div className={styles.iconContainer}>
        {icon}
        {isActive && <div className={styles.activeIndicator} />}
      </div>
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <Home size={22} strokeWidth='1.5' />, label: 'Home', to: '/' },
    { icon: <Wallet size={22} strokeWidth='1.5' />, label: 'Assets', to: '/assets' },
    { icon: <SquaresUnite size={22} strokeWidth='1.5' />, label: 'Hub', to: '/hub' },
    { icon: <MessageCircle size={22} strokeWidth='1.5' />, label: 'Chat', to: '/chat' },
    { icon: <User size={22} strokeWidth='1.5' />, label: 'Profile', to: '/profile' },
  ];

  return (
    <div className={styles.bottomMenuContainer}>
      <nav className={styles.bottomMenu}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            to={item.to}
          />
        ))}
      </nav>
    </div>
  );
};

export default Menu;