import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';
import plusSvg from '../../assets/plus.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      className={styles.button}
      {...rest}
    >
      {title}
      <img src={plusSvg} alt="Criar" />
    </button>
  );
}