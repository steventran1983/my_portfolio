import React from "react";
import aboutImage from "../../assets/profile_img.JPG";
import { links } from "./footerData";
import "./footer.css";
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
					<a
						href="https://github.com/steventran1983"
						className="footer__social-icon"
					>
						<i class="uil uil-github"></i>
					</a>
					<a
						href="https://www.linkedin.com/"
						className="footer__social-icon"
					>
						<i class="uil uil-linkedin"></i>
					</a>
					<a
						href="https://www.facebook.com/thang.congtu.3"
						className="footer__social-icon"
					>
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
