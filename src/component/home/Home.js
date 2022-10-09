import React from "react";
import Social from "./Social";
import avartar from "../../assets/profile_img.JPG";
import Descripsion from "./Descripsion";
import "./home.css";

const Home = () => {
	return (
		<section className="home section" id="home">
			<div className="home__container container grid">
				<div className="home__content grid">
					<Social />

					<Descripsion />
					<div className="home__image">
						<img
							src={avartar}
							alt="Photo"
							className="home__image-profile"
						></img>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
