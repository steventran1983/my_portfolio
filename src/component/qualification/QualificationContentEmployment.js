import React from "react";

const QualificationContentEmployment = ({ data }) => {
	const left1 = data[0];
	const left3 = data[1];
	const right2 = data[2];
	const right4 = data[3];

	return (
		<div className="qualification__conent">
			<div className="qualification__data">
				<div>
					<h3 className="qualification__title">{left1.position}</h3>
					<i class="uil uil-building"></i>
					<span className="qualification__subtitle">
						{left1.company}
					</span>
					<div className="qualification__calendar">
						<i class="bx bx-calendar qualification-icon"></i>{" "}
						{left1.time}
					</div>
				</div>

				<div>
					<span className="qualification__rounder"></span>
					<span className="qualification__line"></span>
				</div>
			</div>
			<div className="qualification__data">
				<div></div>
				<div>
					<span className="qualification__rounder"></span>
					<span className="qualification__line"></span>
				</div>
				<div>
					<h3 className="qualification__title">{right2.position}</h3>

					<i class="uil uil-building"></i>
					<span className="qualification__subtitle">
						{right2.company}
					</span>
					<div className="qualification__calendar">
						<i class="bx bx-calendar qualification-icon"></i>{" "}
						{right2.time}
					</div>
				</div>
			</div>
			<div className="qualification__data data-left">
				<div>
					<h3 className="qualification__title">{left3.position}</h3>
					<i class="uil uil-building"></i>
					<span className="qualification__subtitle">
						{left3.company}
					</span>
					<div className="qualification__calendar">
						<i class="bx bx-calendar qualification-icon"></i>{" "}
						{left3.time}
					</div>
				</div>
				<div>
					<span className="qualification__rounder"></span>
					<span className="qualification__line"></span>
				</div>
			</div>
			<div className="qualification__data">
				<div></div>
				<div>
					<span className="qualification__rounder"></span>
					<span className="qualification__line"></span>
				</div>
				<div>
					<h3 className="qualification__title">{right4.position}</h3>

					<i class="uil uil-building"></i>
					<span className="qualification__subtitle">
						{right4.company}
					</span>
					<div className="qualification__calendar">
						<i class="bx bx-calendar qualification-icon"></i>{" "}
						{right4.time}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QualificationContentEmployment;
