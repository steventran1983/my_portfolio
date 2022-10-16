import React from "react";

const ShowProject = ({ data }) => {
	return (
		<div className="projects__content">
			{data.map(({ id, image, title, desc }) => (
				<div className="projects__card">
					<div className="projects__card--data">
						<img src={image} alt="Photo Work" className="projects__image"></img>

						<h3 className="projects__title">{title}</h3>
						<span className="projects__demo">
							Detail ... <i class="bx bx-right-arrow-alt project__demo-icon"></i>
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default ShowProject;
