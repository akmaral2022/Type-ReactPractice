import React, { useState } from 'react';
import './App.css';
import CustomForm from './components/UI/Form/Form';
import AllCard from './components/AllCards/AllCard';

const App: React.FC = () => {
  const list = [
    { id: 0, title: 'ToDo', description: 'Сделать ToDo, разбить на компоненты', completed: false },
    { id: 1, title: 'Lorem ipsum dolor', description: 'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', completed: false }
  ];

  const [tasks, setTasks] = useState(list);
  const [filterCompleted, setFilterCompleted] = useState(false);

  const handleTaskAdd = (newTask: { id: number; title: string; description: string }) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, completed: false }]);
  }

  const filterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === 'completed') {
      setFilterCompleted(true);
      console.log('Сделано');
    } else if (value === 'not completed') {
      setFilterCompleted(false);
      console.log('Не сделано');
    }
  }

  return (
    <div className='App'>
      <div className='to_do'>
        <CustomForm onTaskAdd={handleTaskAdd} />
        <select onChange={filterChange}>
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
