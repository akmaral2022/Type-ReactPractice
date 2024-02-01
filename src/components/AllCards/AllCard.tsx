import Card from '../Card/Card';
import React, { useState, useEffect } from 'react';

interface Tasks {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface AllCardProps {
    tasks: Tasks[];
    filterCompleted: 'all' | 'completed' | 'not completed';
    onTaskAdd: (newTask: { id: number; title: string; description: string }) => void;
    onDeleteTask: (taskId: number) => void
}

const AllCard: React.FC<AllCardProps> = ({ tasks, filterCompleted, onTaskAdd, onDeleteTask }) => {
    const [filteredTasks, setFilteredTasks] = useState<Tasks[]>(tasks);

    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    const handleChangeStatus = (taskId: number) => {
        const updatedTasks = filteredTasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );

        setFilteredTasks(updatedTasks);
    };

    const filteredTasksToShow = filterCompleted === 'completed'
        ? filteredTasks.filter(task => task.completed)
        : filterCompleted === 'not completed'
            ? filteredTasks.filter(task => !task.completed)
            : filteredTasks;

    return (
        <div>
            {filteredTasksToShow.map((task) => (
                <Card
                    key={task.id}
                    id={task.id}
                    name={task.title}
                    text={task.description}
                    completed={task.completed}
                    onChangeStatus={() => handleChangeStatus(task.id)}
                    onDelete={() => onDeleteTask(task.id)}
                />
            ))}
        </div>
    );
}

export default AllCard;
