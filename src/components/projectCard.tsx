// ProjectCard.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/projectCard.css"
import {Button, Card, Form, ListGroup} from "react-bootstrap";

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
        setRows(1)
    };

    const updateTaskStatus = (taskId: number, newStatus: 'Очередь' | 'В работе' | 'Готово') => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        );
        onTasksUpdate(updatedTasks);
    };

    const [rows, setRows] = useState(1);

    const handleInput = (event) => {
        const textareaLineHeight = 24;
        const previousRows = event.target.rows;
        event.target.rows = 1;

        const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        setRows(currentRows);
    };

    return (
        <Card
            bg="dark"
            className="card mt-3 m-2 projectCard p-3">
            <Card.Title>
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{description}</p>
            </Card.Title>


            <Card.Body  className="d-flex">
                {['Очередь', 'В работе', 'Готово'].map((status) => (
                    <Card
                        bg="dark"
                        text='light'
                        style={{ width: '18rem'}}
                        key={status}
                        className="card__modified flex-fill p-2">
                        <Card.Header>{status}</Card.Header>
                        <Card.Body>
                            <ListGroup as="ol" numbered>
                                {tasks.filter(task => task.status === status).map(task => (
                                    <ListGroup.Item as="li" key={task.id} className="">
                                        <div className="d-flex justify-content-between">
                                            <span className="card__text__content">{task.description}</span>
                                            <div className="btn__card btn-group btn-group-sm">
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
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                ))}
            </Card.Body>
            <Card.Footer>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea"
                        rows={rows}
                        onInput={handleInput}
                        style={{ resize: 'none' }}
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Добавить новую задачу"/>
                </Form.Group>

                <Button
                    className="btn mt-2"
                    onClick={addTask}
                    variant="outline-light"
                >
                    Добавить
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default ProjectCard;