import React from "react";
import aboutImage from "../../assets/profile_img.JPG";
import { links } from "./footerData";
import "./footer.css"
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__header">
					<img src={aboutImage} alt="" className="footer__image" />
					<div>
						<h1 className="footer__title">Thang Tran</h1>
					</div>
				</div>
				<ul className="footer__list">
					{links.map(({ section, link }, index) => (
						<li key={index}>
							<a href={link} className="footer__link">
								{section}
							</a>
						</li>
					))}
				</ul>
				<div className="footer__social">
					<a href="" className="footer__social-icon" target="_blank">
						<i class="uil uil-github"></i>
					</a>
					<a href="" className="footer__social-icon" target="_blank">
						<i class="uil uil-instagram-alt"></i>
					</a>
					<a href="" className="footer__social-icon" target="_blank">
						<i class="uil uil-linkedin"></i>
					</a>
					<a href="" className="footer__social-icon" target="_blank">
						<i class="uil uil-facebook"></i>
					</a>
				</div>
				<div className="copyRight">
					&#169; Thang Tran 2021. All rigths reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
