import React from "react";
import "./scrolling.css";
import { useState } from "react";
const Scrolling = () => {
	const [scrollOn, setScrollOn] = useState(false);
	window.addEventListener("scroll", function () {
		// const scrollUp = document.querySelector(".scrolling__container");
		if (this.scrollY > 560) {
			setScrollOn(true);
		} else {
			setScrollOn(false);
		}
	});
	if (scrollOn) {
		return (
			<div className="scrolling__container">
				<a href="#" className="scrolling__section">
					<i class="bx bxs-chevrons-up scrooling__arrow"></i>
				</a>
			</div>
		);
	} else {
		return "";
	}
};

export default Scrolling;
