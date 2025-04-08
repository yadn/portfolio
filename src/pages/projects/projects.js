import React from 'react';
import './projects.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const projects = [
    {
        id: 1,
        title: 'React Portfolio',
        description: 'Portfolio describing my work, education, skills and projects. This page is this project itself!',
        techStack: "ReactJs, CSS, HTML, JavaScript, npm",
        githubLink: 'https://yadn.github.io/portfolio/',
    },
    {
        id: 2,
        title: 'Mess Management System',
        description: 'Created a web application using Django framework and sqlite3 module, that allows students to apply for overheads and rebates. Added roles for mess managers and mess workers to approve the students requests. Auto generation of individual mess bill reports for every registered student',
        techStack: "Python, Django, Bootstrap, HTML, CSS ",
        githubLink: 'https://github.com/yadn/Mess-management-system',
    },
    {
        id: 3,
        title: 'Tomographic reconstruction in fewviews and lowdose regimes using prior templates',
        description: 'Implemented novel method of using Machine learning techniques in tomographic reconstruction in Sub-Nyquist sampled views and low radiation dosage on 2D and 3D datasets. Obtained promising results on real head and neck cancer dataset obtained from Tata Memorial Hospital Mumbai.',
        techStack: "MATLAB",
        githubLink: '',
    },
    {
        id: 4,
        title: 'Music Genre Classification',
        description: 'Pre-processed GTZAN dataset containing 1000 audio .wav files and included additional set of rhythmic features to improve existing performance. Used Decision tree, Random forest, Linear SVM and Logistic regression classifiers and compared their performances in terms of test accuracy.',
        techStack: "Python, Tensorflow, Librosa library",
        githubLink: 'https://github.com/yadn/Music-Genre-Classification',
    },
    {
        id: 5,
        title: 'Training Recurrent Attention Models (RAMs) on Handwritten Word Images',
        description: 'Implemented RAM on EMNIST dataset (handwritten character images) with a novel fisheye approach for generating input for the CNN network and improved test accuracy of the baseline approach. Tested RAM with fisheye approach on IAM dataset.',
        techStack: "Python, Pytorch",
        githubLink: 'https://github.com/yadn/Mess-management-system',
    }
];

const ProjectCard = ({ title, description, techStack, githubLink }) => (
    <div className="project-card">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">{`Tech used: ${techStack}`}</div>
        {githubLink && <div className="project-link">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="git-icon" />
            </a>
        </div>
        }
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
                        techStack={project.techStack}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects;