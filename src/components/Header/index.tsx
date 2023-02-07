import styles from './styles.module.css';
import logoPng from '../../assets/logo.png';

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logoPng} alt="Logo" />
    </div>
  );
}