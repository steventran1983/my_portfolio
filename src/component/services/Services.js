import React from "react";
import "./services.css";
import ServiceContent from "./ServiceContent";
import { serviceIcon } from "./servicesData";

const Services = () => {
	const { fe, be, fus } = serviceIcon;
	const frontEnd = {
		tech: "Frontend",
		icons: fe,
	};
	const backEnd = {
		tech: "Backend",
		icons: be,
	};
	const fullStack = {
		tech: "Fullstack",
		icons: fus,
	};

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I Offer</span>
			<div className="services__container container">
				<ServiceContent data={frontEnd} />
				<ServiceContent data={backEnd} />
				<ServiceContent data={fullStack} />
			</div>
		</section>
	);
};

export default Services;
