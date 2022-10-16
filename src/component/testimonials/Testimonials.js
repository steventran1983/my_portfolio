import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { Data } from "./testimonialsData";
import "./testimonials.css";
const Testimonials = () => {
	return (
		<div className="testinomial container section" id="testimonials">
			<h2 className="section__title">People saying about me !</h2>
			<span className="section__subtitle">Testimonials</span>
			<div className="testimonial__conainer container"></div>
			<Swiper
				loop={true}
				grabCursor={true}
				spaceBetween={24}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				}}
				modules={[Pagination]}
				className="testimonial__container"
			>
				{Data.map(({ id, image, title, description }) => (
					<SwiperSlide className="testimoniial__card" key={id}>
						<img
							src={image}
							alt="photo"
							className="testimonial__img"
						/>
						<h3 className="testimonial__name">{title}</h3>
						<p className="testimonial__description">
							{description}
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonials;
