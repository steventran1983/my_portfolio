import React, { useState } from "react";
import QualificationContentEmployment from "./QualificationContentEmployment";
import QualificationContentEducation from "./QualificationContentEducation";
import { employment, education } from "./qualificationData";
import "./qualification.css";

const Qualification = () => {
	const [empStatus, setEmpStatus] = useState(true);
	// const [career, setCareer] = useStae(true)
	return (
		<div className="qualification section" id="#qualification">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My Career Journey</span>
			<div className="qualification__container container">
				<div className="qualification__tab">
					<div
						className={`${
							empStatus
								? "qualification__button button--flex button--active"
								: "qualification__button button--flex"
						}`}
						onClick={() => setEmpStatus(true)}
					>
						<i class="bx bxs-briefcase-alt-2 qualification__icon"></i>
						Carrer
					</div>
					<div
						className={`${
							empStatus
								? "qualification__button button--flex "
								: "qualification__button button--flex button--active"
						}`}
						onClick={() => setEmpStatus(false)}
					>
						<i class="bx bxs-graduation qualification-active qualification__icon"></i>
						Education
					</div>
				</div>
				<div className="qualification__sections">
					{empStatus ? (
						<QualificationContentEmployment data={employment} />
					) : (
						<QualificationContentEducation data={education} />
					)}
					{/* <QualificationContentEducation data={education} /> */}
				</div>
			</div>
		</div>
	);
};

export default Qualification;
