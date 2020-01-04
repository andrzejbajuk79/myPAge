import React from 'react';

import PROJECTS from '../../dataStore/projectsData.js';
import './projects.styles.css';

const Project = props => {
	//console.log(props);
	const { title, image, description, github, heroku } = props.project;
	return (
		<div className="project-container">
			<h3>{title}</h3>
			<div className="image-container">
				<img className="image" src={image} alt="profile" />
			</div>
			<p className="description">{description}</p>
			<a className="link" href={github}>
				Github source
			</a>
			<br />
			<a className="link" href={heroku}>
				Heroku source
			</a>
		</div>
	);
};

const Projects = () => (
	<div>
		<h2>Wybrane Projekty</h2>
		<div>
			{PROJECTS.map(project => (
				<Project key={project.id} project={project} />
			))}
		</div>
	</div>
);

export default Projects;
