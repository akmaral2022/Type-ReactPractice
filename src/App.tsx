import React, { useState } from 'react';
import './App.css';
import CustomForm from './components/UI/Form/Form';
import AllCard from './components/AllCards/AllCard';
import styles from './components/UI/select/select.module.css'

const App: React.FC = () => {
  const list = [
    { id: 0, title: 'ToDo', description: 'Сделать ToDo, разбить на компоненты', completed: false },
    { id: 1, title: 'Lorem ipsum dolor', description: 'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', completed: false }
  ];

  const [tasks, setTasks] = useState(list);
  const [filterCompleted, setFilterCompleted] = useState<'all' | 'completed' | 'not completed'>('all');

  const handleTaskAdd = (newTask: { id: number; title: string; description: string }) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, completed: false }]);
  }

  const filterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'all' | 'completed' | 'not completed';
    setFilterCompleted(value);
  }

  return (
    <div className='App'>
      <div className='to_do'>
        <CustomForm onTaskAdd={handleTaskAdd} />
        <select className={styles.selectPlace} onChange={filterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not completed</option>
        </select>
        <h3>Your tasks</h3>
        <AllCard tasks={tasks} filterCompleted={filterCompleted} onTaskAdd={handleTaskAdd} />
      </div>
    </div>
  )
}

export default App;
