import React from "react";

const Scroll = () => {
	return (
		<div className="home__scroll">
			<a href="#about" className="home__scroll-button">
				<i class="uil uil-mouse-alt-2 home__sroll--mouse"></i>
				<span className="home__scroll--name">
					Scrolling Down
					<div className="home__scroll-arrow">
					 <i class="uil uil-arrow-down home__scroll--arrow"></i>

					</div>
				</span>
			</a>
		</div>
	);
};
export default Scroll;
