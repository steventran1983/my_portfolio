import React from "react";
import SendEmail from "./SendEmail";
import TalkToMe from "./TalkToMe";

const Contact = () => {
	return (
		<div className="contact section" id="contact">
			<h2 className="section__title">Contact Me</h2>
			<span className="section__subtitle">Get in touch</span>
			<div className="contact__container container">
				<TalkToMe />
				<SendEmail />
			</div>
		</div>
	);
};

export default Contact;
