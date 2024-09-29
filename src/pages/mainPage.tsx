import React, {useState} from 'react';
import FuncNavbar from "../components/funcNavbar.tsx";
import ProjectCard from "../components/projectCard.tsx";

const MainPage: React.FC = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Проект 1',
            description: 'Описание проекта 1',
            tasks: [
                { id: 1, description: 'Задача 1 для проекта 1', status: 'Очередь' },
                { id: 2, description: 'Задача 2 для проекта 1', status: 'Очередь' }
            ]
        },
        {
            id: 2,
            title: 'Проект 2',
            description: 'Описание проекта 2',
            tasks: [
                { id: 1, description: 'Задача 1 для проекта 2', status: 'Очередь' },
                { id: 2, description: 'Задача 2 для проекта 2', status: 'Очередь' }
            ]
        }
    ]);

    const addProject = (newProjectTitle: string, newProjectBody: string) => {
        const newProject = {
            id: projects.length + 1,
            title: newProjectTitle || `Проект ${projects.length + 1}`,
            description: `Описание: ${newProjectBody || `проекта ${projects.length + 1}`}`,
            tasks: []
        };
        setProjects([...projects, newProject]);
        setCurrentProject(newProject);
    };

    const [currentProject, setCurrentProject] = useState(projects[0]);

    const handleTasksUpdate = (updatedTasks: Task[]) => {
        const updatedProjects = projects.map(project =>
            project.id === currentProject.id ? { ...project, tasks: updatedTasks } : project
        );
        setProjects(updatedProjects);
        setCurrentProject({ ...currentProject, tasks: updatedTasks });
    };

    return (
        <div className="App w-100">
            <FuncNavbar projects={projects}
                        setCurrentProject={setCurrentProject}
                        addProject={addProject}
            />
            {currentProject && <ProjectCard
                key={currentProject.id}
                title={currentProject.title}
                description={currentProject.description}
                tasks={currentProject.tasks}
                onTasksUpdate={handleTasksUpdate}
            />}
        </div>
    );
};

export default MainPage;