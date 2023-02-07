import styles from './styles.module.css';
import clipboardSvg from '../../assets/clipboard.svg';

export function Warning() {
  return (
    <div className={styles.containerEmptyTasks}>
      <img
        alt="Clipboard"
        src={clipboardSvg}
      />
      <span className={styles.textNoTasks}>
        Você ainda não tem tarefas cadastradas
      </span>
      <span className={styles.textNoTasks}>
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  );
}