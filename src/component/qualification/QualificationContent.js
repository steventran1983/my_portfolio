import React from "react";

const QualificationContent = ({ data }) => {
	return (
		<div className="qualification__conent">
			{data.map((item, index) => {
				const { position, dept, company, time } = item;
				return (
					<div key={index} className="qualification__data">
						<div>
							<h3 className="qualification__title">{position}</h3>

							<i class="uil uil-building"></i>
							<span className="qualification__subtitle">
								{company}
							</span>
							<div className="qualification__calendar">
								<i class="bx bx-calendar qualification-icon"></i>{" "}
								{time}
							</div>
						</div>
						<div>
							<span className="qualification__rounder"></span>
							<div className="qualification__line"></div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default QualificationContent;
