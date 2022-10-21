import React from "react";
import "./toast.css";

const Toast = () => {
	return (
		<div className="Toast__container">
			<div className="toast__icon ">
				<i class="bx bx-check-circle  toast__icon-start"></i>
			</div>
			<div className="toast__body">
				<h3 className="toast__body--header">Success</h3>
				<p className="toast__body-content">
					Thank you for your email, I will contact later
				</p>
			</div>
			<div className="toast__close-button">
				<i class="bx bx-x-circle toast__icon-end"></i>
			</div>
		</div>
	);
};

export default Toast;
