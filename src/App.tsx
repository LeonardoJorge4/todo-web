import { useState } from "react";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import "./global/styles.css";
import styles from './App.module.css';
import { Warning } from "./components/Warning";
import { Task } from "./components/Task";

export interface TaskProps {
  id: number;
  isCompleted: boolean;
  description: string;
}


function App() {
  const [inputTask, setInputTask] = useState('')
  const [tasks, setTasks] = useState<TaskProps[] | []>([]);
  const [countConcludedTasks, setCountConcludedTasks] = useState(0)

  function handleAddTask() {
    const task = {
      id: Number(new Date().getTime()),
      isCompleted: false,
      description: inputTask
    }

    setTasks(oldTasks => [task, ...oldTasks])
    setInputTask("")
  }

  function handleChangeStatusTask(taskItem: TaskProps) {
    tasks.filter(task => task.id === taskItem.id ? task.isCompleted = !task.isCompleted : task)

    if (taskItem.isCompleted) {
      const tasksWithCompletedInLastPosition = [...tasks.filter(task => task !== taskItem), taskItem]

      setTasks(tasksWithCompletedInLastPosition)
      setCountConcludedTasks(oldCount => oldCount + 1)
    } else {
      setTasks(oldTasks => [...oldTasks])
      setCountConcludedTasks(oldCount => oldCount - 1)
    }
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setCountConcludedTasks(oldCount => oldCount - 1)

    setTasks(filteredTasks)
  }

  return (
    <body>
      <Header />

      <section className={styles.content}>
        <div className={styles.contentHeader}>
          <Input
            value={inputTask}
            onChange={({ target }) => setInputTask(target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <Button
            title="Criar"
            disabled={!!!inputTask}
            onClick={handleAddTask}
          />
        </div>

        <div className={styles.containerTasks}>
          <div className={styles.headerTasks}>
            <p className={styles.colorMain}>
              Tarefas criadas <span>{tasks.length}</span>
            </p>
            <p className={styles.colorSecondary}>
              Concluídas <span>{tasks.length > 0 ? `${countConcludedTasks} de ${tasks.length}` : tasks.length}</span>
            </p>
          </div>

          <div className={styles.contentTasks}>
            {
              tasks.length <= 0
                ? <Warning />
                : tasks.map((item) => (
                  <Task
                    key={item.id}
                    task={item}
                    onCompleteTask={handleChangeStatusTask}
                    onRemoveTask={handleRemoveTask}
                  />
                ))
            }
          </div>
        </div>
      </section>
    </body>
  )
}

export default App
