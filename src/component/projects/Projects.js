import React from "react";
import "./projects.css";
import ShowProject from "./ShowProject";
import { proProject, sideProject, allProject } from "./projectData";

const Projects = () => {
	return (
		<div className="projects section" id="project">
			<h2 className="section__title">Projects</h2>
			<span className="section__subtitle">My standout projects</span>
			<div className="projects__conainer container">
				<div className="projects__tab">
					<div className="projects__button button--flex">All</div>
					<div className="projects__button button--flex">
						Professional
					</div>
					<div className="projects__button button--flex">
						Side Work
					</div>
					<div className="project__sections">
						<ShowProject />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
