import React from "react";
import { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [valueModal, setValueModal] = useState({});

	const openModal = (tech, modalInfo) => {
		console.log(tech);
		console.log(modalInfo);
		const { modalFrontEnd, modalBackEnd, modalFullStack } = modalInfo;
		console.log(modalFrontEnd);
		setIsModalOpen(true);
		if (tech === "Frontend") {
			console.log(tech);
			setValueModal(modalFrontEnd);
		} else if (tech === "Backend") {
			setValueModal(modalBackEnd);
		} else if (tech === "Fullstack") {
			setValueModal(modalFullStack);
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{ isModalOpen, valueModal, openModal, closeModal }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
