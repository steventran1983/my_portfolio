import React from "react";
import "./projects.css";
import ShowProject from "./ShowProject";
import { proProject, sideProject, allProject } from "./projectData";
import { useState } from "react";

const Projects = () => {
	const [allOpen, setAllOpen] = useState(false);
	const [profecssionalOpen, setProfessionalOpen] = useState(true);
	const [sideOpen, setSideOpen] = useState(false);

	const handleOpen = () => {
		setAllOpen(true);
		setProfessionalOpen(false);
		setSideOpen(false);
	};
	const handlePro = () => {
		setAllOpen(false);
		setProfessionalOpen(true);
		setSideOpen(false);
	};
	const handleSide = () => {
		setAllOpen(false);
		setProfessionalOpen(false);
		setSideOpen(true);
	};

	return (
		<div className="projects section" id="project">
			<h2 className="section__title">Projects</h2>
			<span className="section__subtitle">My standout projects</span>
			<div className="projects__conainer container">
				<div className="projects__tab">
					<div
						className={`${
							profecssionalOpen
								? "projects__button button-active"
								: "projects__button"
						}`}
						onClick={handlePro}
					>
						Professional
					</div>
					<div
						className={`${
							sideOpen
								? "projects__button button-active"
								: "projects__button"
						}`}
						onClick={handleSide}
					>
						Individual
					</div>
					<div
						className={`${
							allOpen
								? "projects__button button-active"
								: "projects__button"
						}`}
						onClick={handleOpen}
					>
						All
					</div>
				</div>
				<div className="projects__sections">
					{profecssionalOpen ? <ShowProject data={proProject} /> : ""}
					{allOpen ? <ShowProject data={allProject} /> : ""}
					{sideOpen ? <ShowProject data={sideProject} /> : ""}
				</div>
			</div>
		</div>
	);
};

export default Projects;
