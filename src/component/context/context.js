import React from "react";
import { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [valueModal,setValueModal] = useState({})
	
	const openModal = (data) => { 
		setIsModalOpen(true)
		setValueModal(data)
	 }
	
	 const closeModal = (data) => { 
		setIsModalOpen(false)
		setValueModal(data)
	 }

	
	 return (
		<AppContext.Provider value={{isModalOpen,valueModal,openModal,closeModal}}>{children}</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
