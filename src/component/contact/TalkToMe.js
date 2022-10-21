import React from "react";
import { contactInfo } from "./contactData";
const TalkToMe = () => {
	return (
		<div className="contact__content">
			<div className="contact__info">
				<h3 className="contact__title">Talk to me</h3>
				{contactInfo.map(
					({ icon, method, info, action, href }, index) => (
						<div className="contact__data" key={index}>
							<div className="contact__data-container">
								{icon}
								<p className="contact__card-title">{method}</p>
								<p className="contact__info-data">{info}</p>
								<a href={href} className="contact__button">
									{action}{" "}
									<i class="bx bx-right-arrow-alt contact__button-icon"></i>{" "}
								</a>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default TalkToMe;
