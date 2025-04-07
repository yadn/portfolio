import React from 'react';
import './projects.scss';

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is a description of project one.',
        link: '',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is a description of project two.',
        link: '',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'This is a description of project three.',
        link: '',
    },
];

const ProjectCard = ({ title, description, link }) => (
    <div className="project-card">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
        </a>
    </div>
);

const Projects = () => {
    return (
        <>
            <h1 className="projects-header">Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects;