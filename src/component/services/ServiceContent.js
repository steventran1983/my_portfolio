import React from "react";
// import { FaBeer } from "react-icons/fa";

const ServiceContent = ({ data }) => {
	console.log(data);
	const { tech, icons } = data;
	console.log(icons);
	return (
		<div className="services__content ">
			<div className="services__icon">
				{icons.map((icon, index) => (
					<div key={index}>{icon}</div>
				))}
			</div>
			<h3 className="services__title">
				{tech} <br></br> Developer
			</h3>
			<span className="services__button">
				View More
				<i class="uil uil-arrow-right services__button--icon"></i>
			</span>
		</div>
	);
};

export default ServiceContent;
