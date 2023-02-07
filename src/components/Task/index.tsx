import styles from './styles.module.css';
import trashSvg from '../../assets/trash.svg';

import { AiOutlineCheck } from 'react-icons/ai'
import { TaskProps } from '../../App';

interface Props {
  task: TaskProps;
  onCompleteTask: (id: TaskProps) => void;
  onRemoveTask: (id: number) => void;
}

export function Task({
  task,
  onCompleteTask,
  onRemoveTask
}: Props) {
  return (
    <div className={styles.container}>
      <button
        title="Concluir tarefa"
        onClick={() => onCompleteTask(task)}
        className={`${styles.button} ${task.isCompleted ? styles.checked : styles.notChecked}`}
      >
        {
          task.isCompleted &&
          <AiOutlineCheck
            color="#fff"
            width={5}
            height={5}
          />
        }
      </button>

      <p className={`${task.isCompleted && styles.descriptionCompleted}`}>{task.description}</p>

      <button
        className={styles.buttonRemove}
        onClick={() => onRemoveTask(task.id)}
      >
        <img
          src={trashSvg}
          alt="Excluir"
        />
      </button>
    </div>
  );
}