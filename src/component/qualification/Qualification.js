import React from "react";
import QualificationContent from "./QualificationContent";
import { employment, education } from "./qualificationData";
import "./qualification.css"

const Qualification = () => {
	return (
		<div className="qualification section" id="#qualification">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My Career Journey</span>
			<div className="qualification__container container">
				<div className="qualification__tab">
					<div className="qualification__button button--flex">
						<i class="bx bxs-graduation qualification-active qualification__icon"></i>
						Education
					</div>
					<div className="qualification__button button--flex">
						<i class="bx bxs-briefcase-alt-2 qualification__icon"></i>
						Carrer
					</div>
				</div>
				<div className="qualification__sections">
					<QualificationContent data={employment} />
				</div>
			</div>
		</div>
	);
};

export default Qualification;
