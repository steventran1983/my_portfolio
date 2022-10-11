import React from "react";
import ShowSkills from "./ShowSkills";
import { frontend, backend, devOps } from "./skillData";
import "./skills.css";

const Skills = () => {
	const forntEnd = {
		title: "Frontend Developer",
		data: frontend,
	};

	const backEnd = {
		title: "Backend Developer",
		data: backend,
	};

	const devops = {
		title: "DevOps",
		data: devOps,
	};
	return (
		<section className="skills section" id="skills">
			<h2 className="section__title">My Skills</h2>
			<span className="section__subtitle">My Technical Level</span>
			<div className="skills__container container">
				<ShowSkills info={forntEnd} />
				<ShowSkills info={backEnd} />
				<ShowSkills info={devops} />
			</div>
		</section>
	);
};

export default Skills;
