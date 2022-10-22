import React from "react";
import "./toast.css";

const Toast = ({ data }) => {
	
	return (
		<div className="Toast__container">
			<div className="toast__icon ">
				<i class="bx bx-check-circle  toast__icon-start"></i>
			</div>
			<div className="toast__body">
				<h3 className="toast__body--header">Success</h3>
				<p className="toast__body-content">
					Thank you , I will contact later
				</p>
			</div>
			<div className="toast__close-button">
				<i
					class="bx bx-x-circle toast__icon-end"
					onClick={() => data(false)}
				></i>
			</div>
		</div>
	);
};

export default Toast;
