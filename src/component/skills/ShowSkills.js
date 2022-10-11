import React from "react";

const ShowSkills = ({ info }) => {
	const { title, data } = info;
	return (
		<div className="skills__content">
			<h3 className="skills__title">{title}</h3>
			<div className="skills__group">
				{data.map((item, index) => {
					const { tech, level } = item;
					return (
						<div className="skills__data">
							<i class="bx bx-badge-check skills__icon"></i>
							<div className="skills__info">
								<h4 className="skills__name">{tech}</h4>
								<span className="skills__level">{level}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ShowSkills;
