import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

const Modal = () => {
	const { isModalOpen, valueModal, closeModal } = useGlobalContext();

	const { title, desc, infos } = valueModal;
	console.log(infos);
	// useEffect(() => {
	// 	arrayInfo = infos.map((info) => info);
	// }, []);
	if (isModalOpen === true) {
		return (
			<div className="services__modal">
				<div className="services__modal-content">
					<i
						class="uil uil-times-circle services__modal-close"
						onClick={closeModal}
					></i>
					<h3 className="services__modal-title">{title}</h3>
					<p className="services__modal-description">{desc}</p>
					<ul className="services__modal-services">
						{infos.map((info, index) => (
							<li className="services__modal-service" key={index}>
								<i class="uil uil-check-circle services_check-icon"></i>
								{info}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
};

export default Modal;
