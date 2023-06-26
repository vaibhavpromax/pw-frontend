import styles from './TabNavBtn.module.scss';
import Button from '../../Button/Button';

const TabNavBtn = ({ width, onClick, active, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.tabNavBtn} ${active ? styles.active : ''}  ${className ?? ''}`}
      style={{ width }}>
      {children}
    </button>
  );
};

export default TabNavBtn;
