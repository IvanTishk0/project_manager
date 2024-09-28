// ProjectCard.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/projectCard.css"

interface Task {
    id: number;
    description: string;
    status: 'Очередь' | 'В работе' | 'Готово';
    progress?: number;
}

interface ProjectCardProps {
    title: string;
    description: string;
    tasks: Task[];
    onTasksUpdate: (tasks: Task[]) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tasks, onTasksUpdate }) => {
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask) {
            const newTasks = [
                ...tasks,
                { id: tasks.length + 1, description: newTask, status: 'Очередь' }
            ];
            onTasksUpdate(newTasks);
            setNewTask('');
        }
    };

    const updateTaskStatus = (taskId: number, newStatus: 'Очередь' | 'В работе' | 'Готово') => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        );
        onTasksUpdate(updatedTasks);
    };

    return (
        <div className="card mt-3 bg-dark m-2 projectCard">
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-body d-flex">
                {['Очередь', 'В работе', 'Готово'].map((status) => (
                    <div key={status} className="flex-fill p-2">
                        <h3>{status}</h3>
                        <div className="list-group">
                            {tasks.filter(task => task.status === status).map(task => (
                                <div key={task.id} className="list-group-item">
                                    <div className="d-flex justify-content-between">
                                        <span>{task.description}</span>
                                        <div className="btn-group btn-group-sm">
                                            {status !== 'В работе' && (
                                                <button className="btn btn-secondary" onClick={() => updateTaskStatus(task.id, 'В работе')}>В работу</button>
                                            )}
                                            {status !== 'Готово' && (
                                                <button className="btn btn-secondary" onClick={() => updateTaskStatus(task.id, 'Готово')}>Готово</button>
                                            )}
                                            {status === 'Готово' && (
                                                <button className="btn btn-secondary" onClick={() => updateTaskStatus(task.id, 'Очередь')}>В очередь</button>
                                            )}
                                        </div>
                                    </div>
                                    {task.progress && <div>Прогресс: {task.progress}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="card-footer">
                <input
                    type="text"
                    className="form-control"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Добавить новую задачу"
                />
                <button className="btn btn-primary mt-2" onClick={addTask}>Добавить</button>
            </div>
        </div>
    );
};

export default ProjectCard;